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
      companyName,
      product,
      description,
    } = await req.json();

    // Validate required fields
    if (
      !fullName ||
      !emailId ||
      !phoneNumber ||
      !companyName ||
      !product ||
      !description
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
    const existingQuery = await prisma.query.findFirst({
      where: { emailId },
    });

    if (existingQuery) {
      return NextResponse.json(
        {
          message: "Email already exists",
          existingQuery,
        },
        { status: 400 }
      );
    }

    // Save to the database
    const newQuery = await prisma.query.create({
      data: {
        fullName,
        emailId,
        phoneNumber,
        companyName,
        product: product as any,
        description,
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
      subject: `New Query Request - ${newQuery.query_id}`,
      html: `
        <div>
          <h2>New Query Request</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${emailId}</p>
          <p><strong>Phone:</strong> ${phoneNumber}</p>
          <p><strong>Company:</strong> ${companyName}</p>
          <p><strong>Product:</strong> ${product}</p>
          <p><strong>Description:</strong> ${description}</p>
          <p>Query ID: ${newQuery.query_id}</p>
        </div>
      `,
    });

    // Email to user
    await transporter.sendMail({
      from: `"YourCompany" <${process.env.SMTP_USER}>`,
      to: emailId,
      subject: "Query Request Received",
      html: `
        <div>
          <h2>Thank you for your query, ${fullName}!</h2>
          <p>We have received your query and will contact you soon.</p>
          <p><strong>Query ID:</strong> ${newQuery.query_id}</p>
          <p><strong>Product:</strong> ${product}</p>
          <p><strong>Description:</strong> ${description}</p>
        </div>
      `,
    });

    // Success response
    return NextResponse.json(
      { message: "Query request submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing query request:", error);
    return NextResponse.json(
      { message: "Failed to submit query request. Please try again." },
      { status: 500 }
    );
  }
}
