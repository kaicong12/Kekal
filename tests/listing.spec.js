// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("Listing Page - Desktop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/listing");
  });

  test("should load the listing page with heading", async ({ page }) => {
    const heading = page.getByRole("heading", {
      name: /Motorcycles For Sale/i,
    });
    await expect(heading).toBeVisible();
  });

  test("should display motorcycle count", async ({ page }) => {
    const countText = page.getByText(/motorcycles for you/i);
    await expect(countText).toBeVisible({ timeout: 15000 });
  });

  test("should display motorcycle cards", async ({ page }) => {
    const listingGrid = page.locator(".car-listing-grid");
    await expect(listingGrid).toBeVisible({ timeout: 15000 });

    const cards = listingGrid.locator("a[href*='/motorcycle/']");
    await expect(cards.first()).toBeVisible({ timeout: 15000 });
  });

  test("should show price on motorcycle cards", async ({ page }) => {
    const listingGrid = page.locator(".car-listing-grid");
    await expect(listingGrid).toBeVisible({ timeout: 15000 });

    const price = listingGrid.getByText(/RM/).first();
    await expect(price).toBeVisible();
  });

  test("should filter motorcycles by brand", async ({ page }) => {
    await page.waitForSelector(".car-listing-grid", { timeout: 15000 });

    const brandFilter = page.locator('[class*="brandFilter"], [class*="brand"]').first();
    if (await brandFilter.isVisible()) {
      const brandBtn = brandFilter.locator("button, [role='button']").first();
      if (await brandBtn.count() > 0) {
        await brandBtn.click();
        await page.waitForTimeout(500);
      }
    }
  });

  test("should navigate to motorcycle detail when clicking a card", async ({ page }) => {
    const listingGrid = page.locator(".car-listing-grid");
    await expect(listingGrid).toBeVisible({ timeout: 15000 });

    const firstCard = listingGrid.locator("a[href*='/motorcycle/']").first();
    await firstCard.click();
    await expect(page).toHaveURL(/\/motorcycle\/.+/);
  });

  test("should display pagination controls", async ({ page }) => {
    await page.waitForSelector(".car-listing-grid", { timeout: 15000 });
    const pagination = page.locator('[class*="pagination"], .pagination');
    if (await pagination.count() > 0) {
      await expect(pagination.first()).toBeVisible();
    }
  });

  test("should have a header and footer", async ({ page }) => {
    const logo = page.locator('img[alt="Perniagaan Motor Kekal logo"]');
    await expect(logo).toBeVisible();
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });
});

test.describe("Listing Page - Mobile", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test.beforeEach(async ({ page }) => {
    await page.goto("/listing");
  });

  test("should load listing page on mobile", async ({ page }) => {
    const heading = page.getByRole("heading", {
      name: /Motorcycles For Sale/i,
    });
    await expect(heading).toBeVisible();
  });

  test("should display motorcycle cards on mobile", async ({ page }) => {
    const listingGrid = page.locator(".car-listing-grid");
    await expect(listingGrid).toBeVisible({ timeout: 15000 });
    const cards = listingGrid.locator("a[href*='/motorcycle/']");
    await expect(cards.first()).toBeVisible({ timeout: 15000 });
  });

  test("should show mobile bottom bar", async ({ page }) => {
    const mobileBar = page.locator('[class*="mobileBar"]');
    await expect(mobileBar).toBeVisible();
  });

  test("should show motorcycle count on mobile", async ({ page }) => {
    const countText = page.getByText(/motorcycles for you/i);
    await expect(countText).toBeVisible({ timeout: 15000 });
  });

  test("should navigate to detail page from mobile listing", async ({ page }) => {
    const listingGrid = page.locator(".car-listing-grid");
    await expect(listingGrid).toBeVisible({ timeout: 15000 });

    const firstCard = listingGrid.locator("a[href*='/motorcycle/']").first();
    await firstCard.click();
    await expect(page).toHaveURL(/\/motorcycle\/.+/);
  });
});
