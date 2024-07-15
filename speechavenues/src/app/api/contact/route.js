import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import validator from "validator";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation and sanitization
    if (!name || !email || !message) {
      return new NextResponse(
        JSON.stringify({ success: false, message: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Sanitize inputs
    const sanitizedEmail = validator.normalizeEmail(email);
    const sanitizedMessage = validator.escape(message);

    if (!validator.isEmail(sanitizedEmail)) {
      return new NextResponse(
        JSON.stringify({ success: false, message: "Invalid email address" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Contact form submission from ${name}`,
      text: `You have a new contact form submission from ${name} (${sanitizedEmail}):\n\n${sanitizedMessage}`,
    };

    await transporter.sendMail(mailOptions);

    return new NextResponse(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "Error sending email",
        error: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
