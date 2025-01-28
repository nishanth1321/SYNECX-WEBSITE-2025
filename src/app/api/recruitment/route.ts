import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const {
      fullName,
      emailId,
      phoneNumber,
      experience,
      collegeName,
      role,
      cv,
    } = await req.json();

    // Validate required fields (excluding collegeName)
    if (!fullName || !emailId || !phoneNumber || !experience || !role ) {
      return NextResponse.json(
        { message: "All mandatory fields are required" },
        { status: 400 }
      );
    }

    // Validate `role` enum
    const validRoles = [
      "FULLSTACK_WEB_DEVELOPER",
      "SALES_EXECUTIVE",
      "COMPUTER_VISION_ENGINEER",
      "DEEP_LEARNING",
    ];
    if (!validRoles.includes(role)) {
      return NextResponse.json(
        { message: "Invalid role type" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingRecruitment = await prisma.recruitment.findUnique({
      where: { emailId },
    });
    if (existingRecruitment) {
      return NextResponse.json(
        {
          message: "Email already exists",
          existingRecruitment,
        },
        { status: 400 }
      );
    }

    // Save to the database
    const newRecruitment = await prisma.recruitment.create({
      data: {
        fullName,
        emailId,
        phoneNumber,
        experience,
        collegeName: collegeName || null, // Save null if collegeName is not provided
        Role: role as any,
        cv,
      },
    });

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to admin
    await transporter.sendMail({
      from: `"YourCompany" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `New Recruitment Submission - ${newRecruitment.req_id}`,
      html: `
        <div>
          <h2>New Recruitment Submission</h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${emailId}</p>
          <p><strong>Phone:</strong> ${phoneNumber}</p>
          <p><strong>Experience:</strong> ${experience}</p>
          <p><strong>College:</strong> ${collegeName || "N/A"}</p>
          <p><strong>Role:</strong> ${role}</p>
          <p><strong>CV File:</strong> ${cv}</p>
          <p>Recruitment ID: ${newRecruitment.req_id}</p>
        </div>
      `,
    });

    // Email to applicant
    await transporter.sendMail({
      from: `"YourCompany" <${process.env.SMTP_USER}>`,
      to: emailId,
      subject: "Recruitment Submission Received",
      html: `
        <div>
          <h2>Thank you for your submission, ${fullName}!</h2>
          <p>We have received your recruitment details and will review them shortly.</p>
          <p><strong>Recruitment ID:</strong> ${newRecruitment.req_id}</p>
          <p><strong>Role:</strong> ${role}</p>
        </div>
      `,
    });

    // Success response
    return NextResponse.json(
      { message: "Recruitment submission successfully processed!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing recruitment submission:", error);
    return NextResponse.json(
      { message: "Failed to process recruitment submission. Please try again." },
      { status: 500 }
    );
  }
}
