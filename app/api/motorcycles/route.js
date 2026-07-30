import { NextResponse } from "next/server";
import {
  queryMotorcyclePg,
  createMotorcyclePg,
  withPromotionsPg,
} from "@/utils/dbPg";
import { verifyAuthToken } from "@/utils/firebaseAdmin";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const startedAt = Date.now();
  try {
    const { searchParams } = new URL(request.url);

    const ALLOWED_SORT_FIELDS = ["price", "createdAt", "brand", "name", "year"];
    const rawSortField = searchParams.get("sortField") || "price";
    const sortField = ALLOWED_SORT_FIELDS.includes(rawSortField) ? rawSortField : "price";
    const sortOrder = searchParams.get("sortOrder") === "desc" ? "desc" : "asc";
    const brand = searchParams.get("brand");
    const maxPrice = searchParams.get("maxPrice");
    const minPrice = searchParams.get("minPrice");
    const maxCC = searchParams.get("maxCC");
    const minCC = searchParams.get("minCC");
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

    if (minPrice) {
      const parsedMinPrice = Number(minPrice);
      if (Number.isFinite(parsedMinPrice) && parsedMinPrice > 0) {
        filterOpt.push({
          fieldToFilter: "price",
          operator: ">=",
          filterValue: parsedMinPrice,
        });
      }
    }

    if (maxCC) {
      const parsedMaxCC = Number(maxCC);
      if (Number.isFinite(parsedMaxCC) && parsedMaxCC > 0) {
        filterOpt.push({
          fieldToFilter: "engineCapacity",
          operator: "<",
          filterValue: parsedMaxCC,
        });
      }
    }

    if (minCC) {
      const parsedMinCC = Number(minCC);
      if (Number.isFinite(parsedMinCC) && parsedMinCC > 0) {
        filterOpt.push({
          fieldToFilter: "engineCapacity",
          operator: ">=",
          filterValue: parsedMinCC,
        });
      }
    }

    const result = await queryMotorcyclePg({
      sortedBy,
      filterOpt,
      limitResult: limitResult ? Number(limitResult) : undefined,
      search: search || undefined,
    });

    // So the client-rendered grids show the same figures as the detail page.
    const motorcycles = await withPromotionsPg(result.motorcycles);

    console.log(
      JSON.stringify({
        level: "info",
        msg: "motorcycle search",
        params: Object.fromEntries(searchParams),
        resultCount: result.motorcycles.length,
        total: result.total,
        durationMs: Date.now() - startedAt,
      })
    );

    return NextResponse.json({ ...result, motorcycles });
  } catch (error) {
    console.error(
      JSON.stringify({
        level: "error",
        msg: "failed to fetch motorcycles",
        err: { message: error.message, code: error.code, stack: error.stack },
      })
    );
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
  const auth = await verifyAuthToken(request);
  if (auth.error) return auth.error;

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
      tags: body.tags || null,
      description: body.description || null,
      specification: body.specification || null,
      images: body.images?.map((img, i) => ({
        url: img.url,
        displayOrder: img.displayOrder ?? i,
      })),
    };

    const motorcycle = await createMotorcyclePg(data);

    console.log(
      JSON.stringify({
        level: "info",
        msg: "motorcycle created",
        actor: auth.decoded.email,
        motorcycleId: motorcycle.id,
        brand: data.brand,
        name: data.name,
        year: data.year,
      })
    );

    return NextResponse.json(motorcycle, { status: 201 });
  } catch (error) {
    if (error.code === "P2002") {
      console.warn(
        JSON.stringify({
          level: "warn",
          msg: "duplicate motorcycle rejected",
          actor: auth.decoded.email,
        })
      );
      return NextResponse.json(
        { error: "A motorcycle with this brand, name, and year already exists" },
        { status: 409 }
      );
    }
    console.error(
      JSON.stringify({
        level: "error",
        msg: "failed to create motorcycle",
        actor: auth.decoded.email,
        err: { message: error.message, code: error.code, stack: error.stack },
      })
    );
    return NextResponse.json(
      { error: "Failed to create motorcycle" },
      { status: 500 }
    );
  }
}
