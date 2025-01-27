import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

// Initialize Prisma Client
const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    // Parse request body
    const { email } = await req.json();

    // Validate email input
    if (!email || typeof email !== "string") {
      return NextResponse.json({ message: "Valid email is required" }, { status: 400 });
    }

    // Check if the email already exists in the subscription list
    const existingSubscriber = await prisma.subscribe.findUnique({
      where: { email },
    });

    if (existingSubscriber) {
      return NextResponse.json({ message: "Email is already subscribed" }, { status: 400 });
    }

    // Add the new subscriber to the database
    await prisma.subscribe.create({
      data: {
        email,
      },
    });

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send a confirmation email
    await transporter.sendMail({
      from: `"SYNECX AI LABS" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Subscription Confirmation",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #0066cc;">Thank you for subscribing!</h2>
          <p>We are excited to have you onboard! You will now receive the latest updates and news.</p>
          <p>Best regards,</p>
          <p><strong>Synecx AI Labs Team</strong></p>
        </div>
      `,
    });

    // Return success response
    return NextResponse.json({ message: "Subscription successful!" }, { status: 200 });
  } catch (error: any) {
    console.error("Error subscribing:", error);

    // Handle specific errors
    if (error.code === "EAUTH") {
      return NextResponse.json(
        { message: "Email server authentication failed. Check SMTP credentials." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Failed to subscribe. Please try again later." },
      { status: 500 }
    );
  }
}
