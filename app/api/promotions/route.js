import { NextResponse } from "next/server";
import {
  listLivePromotionsPg,
  listAllPromotionsPg,
  createPromotionPg,
} from "@/utils/dbPg";
import { verifyAuthToken } from "@/utils/firebaseAdmin";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    // `?all=true` returns every promotion (admin only); otherwise public live list.
    if (searchParams.get("all") === "true") {
      const auth = await verifyAuthToken(request);
      if (auth.error) return auth.error;
      const promotions = await listAllPromotionsPg();
      return NextResponse.json({ promotions });
    }

    const promotions = await listLivePromotionsPg();
    return NextResponse.json({ promotions });
  } catch (error) {
    console.error("Error fetching promotions:", error);
    return NextResponse.json(
      { error: "Failed to fetch promotions" },
      { status: 500 }
    );
  }
}

const REQUIRED_FIELDS = ["title", "startDate", "endDate"];

function buildPromotionData(body) {
  const start = new Date(body.startDate);
  const end = new Date(body.endDate);

  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return { error: "Invalid start or end date" };
  }
  if (end <= start) {
    return { error: "End date must be after start date" };
  }

  return {
    data: {
      title: body.title,
      subtitle: body.subtitle || null,
      description: body.description || null,
      imageUrl: body.imageUrl || null,
      ctaText: body.ctaText || "Claim this deal",
      whatsappMessage: body.whatsappMessage || null,
      isFeatured: Boolean(body.isFeatured),
      isActive: body.isActive === undefined ? true : Boolean(body.isActive),
      startDate: start,
      endDate: end,
      displayOrder: Number.isFinite(Number(body.displayOrder))
        ? parseInt(body.displayOrder, 10)
        : 0,
      motorcycleId: body.motorcycleId || null,
    },
  };
}

export async function POST(request) {
  const auth = await verifyAuthToken(request);
  if (auth.error) return auth.error;

  try {
    const body = await request.json();

    const missing = REQUIRED_FIELDS.filter(
      (f) => body[f] == null || body[f] === ""
    );
    if (missing.length) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    const { data, error } = buildPromotionData(body);
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    const promotion = await createPromotionPg(data);
    return NextResponse.json(promotion, { status: 201 });
  } catch (error) {
    console.error("Error creating promotion:", error);
    return NextResponse.json(
      { error: "Failed to create promotion" },
      { status: 500 }
    );
  }
}
