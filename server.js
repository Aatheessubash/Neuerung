import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendContactEmail, createTransporter, isValidEmail } from './sendMail.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(
  cors({
    origin: true, // Allow all origins (localhost, neuerung.in, vercel domains)
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
  })
);

app.use(express.json({ limit: '50kb' }));

// ─── Rate Limiter (in-memory) ─────────────────────────────────────────────────
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 8;            // 8 requests per minute per IP

const rateLimit = (req, res, next) => {
  const ip = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const entry = rateLimitMap.get(ip) || { count: 0, windowStart: now };

  if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    entry.count = 0;
    entry.windowStart = now;
  }

  entry.count += 1;
  rateLimitMap.set(ip, entry);

  if (entry.count > RATE_LIMIT_MAX) {
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please wait a moment and try again.',
    });
  }

  next();
};

// ─── Routes ───────────────────────────────────────────────────────────────────

/** Health check & live SMTP transporter verification */
app.get(['/api/health', '/neuerung/api/health'], async (_req, res) => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    res.json({
      status: 'ok',
      smtpConnected: true,
      service: 'Neuerung HealthTech Mail Server',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('[/api/health] Verification error:', error?.code || error?.name || 'SMTP connection failed');
    res.status(500).json({
      status: 'error',
      smtpConnected: false,
      message: 'SMTP service is currently unavailable.',
    });
  }
});

/** Form Submission endpoint for Contact & Demo Requests */
app.post(['/api/contact', '/neuerung/api/contact'], rateLimit, async (req, res) => {
  let payload = {};
  if (typeof req.body === 'string') {
    try {
      payload = JSON.parse(req.body);
    } catch {
      return res.status(400).json({ success: false, message: 'Invalid JSON payload.' });
    }
  } else if (req.body && typeof req.body === 'object') {
    payload = req.body;
  }

  const {
    name,
    organisation,
    company,
    email,
    phone,
    areaOfInterest,
    projectType,
    message,
    formType,
  } = payload;

  // Validation: type and length checks
  if (typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ success: false, message: 'Full Name is required.' });
  }
  if (name.trim().length > 100) {
    return res.status(400).json({ success: false, message: 'Full Name must not exceed 100 characters.' });
  }

  if (typeof email !== 'string' || !isValidEmail(email)) {
    return res.status(400).json({ success: false, message: 'A valid email address is required.' });
  }

  if (phone && (typeof phone !== 'string' || phone.length > 50)) {
    return res.status(400).json({ success: false, message: 'Phone number is invalid or too long.' });
  }

  if (message && (typeof message !== 'string' || message.length > 5000)) {
    return res.status(400).json({ success: false, message: 'Message is invalid or too long (max 5000 characters).' });
  }

  try {
    const result = await sendContactEmail({
      name,
      organisation: organisation || company,
      email,
      phone,
      areaOfInterest: areaOfInterest || projectType,
      message,
      formType: formType || 'Clinical Inquiry',
    });

    const autoReplySent = !result.clientError;
    const responseMessage = autoReplySent
      ? 'Thank you! Your message has been sent successfully. A confirmation email has been dispatched to your inbox.'
      : 'Thank you! Your message has been received by our team. However, we could not deliver a confirmation email to your address.';

    return res.json({
      success: true,
      message: responseMessage,
      adminMessageId: result.adminInfo?.messageId,
      autoReplySent,
    });
  } catch (error) {
    console.error('[/api/contact] Email delivery failed:', error?.code || error?.name || 'Email delivery failure');
    return res.status(500).json({
      success: false,
      message: 'Failed to dispatch email. Please check your details or try again later.',
    });
  }
});

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🩺 Neuerung HealthTech Mail Server active at http://localhost:${PORT}`);
  console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`✉️  POST Endpoint: http://localhost:${PORT}/api/contact\n`);
});

