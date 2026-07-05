// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should load with correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/Perniagaan Motor Kekal/);
  });

  test("should display site header with logo", async ({ page }) => {
    const logo = page.locator('img[alt="Perniagaan Motor Kekal logo"]');
    await expect(logo).toBeVisible();
  });

  test("should display hero section with CTA", async ({ page }) => {
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();

    const ctaLink = page.getByRole("link", { name: /View Motorcycles/i });
    await expect(ctaLink).toBeVisible();
  });

  test("should display popular motorcycles section", async ({ page }) => {
    const section = page.getByText(/Popular motorcycles/i);
    await expect(section).toBeVisible();
  });

  test("should display trust signals section", async ({ page }) => {
    const section = page.getByText(/The Motor Kekal way/i);
    await expect(section).toBeVisible();
  });

  test("should display testimonials section", async ({ page }) => {
    const section = page.getByText(/Trusted by Johor Bahru/i);
    await expect(section).toBeVisible();
  });

  test("should display footer with business info", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    await expect(footer.getByText("Perniagaan Motor Kekal")).toBeVisible();
  });

  test("should have WhatsApp CTA link", async ({ page }) => {
    const waLink = page.locator('a[href*="wa.me"]').first();
    await expect(waLink).toBeVisible();
  });

  test("should display brand filter tabs", async ({ page }) => {
    const yamaha = page.getByText("Yamaha");
    await expect(yamaha.first()).toBeVisible();
  });
});

test.describe("Home Page - Mobile", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should show mobile navigation bar at bottom", async ({ page }) => {
    const mobileBar = page.locator('[class*="mobileBar"]');
    await expect(mobileBar).toBeVisible();
  });

  test("should hide desktop navigation links", async ({ page }) => {
    const desktopNav = page.locator('[class*="navList"]');
    if (await desktopNav.count() > 0) {
      await expect(desktopNav).not.toBeVisible();
    }
  });

  test("should display hero section fully", async ({ page }) => {
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();
    const ctaLink = page.getByRole("link", { name: /View Motorcycles/i });
    await expect(ctaLink).toBeVisible();
  });

  test("should display sticky WhatsApp CTA on mobile", async ({ page }) => {
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.waitForTimeout(300);
    const stickyCta = page.locator('[class*="mobileBar"]');
    await expect(stickyCta).toBeVisible();
  });
});
