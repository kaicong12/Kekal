// @ts-check
const { test, expect } = require("@playwright/test");
const { mockApiRoutes } = require("./mocks");

test.describe("Listing - brand filter chips", () => {
  test.beforeEach(async ({ page }) => {
    await mockApiRoutes(page);
    await page.goto("/listing");
    await page.locator(".chips--scroll .chip").first().waitFor();
  });

  test("keeps every chip on a single row", async ({ page }) => {
    const tops = await page
      .locator(".chips--scroll .chip")
      .evaluateAll((els) => els.map((el) => Math.round(el.getBoundingClientRect().top)));

    expect(tops.length).toBeGreaterThan(1);
    expect(new Set(tops).size).toBe(1);
  });

  test("never lets the page scroll sideways", async ({ page }) => {
    const overflows = await page.evaluate(
      () => document.body.scrollWidth > window.innerWidth + 1
    );
    expect(overflows).toBe(false);
  });

  test("filters the grid when a brand chip is picked", async ({ page }) => {
    await page.locator(".chips--scroll .chip", { hasText: "Honda" }).first().click();
    await expect(page.locator(".bike-card").filter({ hasText: "CBR250RR" })).toHaveCount(1);
    await expect(page.locator(".bike-card")).toHaveCount(1);
  });
});

test.describe("Listing - brand filter chips on a narrow viewport", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("scrolls the overflowing chip row without moving the page", async ({ page }) => {
    await mockApiRoutes(page);
    await page.goto("/listing");
    await page.locator(".chips--scroll .chip").first().waitFor();

    const row = page.locator(".chips--scroll");
    expect(
      await row.evaluate((el) => el.scrollWidth > el.clientWidth + 1)
    ).toBe(true);

    await row.evaluate((el) => {
      el.scrollLeft = el.scrollWidth;
    });
    expect(await row.evaluate((el) => el.scrollLeft)).toBeGreaterThan(0);

    expect(
      await page.evaluate(() => document.body.scrollWidth > window.innerWidth + 1)
    ).toBe(false);
  });
});

test.describe("Listing - search", () => {
  // Both search boxes are in the DOM; CSS shows the standalone one on mobile and
  // the toolbar one on desktop, so drive whichever is visible.
  const SEARCH = ".listing-search:visible";

  test.beforeEach(async ({ page }) => {
    await mockApiRoutes(page);
    await page.goto("/listing");
    await page.locator(".bike-card").first().waitFor();
  });

  test("narrows results to the typed query", async ({ page }) => {
    await page.fill(`${SEARCH} input`, "Yamaha");
    await expect(page.locator(".bike-card")).toHaveCount(1);
    await expect(page.locator(".bike-card").first()).toContainText("YZF-R15");
  });

  test("restores the full list when cleared", async ({ page }) => {
    const total = await page.locator(".bike-card").count();

    await page.fill(`${SEARCH} input`, "Yamaha");
    await expect(page.locator(".bike-card")).toHaveCount(1);

    await page.click(`${SEARCH} .listing-search__clear`);
    await expect(page.locator(`${SEARCH} input`)).toHaveValue("");
    await expect(page.locator(".bike-card")).toHaveCount(total);
  });

  test("shows the empty state when nothing matches", async ({ page }) => {
    await page.fill(`${SEARCH} input`, "definitelynotabike");
    await expect(page.locator(".bike-card")).toHaveCount(0);
  });

  test("exposes exactly one search box per viewport", async ({ page }) => {
    await expect(page.locator(SEARCH)).toHaveCount(1);
  });
});

test.describe("Listing - header navigation", () => {
  test("drops Brands from the header but keeps it in the footer", async ({ page }) => {
    await mockApiRoutes(page);
    await page.goto("/listing");

    await expect(page.locator(".site-header .nav a[href*='/brands']")).toHaveCount(0);
    await expect(page.locator(".site-footer a[href*='/brands']").first()).toHaveAttribute(
      "href",
      /\/brands/
    );
  });

  test("drops Brands from the mobile drawer", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await mockApiRoutes(page);
    await page.goto("/listing");

    await page.locator(".nav-toggle").click();
    const drawer = page.locator(".mobile-nav.open");
    await expect(drawer).toBeVisible();
    await expect(drawer.locator("a[href*='/brands']")).toHaveCount(0);
  });
});
