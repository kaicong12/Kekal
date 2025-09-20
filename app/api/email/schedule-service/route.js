import { NextResponse } from "next/server";
import { processServiceRequest } from "@/utils/email/scheduleServiceEmails";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, bestTime, message } = body;

    // Validate required fields
    if (!email || !name) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Process the service request
    const result = await processServiceRequest({
      name,
      email,
      phone,
      bestTime,
      message,
    });

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Service request submitted successfully",
      });
    } else {
      return NextResponse.json(
        { error: result.message || "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Service request API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
