import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Message From ${name}`,
      html: `
      <div style="font-family: Arial, sans-serif;">
      <h1 style="font-size: 24px; color: #333; text-align:center">New Message From "${name}"</h1>
      <hr></hr>         
      <p style="font-size: 16px; color: #666;"><strong>Name:</strong> ${name}</p>
      <p style="font-size: 16px; color: #666;"><strong>Email:</strong> ${email}</p>
      <p style="font-size: 16px; color: #666;"><strong>Message:</strong> ${message}</p>
    </div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (e) {
    console.error("Unexpected error:", e);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong! Please try again",
      },
      { status: 500 }
    );
  }
}
