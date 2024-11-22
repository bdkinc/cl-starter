import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  port: 25,
  secure: false,
});

export const mail = transporter;
