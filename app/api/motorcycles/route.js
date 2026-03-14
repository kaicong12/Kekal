import { NextResponse } from "next/server";
import { queryMotorcyclePg } from "@/utils/dbPg";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const ALLOWED_SORT_FIELDS = ["price", "createdAt", "brand", "name", "year"];
    const rawSortField = searchParams.get("sortField") || "price";
    const sortField = ALLOWED_SORT_FIELDS.includes(rawSortField) ? rawSortField : "price";
    const sortOrder = searchParams.get("sortOrder") === "desc" ? "desc" : "asc";
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
      const parsedMaxPrice = Number(maxPrice);
      if (Number.isFinite(parsedMaxPrice) && parsedMaxPrice > 0) {
        filterOpt.push({
          fieldToFilter: "price",
          operator: "<=",
          filterValue: parsedMaxPrice,
        });
      }
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
