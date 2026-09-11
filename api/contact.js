import { sendContactEmail, isValidEmail } from '../sendMail.js';

export default async function handler(req, res) {
  // CORS Headers for Vercel Serverless Function execution
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

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

    return res.status(200).json({
      success: true,
      message: responseMessage,
      adminMessageId: result.adminInfo?.messageId,
      autoReplySent,
    });
  } catch (error) {
    console.error('[api/contact] Serverless error:', error?.code || error?.name || 'Email delivery failure');
    return res.status(500).json({
      success: false,
      message: 'Failed to dispatch email. Please try again later.',
    });
  }
}

