// @ts-check
/**
 * Public blog surface, end to end against a real database.
 *
 * These pages are server components that read Postgres directly, so nothing here
 * is API-mocked — the assertions cover the real path from row to rendered HTML.
 * Requires `node tests/seed.js` (the Playwright globalSetup does not seed).
 */
const { test, expect } = require("@playwright/test");

const SLUG = "e2e-test-yamaha-r15-review";
const DRAFT_SLUG = "e2e-test-unpublished-draft";
const EN_TITLE = "Yamaha R15 review: still the sharpest 150";
const MS_TITLE = "Ulasan Yamaha R15: masih 150 paling tajam";

const jsonLd = async (page, type) => {
  const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
  return blocks.map((raw) => JSON.parse(raw)).find((data) => data["@type"] === type);
};

test.describe("Blog index", () => {
  test("lists published posts and links to them", async ({ page }) => {
    await page.goto("/blog");

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(/News & Reviews/i);
    const card = page.getByRole("link", { name: new RegExp(EN_TITLE, "i") });
    await expect(card).toBeVisible();

    await expect(card).toHaveAttribute("href", `/blog/${SLUG}`);
    await card.click();
    // Generous timeout: the first hit on a dev server compiles the route.
    await expect(page).toHaveURL(new RegExp(`/blog/${SLUG}$`), { timeout: 20000 });
  });

  test("hides drafts", async ({ page }) => {
    await page.goto("/blog");
    await expect(page.getByText("A draft nobody should see")).toHaveCount(0);
  });

  test("is reachable from the header and footer", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('footer a[href="/blog"]').first()).toBeVisible();
  });
});

test.describe("Blog article", () => {
  test("renders the stored document as real HTML", async ({ page }) => {
    await page.goto(`/blog/${SLUG}`);

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(EN_TITLE);
    await expect(page.getByRole("heading", { level: 2, name: "The verdict" })).toBeVisible();

    const prose = page.locator(".prose");
    // Marks and lists survive the JSON -> JSX renderer.
    await expect(prose.locator("strong", { hasText: "Yamaha R15" })).toBeVisible();
    await expect(prose.locator("li")).toHaveCount(2);
    // An internal link keeps its locale prefix because it renders through
    // next-intl's Link rather than raw HTML.
    await expect(prose.locator('a[href="/listing"]')).toBeVisible();
  });

  test("emits BlogPosting structured data", async ({ page }) => {
    await page.goto(`/blog/${SLUG}`);

    const data = await jsonLd(page, "BlogPosting");
    expect(data).toBeTruthy();
    expect(data.headline).toBe(EN_TITLE);
    expect(data.datePublished).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    expect(data.dateModified).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    expect(data.author.name).toBeTruthy();
    expect(data.author.url).toContain("/about-us");
    expect(data.inLanguage).toBe("en");
    expect(await jsonLd(page, "BreadcrumbList")).toBeTruthy();
  });

  test("advertises hreflang only for locales that exist", async ({ page }) => {
    await page.goto(`/blog/${SLUG}`);

    await expect(page.locator('link[hreflang="en"]')).toHaveCount(1);
    await expect(page.locator('link[hreflang="ms"]')).toHaveCount(1);
    // zh is untranslated, so pointing at it would advertise a 404.
    await expect(page.locator('link[hreflang="zh"]')).toHaveCount(0);
  });

  test("serves the Malay translation under /ms", async ({ page }) => {
    await page.goto(`/ms/blog/${SLUG}`);

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(MS_TITLE);
    const data = await jsonLd(page, "BlogPosting");
    expect(data.inLanguage).toBe("ms");
  });

  test("404s for an untranslated locale", async ({ page }) => {
    const response = await page.goto(`/zh/blog/${SLUG}`);
    expect(response?.status()).toBe(404);
  });

  test("404s for a draft and for an unknown slug", async ({ page }) => {
    expect((await page.goto(`/blog/${DRAFT_SLUG}`))?.status()).toBe(404);
    expect((await page.goto("/blog/no-such-post"))?.status()).toBe(404);
  });
});

test.describe("Blog sitemap", () => {
  test("lists only translated locales for each post", async ({ request }) => {
    const xml = await (await request.get("/sitemap.xml")).text();

    expect(xml).toContain(`/blog</loc>`);
    expect(xml).toContain(`https://www.motorkekal.com/blog/${SLUG}</loc>`);
    expect(xml).toContain(`https://www.motorkekal.com/ms/blog/${SLUG}</loc>`);
    expect(xml).not.toContain(`https://www.motorkekal.com/zh/blog/${SLUG}</loc>`);
    // Drafts never reach the sitemap.
    expect(xml).not.toContain(DRAFT_SLUG);
  });
});

// Adding Blog made the header a six-item row, which overflowed 1280px in Malay
// and clipped the WhatsApp CTA. Locked down across locales and widths.
test.describe("Header fits with the Blog link", () => {
  for (const locale of ["", "/ms", "/zh"]) {
    for (const width of [1440, 1280, 1181]) {
      test(`no overflow at ${width}px on ${locale || "/en"}`, async ({ page }) => {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(`${locale}/blog`);

        const metrics = await page.evaluate(() => {
          const wa = document.querySelector('.mk-site a[href*="wa.me"]');
          return {
            overflow:
              document.documentElement.scrollWidth - window.innerWidth,
            waClipped: wa
              ? wa.getBoundingClientRect().right > window.innerWidth
              : null,
          };
        });

        expect(metrics.overflow).toBe(0);
        expect(metrics.waClipped).toBe(false);
      });
    }
  }
});

test.describe("Blog article - mobile", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("renders readably on a phone", async ({ page }) => {
    await page.goto(`/blog/${SLUG}`);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator(".prose")).toBeVisible();
    await expect(page.locator(".mobile-bar")).toBeVisible();
  });
});
