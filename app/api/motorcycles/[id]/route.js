import { NextResponse } from "next/server";
import { getMotorcycleByIdPg } from "@/utils/dbPg";

export async function GET(request, { params }) {
  try {
    const motorcycle = await getMotorcycleByIdPg(params.id);

    if (!motorcycle) {
      return NextResponse.json(
        { error: "Motorcycle not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(motorcycle);
  } catch (error) {
    console.error("Error fetching motorcycle:", error);
    return NextResponse.json(
      { error: "Failed to fetch motorcycle" },
      { status: 500 }
    );
  }
}
