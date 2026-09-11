import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isValidEmail,
  escapeHtml,
  getSmtpConfig,
  sendContactEmail,
} from '../sendMail.js';

test('1. Configuration validation: missing variables throw safe error', () => {
  const originalEnv = { ...process.env };
  try {
    delete process.env.SMTP_HOST;
    delete process.env.SMTP_PORT;
    delete process.env.SMTP_USER;
    delete process.env.SMTP_PASS;

    assert.throws(
      () => getSmtpConfig(),
      (err) => {
        assert.equal(err.message, 'Email service configuration is incomplete.');
        // Ensure no credentials or internal details leaked
        assert.ok(!err.message.includes('password'));
        assert.ok(!err.message.includes('smtp'));
        return true;
      }
    );
  } finally {
    process.env = originalEnv;
  }
});

test('2. Configuration parsing: port is number, secure is strict boolean, password preserved exactly', () => {
  const originalEnv = { ...process.env };
  try {
    process.env.SMTP_HOST = 'mail.neuerung.in';
    process.env.SMTP_PORT = '465';
    process.env.SMTP_SECURE = 'true';
    process.env.SMTP_USER = 'healthtech@neuerung.in';
    process.env.SMTP_PASS = ' P@ss word with spaces ';

    const config = getSmtpConfig();

    assert.equal(typeof config.port, 'number');
    assert.equal(config.port, 465);
    assert.equal(config.secure, true);
    assert.equal(config.auth.user, 'healthtech@neuerung.in');
    // Password must be preserved EXACTLY without trimming or stripping spaces
    assert.equal(config.auth.pass, ' P@ss word with spaces ');
    assert.equal(config.tls.rejectUnauthorized, true);
    assert.equal(config.connectionTimeout, 10000);
    assert.equal(config.greetingTimeout, 10000);
    assert.equal(config.socketTimeout, 15000);

    // Test non-true SMTP_SECURE parsing
    process.env.SMTP_SECURE = '1';
    assert.equal(getSmtpConfig().secure, false);
    process.env.SMTP_SECURE = 'yes';
    assert.equal(getSmtpConfig().secure, false);
  } finally {
    process.env = originalEnv;
  }
});

test('3. Email validation and HTML escaping', () => {
  assert.equal(isValidEmail('test@example.com'), true);
  assert.equal(isValidEmail('healthtech@neuerung.in'), true);
  assert.equal(isValidEmail('invalid-email'), false);
  assert.equal(isValidEmail(''), false);
  assert.equal(isValidEmail(null), false);
  assert.equal(isValidEmail(undefined), false);
  assert.equal(isValidEmail(12345), false);
  assert.equal(isValidEmail('a'.repeat(250) + '@example.com'), false);

  const escaped = escapeHtml('<script>alert("xss")</script>&\'');
  assert.equal(escaped, '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;&amp;&#39;');
});

test('4. Input validation and length limits in sendContactEmail', async () => {
  // Empty or non-string name
  await assert.rejects(
    () => sendContactEmail({ name: '', email: 'doctor@hospital.org' }),
    /Full name is required/
  );
  await assert.rejects(
    () => sendContactEmail({ name: null, email: 'doctor@hospital.org' }),
    /Full name is required/
  );

  // Oversized name
  await assert.rejects(
    () => sendContactEmail({ name: 'A'.repeat(101), email: 'doctor@hospital.org' }),
    /Full name must not exceed 100 characters/
  );

  // Invalid email
  await assert.rejects(
    () => sendContactEmail({ name: 'Dr. Jane Doe', email: 'not-an-email' }),
    /A valid email address is required/
  );
});

