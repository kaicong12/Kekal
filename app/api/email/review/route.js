import { NextResponse } from "next/server";
import { processReviewSubmission } from "@/utils/email/reviewEmails";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, title, review } = body;

    // Validate required fields
    if (!review) {
      return NextResponse.json(
        { error: "Review content is required" },
        { status: 400 }
      );
    }

    // Process the review submission
    const result = await processReviewSubmission({
      name,
      email,
      title,
      review,
    });

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Review submitted successfully",
      });
    } else {
      return NextResponse.json(
        { error: result.message || "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Review submission API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
