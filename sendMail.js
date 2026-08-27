import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Validate an email address with a basic RFC-5322-like regex. */
export const isValidEmail = (email) =>
  typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

/** Escape HTML special characters to prevent XSS in email bodies. */
export const escapeHtml = (str = '') =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

/** Locate tiny logo image for CID attachment */
const getLogoAttachments = () => {
  const possiblePaths = [
    path.join(__dirname, 'public', 'images', 'logo-tiny.png'),
    path.join(__dirname, 'src', 'assets', 'logo-tiny.png'),
    path.join(process.cwd(), 'public', 'images', 'logo-tiny.png'),
    path.join(process.cwd(), 'src', 'assets', 'logo-tiny.png'),
  ];
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      return [
        {
          filename: 'neuerung-logo.png',
          path: p,
          cid: 'neuerunglogo',
        },
      ];
    }
  }
  return [];
};

// ─── Transporter ─────────────────────────────────────────────────────────────

/** Create a Nodemailer transporter from environment variables. */
export const createTransporter = () => {
  const user = process.env.SMTP_USER || 'neuerunghealthtech@gmail.com';
  const pass = (process.env.SMTP_PASS || 'zqpu gikh gjqd tlsk').replace(/\s+/g, '');

  return nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: pass,
    },
  });
};

/** Shared MAIL_FROM string — consistent across all functions. */
const getMailFrom = () => {
  const user = process.env.SMTP_USER || 'neuerunghealthtech@gmail.com';
  return process.env.MAIL_FROM?.trim() || `"Neuerung HealthTech" <${user}>`;
};

/** Admin/company receiver email. */
const getReceiverEmail = () => {
  return process.env.CONTACT_RECEIVER_EMAIL?.trim() || process.env.SMTP_USER || 'aatheessubash48@gmail.com, neuerunghealthtech@gmail.com';
};

// ─── sendContactEmail ─────────────────────────────────────────────────────────

/**
 * Sends two emails with branded tiny logo when an inquiry / demo request is submitted:
 *  1. Admin notification to the Neuerung team inbox.
 *  2. Auto-reply confirmation to the client / doctor.
 *
 * @param {Object} data
 * @param {string} data.name - Full name
 * @param {string} data.organisation - Organisation / Hospital / Clinic
 * @param {string} data.email - Client email address
 * @param {string} [data.phone] - Phone number
 * @param {string} [data.areaOfInterest] - Solution/Product interest
 * @param {string} [data.message] - Message body / notes
 * @param {string} [data.formType] - 'Clinical Inquiry' | 'Demo Request' | 'Contact Form'
 */
