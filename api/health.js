import { createTransporter } from '../sendMail.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const transporter = createTransporter();
    await transporter.verify();
    return res.status(200).json({
      status: 'ok',
      smtpConnected: true,
      service: 'Neuerung HealthTech Serverless Mail',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      smtpConnected: false,
      error: error.message,
    });
  }
}
