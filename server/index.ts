import 'dotenv/config';
import express from 'express';
import path from 'node:path';
import { Resend } from 'resend';

const app = express();
const PORT = Number(process.env.API_PORT) || 3001;

app.use(express.json({ limit: '32kb' }));

app.post('/api/contact', async (req, res) => {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_NOTIFY_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';

  if (!apiKey || !to) {
    console.error('Missing RESEND_API_KEY or CONTACT_NOTIFY_EMAIL');
    return res.status(500).json({ error: 'Server is not configured for email.' });
  }

  const { name, email, message } = req.body as {
    name?: string;
    email?: string;
    message?: string;
  };

  const nameTrim = typeof name === 'string' ? name.trim() : '';
  const emailTrim = typeof email === 'string' ? email.trim() : '';
  const messageTrim = typeof message === 'string' ? message.trim() : '';

  if (!nameTrim || !emailTrim || !messageTrim) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  if (emailTrim.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  if (nameTrim.length > 200 || messageTrim.length > 8000) {
    return res.status(400).json({ error: 'One of the fields is too long.' });
  }

  const resend = new Resend(apiKey);

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: emailTrim,
    subject: `[Portfolio] Message from ${nameTrim}`,
    text: `From: ${nameTrim} <${emailTrim}>\n\n${messageTrim}`,
    html: `
      <p><strong>Name:</strong> ${escapeHtml(nameTrim)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(emailTrim)}">${escapeHtml(emailTrim)}</a></p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(messageTrim)}</p>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return res.status(502).json({ error: 'Could not send email. Try again later.' });
  }

  return res.status(200).json({ ok: true, id: data?.id });
});

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const distDir = path.join(process.cwd(), 'dist');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(distDir));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

const server = app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`);
});

server.on('error', (err: NodeJS.ErrnoException) => {
  if (err.code === 'EADDRINUSE') {
    console.error(
      `\n[api] Port ${PORT} is already in use (another \`dev:api\` or old Node process?).\n` +
        `  Stop the other process (Ctrl+C in that terminal), or:\n` +
        `    lsof -nP -iTCP:${PORT} -sTCP:LISTEN\n` +
        `    kill <PID>\n` +
        `  Or set API_PORT=3002 in .env (Vite proxy uses the same var).\n`,
    );
    process.exit(1);
  }
  throw err;
});
