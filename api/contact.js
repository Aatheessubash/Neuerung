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

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. A confirmation email has been dispatched to your inbox.',
      adminMessageId: result.adminInfo?.messageId,
      autoReplySent: !!result.clientInfo,
    });
  } catch (error) {
    console.error('[api/contact] Serverless error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to dispatch email. Please try again later.',
      error: error.message,
    });
  }
}
