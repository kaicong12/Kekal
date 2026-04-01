// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should load the home page", async ({ page }) => {
    await expect(page).toHaveTitle(/Perniagaan Motor Kekal/);
  });

  test("should display the site logo", async ({ page }) => {
    const logo = page.locator('img[alt="Perniagaan Motor Kekal logo"]');
    await expect(logo).toBeVisible();
  });

  test("should display navigation links", async ({ page }) => {
    const nav = page.locator("nav");
    await expect(nav).toBeVisible();

    // Check main nav links exist
    await expect(page.getByRole("link", { name: "Listing" })).toBeVisible();
    await expect(page.getByRole("link", { name: "About Us" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Contact" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Service" })).toBeVisible();
  });

  test("should display the 'Why Choose Us' section", async ({ page }) => {
    const section = page.getByRole("heading", { name: "Why Choose Us?" });
    await expect(section).toBeVisible();
  });

  test("should display the 'Featured Listings' section", async ({ page }) => {
    const section = page.getByRole("heading", { name: "Featured Listings" });
    await expect(section).toBeVisible();
  });

  test("should display the 'Our Testimonials' section", async ({ page }) => {
    const section = page.getByRole("heading", { name: "Our Testimonials" });
    await expect(section).toBeVisible();
  });

  test("should have a 'Show All Motorcycles' link pointing to /listing", async ({
    page,
  }) => {
    const link = page.getByRole("link", { name: /Show All Motorcycles/ });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("href", "/listing");
  });

  test("should have a footer", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });
});
