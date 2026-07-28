// Promotion targeting and pricing. Pure (no Prisma) so the same rules run on the
// server and in client components without drifting.

// Malaysia is UTC+8 year-round with no DST, so a fixed offset is exact.
// Promotion dates are day-granular: "ends 31 July" must stay live through all of
// the 31st in Johor Bahru, not expire at UTC midnight.
const MYT_OFFSET_MS = 8 * 60 * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;

export function startOfMalaysiaDay(value) {
  const t = new Date(value).getTime();
  if (Number.isNaN(t)) return null;
  return new Date(Math.floor((t + MYT_OFFSET_MS) / DAY_MS) * DAY_MS - MYT_OFFSET_MS);
}

export function endOfMalaysiaDay(value) {
  const start = startOfMalaysiaDay(value);
  if (!start) return null;
  return new Date(start.getTime() + DAY_MS - 1);
}

// Least to most specific; a higher number wins when several promotions match.
export const SCOPE_SPECIFICITY = {
  ALL: 0,
  TAG: 1,
  BRAND: 2,
  MODEL: 3,
  MOTORCYCLE: 4,
};

export const PROMOTION_SCOPES = Object.keys(SCOPE_SPECIFICITY);

function norm(value) {
  return String(value ?? "").trim().toLowerCase();
}

export function motorcycleTags(motorcycle) {
  return String(motorcycle?.tags ?? "")
    .split(",")
    .map((tag) => norm(tag))
    .filter(Boolean);
}

function targetMatches(motorcycle, target) {
  switch (target.scope) {
    case "ALL":
      return true;
    case "TAG":
      return motorcycleTags(motorcycle).includes(norm(target.value));
    case "BRAND":
      return norm(motorcycle.brand) === norm(target.value);
    case "MODEL":
      return norm(motorcycle.model) === norm(target.value);
    case "MOTORCYCLE":
      return String(motorcycle.id) === String(target.value);
    default:
      return false;
  }
}

// Specificity of the tightest matching rule, or null when the promotion does not
// apply to this bike.
export function matchSpecificity(motorcycle, promotion) {
  const targets = promotion?.targets ?? [];
  if (targets.length === 0) return null;

  let best = null;
  for (const target of targets) {
    if (!targetMatches(motorcycle, target)) continue;
    // One exclusion disqualifies the promotion however specifically another
    // rule matched — that is what makes "all Yamaha except the R15" work.
    if (target.isExclusion) return null;
    const score = SCOPE_SPECIFICITY[target.scope] ?? 0;
    if (best === null || score > best) best = score;
  }
  return best;
}

export function effectivePrice(basePrice, promotion) {
  const base = Number(basePrice) || 0;
  const none = { basePrice: base, price: base, savings: 0, hasDiscount: false };

  if (!promotion || promotion.discountType === "NONE") return none;

  const value = Number(promotion.discountValue);
  if (!Number.isFinite(value) || value <= 0) return none;

  let price;
  switch (promotion.discountType) {
    case "FIXED_AMOUNT":
      price = base - value;
      break;
    case "PERCENTAGE":
      price = base * (1 - Math.min(value, 100) / 100);
      break;
    case "OVERRIDE_PRICE":
      price = value;
      break;
    default:
      return none;
  }

  price = Math.max(Math.round(price), 0);
  // A misconfigured promotion must never raise the advertised price.
  if (price >= base) return none;

  return { basePrice: base, price, savings: base - price, hasDiscount: true };
}

export function isPromotionLive(promotion, now = new Date()) {
  if (!promotion?.isActive) return false;
  const start = startOfMalaysiaDay(promotion.startDate);
  const end = endOfMalaysiaDay(promotion.endDate);
  if (!start || !end) return false;
  return start <= now && now <= end;
}

/**
 * The single promotion governing this bike, or null. Pass every live promotion
 * as `promotions` to resolve a whole listing page in memory rather than
 * querying per card.
 */
export function resolvePromotion(motorcycle, promotions = [], now = new Date()) {
  if (!motorcycle) return null;

  // Higher is better, compared left to right.
  const rankOf = (promotion, specificity) => [
    specificity,
    effectivePrice(motorcycle.price, promotion).savings,
    -new Date(promotion.endDate).getTime(),
    -(promotion.displayOrder ?? 0),
  ];

  const beats = (a, b) => {
    for (let i = 0; i < a.length; i += 1) {
      if (a[i] !== b[i]) return a[i] > b[i];
    }
    return false;
  };

  let winner = null;
  let winnerRank = null;

  for (const promotion of promotions) {
    if (!isPromotionLive(promotion, now)) continue;

    const specificity = matchSpecificity(motorcycle, promotion);
    if (specificity === null) continue;

    const rank = rankOf(promotion, specificity);
    if (winnerRank === null || beats(rank, winnerRank)) {
      winner = promotion;
      winnerRank = rank;
    }
  }

  return winner;
}

const SCOPE_LABEL = {
  ALL: "All bikes",
  TAG: "Tag",
  BRAND: "Brand",
  MODEL: "Model",
  MOTORCYCLE: "1 bike",
};

export function summariseTargets(targets = []) {
  if (targets.length === 0) return "Not on bike pages";

  const includes = targets.filter((t) => !t.isExclusion);
  const excludes = targets.length - includes.length;
  if (includes.length === 0) return "Not on bike pages";

  const [first] = includes;
  let label =
    first.scope === "ALL" || first.scope === "MOTORCYCLE"
      ? SCOPE_LABEL[first.scope]
      : `${SCOPE_LABEL[first.scope]}: ${first.value}`;

  if (includes.length > 1) label += ` +${includes.length - 1}`;
  if (excludes > 0) label += ` (${excludes} excluded)`;
  return label;
}

export function summariseDiscount(promotion) {
  const value = Number(promotion?.discountValue);
  if (!promotion || promotion.discountType === "NONE" || !Number.isFinite(value)) {
    return null;
  }
  const rm = (n) => `RM ${Number(n).toLocaleString("en-MY")}`;

  switch (promotion.discountType) {
    case "FIXED_AMOUNT":
      return `${rm(value)} off`;
    case "PERCENTAGE":
      return `${value}% off`;
    case "OVERRIDE_PRICE":
      return `Price set to ${rm(value)}`;
    default:
      return null;
  }
}

/**
 * Bundle a bike with its winning promotion and resulting price. Every surface
 * reads `pricing` from here so none of them can disagree about what a bike costs.
 */
export function withPromotion(motorcycle, promotions = [], now = new Date()) {
  const promotion = resolvePromotion(motorcycle, promotions, now);
  const pricing = effectivePrice(motorcycle?.price, promotion);
  return { ...motorcycle, promotion: promotion ?? null, pricing };
}
