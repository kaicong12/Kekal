// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("Listing Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/listing");
  });

  test("should load the listing page", async ({ page }) => {
    const heading = page.getByRole("heading", {
      name: "Motorcycles For Sale",
    });
    await expect(heading).toBeVisible();
  });

  test("should display breadcrumb navigation", async ({ page }) => {
    const breadcrumb = page.locator(".breadcrumb");
    await expect(breadcrumb).toBeVisible();

    // Breadcrumb should contain Home and Listing
    await expect(breadcrumb.getByText("Home")).toBeVisible();
    await expect(breadcrumb.getByText("Listing")).toBeVisible();
  });

  test("should show a motorcycle count", async ({ page }) => {
    // Wait for the motorcycle data to load (the count appears after API call)
    const countText = page.getByText(/motorcycles for you/i);
    await expect(countText).toBeVisible({ timeout: 15000 });
  });

  test("should display motorcycle cards after loading", async ({ page }) => {
    // Wait for the listing grid to appear (loading spinner should disappear)
    const listingGrid = page.locator(".car-listing-grid");
    await expect(listingGrid).toBeVisible({ timeout: 15000 });

    // There should be at least one motorcycle card link
    const cards = listingGrid.locator("a[href^='/motorcycle/']");
    await expect(cards.first()).toBeVisible({ timeout: 15000 });
  });

  test("should have a header with navigation", async ({ page }) => {
    await expect(page.getByRole("link", { name: "Listing" })).toBeVisible();
  });

  test("should have a footer", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });
});
