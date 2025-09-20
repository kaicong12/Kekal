import { NextResponse } from "next/server";
import { processContactFormSubmission } from "@/utils/email/contactFormEmails";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, topic, message } = body;

    // Validate required fields
    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    // Process the contact form submission
    const result = await processContactFormSubmission({
      name,
      email,
      phone,
      topic,
      message,
    });

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Contact form submitted successfully",
      });
    } else {
      return NextResponse.json(
        { error: result.message || "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact form API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
