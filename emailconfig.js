const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'process.env.EMAIL',
    pass: process.env.PASS,
  },
  debug: true,
});
transporter.verify(function (error, success) {
  if (error) {
    console.error('Error verifying transporter configuration:', error);
  } else {
    console.log('Transporter configuration is correct');
  }
});

module.exports = transporter;