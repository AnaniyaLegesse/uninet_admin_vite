import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ananiya.legesse1@gmail.com',
    pass: ''
  }
});

export const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: 'ananiya.legesse1@gmail.com',
    to,
    subject,
    text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};