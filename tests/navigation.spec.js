// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("Navigation", () => {
  test("should navigate from home to listing page via nav link", async ({
    page,
  }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Listing" }).first().click();
    await expect(page).toHaveURL("/listing");
    await expect(
      page.getByRole("heading", { name: "Motorcycles For Sale" })
    ).toBeVisible();
  });

  test("should navigate from home to listing via 'Show All Motorcycles' link", async ({
    page,
  }) => {
    await page.goto("/");
    await page
      .getByRole("link", { name: /Show All Motorcycles/ })
      .first()
      .click();
    await expect(page).toHaveURL("/listing");
  });

  test("should navigate to About Us page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "About Us" }).first().click();
    await expect(page).toHaveURL("/about-us");
  });

  test("should navigate to Contact page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Contact" }).first().click();
    await expect(page).toHaveURL("/contact");
  });

  test("should navigate to Service page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Service" }).first().click();
    await expect(page).toHaveURL("/service");
  });

  test("should navigate back to home from listing page via logo", async ({
    page,
  }) => {
    await page.goto("/listing");
    // Click the logo which links to home
    const logo = page.locator('a[href="/"]').first();
    await logo.click();
    await expect(page).toHaveURL("/");
  });

  test("should navigate back to home from listing breadcrumb", async ({
    page,
  }) => {
    await page.goto("/listing");
    const homeBreadcrumb = page.locator('.breadcrumb a[href="/"]');
    await expect(homeBreadcrumb).toBeVisible();
    await homeBreadcrumb.click();
    await expect(page).toHaveURL("/");
  });
});
