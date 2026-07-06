// @ts-check
const { test, expect } = require("@playwright/test");
const { mockApiRoutes } = require("./mocks");

test.describe("FAQ Page - Desktop", () => {
  test.beforeEach(async ({ page }) => {
    await mockApiRoutes(page);
    await page.goto("/faq");
  });

  test("should load FAQ page with heading", async ({ page }) => {
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();
  });

  test("should display category tabs", async ({ page }) => {
    const tabs = page.locator("button").filter({ hasText: /Financing|Delivery|Warranty/i });
    await expect(tabs.first()).toBeVisible();
    const count = await tabs.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test("should switch categories when tab is clicked", async ({ page }) => {
    const deliveryTab = page.locator("button").filter({ hasText: /Delivery/i });
    await deliveryTab.click();
    await page.waitForTimeout(300);
    // Questions should change
    const questions = page.locator('[class*="accordion"] button, [class*="Accordion"] button');
    await expect(questions.first()).toBeVisible();
  });

  test("should expand/collapse FAQ answers", async ({ page }) => {
    // The first item is already open by default, so click the second one to expand it
    const secondQuestion = page.locator('[class*="accordionHeader"], [class*="accordion"] button').nth(1);
    await expect(secondQuestion).toBeVisible();
    await secondQuestion.click();
    await page.waitForTimeout(300);
    const answer = page.locator('[class*="accordionBody"], [class*="answer"]').first();
    await expect(answer).toBeVisible();
  });

  test("should show WhatsApp CTA at bottom", async ({ page }) => {
    const waLink = page.locator('a[href*="wa.me"]');
    await expect(waLink.first()).toBeVisible();
  });

  test("should have header and footer", async ({ page }) => {
    const logo = page.locator('header a[aria-label="Perniagaan Motor Kekal"]');
    await expect(logo).toBeVisible();
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });
});

test.describe("FAQ Page - Mobile", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("should display FAQ page correctly on mobile", async ({ page }) => {
    await mockApiRoutes(page);
    await page.goto("/faq");
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();
  });

  test("should be able to interact with accordion on mobile", async ({ page }) => {
    await mockApiRoutes(page);
    await page.goto("/faq");
    // The first item is already open by default, so click the second one to expand it
    const secondQuestion = page.locator('[class*="accordionHeader"], [class*="accordion"] button').nth(1);
    await expect(secondQuestion).toBeVisible();
    await secondQuestion.click();
    await page.waitForTimeout(300);
    const answer = page.locator('[class*="accordionBody"], [class*="answer"]').first();
    await expect(answer).toBeVisible();
  });

  test("should show mobile bottom bar", async ({ page }) => {
    await mockApiRoutes(page);
    await page.goto("/faq");
    const mobileBar = page.locator('.mobile-bar');
    await expect(mobileBar).toBeVisible();
  });
});
