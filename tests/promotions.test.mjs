/**
 * Unit tests for promotion targeting and pricing (`utils/promotions.js`).
 *
 * These rules decide what price a customer is shown, so they get real coverage:
 * run with `yarn test:unit`. No test framework needed — node:test only, and the
 * module under test is pure, so nothing here touches the database.
 */
import test from "node:test";
import assert from "node:assert/strict";

import {
  effectivePrice,
  resolvePromotion,
  isPromotionLive,
  startOfMalaysiaDay,
  endOfMalaysiaDay,
} from "../utils/promotions.js";

const bike = {
  id: "bike1",
  brand: "Yamaha",
  model: "Y15ZR",
  price: 8998,
  tags: "Best seller, Kapchai",
};

// An admin in Malaysia picking "31 Jul 2026" in the date picker produces local
// midnight, which serialises to 30 Jul 16:00Z. Every fixture uses that instant.
const PICKED_31_JULY = "2026-07-30T16:00:00.000Z";

const promo = (over = {}) => ({
  id: "p",
  isActive: true,
  discountType: "NONE",
  discountValue: null,
  startDate: "2026-07-01T16:00:00.000Z",
  endDate: PICKED_31_JULY,
  displayOrder: 0,
  targets: [{ scope: "ALL", value: null, isExclusion: false }],
  ...over,
});

const target = (scope, value, isExclusion = false) => ({ scope, value, isExclusion });

test("day boundaries resolve in Malaysian time", () => {
  assert.equal(
    startOfMalaysiaDay(PICKED_31_JULY).toISOString(),
    "2026-07-30T16:00:00.000Z"
  );
  assert.equal(
    endOfMalaysiaDay(PICKED_31_JULY).toISOString(),
    "2026-07-31T15:59:59.999Z"
  );
});

test("a promotion ending 31 July stays live all through the 31st", () => {
  // Regression guard: the previous `endDate >= now` check expired this promo
  // on the morning of the 30th, nearly two days early.
  assert.equal(isPromotionLive(promo(), new Date("2026-07-31T01:00:00Z")), true);
  assert.equal(isPromotionLive(promo(), new Date("2026-07-31T15:50:00Z")), true);
  assert.equal(isPromotionLive(promo(), new Date("2026-07-31T16:00:01Z")), false);
  assert.equal(
    isPromotionLive(promo({ isActive: false }), new Date("2026-07-31T01:00:00Z")),
    false
  );
});

test("effectivePrice covers every discount type", () => {
  const unchanged = { basePrice: 8998, price: 8998, savings: 0, hasDiscount: false };

  assert.deepEqual(effectivePrice(8998, promo()), unchanged);
  assert.deepEqual(
    effectivePrice(8998, promo({ discountType: "FIXED_AMOUNT", discountValue: 500 })),
    { basePrice: 8998, price: 8498, savings: 500, hasDiscount: true }
  );
  assert.deepEqual(
    effectivePrice(8998, promo({ discountType: "PERCENTAGE", discountValue: 10 })),
    { basePrice: 8998, price: 8098, savings: 900, hasDiscount: true }
  );
  assert.deepEqual(
    effectivePrice(8998, promo({ discountType: "OVERRIDE_PRICE", discountValue: 7999 })),
    { basePrice: 8998, price: 7999, savings: 999, hasDiscount: true }
  );

  // Never let a misconfigured promotion raise the price or blank it out.
  assert.deepEqual(
    effectivePrice(8998, promo({ discountType: "OVERRIDE_PRICE", discountValue: 9500 })),
    unchanged
  );
  assert.deepEqual(
    effectivePrice(8998, promo({ discountType: "FIXED_AMOUNT", discountValue: null })),
    unchanged
  );
});

test("price and savings always reconcile to the base price", () => {
  for (const discountValue of [1, 7, 13, 250, 999]) {
    for (const discountType of ["FIXED_AMOUNT", "PERCENTAGE", "OVERRIDE_PRICE"]) {
      const { basePrice, price, savings } = effectivePrice(
        8998,
        promo({ discountType, discountValue })
      );
      assert.equal(price + savings, basePrice, `${discountType} ${discountValue}`);
    }
  }
});

const NOW = new Date("2026-07-15T02:00:00Z");

test("targets match the right bikes", () => {
  assert.equal(resolvePromotion(bike, [promo({ targets: [] })], NOW), null);
  assert.equal(
    resolvePromotion(bike, [promo({ id: "b", targets: [target("BRAND", "yamaha")] })], NOW)?.id,
    "b"
  );
  assert.equal(
    resolvePromotion(bike, [promo({ targets: [target("BRAND", "Honda")] })], NOW),
    null
  );
  assert.equal(
    resolvePromotion(bike, [promo({ id: "g", targets: [target("TAG", " best seller ")] })], NOW)?.id,
    "g"
  );
  assert.equal(
    resolvePromotion(bike, [promo({ id: "m", targets: [target("MODEL", "Y15ZR")] })], NOW)?.id,
    "m"
  );
});

test("the most specific promotion wins, even if another discounts more", () => {
  const pool = [
    promo({ id: "site", discountType: "PERCENTAGE", discountValue: 20, targets: [target("ALL", null)] }),
    promo({ id: "bikeOnly", discountType: "FIXED_AMOUNT", discountValue: 100, targets: [target("MOTORCYCLE", "bike1")] }),
    promo({ id: "brand", discountType: "FIXED_AMOUNT", discountValue: 300, targets: [target("BRAND", "Yamaha")] }),
  ];

  assert.equal(resolvePromotion(bike, pool, NOW)?.id, "bikeOnly");
  // Resolution must not depend on the order rows come back from the database.
  assert.equal(resolvePromotion(bike, [...pool].reverse(), NOW)?.id, "bikeOnly");
});

test("an exclusion disqualifies its whole promotion", () => {
  const excluded = promo({
    id: "x",
    targets: [target("BRAND", "Yamaha"), target("MOTORCYCLE", "bike1", true)],
  });

  assert.equal(resolvePromotion(bike, [excluded], NOW), null);
  // …and the bike falls through to the next eligible promotion.
  assert.equal(
    resolvePromotion(bike, [excluded, promo({ id: "site", targets: [target("ALL", null)] })], NOW)?.id,
    "site"
  );
});

test("equal specificity breaks to bigger saving, then soonest end date", () => {
  assert.equal(
    resolvePromotion(bike, [
      promo({ id: "small", discountType: "FIXED_AMOUNT", discountValue: 100, targets: [target("BRAND", "Yamaha")] }),
      promo({ id: "big", discountType: "FIXED_AMOUNT", discountValue: 700, targets: [target("BRAND", "Yamaha")] }),
    ], NOW)?.id,
    "big"
  );

  assert.equal(
    resolvePromotion(bike, [
      promo({ id: "later", endDate: "2026-09-30T16:00:00.000Z", targets: [target("BRAND", "Yamaha")] }),
      promo({ id: "sooner", endDate: "2026-08-10T16:00:00.000Z", targets: [target("BRAND", "Yamaha")] }),
    ], NOW)?.id,
    "sooner"
  );
});

test("promotions outside their window never win", () => {
  assert.equal(
    resolvePromotion(bike, [promo({ endDate: "2026-07-01T16:00:00.000Z", targets: [target("ALL", null)] })], NOW),
    null
  );
  assert.equal(
    resolvePromotion(bike, [promo({ startDate: "2026-08-01T16:00:00.000Z", targets: [target("ALL", null)] })], NOW),
    null
  );
});
