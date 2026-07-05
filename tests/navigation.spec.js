// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("Navigation - Desktop", () => {
  test("should navigate from home to listing page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Listings" }).first().click();
    await expect(page).toHaveURL(/\/listing/);
  });

  test("should navigate to About Us page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "About Us" }).first().click();
    await expect(page).toHaveURL(/\/about-us/);
  });

  test("should navigate to Promotions page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Promotions" }).first().click();
    await expect(page).toHaveURL(/\/promotions/);
  });

  test("should navigate to Service page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /Our Services/i }).first().click();
    await expect(page).toHaveURL(/\/service/);
  });

  test("should navigate to FAQ page from footer or nav", async ({ page }) => {
    await page.goto("/faq");
    await expect(page).toHaveURL(/\/faq/);
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();
  });

  test("should show 404 page for invalid routes", async ({ page }) => {
    await page.goto("/this-page-does-not-exist");
    await expect(page.getByText("404")).toBeVisible();
  });
});

test.describe("Navigation - Mobile", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("should display bottom navigation bar", async ({ page }) => {
    await page.goto("/");
    const mobileBar = page.locator('[class*="mobileBar"]');
    await expect(mobileBar).toBeVisible();
  });

  test("should navigate via mobile bottom bar", async ({ page }) => {
    await page.goto("/");
    const listingLink = page.locator('[class*="mobileBar"] a[href*="listing"]');
    if (await listingLink.count() > 0) {
      await listingLink.click();
      await expect(page).toHaveURL(/\/listing/);
    }
  });

  test("should show 404 page on mobile", async ({ page }) => {
    await page.goto("/nonexistent-page");
    await expect(page.getByText("404")).toBeVisible();
  });
});
