import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const {
      firstName,
      email,
      phoneNumber,
      companyName,
      product,
      requirement,
    } = await req.json();

    // Validate required fields
    if (
      !firstName ||
      !email ||
      !phoneNumber ||
      !companyName ||
      !product ||
      !requirement 
    ) {
      return NextResponse.json(
        {
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    // Validate enums
    const validProducts = [
      "RETAIL_SOLUTION",
      "MANUFACTURING_SOLUTION",
      "LOGISTICS_SOLUTION",
    ];
 

    if (!validProducts.includes(product)) {
      return NextResponse.json(
        { message: "Invalid product type" },
        { status: 400 }
      );
    }

 
    // Check if the email already exists
    const existingDemo = await prisma.demo.findUnique({
      where: { emailId: email },
    });

    if (existingDemo) {
      return NextResponse.json(
        {
          message: "Email already exists",
          existingDemo,
        },
        { status: 400 }
      );
    }

    // Save to the database
    const newDemo = await prisma.demo.create({
      data: {
        firstName,
        emailId: email,
        phoneNumber,
        companyName,
        product: product as any,
        requirement,
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
      subject: `New Demo Request - ${newDemo.demo_id}`,
      html: `
        <div>
          <h2>New Demo Request</h2>
          <p><strong>Name:</strong> ${firstName} </p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phoneNumber}</p>
          <p><strong>Company:</strong> ${companyName}</p>
          <p><strong>Product:</strong> ${product}</p>
          <p><strong>Requirement:</strong> ${requirement}</p>
          <p>Demo ID: ${newDemo.demo_id}</p>
        </div>
      `,
    });

    // Email to user
    await transporter.sendMail({
      from: `"YourCompany" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Demo Request Received",
      html: `
        <div>
          <h2>Thank you for your demo request, ${firstName}!</h2>
          <p>We have received your request and will contact you soon.</p>
          <p><strong>Demo ID:</strong> ${newDemo.demo_id}</p>
          <p><strong>Product:</strong> ${product}</p>
          <p><strong>Description:</strong> ${requirement}</p>
        </div>
      `,
    });

    // Success response
    return NextResponse.json(
      { message: "Demo request submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing demo request:", error);
    return NextResponse.json(
      { message: "Failed to submit demo request. Please try again." },
      { status: 500 }
    );
  }
}
