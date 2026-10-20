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
