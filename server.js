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
app.get('/api/health', async (_req, res) => {
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
    res.status(500).json({
      status: 'error',
      smtpConnected: false,
      error: error.message,
    });
  }
});

/** Form Submission endpoint for Contact & Demo Requests */
app.post('/api/contact', rateLimit, async (req, res) => {
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
  } = req.body || {};

  // Validation
  if (!name || !name.trim()) {
    return res.status(400).json({ success: false, message: 'Full Name is required.' });
  }

  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ success: false, message: 'A valid email address is required.' });
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

    return res.json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. A confirmation email has been dispatched to your inbox.',
      adminMessageId: result.adminInfo?.messageId,
      autoReplySent: !!result.clientInfo,
    });
  } catch (error) {
    console.error('[/api/contact] Email delivery failed:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to dispatch email. Please check your details or try again later.',
      error: error.message,
    });
  }
});

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🩺 Neuerung HealthTech Mail Server active at http://localhost:${PORT}`);
  console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`✉️  POST Endpoint: http://localhost:${PORT}/api/contact\n`);
});
