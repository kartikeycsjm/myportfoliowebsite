const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service:'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
transporter.verify(function (error, success) {
  if (error) {
    console.error('Error verifying transporter configuration:', error);
  } else {
    console.log('Transporter configuration is correct');
  }
});

export default transporter;