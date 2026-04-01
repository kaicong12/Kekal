// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("Motorcycle Detail Page", () => {
  test("should navigate to a motorcycle detail page from listing", async ({
    page,
  }) => {
    // Start at the listing page
    await page.goto("/listing");

    // Wait for motorcycle cards to load
    const listingGrid = page.locator(".car-listing-grid");
    await expect(listingGrid).toBeVisible({ timeout: 15000 });

    // Click on the first motorcycle card link
    const firstCard = listingGrid.locator("a[href^='/motorcycle/']").first();
    await expect(firstCard).toBeVisible({ timeout: 15000 });

    const href = await firstCard.getAttribute("href");
    await firstCard.click();

    // Should navigate to a motorcycle detail URL
    await expect(page).toHaveURL(/\/motorcycle\/.+/);
  });

  test("should display motorcycle name on detail page", async ({ page }) => {
    // Navigate via listing to get a real detail page
    await page.goto("/listing");

    const listingGrid = page.locator(".car-listing-grid");
    await expect(listingGrid).toBeVisible({ timeout: 15000 });

    const firstCard = listingGrid.locator("a[href^='/motorcycle/']").first();
    await expect(firstCard).toBeVisible({ timeout: 15000 });
    await firstCard.click();

    await expect(page).toHaveURL(/\/motorcycle\/.+/);

    // The detail page should have an h1 with the motorcycle name
    const title = page.locator("h1.title");
    await expect(title).toBeVisible({ timeout: 10000 });
    await expect(title).not.toBeEmpty();
  });

  test("should display price on detail page", async ({ page }) => {
    await page.goto("/listing");

    const listingGrid = page.locator(".car-listing-grid");
    await expect(listingGrid).toBeVisible({ timeout: 15000 });

    const firstCard = listingGrid.locator("a[href^='/motorcycle/']").first();
    await expect(firstCard).toBeVisible({ timeout: 15000 });
    await firstCard.click();

    await expect(page).toHaveURL(/\/motorcycle\/.+/);

    // Price should be visible (format: RM XXXX)
    const price = page.locator(".price").getByText(/RM/);
    await expect(price).toBeVisible({ timeout: 10000 });
  });

  test("should display Overview section", async ({ page }) => {
    await page.goto("/listing");

    const listingGrid = page.locator(".car-listing-grid");
    await expect(listingGrid).toBeVisible({ timeout: 15000 });

    const firstCard = listingGrid.locator("a[href^='/motorcycle/']").first();
    await expect(firstCard).toBeVisible({ timeout: 15000 });
    await firstCard.click();

    await expect(page).toHaveURL(/\/motorcycle\/.+/);

    const overview = page.getByRole("heading", { name: "Overview" });
    await expect(overview).toBeVisible({ timeout: 10000 });
  });

  test("should display Contact Seller section", async ({ page }) => {
    await page.goto("/listing");

    const listingGrid = page.locator(".car-listing-grid");
    await expect(listingGrid).toBeVisible({ timeout: 15000 });

    const firstCard = listingGrid.locator("a[href^='/motorcycle/']").first();
    await expect(firstCard).toBeVisible({ timeout: 15000 });
    await firstCard.click();

    await expect(page).toHaveURL(/\/motorcycle\/.+/);

    const contactSeller = page.getByRole("heading", {
      name: "Contact Seller",
    });
    await expect(contactSeller).toBeVisible({ timeout: 10000 });
  });

  test("should display Related Best Bikes section", async ({ page }) => {
    await page.goto("/listing");

    const listingGrid = page.locator(".car-listing-grid");
    await expect(listingGrid).toBeVisible({ timeout: 15000 });

    const firstCard = listingGrid.locator("a[href^='/motorcycle/']").first();
    await expect(firstCard).toBeVisible({ timeout: 15000 });
    await firstCard.click();

    await expect(page).toHaveURL(/\/motorcycle\/.+/);

    const relatedBikes = page.getByRole("heading", {
      name: "Related Best Bikes",
    });
    await expect(relatedBikes).toBeVisible({ timeout: 10000 });
  });
});
