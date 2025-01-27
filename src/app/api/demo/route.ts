import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    // Extracting the incoming data from the request body
    const { name, email, description, phone_number, product, requirement } = await req.json();

    // Validation of required fields
    if (!name || !email || !description || !product || !requirement) {
      return NextResponse.json(
        {
          message:
            "Name, email, description, product, and requirement are required",
        },
        { status: 400 }
      );
    }

    // Validating product type based on your enum
    if (
      ![
        "RETAIL_SOLUTION",
        "MANUFACTURING_SOLUTION",
        "LOGISTICS_SOLUTION",
      ].includes(product)
    ) {
      return NextResponse.json(
        { message: "Invalid product type" },
        { status: 400 }
      );
    }

    // Creating a new demo entry in the database
    const newDemo = await prisma.demo.create({
      data: {
        name,
        emailId: email,
        phoneNumber: phone_number || "N/A", // Default if not provided
        product: product as any, // Enum value
        requirement,
        description,
      },
    });

    // Configuring the transporter for nodemailer (sending email notifications)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email notification to the admin
    await transporter.sendMail({
      from: `"YourCompany" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Admin email
      subject: `New Demo Request - ${newDemo.demo_id}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>New Demo Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone_number || "N/A"}</p>
          <p><strong>Product:</strong> ${product}</p>
          <p><strong>Requirement:</strong> ${requirement}</p>
          <p><strong>Description:</strong> ${description}</p>
          <p>Demo ID: ${newDemo.demo_id}</p>
        </div>
      `,
    });

    // Email notification to the user
    await transporter.sendMail({
      from: `"YourCompany" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Demo Request Received",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 5px;">
          <h2 style="color: #0066cc; font-size: 18px; margin-bottom: 10px;">Thank you for your demo request, ${name}!</h2>
          <p style="color: #333; font-size: 12px; line-height: 1.5;">We have received your request and will get back to you soon.</p>
          <p style="color: #333; font-size: 12px; margin-top: 20px;">
            <strong>Demo ID:</strong> ${newDemo.demo_id}
          </p>
          <p style="color: #333; font-size: 12px;">
            <strong>Description:</strong> ${description}
          </p>
          <p style="color: #333; font-size: 12px;">
            <strong>Product:</strong> ${product}
          </p>
          <p style="color: #333; font-size: 16px; margin-top: 30px;">Best regards,</p>
          <p style="color: #0066cc; font-size: 16px; font-weight: bold;">YourCompany</p>
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
