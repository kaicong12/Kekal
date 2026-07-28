// @ts-check
const { test, expect } = require("@playwright/test");
const { mockApiRoutes } = require("./mocks");

// The Yamaha YZF-R15 is the only discounted bike in the mocks:
// RM 12,500 -> RM 11,500, saving RM 1,000.
const DISCOUNTED = "YZF-R15";

test.describe("Promotions - discounted pricing on listing cards", () => {
  test.beforeEach(async ({ page }) => {
    await mockApiRoutes(page);
  });

  test("shows the promo price with the original struck through", async ({ page }) => {
    await page.goto("/listing");

    const card = page
      .locator(".bike-card")
      .filter({ hasText: DISCOUNTED })
      .first();
    await expect(card).toBeVisible();

    await expect(card.locator(".bike-card__price b")).toHaveText("RM 11,500");
    await expect(card.locator(".bike-card__price s")).toHaveText("RM 12,500");
  });

  test("flags the discounted bike with a promo badge", async ({ page }) => {
    await page.goto("/listing");

    const card = page
      .locator(".bike-card")
      .filter({ hasText: DISCOUNTED })
      .first();
    await expect(card.locator(".bike-card__promo")).toBeVisible();
  });

  test("leaves undiscounted bikes untouched", async ({ page }) => {
    await page.goto("/listing");

    const card = page
      .locator(".bike-card")
      .filter({ hasText: "CBR250RR" })
      .first();
    await expect(card).toBeVisible();

    await expect(card.locator(".bike-card__price b")).toHaveText("RM 28,800");
    await expect(card.locator(".bike-card__price s")).toHaveCount(0);
    await expect(card.locator(".bike-card__promo")).toHaveCount(0);
  });

  test("never advertises a price above the base price", async ({ page }) => {
    await page.goto("/listing");
    await page.locator(".bike-card").first().waitFor();

    const rows = await page.locator(".bike-card__price").evaluateAll((nodes) =>
      nodes.map((n) => ({
        now: n.querySelector("b")?.textContent ?? "",
        was: n.querySelector("s")?.textContent ?? null,
      }))
    );

    expect(rows.length).toBeGreaterThan(0);
    const toNumber = (s) => Number(String(s).replace(/[^0-9]/g, ""));
    for (const { now, was } of rows) {
      if (was) expect(toNumber(now)).toBeLessThan(toNumber(was));
    }
  });
});

test.describe("Promotions - public promotions page", () => {
  test("renders without error", async ({ page }) => {
    await mockApiRoutes(page);
    await page.goto("/promotions");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});
