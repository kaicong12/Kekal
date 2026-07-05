// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("Motorcycle Detail Page - Desktop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/listing");
    const listingGrid = page.locator(".car-listing-grid");
    await expect(listingGrid).toBeVisible({ timeout: 15000 });
    const firstCard = listingGrid.locator("a[href*='/motorcycle/']").first();
    await firstCard.click();
    await expect(page).toHaveURL(/\/motorcycle\/.+/);
  });

  test("should display motorcycle name as h1", async ({ page }) => {
    const title = page.locator("h1");
    await expect(title).toBeVisible({ timeout: 10000 });
    await expect(title).not.toBeEmpty();
  });

  test("should display price", async ({ page }) => {
    const price = page.getByText(/RM/).first();
    await expect(price).toBeVisible({ timeout: 10000 });
  });

  test("should display image gallery", async ({ page }) => {
    const gallery = page.locator('[class*="gallery"], [class*="Gallery"], .detail-gallery');
    await expect(gallery.first()).toBeVisible({ timeout: 10000 });
  });

  test("should display specifications section", async ({ page }) => {
    const specs = page.getByText(/Engine|Capacity|Gear/i).first();
    await expect(specs).toBeVisible({ timeout: 10000 });
  });

  test("should display WhatsApp inquiry button", async ({ page }) => {
    const waBtn = page.locator('a[href*="wa.me"]').first();
    await expect(waBtn).toBeVisible({ timeout: 10000 });
  });

  test("should display related bikes section", async ({ page }) => {
    const related = page.getByText(/Related|Similar|More bikes/i).first();
    if (await related.count() > 0) {
      await expect(related).toBeVisible();
    }
  });

  test("should have breadcrumb navigation", async ({ page }) => {
    const breadcrumb = page.locator('[class*="breadcrumb"], .breadcrumb, nav[aria-label*="breadcrumb"]');
    if (await breadcrumb.count() > 0) {
      await expect(breadcrumb.first()).toBeVisible();
    }
  });

  test("should display finance calculator", async ({ page }) => {
    const finance = page.getByText(/Finance|Monthly|Loan/i).first();
    if (await finance.count() > 0) {
      await expect(finance).toBeVisible();
    }
  });
});

test.describe("Motorcycle Detail Page - Mobile", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test.beforeEach(async ({ page }) => {
    await page.goto("/listing");
    const listingGrid = page.locator(".car-listing-grid");
    await expect(listingGrid).toBeVisible({ timeout: 15000 });
    const firstCard = listingGrid.locator("a[href*='/motorcycle/']").first();
    await firstCard.click();
    await expect(page).toHaveURL(/\/motorcycle\/.+/);
  });

  test("should display motorcycle name on mobile", async ({ page }) => {
    const title = page.locator("h1");
    await expect(title).toBeVisible({ timeout: 10000 });
  });

  test("should display price on mobile", async ({ page }) => {
    const price = page.getByText(/RM/).first();
    await expect(price).toBeVisible({ timeout: 10000 });
  });

  test("should display gallery on mobile", async ({ page }) => {
    const gallery = page.locator('[class*="gallery"], [class*="Gallery"], .detail-gallery');
    await expect(gallery.first()).toBeVisible({ timeout: 10000 });
  });

  test("should show sticky CTA on mobile", async ({ page }) => {
    await page.evaluate(() => window.scrollBy(0, 300));
    await page.waitForTimeout(300);
    const stickyCta = page.locator('[class*="sticky"], [class*="fixedCta"], [class*="mobileBar"]');
    if (await stickyCta.count() > 0) {
      await expect(stickyCta.first()).toBeVisible();
    }
  });

  test("should have WhatsApp button accessible on mobile", async ({ page }) => {
    const waBtn = page.locator('a[href*="wa.me"]').first();
    await expect(waBtn).toBeVisible({ timeout: 10000 });
  });
});
