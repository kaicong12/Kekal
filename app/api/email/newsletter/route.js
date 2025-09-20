import { NextResponse } from "next/server";
import { processNewsletterSubscription } from "@/utils/email/newsletterEmails";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, source } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Process the newsletter subscription
    const result = await processNewsletterSubscription({
      email,
      source: source || "Website Footer",
    });

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Newsletter subscription successful",
      });
    } else {
      return NextResponse.json(
        { error: result.message || "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Newsletter subscription API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
