import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

function devApiPlugin() {
  return {
    name: 'dev-api-middleware',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split('?')[0];

        // Ensure dev server always has latest .env without needing restart
        const envPath = path.resolve(process.cwd(), '.env');
        if (fs.existsSync(envPath)) {
          dotenv.config({ path: envPath, override: true });
        }

        // 1. Health check endpoint
        if (url === '/api/health' || url === '/neuerung/api/health') {
          try {
            const { createTransporter } = await import('./sendMail.js');
            const transporter = createTransporter();
            await transporter.verify();
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(
              JSON.stringify({
                status: 'ok',
                smtpConnected: true,
                service: 'Neuerung HealthTech Dev Mail Server',
                timestamp: new Date().toISOString(),
              })
            );
            return;
          } catch (err) {
            console.error('[Vite Dev API] Verification error:', err?.code || err?.name || 'SMTP connection failed');
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 500;
            res.end(
              JSON.stringify({
                status: 'error',
                smtpConnected: false,
                message: 'SMTP service is currently unavailable.',
              })
            );
            return;
          }
        }

        // 2. Contact / Demo form submission endpoint
        if ((url === '/api/contact' || url === '/neuerung/api/contact') && req.method === 'POST') {
          let rawBody = '';
          req.on('data', (chunk) => {
            rawBody += chunk;
          });
          req.on('end', async () => {
            let data = {};
            try {
              data = JSON.parse(rawBody || '{}');
            } catch {
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 400;
              res.end(JSON.stringify({ success: false, message: 'Invalid JSON payload.' }));
              return;
            }

            try {
              const { sendContactEmail, isValidEmail } = await import('./sendMail.js');

              const { name, email, organisation, company, phone, areaOfInterest, projectType, message, formType } = data;

              if (typeof name !== 'string' || !name.trim()) {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 400;
                res.end(JSON.stringify({ success: false, message: 'Full Name is required.' }));
                return;
              }
              if (name.trim().length > 100) {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 400;
                res.end(JSON.stringify({ success: false, message: 'Full Name must not exceed 100 characters.' }));
                return;
              }

              if (typeof email !== 'string' || !isValidEmail(email)) {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 400;
                res.end(JSON.stringify({ success: false, message: 'A valid email address is required.' }));
                return;
              }

              if (phone && (typeof phone !== 'string' || phone.length > 50)) {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 400;
                res.end(JSON.stringify({ success: false, message: 'Phone number is invalid or too long.' }));
                return;
              }

              if (message && (typeof message !== 'string' || message.length > 5000)) {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 400;
                res.end(JSON.stringify({ success: false, message: 'Message is invalid or too long (max 5000 characters).' }));
                return;
              }

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

              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(
                JSON.stringify({
                  success: true,
                  message: responseMessage,
                  adminMessageId: result.adminInfo?.messageId,
                  autoReplySent,
                })
              );
            } catch (err) {
              console.error('[Vite Dev API] Email delivery failed:', err?.code || err?.name || 'Email delivery failure', err?.message);
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 500;
              res.end(
                JSON.stringify({
                  success: false,
                  message: 'Failed to dispatch email. Please try again later.',
                })
              );
            }
          });
          return;
        }

        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/neuerung',
  plugins: [
    react(),
    tailwindcss(),
    devApiPlugin(),
  ],
  server: {
    port: 5173,
    proxy: {
      '/neuerung/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/neuerung\/api/, '/api'),
      },
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
}))

