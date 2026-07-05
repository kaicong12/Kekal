// @ts-check
const { test, expect } = require("@playwright/test");
const { mockApiRoutes } = require("./mocks");

test.describe("About Us Page - Desktop", () => {
  test.beforeEach(async ({ page }) => {
    await mockApiRoutes(page);
    await page.goto("/about-us");
  });

  test("should load about us page", async ({ page }) => {
    await expect(page).toHaveURL(/\/about-us/);
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();
  });

  test("should display company information", async ({ page }) => {
    const content = page.getByText(/Johor Bahru|motorcycle|Kekal/i).first();
    await expect(content).toBeVisible();
  });

  test("should have header and footer", async ({ page }) => {
    const logo = page.locator('header img[alt="Perniagaan Motor Kekal"]');
    await expect(logo).toBeVisible();
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });
});

test.describe("About Us Page - Mobile", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("should load about us page on mobile", async ({ page }) => {
    await mockApiRoutes(page);
    await page.goto("/about-us");
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();
  });

  test("should show mobile bottom bar", async ({ page }) => {
    await mockApiRoutes(page);
    await page.goto("/about-us");
    const mobileBar = page.locator('.mobile-bar');
    await expect(mobileBar).toBeVisible();
  });

  test("should not have horizontal overflow on mobile", async ({ page }) => {
    await mockApiRoutes(page);
    await page.goto("/about-us");
    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasOverflow).toBeFalsy();
  });
});
