import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      companyName,
      businessType,
      branchesCount,
      location,
      product,
      requirement,
      description,
    } = await req.json();

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !companyName ||
      !businessType ||
      !branchesCount ||
      !location ||
      !product ||
      !requirement ||
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
    const validBusinessTypes = [
      "QUICK_SERVICE_RESTAURANTS",
      "UNIVERSITIES_CAFE",
      "CINEMA_THEATERS",
      "CONVENIENCE_STORES",
      "SHOPPING_MALLS",
      "SPORT_STADIUM",
    ];

    if (!validProducts.includes(product)) {
      return NextResponse.json(
        { message: "Invalid product type" },
        { status: 400 }
      );
    }

    if (!validBusinessTypes.includes(businessType)) {
      return NextResponse.json(
        { message: "Invalid business type" },
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
        lastName,
        emailId: email,
        phoneNumber,
        companyName,
        businessType: businessType as any,
        branchesCount,
        location,
        product: product as any,
        requirement,
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
      subject: `New Demo Request - ${newDemo.demo_id}`,
      html: `
        <div>
          <h2>New Demo Request</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phoneNumber}</p>
          <p><strong>Company:</strong> ${companyName}</p>
          <p><strong>Business Type:</strong> ${businessType}</p>
          <p><strong>Branches:</strong> ${branchesCount}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Product:</strong> ${product}</p>
          <p><strong>Requirement:</strong> ${requirement}</p>
          <p><strong>Description:</strong> ${description}</p>
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
          <h2>Thank you for your demo request, ${firstName} ${lastName}!</h2>
          <p>We have received your request and will contact you soon.</p>
          <p><strong>Demo ID:</strong> ${newDemo.demo_id}</p>
          <p><strong>Product:</strong> ${product}</p>
          <p><strong>Description:</strong> ${description}</p>
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
