import { NextResponse } from "next/server";
import { processReviewSubmission } from "@/utils/email/reviewEmails";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, rating, title, review } = body;

    // Validate required fields
    if (!rating || !review) {
      return NextResponse.json(
        { error: "Rating and review content are required" },
        { status: 400 }
      );
    }

    // Validate rating range
    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: "Rating must be between 1 and 5" },
        { status: 400 }
      );
    }

    // Process the review submission
    const result = await processReviewSubmission({
      name,
      email,
      rating: parseInt(rating),
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