export const sendContactEmail = async ({
  name,
  organisation = '',
  company = '',
  email,
  phone = '',
  areaOfInterest = 'General Enquiry',
  projectType = '',
  message = '',
  formType = 'Clinical Inquiry',
}) => {
  // Input validation
  if (!name || String(name).trim() === '') throw new Error('Full name is required.');
  if (!isValidEmail(email)) throw new Error(`Invalid or missing email address: "${email}"`);

  const clientOrg = organisation || company || 'Not specified';
  const interestArea = areaOfInterest || projectType || 'General Enquiry';
  const clientMessage = message?.trim() || 'No additional message provided.';

  const safeName = escapeHtml(name.trim());
  const safeOrg = escapeHtml(clientOrg.trim());
  const safeEmail = escapeHtml(email.trim());
  const safePhone = escapeHtml(phone?.trim() || 'Not provided');
  const safeInterest = escapeHtml(interestArea.trim());
  const safeMessage = escapeHtml(clientMessage);
  const safeFormType = escapeHtml(formType);
  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  const transporter = createTransporter();
  const mailFrom = getMailFrom();
  const receiverEmail = getReceiverEmail();
  const logoAttachments = getLogoAttachments();

  // ── 1. Admin Notification Email ────────────────────────────────────────────
  const adminMailOptions = {
    from: mailFrom,
    to: receiverEmail,
    replyTo: email.trim(),
    subject: `🏥 [${safeFormType}] ${name.trim()} - ${interestArea}`,
    attachments: logoAttachments,
    text: [
      `=== NEUERUNG HEALTHTECH: NEW ${formType.toUpperCase()} ===`,
      '--------------------------------------------------',
      `Name:              ${name.trim()}`,
      `Organisation:      ${clientOrg.trim()}`,
      `Email:             ${email.trim()}`,
      `Phone:             ${phone?.trim() || 'Not provided'}`,
      `Area of Interest:  ${interestArea}`,
      `Form Source:       ${formType}`,
      `Submitted At:      ${timestamp} (IST)`,
      '--------------------------------------------------',
      'Message / Inquiry Details:',
      clientMessage,
      '--------------------------------------------------',
      'Sent via Neuerung HealthTech Portal (neuerung.in)',
    ].join('\n'),
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Inquiry - Neuerung HealthTech</title>
</head>
<body style="margin:0;padding:24px;background-color:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;">
  <div style="max-width:620px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.06);border:1px solid #e2e8f0;">
    
    <!-- Header Banner with Tiny Logo -->
    <div style="background:linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #0d9488 100%);padding:24px 28px;color:#ffffff;">
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="width:46px;vertical-align:middle;padding-right:12px;">
            <div style="background:#ffffff;border-radius:10px;padding:4px;display:inline-block;box-shadow:0 2px 6px rgba(0,0,0,0.15);line-height:0;">
              <img src="cid:neuerunglogo" alt="Neuerung Logo" width="36" height="36" style="display:block;width:36px;height:36px;object-fit:contain;border:0;" />
            </div>
          </td>
          <td style="vertical-align:middle;">
            <div style="font-size:11px;text-transform:uppercase;letter-spacing:1.5px;font-weight:700;color:#93c5fd;margin-bottom:2px;">
              Neuerung HealthTech • Clinical Portal
            </div>
            <h1 style="margin:0;font-size:20px;font-weight:800;letter-spacing:-0.3px;line-height:1.2;color:#ffffff;">
              New ${safeFormType}
            </h1>
          </td>
        </tr>
      </table>
      <div style="margin-top:8px;font-size:12px;color:#dbeafe;padding-left:58px;">
        Received on ${timestamp} (IST)
      </div>
    </div>

    <!-- Content Body -->
    <div style="padding:28px 32px;">
      <div style="background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;padding:20px;margin-bottom:24px;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr>
            <td style="padding:8px 0;color:#64748b;font-weight:600;width:38%;">Full Name:</td>
            <td style="padding:8px 0;color:#0f172a;font-weight:700;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#64748b;font-weight:600;">Organisation / Hospital:</td>
            <td style="padding:8px 0;color:#0f172a;font-weight:600;">${safeOrg}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#64748b;font-weight:600;">Professional Email:</td>
            <td style="padding:8px 0;color:#2563eb;font-weight:600;">
              <a href="mailto:${safeEmail}" style="color:#2563eb;text-decoration:none;">${safeEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#64748b;font-weight:600;">Phone Number:</td>
            <td style="padding:8px 0;color:#0f172a;font-weight:600;">
              <a href="tel:${safePhone}" style="color:#0f172a;text-decoration:none;">${safePhone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#64748b;font-weight:600;">Area of Interest:</td>
            <td style="padding:8px 0;">
              <span style="display:inline-block;background:#eff6ff;color:#1d4ed8;font-weight:700;padding:4px 10px;border-radius:999px;font-size:12px;border:1px solid #bfdbfe;">
                ${safeInterest}
              </span>
            </td>
          </tr>
        </table>
      </div>

      <!-- Message Section -->
      <div style="margin-bottom:24px;">
        <h3 style="margin:0 0 10px;font-size:14px;text-transform:uppercase;letter-spacing:0.5px;color:#475569;font-weight:700;">
          Inquiry / Requirements Overview
        </h3>
        <div style="background:#ffffff;border:1px solid #cbd5e1;border-radius:10px;padding:16px;font-size:14px;line-height:1.6;color:#334155;white-space:pre-wrap;">${safeMessage}</div>
      </div>

      <!-- Quick Action Buttons -->
      <div style="text-align:center;padding:12px 0 6px;">
        <a href="mailto:${safeEmail}?subject=Re: Neuerung HealthTech Inquiry - ${encodeURIComponent(interestArea)}" style="display:inline-block;background:#2563eb;color:#ffffff;font-weight:600;font-size:14px;padding:12px 24px;border-radius:8px;text-decoration:none;box-shadow:0 2px 8px rgba(37,99,235,0.25);">
          Reply to ${safeName}
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:18px 32px;font-size:12px;color:#94a3b8;text-align:center;">
      <p style="margin:0;">Neuerung HealthTech Private Limited • Nagamalai, Madurai, India</p>
      <p style="margin:4px 0 0;"><a href="https://neuerung.in" style="color:#64748b;text-decoration:none;">neuerung.in</a></p>
    </div>
  </div>
</body>
</html>
    `,
  };

  // ── 2. Client Auto-Reply Email ─────────────────────────────────────────────
  const clientMailOptions = {
    from: mailFrom,
    to: email.trim(),
    subject: `Thank you for connecting with Neuerung HealthTech`,
    attachments: logoAttachments,
    text: [
      `Dear ${name.trim()},`,
      '',
      'Thank you for reaching out to Neuerung HealthTech. We have successfully received your inquiry regarding ' + interestArea + '.',
      '',
      'Our clinical engineering team will review your requirements and get back to you shortly.',
      '',
      'Summary of your submission:',
      `- Name: ${name.trim()}`,
      `- Organisation: ${clientOrg.trim()}`,
      `- Area of Interest: ${interestArea}`,
      '',
      'If you have any urgent inquiries, feel free to contact us directly:',
      '• Email: healthtech@neuerung.in',
      '• Phone / WhatsApp: +91 638 155 7889',
      '• Website: https://neuerung.in',
      '',
      'Warm regards,',
      'Clinical Solutions Team',
      'Neuerung HealthTech Private Limited',
      '7/64, II Floor, Wellington Road, NGGO Colony, Nagamalai, Madurai, Tamil Nadu – 625019',
    ].join('\n'),
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for reaching out - Neuerung HealthTech</title>
</head>
<body style="margin:0;padding:24px;background-color:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.06);border:1px solid #e2e8f0;">
    
    <!-- Brand Header with Tiny Logo -->
    <div style="background:linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);padding:28px 32px 24px;color:#ffffff;text-align:center;">
      <div style="margin-bottom:8px;">
        <div style="background:#ffffff;border-radius:12px;padding:5px;display:inline-block;box-shadow:0 2px 8px rgba(0,0,0,0.2);line-height:0;">
          <img src="cid:neuerunglogo" alt="Neuerung Logo" width="38" height="38" style="display:block;width:38px;height:38px;object-fit:contain;border:0;" />
        </div>
      </div>
      <div style="font-size:22px;font-weight:900;letter-spacing:0.5px;color:#ffffff;margin-bottom:2px;">
        NEUERUNG
      </div>
      <div style="font-size:11px;text-transform:uppercase;letter-spacing:2px;color:#93c5fd;font-weight:600;">
        HealthTech Private Limited
      </div>
    </div>

    <!-- Body -->
    <div style="padding:32px;">
      <h2 style="margin:0 0 14px;font-size:20px;font-weight:700;color:#0f172a;">
        Thank You, ${safeName}
      </h2>
      <p style="margin:0 0 18px;font-size:14px;line-height:1.65;color:#475569;">
        We have received your message regarding <strong style="color:#1e293b;">${safeInterest}</strong>. Our clinical technology team is reviewing your requirements and will reach out to you within 24 business hours.
      </p>

      <div style="background:#f1f5f9;border-left:4px solid #2563eb;border-radius:0 10px 10px 0;padding:16px 20px;margin:24px 0;">
        <h4 style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#64748b;">
          Inquiry Summary
        </h4>
        <p style="margin:4px 0;font-size:13px;color:#1e293b;"><strong>Organisation:</strong> ${safeOrg}</p>
        <p style="margin:4px 0;font-size:13px;color:#1e293b;"><strong>Area of Interest:</strong> ${safeInterest}</p>
        <p style="margin:4px 0;font-size:13px;color:#1e293b;"><strong>Email:</strong> ${safeEmail}</p>
      </div>

      <p style="margin:0 0 24px;font-size:14px;line-height:1.65;color:#475569;">
        In the meantime, feel free to explore our connected healthcare ecosystem spanning <strong style="color:#0f172a;">Hexa Doctor</strong>, <strong style="color:#0f172a;">Hexa Service</strong>, <strong style="color:#0f172a;">Hexa Pharmacy</strong>, and specialized care architectures for Geriatrics and Dementia.
      </p>

      <!-- Direct Contact Card -->
      <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:12px;padding:18px;font-size:13px;color:#1e40af;">
        <div style="font-weight:700;margin-bottom:6px;font-size:14px;">Need Immediate Assistance?</div>
        <div>Direct: <a href="tel:+916381557889" style="color:#1d4ed8;font-weight:600;text-decoration:none;">+91 638 155 7889</a></div>
        <div>Email: <a href="mailto:healthtech@neuerung.in" style="color:#1d4ed8;font-weight:600;text-decoration:none;">healthtech@neuerung.in</a></div>
        <div>Office: Nagamalai, Madurai South, Tamil Nadu – 625019</div>
      </div>
    </div>

    <!-- Footer -->
    <div style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:20px 32px;font-size:12px;color:#94a3b8;text-align:center;line-height:1.5;">
      <p style="margin:0 0 4px;">&copy; ${new Date().getFullYear()} Neuerung HealthTech Private Limited. All rights reserved.</p>
      <p style="margin:0;">Healthcare, Reimagined • <a href="https://neuerung.in" style="color:#64748b;text-decoration:none;">neuerung.in</a></p>
    </div>

  </div>
</body>
</html>
    `,
  };

  // Dispatch admin notification
  const adminInfo = await transporter.sendMail(adminMailOptions);

  // Dispatch client auto-reply safely (if fails, don't crash the whole flow)
  let clientInfo = null;
  let clientError = null;
  try {
    clientInfo = await transporter.sendMail(clientMailOptions);
  } catch (err) {
    console.error('[sendMail] Auto-reply warning:', err.message);
    clientError = err.message;
  }

  return {
    adminInfo,
    clientInfo,
    clientError,
  };
};
