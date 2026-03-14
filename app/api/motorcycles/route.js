import { NextResponse } from "next/server";
import { queryMotorcyclePg } from "@/utils/dbPg";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const sortField = searchParams.get("sortField") || "price";
    const sortOrder = searchParams.get("sortOrder") || "asc";
    const brand = searchParams.get("brand");
    const maxPrice = searchParams.get("maxPrice");
    const limitResult = searchParams.get("limit");
    const search = searchParams.get("search");

    const sortedBy = [{ fieldToSort: sortField, sortOrder }];
    const filterOpt = [];

    if (brand) {
      filterOpt.push({
        fieldToFilter: "brand",
        operator: "==",
        filterValue: brand,
      });
    }

    if (maxPrice) {
      filterOpt.push({
        fieldToFilter: "price",
        operator: "<=",
        filterValue: Number(maxPrice),
      });
    }

    const result = await queryMotorcyclePg({
      sortedBy,
      filterOpt,
      limitResult: limitResult ? Number(limitResult) : undefined,
      search: search || undefined,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching motorcycles:", error);
    return NextResponse.json(
      { error: "Failed to fetch motorcycles" },
      { status: 500 }
    );
  }
}
