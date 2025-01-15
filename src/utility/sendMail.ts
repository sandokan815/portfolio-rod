import { createTransport } from "nodemailer";

export const sendMail = async function (
  name: string,
  email: string | "SELF",
  subject: string,
  message: string,
): Promise<{ status: number; message: string }> {
  const user = process.env.NEXT_PUBLIC_NODEMAILER_USER;
  const pass = process.env.NEXT_PUBLIC_NODEMAILER_PASS;

  if (!user && !pass) {
    return new Promise((resolve) =>
      resolve({ status: 500, message: "Internal server error" }),
    );
  }

  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: user,
      pass: pass,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.NEXT_PUBLIC_NODEMAILER_USER,
    subject: "Portfolio: [" + subject + " ]",
    text: message,
  };

  return new Promise((resolve) => {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.log("error--", error);
        resolve({ status: 500, message: "Failed to send mail" });
      } else {
        resolve({ status: 200, message: "Mail send successfully" });
      }
    });
  });
};
