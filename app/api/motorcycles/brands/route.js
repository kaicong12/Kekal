import { NextResponse } from "next/server";
import { fetchUniqueBrandSetPg } from "@/utils/dbPg";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const brandSet = await fetchUniqueBrandSetPg();
    return NextResponse.json({ brands: Array.from(brandSet) });
  } catch (error) {
    console.error(
      JSON.stringify({
        level: "error",
        msg: "failed to fetch brands",
        err: { message: error.message, code: error.code, stack: error.stack },
      })
    );
    return NextResponse.json(
      { error: "Failed to fetch brands" },
      { status: 500 }
    );
  }
}