test('5. Recipient routing & headers with mocked transporter', async () => {
  const sentMails = [];
  const mockTransporter = {
    sendMail: async (options) => {
      sentMails.push(options);
      return { messageId: `mock-msg-${sentMails.length}` };
    },
  };

  const originalEnv = { ...process.env };
  try {
    process.env.SMTP_HOST = 'mail.neuerung.in';
    process.env.SMTP_PORT = '465';
    process.env.SMTP_SECURE = 'true';
    process.env.SMTP_USER = 'healthtech@neuerung.in';
    process.env.SMTP_PASS = 'secret_pass';
    process.env.MAIL_FROM = '"Neuerung HealthTech" <healthtech@neuerung.in>';
    process.env.CONTACT_RECEIVER_EMAIL = 'healthtech@neuerung.in';

    const result = await sendContactEmail(
      {
        name: 'Dr. Ramesh Kumar',
        organisation: 'Apollo Hospitals',
        email: 'ramesh.kumar@apollo.org',
        phone: '+91 9876543210',
        areaOfInterest: 'Hexa Doctor',
        message: 'Requesting a demo for Hexa Doctor clinical workflows.',
        formType: 'Demo Request',
      },
      mockTransporter
    );

    assert.equal(sentMails.length, 2);

    // ── Email 1: Admin notification ──
    const adminMail = sentMails[0];
    assert.equal(adminMail.from, '"Neuerung HealthTech" <healthtech@neuerung.in>');
    assert.equal(adminMail.to, 'healthtech@neuerung.in');
    assert.equal(adminMail.replyTo, 'ramesh.kumar@apollo.org');
    // Ensure visitor's email is NEVER the From address
    assert.notEqual(adminMail.from, 'ramesh.kumar@apollo.org');
    assert.ok(adminMail.subject.includes('[Demo Request]'));
    assert.ok(adminMail.subject.includes('Dr. Ramesh Kumar'));
    assert.ok(adminMail.text.includes('Apollo Hospitals'));
    assert.ok(adminMail.html.includes('Apollo Hospitals'));

    // ── Email 2: Visitor confirmation ──
    const visitorMail = sentMails[1];
    assert.equal(visitorMail.from, '"Neuerung HealthTech" <healthtech@neuerung.in>');
    assert.equal(visitorMail.to, 'ramesh.kumar@apollo.org');
    assert.equal(visitorMail.replyTo, 'healthtech@neuerung.in');
    // Ensure visitor's email is NEVER the From address
    assert.notEqual(visitorMail.from, 'ramesh.kumar@apollo.org');
    assert.ok(visitorMail.subject.includes('Thank you for connecting with Neuerung HealthTech'));
    assert.ok(visitorMail.text.includes('Hexa Doctor'));

    assert.equal(result.clientError, null);
    assert.equal(result.clientInfo?.messageId, 'mock-msg-2');
    assert.equal(result.adminInfo?.messageId, 'mock-msg-1');
  } finally {
    process.env = originalEnv;
  }
});

test('6. Partial delivery failure handling: auto-reply fails after admin dispatch succeeds', async () => {
  let callCount = 0;
  const mockTransporter = {
    sendMail: async () => {
      callCount += 1;
      if (callCount === 1) {
        // Admin notification succeeds
        return { messageId: 'admin-msg-ok' };
      }
      // Visitor confirmation fails (e.g. rate limit, invalid recipient mailbox, etc.)
      const error = new Error('Mailbox unavailable 550');
      error.code = 'EMESSAGE';
      throw error;
    },
  };

  const originalEnv = { ...process.env };
  try {
    process.env.SMTP_HOST = 'mail.neuerung.in';
    process.env.SMTP_PORT = '465';
    process.env.SMTP_SECURE = 'true';
    process.env.SMTP_USER = 'healthtech@neuerung.in';
    process.env.SMTP_PASS = 'secret_pass';

    const result = await sendContactEmail(
      {
        name: 'Dr. Jane Smith',
        email: 'jane.smith@clinic.com',
        areaOfInterest: 'Hexa Service',
      },
      mockTransporter
    );

    // Submission should succeed overall because admin received the message
    assert.equal(result.adminInfo?.messageId, 'admin-msg-ok');
    assert.equal(result.clientInfo, null);
    assert.equal(result.clientError, 'Confirmation email could not be delivered.');
  } finally {
    process.env = originalEnv;
  }
});

