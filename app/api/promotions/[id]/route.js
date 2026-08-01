import { NextResponse } from "next/server";
import {
  getPromotionByIdPg,
  updatePromotionPg,
  deletePromotionPg,
} from "@/utils/dbPg";
import { verifyAuthToken } from "@/utils/firebaseAdmin";
import {
  parseDiscount,
  parseTargets,
  revalidatePromotionSurfaces,
} from "@/utils/promotionPayload";

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const promotion = await getPromotionByIdPg(id);

    if (!promotion) {
      return NextResponse.json(
        { error: "Promotion not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(promotion);
  } catch (error) {
    console.error(
      JSON.stringify({
        level: "error",
        msg: "failed to fetch promotion",
        err: { message: error.message, code: error.code, stack: error.stack },
      })
    );
    return NextResponse.json(
      { error: "Failed to fetch promotion" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  const auth = await verifyAuthToken(request);
  if (auth.error) return auth.error;

  try {
    const body = await request.json();
    const { id } = await params;

    const existing = await getPromotionByIdPg(id);
    if (!existing) {
      return NextResponse.json(
        { error: "Promotion not found" },
        { status: 404 }
      );
    }

    const data = {};
    if (body.title !== undefined) data.title = body.title;
    if (body.subtitle !== undefined) data.subtitle = body.subtitle || null;
    if (body.description !== undefined)
      data.description = body.description || null;
    if (body.imageUrl !== undefined) data.imageUrl = body.imageUrl || null;
    if (body.ctaText !== undefined)
      data.ctaText = body.ctaText || "Claim this deal";
    if (body.whatsappMessage !== undefined)
      data.whatsappMessage = body.whatsappMessage || null;
    if (body.isFeatured !== undefined) data.isFeatured = Boolean(body.isFeatured);
    if (body.isActive !== undefined) data.isActive = Boolean(body.isActive);
    if (body.displayOrder !== undefined)
      data.displayOrder = parseInt(body.displayOrder, 10) || 0;
    if (body.motorcycleId !== undefined)
      data.motorcycleId = body.motorcycleId || null;

    if (body.discountType !== undefined || body.discountValue !== undefined) {
      const discount = parseDiscount({
        discountType: body.discountType ?? existing.discountType,
        discountValue: body.discountValue ?? existing.discountValue,
      });
      if (discount.error) {
        return NextResponse.json({ error: discount.error }, { status: 400 });
      }
      Object.assign(data, discount.data);
    }

    // Replaced wholesale rather than diffed: the form always submits the full set.
    const targets = parseTargets(body);
    if (targets.error) {
      return NextResponse.json({ error: targets.error }, { status: 400 });
    }
    if (targets.data !== undefined) {
      data.targets = {
        deleteMany: {},
        ...(targets.data.length ? { create: targets.data } : {}),
      };
    }

    if (body.startDate !== undefined) {
      const start = new Date(body.startDate);
      if (Number.isNaN(start.getTime())) {
        return NextResponse.json(
          { error: "Invalid start date" },
          { status: 400 }
        );
      }
      data.startDate = start;
    }
    if (body.endDate !== undefined) {
      const end = new Date(body.endDate);
      if (Number.isNaN(end.getTime())) {
        return NextResponse.json(
          { error: "Invalid end date" },
          { status: 400 }
        );
      }
      data.endDate = end;
    }

    const effectiveStart = data.startDate ?? existing.startDate;
    const effectiveEnd = data.endDate ?? existing.endDate;
    if (new Date(effectiveEnd) <= new Date(effectiveStart)) {
      return NextResponse.json(
        { error: "End date must be after start date" },
        { status: 400 }
      );
    }

    const promotion = await updatePromotionPg(id, data);

    console.log(
      JSON.stringify({
        level: "info",
        msg: "promotion updated",
        actor: auth.decoded.email,
        promotionId: id,
        fields: Object.keys(data),
      })
    );

    revalidatePromotionSurfaces();
    return NextResponse.json(promotion);
  } catch (error) {
    console.error(
      JSON.stringify({
        level: "error",
        msg: "failed to update promotion",
        actor: auth.decoded.email,
        err: { message: error.message, code: error.code, stack: error.stack },
      })
    );
    return NextResponse.json(
      { error: "Failed to update promotion" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const auth = await verifyAuthToken(request);
  if (auth.error) return auth.error;

  try {
    const { id } = await params;

    const existing = await getPromotionByIdPg(id);
    if (!existing) {
      return NextResponse.json(
        { error: "Promotion not found" },
        { status: 404 }
      );
    }

    await deletePromotionPg(id);

    console.log(
      JSON.stringify({
        level: "info",
        msg: "promotion deleted",
        actor: auth.decoded.email,
        promotionId: id,
        title: existing.title,
      })
    );

    revalidatePromotionSurfaces();
    return NextResponse.json({ message: "Promotion deleted successfully" });
  } catch (error) {
    console.error(
      JSON.stringify({
        level: "error",
        msg: "failed to delete promotion",
        actor: auth.decoded.email,
        err: { message: error.message, code: error.code, stack: error.stack },
      })
    );
    return NextResponse.json(
      { error: "Failed to delete promotion" },
      { status: 500 }
    );
  }
}
