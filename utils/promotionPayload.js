import { revalidatePath } from "next/cache";
import { PROMOTION_SCOPES } from "@/utils/promotions";

const DISCOUNT_TYPES = [
  "NONE",
  "FIXED_AMOUNT",
  "PERCENTAGE",
  "OVERRIDE_PRICE",
];

// Returns `{ data }` or `{ error }`.
export function parseDiscount(body) {
  const type = body.discountType ?? "NONE";
  if (!DISCOUNT_TYPES.includes(type)) {
    return { error: `Unknown discount type: ${type}` };
  }
  if (type === "NONE") {
    return { data: { discountType: "NONE", discountValue: null } };
  }

  const value = Number(body.discountValue);
  if (!Number.isFinite(value) || value <= 0) {
    return { error: "A discount needs a value greater than zero" };
  }
  if (type === "PERCENTAGE" && value > 100) {
    return { error: "Percentage discount cannot exceed 100" };
  }

  return { data: { discountType: type, discountValue: value } };
}

// Duplicates are dropped: the table has a unique constraint on
// (promotionId, scope, value) and Prisma would otherwise fail the whole write.
export function parseTargets(body) {
  if (body.targets === undefined) return { data: undefined };
  if (!Array.isArray(body.targets)) {
    return { error: "targets must be an array" };
  }

  const seen = new Set();
  const data = [];

  for (const raw of body.targets) {
    const scope = raw?.scope;
    if (!PROMOTION_SCOPES.includes(scope)) {
      return { error: `Unknown targeting scope: ${scope}` };
    }

    const value = scope === "ALL" ? null : String(raw.value ?? "").trim();
    if (scope !== "ALL" && !value) {
      return { error: `A ${scope} rule needs a value` };
    }

    const key = `${scope}:${value ?? ""}`;
    if (seen.has(key)) continue;
    seen.add(key);

    data.push({ scope, value, isExclusion: Boolean(raw.isExclusion) });
  }

  return { data };
}

// Detail and listing pages are cached for 24h for crawl performance, so saving a
// promotion has to push the change out explicitly or it would not surface for up
// to a day. Revalidating the dynamic route rather than each concrete slug covers
// brand- and site-wide promotions without enumerating every bike.
const PROMOTION_SURFACES = [
  "/[locale]/motorcycle/[slug]",
  "/[locale]/motorcycles",
  "/[locale]/listing",
  "/[locale]/promotions",
  "/[locale]/brands/[brand]",
  "/[locale]/home",
  "/[locale]",
];

export function revalidatePromotionSurfaces() {
  for (const path of PROMOTION_SURFACES) {
    try {
      revalidatePath(path, "page");
    } catch (error) {
      // A bad path shouldn't fail the write that already succeeded.
      console.error(`Failed to revalidate ${path}:`, error);
    }
  }
}