test('7. Complete delivery failure: admin dispatch fails', async () => {
  const mockTransporter = {
    sendMail: async () => {
      throw new Error('Connection refused ECONNREFUSED');
    },
  };

  const originalEnv = { ...process.env };
  try {
    process.env.SMTP_HOST = 'mail.neuerung.in';
    process.env.SMTP_PORT = '465';
    process.env.SMTP_SECURE = 'true';
    process.env.SMTP_USER = 'healthtech@neuerung.in';
    process.env.SMTP_PASS = 'secret_pass';

    await assert.rejects(
      () =>
        sendContactEmail(
          {
            name: 'Dr. Jane Smith',
            email: 'jane.smith@clinic.com',
          },
          mockTransporter
        ),
      /Connection refused/
    );
  } finally {
    process.env = originalEnv;
  }
});

test('8. api/contact handler safe error masking and response format', async () => {
  const contactHandler = (await import('../api/contact.js')).default;

  // Mock res object
  const createMockRes = () => {
    const res = {
      statusCode: 200,
      headers: {},
      body: null,
      setHeader(key, val) {
        this.headers[key] = val;
      },
      status(code) {
        this.statusCode = code;
        return this;
      },
      json(data) {
        this.body = data;
        return this;
      },
      end() {
        return this;
      },
    };
    return res;
  };

  // Test invalid method
  const resGet = createMockRes();
  await contactHandler({ method: 'GET' }, resGet);
  assert.equal(resGet.statusCode, 405);

  // Test invalid JSON string
  const resBadJson = createMockRes();
  await contactHandler({ method: 'POST', body: 'invalid-json{{' }, resBadJson);
  assert.equal(resBadJson.statusCode, 400);
  assert.equal(resBadJson.body.message, 'Invalid JSON payload.');

  // Test missing name
  const resNoName = createMockRes();
  await contactHandler({ method: 'POST', body: { email: 'test@example.com' } }, resNoName);
  assert.equal(resNoName.statusCode, 400);
  assert.equal(resNoName.body.message, 'Full Name is required.');

  // Test missing email
  const resNoEmail = createMockRes();
  await contactHandler({ method: 'POST', body: { name: 'Test' } }, resNoEmail);
  assert.equal(resNoEmail.statusCode, 400);
  assert.equal(resNoEmail.body.message, 'A valid email address is required.');

  // Test server error does not leak SMTP errors or internal config
  const originalEnv = { ...process.env };
  try {
    delete process.env.SMTP_HOST;
    delete process.env.SMTP_USER;
    delete process.env.SMTP_PASS;

    const res500 = createMockRes();
    await contactHandler(
      {
        method: 'POST',
        body: { name: 'Test User', email: 'test@example.com' },
      },
      res500
    );

    assert.equal(res500.statusCode, 500);
    assert.equal(res500.body.success, false);
    assert.equal(res500.body.message, 'Failed to dispatch email. Please try again later.');
    // Must NOT leak error or details
    assert.equal(res500.body.error, undefined);
    assert.equal(res500.body.stack, undefined);
  } finally {
    process.env = originalEnv;
  }
});

test('9. api/health handler safe error masking on SMTP verification failure', async () => {
  const healthHandler = (await import('../api/health.js')).default;

  const createMockRes = () => {
    const res = {
      statusCode: 200,
      headers: {},
      body: null,
      setHeader(key, val) {
        this.headers[key] = val;
      },
      status(code) {
        this.statusCode = code;
        return this;
      },
      json(data) {
        this.body = data;
        return this;
      },
      end() {
        return this;
      },
    };
    return res;
  };

  const originalEnv = { ...process.env };
  try {
    delete process.env.SMTP_HOST;
    delete process.env.SMTP_USER;
    delete process.env.SMTP_PASS;

    const resFail = createMockRes();
    await healthHandler({ method: 'GET' }, resFail);

    assert.equal(resFail.statusCode, 500);
    assert.equal(resFail.body.status, 'error');
    assert.equal(resFail.body.smtpConnected, false);
    assert.equal(resFail.body.message, 'SMTP service is currently unavailable.');
    assert.equal(resFail.body.error, undefined);
  } finally {
    process.env = originalEnv;
  }
});

