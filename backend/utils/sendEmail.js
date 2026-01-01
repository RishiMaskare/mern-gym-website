import nodemailer from "nodemailer";

export const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",     
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Gym Website" <${process.env.SMTP_MAIL}>`,
    to: options.email,
    subject: options.subject,
    text: `${options.message}\n\nUser Email: ${options.userEmail}`,
  };

  await transporter.sendMail(mailOptions);
};
