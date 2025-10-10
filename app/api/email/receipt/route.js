import { NextResponse } from "next/server";
import { sendReceiptEmail } from "../../../../utils/email/receiptEmails";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      to,
      customerName,
      receiptNumber,
      receiptDate,
      total,
      receiptImage,
    } = body;

    // Validate required fields
    if (
      !to ||
      !customerName ||
      !receiptNumber ||
      !receiptDate ||
      !total ||
      !receiptImage
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send receipt email
    const result = await sendReceiptEmail({
      to,
      customerName,
      receiptNumber,
      receiptDate,
      total,
      receiptImage,
    });

    if (result.success) {
      return NextResponse.json({ message: "Receipt sent successfully" });
    } else {
      return NextResponse.json(
        { error: result.error || "Failed to send receipt" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Receipt email API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
