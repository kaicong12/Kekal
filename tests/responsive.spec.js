// @ts-check
const { test, expect } = require("@playwright/test");
const { mockApiRoutes } = require("./mocks");

/**
 * Cross-cutting responsive design tests.
 * Verifies no horizontal overflow and key layout shifts across breakpoints.
 * Pages requiring server-side DB (listing, promotions, motorcycle detail) are excluded.
 */

const PAGES = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
  { name: "About Us", path: "/about-us" },
];

const MOBILE_VIEWPORT = { width: 375, height: 812 };
const TABLET_VIEWPORT = { width: 768, height: 1024 };

test.describe("Responsive - No Horizontal Overflow", () => {
  for (const { name, path } of PAGES) {
    test(`${name} page should not overflow on mobile`, async ({ browser }) => {
      const context = await browser.newContext({ viewport: MOBILE_VIEWPORT });
      const page = await context.newPage();
      await mockApiRoutes(page);
      await page.goto(path);
      await page.waitForTimeout(2000);

      const hasOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      expect(hasOverflow).toBeFalsy();
      await context.close();
    });

    test(`${name} page should not overflow on tablet`, async ({ browser }) => {
      const context = await browser.newContext({ viewport: TABLET_VIEWPORT });
      const page = await context.newPage();
      await mockApiRoutes(page);
      await page.goto(path);
      await page.waitForTimeout(2000);

      const hasOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      expect(hasOverflow).toBeFalsy();
      await context.close();
    });
  }
});

test.describe("Responsive - Mobile Navigation", () => {
  test.use({ viewport: MOBILE_VIEWPORT });

  for (const { name, path } of PAGES) {
    test(`${name} page should show mobile bottom bar`, async ({ page }) => {
      await mockApiRoutes(page);
      await page.goto(path);
      await page.waitForTimeout(1500);
      const mobileBar = page.locator('.mobile-bar');
      await expect(mobileBar).toBeVisible();
    });
  }
});
