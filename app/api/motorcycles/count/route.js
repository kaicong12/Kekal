import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const maxPrice = searchParams.get("maxPrice");
    const minPrice = searchParams.get("minPrice");

    const where = {};

    if (maxPrice || minPrice) {
      where.price = {};
      if (maxPrice) where.price.lte = Number(maxPrice);
      if (minPrice) where.price.gte = Number(minPrice);
    }

    const count = await prisma.motorcycle.count({ where });
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Error counting motorcycles:", error);
    return NextResponse.json({ error: "Failed to count" }, { status: 500 });
  }
}
