import { NextResponse } from "next/server";
import { fetchUniqueBrandSetPg } from "@/utils/dbPg";

export async function GET() {
  try {
    const brandSet = await fetchUniqueBrandSetPg();
    return NextResponse.json({ brands: Array.from(brandSet) });
  } catch (error) {
    console.error("Error fetching brands:", error);
    return NextResponse.json(
      { error: "Failed to fetch brands" },
      { status: 500 }
    );
  }
}
