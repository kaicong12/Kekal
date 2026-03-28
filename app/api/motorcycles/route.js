import { NextResponse } from "next/server";
import { queryMotorcyclePg, createMotorcyclePg } from "@/utils/dbPg";

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

const REQUIRED_FIELDS = [
  "brand",
  "name",
  "model",
  "year",
  "price",
  "engine",
  "engineCapacity",
  "gear",
  "color",
];

export async function POST(request) {
  try {
    const body = await request.json();

    const missing = REQUIRED_FIELDS.filter((f) => body[f] == null || body[f] === "");
    if (missing.length) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    const data = {
      brand: body.brand,
      name: body.name,
      model: body.model,
      year: String(body.year),
      price: Number(body.price),
      engine: body.engine,
      engineCapacity: parseInt(body.engineCapacity, 10),
      gear: body.gear,
      color: body.color,
      featured: body.featured ?? false,
      tags: body.tags || null,
      description: body.description || null,
      specification: body.specification || null,
      images: body.images?.map((img, i) => ({
        url: img.url,
        displayOrder: img.displayOrder ?? i,
      })),
    };

    const motorcycle = await createMotorcyclePg(data);
    return NextResponse.json(motorcycle, { status: 201 });
  } catch (error) {
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "A motorcycle with this brand, name, and year already exists" },
        { status: 409 }
      );
    }
    console.error("Error creating motorcycle:", error);
    return NextResponse.json(
      { error: "Failed to create motorcycle" },
      { status: 500 }
    );
  }
}
