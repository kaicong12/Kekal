// @ts-check
const { test, expect } = require("@playwright/test");

/**
 * Cross-cutting responsive design tests.
 * Verifies no horizontal overflow and key layout shifts across breakpoints.
 */

const PAGES = [
  { name: "Home", path: "/" },
  { name: "Listing", path: "/listing" },
  { name: "FAQ", path: "/faq" },
  { name: "About Us", path: "/about-us" },
  { name: "Promotions", path: "/promotions" },
];

const MOBILE_VIEWPORT = { width: 375, height: 812 };
const TABLET_VIEWPORT = { width: 768, height: 1024 };

test.describe("Responsive - No Horizontal Overflow", () => {
  for (const { name, path } of PAGES) {
    test(`${name} page should not overflow on mobile`, async ({ browser }) => {
      const context = await browser.newContext({ viewport: MOBILE_VIEWPORT });
      const page = await context.newPage();
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
      await page.goto(path);
      await page.waitForTimeout(1500);
      const mobileBar = page.locator('[class*="mobileBar"]');
      await expect(mobileBar).toBeVisible();
    });
  }
});

test.describe("Responsive - Images load without layout shift", () => {
  test.use({ viewport: MOBILE_VIEWPORT });

  test("listing page images should have explicit dimensions", async ({ page }) => {
    await page.goto("/listing");
    await page.waitForSelector(".car-listing-grid", { timeout: 15000 });

    const images = page.locator(".car-listing-grid img");
    const count = await images.count();

    for (let i = 0; i < Math.min(count, 5); i++) {
      const img = images.nth(i);
      const width = await img.getAttribute("width");
      const height = await img.getAttribute("height");
      const style = await img.getAttribute("style");

      // Either explicit dimensions or CSS that prevents CLS
      const hasDimensions = width || height || (style && style.includes("aspect-ratio"));
      // Next/Image wraps in a span that controls size, so this is acceptable
      const isWrapped = await img.evaluate((el) => {
        const parent = el.parentElement;
        return parent && (parent.style.width || parent.style.paddingBottom || parent.dataset.nimg);
      });

      expect(hasDimensions || isWrapped).toBeTruthy();
    }
  });
});

test.describe("Responsive - Touch targets", () => {
  test.use({ viewport: MOBILE_VIEWPORT });

  test("listing cards should be easily tappable", async ({ page }) => {
    await page.goto("/listing");
    await page.waitForSelector(".car-listing-grid", { timeout: 15000 });

    const firstCard = page.locator(".car-listing-grid a[href*='/motorcycle/']").first();
    const box = await firstCard.boundingBox();

    if (box) {
      // Minimum touch target: 44x44px (WCAG)
      expect(box.height).toBeGreaterThanOrEqual(44);
    }
  });
});
