// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("Promotions Page - Desktop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/promotions");
  });

  test("should load promotions page", async ({ page }) => {
    await expect(page).toHaveURL(/\/promotions/);
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();
  });

  test("should display promotion cards if any exist", async ({ page }) => {
    await page.waitForTimeout(2000);
    const promos = page.locator('[class*="promo"], [class*="Promo"], [class*="card"]');
    if (await promos.count() > 0) {
      await expect(promos.first()).toBeVisible();
    }
  });

  test("should have header and footer", async ({ page }) => {
    const logo = page.locator('img[alt="Perniagaan Motor Kekal logo"]');
    await expect(logo).toBeVisible();
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });
});

test.describe("Promotions Page - Mobile", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("should load promotions on mobile", async ({ page }) => {
    await page.goto("/promotions");
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();
  });

  test("should show mobile bar on promotions page", async ({ page }) => {
    await page.goto("/promotions");
    const mobileBar = page.locator('[class*="mobileBar"]');
    await expect(mobileBar).toBeVisible();
  });
});
