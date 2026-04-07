/**
 * server.js — Flat backend for Vishwaja Deshmukh's portfolio
 * Handles contact form submissions via Nodemailer (Gmail)
 *
 * Setup:
 *   npm install
 *   node server.js
 *
 * Set these env vars (or edit defaults below):
 *   EMAIL_USER  — your Gmail address
 *   EMAIL_PASS  — Gmail App Password (not your real password)
 */

const express    = require('express');
const cors       = require('cors');
const nodemailer = require('nodemailer');

const app  = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: '*' }));
app.use(express.json());

// ── Health check ──
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// ── Contact form ──
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'vishwajadeshmukh0826@gmail.com',
        pass: process.env.EMAIL_PASS || 'YOUR_APP_PASSWORD_HERE',
      },
    });

    await transporter.sendMail({
      from: `"Portfolio" <${process.env.EMAIL_USER || 'vishwajadeshmukh0826@gmail.com'}>`,
      to: 'vishwajadeshmukh0826@gmail.com',
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br>${message}</p>`,
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
