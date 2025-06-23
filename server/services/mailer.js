const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "process.env.EMAIL_HOST",
    pass: "process.env.password",
  },
});

module.exports = transporter;