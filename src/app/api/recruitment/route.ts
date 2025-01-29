import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { fullName, emailId, phoneNumber, experience, collegeName, Role } = await req.json();

   

    // Validate Role enum
    const validRoles = [
      "FULLSTACK_WEB_DEVELOPER",
      "SALES_EXECUTIVE",
      "COMPUTER_VISION_ENGINEER",
      "DEEP_LEARNING",
      "DIGITAL_MARKETING",
      "BUSINESS_DEVELOPMENT",
    ];

    if (!validRoles.includes(Role)) {
      return NextResponse.json({ message: "Invalid role type" }, { status: 400 });
    }

   
    // Save to the database
    const newRecruitment = await prisma.recruitment.create({
      data: {
        fullName,
        emailId,
        phoneNumber,
        experience,
        collegeName,
        Role: Role as any,
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
      subject: `New Recruitment Request - ${newRecruitment.req_id}`,
      html: `
        <div>
          <h2>New Recruitment Request</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${emailId}</p>
          <p><strong>Phone:</strong> ${phoneNumber}</p>
          <p><strong>Experience:</strong> ${experience}</p>
          <p><strong>College:</strong> ${collegeName}</p>
          <p><strong>Role:</strong> ${Role}</p>
        </div>
      `,
    });

    // Email to user
    await transporter.sendMail({
      from: `"YourCompany" <${process.env.SMTP_USER}>`,
      to: emailId,
      subject: "Recruitment Request Received",
      html: `
        <div>
          <h2>Thank you for your recruitment request, ${fullName}!</h2>
          <p>We have received your application and will contact you soon.</p>
          <p><strong>Request ID:</strong> ${newRecruitment.req_id}</p>
          <p><strong>Role:</strong> ${Role}</p>
        </div>
      `,
    });

    // Success response
    return NextResponse.json({ message: "Recruitment request submitted successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error processing recruitment request:", error);
    return NextResponse.json({ message: "Failed to submit recruitment request. Please try again." }, { status: 500 });
  }
}
