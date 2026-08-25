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
const CBR_TITLE = "Honda CBR250RR review: the twin-cylinder question";
const CHAIN_TITLE = "Chain care: the ten-minute job that saves money";

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

  test("leads with the newest post as a featured card", async ({ page }) => {
    await page.goto("/blog");

    const featured = page.locator(".post-featured");
    await expect(featured).toHaveCount(1);
    const title = await featured.locator(".post-featured__title").innerText();

    await expect(page.locator(".post-grid").getByText(title)).toHaveCount(0);
    await expect(page.locator(".post-grid .post-card")).not.toHaveCount(0);
  });

  test("offers every category as a crawlable link", async ({ page }) => {
    await page.goto("/blog");

    const nav = page.locator(".post-catnav");
    for (const [label, href] of [
      ["All posts", "/blog"],
      ["Reviews", "/blog/category/reviews"],
      ["News", "/blog/category/news"],
      ["Buying guides", "/blog/category/buying-guides"],
      ["Maintenance", "/blog/category/maintenance"],
    ]) {
      await expect(nav.getByRole("link", { name: label })).toHaveAttribute(
        "href",
        href
      );
    }
  });

  test("links through to the shop's stock", async ({ page }) => {
    await page.goto("/blog");
    await expect(page.locator(".post-stock .bike-grid")).toBeVisible();
    await expect(
      page.locator('.post-stock a[href="/listing"]').first()
    ).toBeVisible();
  });
});

test.describe("Blog category pages", () => {
  test("shows only that category's posts", async ({ page }) => {
    await page.goto("/blog/category/reviews");

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      /Motorcycle Reviews/i
    );
    await expect(page.getByText(EN_TITLE)).not.toHaveCount(0);
    await expect(page.getByText(CBR_TITLE)).not.toHaveCount(0);
    // A maintenance post must not leak into the reviews hub.
    await expect(page.getByText(CHAIN_TITLE)).toHaveCount(0);
  });

  test("marks the current category as active", async ({ page }) => {
    await page.goto("/blog/category/maintenance");

    const nav = page.locator(".post-catnav");
    await expect(nav.getByRole("link", { name: "Maintenance" })).toHaveClass(
      /chip--on/
    );
    await expect(nav.getByRole("link", { name: "All posts" })).not.toHaveClass(
      /chip--on/
    );
    await expect(page.getByText(CHAIN_TITLE)).not.toHaveCount(0);
    await expect(page.getByText(EN_TITLE)).toHaveCount(0);
  });

  test("carries its own metadata and hreflang", async ({ page }) => {
    await page.goto("/blog/category/news");

    await expect(page).toHaveTitle(/Motorcycle News Malaysia/i);
    // Unlike posts, category hubs exist in all three locales.
    for (const locale of ["en", "ms", "zh"]) {
      await expect(page.locator(`link[hreflang="${locale}"]`)).toHaveCount(1);
    }
  });

  test("is reachable in Malay", async ({ page }) => {
    await page.goto("/ms/blog/category/reviews");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      /Ulasan Motosikal/i
    );
  });

  test("404s for a category that does not exist", async ({ page }) => {
    const response = await page.goto("/blog/category/tyres");
    expect(response?.status()).toBe(404);
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

  test("does not dead-end: related posts, stock and a way back", async ({
    page,
  }) => {
    await page.goto(`/blog/${SLUG}`);

    const related = page.locator(".post-related .post-card");
    await expect(related).not.toHaveCount(0);
    await expect(page.locator(".post-related")).toContainText(CBR_TITLE);
    await expect(page.locator(".post-related")).not.toContainText(EN_TITLE);

    await expect(page.locator(".post-stock .bike-grid")).toBeVisible();
    await expect(page.locator('.post-back a[href="/blog"]')).toBeVisible();
  });

  test("prefills a WhatsApp message naming the article", async ({ page }) => {
    await page.goto(`/blog/${SLUG}`);

    const cta = page.locator('.post-cta a[href*="wa.me"]');
    await expect(cta).toBeVisible();
    const href = await cta.getAttribute("href");
    expect(decodeURIComponent(href || "")).toContain(EN_TITLE);
  });

  test("links its category in the breadcrumb and the header chip", async ({
    page,
  }) => {
    await page.goto(`/blog/${SLUG}`);

    await expect(
      page.locator('nav[aria-label="Breadcrumb"] a[href="/blog/category/reviews"]')
    ).toBeVisible();
    await expect(
      page.locator('.post-head a[href="/blog/category/reviews"]')
    ).toBeVisible();

    const data = await jsonLd(page, "BreadcrumbList");
    const names = data.itemListElement.map((item) => item.name);
    expect(names).toContain("Reviews");
  });

  test("credits the shop rather than dropping the reader", async ({ page }) => {
    await page.goto(`/blog/${SLUG}`);
    await expect(page.locator(".post-about")).toContainText("Motor Kekal");
    await expect(
      page.locator('.post-about a[href="/about-us"]')
    ).toBeVisible();
  });
});

test.describe("Blog article - desktop sidebar", () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  const TOC_SLUG = "e2e-test-monsoon-checklist";

  test("moves the CTA into a sticky rail beside the prose", async ({ page }) => {
    await page.goto(`/blog/${SLUG}`);

    const prose = await page.locator(".prose").boundingBox();
    const cta = await page.locator(".post-cta").boundingBox();
    expect(cta.x).toBeGreaterThan(prose.x + prose.width);

    await expect(page.locator(".post-body__side")).toHaveCSS(
      "position",
      "sticky"
    );
  });

  test("keeps the prose at its reading measure", async ({ page }) => {
    await page.goto(`/blog/${SLUG}`);

    const prose = await page.locator(".prose").boundingBox();
    const wrap = await page.locator("article.section").boundingBox();
    expect(prose.width).toBeLessThan(wrap.width * 0.75);
  });

  test("table of contents links resolve to real headings", async ({ page }) => {
    await page.goto(`/blog/${TOC_SLUG}`);

    const toc = page.locator(".post-toc");
    await expect(toc).toBeVisible();

    const hrefs = await toc.locator("a").evaluateAll((els) =>
      els.map((el) => el.getAttribute("href"))
    );
    expect(hrefs.length).toBe(3);
    for (const href of hrefs) {
      await expect(page.locator(`.prose ${href}`)).toHaveCount(1);
    }
  });

  test("an anchor jump lands clear of the sticky header", async ({ page }) => {
    await page.goto(`/blog/${TOC_SLUG}`);
    await page.locator(".post-toc a").first().click();

    const clears = await page.evaluate(() => {
      const heading = document.querySelector(
        `.prose ${location.hash}`
      );
      const header = document.querySelector(".site-header");
      return (
        heading.getBoundingClientRect().top >=
        header.getBoundingClientRect().bottom
      );
    });
    expect(clears).toBe(true);
  });

  test("hides the table of contents when there is little to index", async ({
    page,
  }) => {
    await page.goto(`/blog/${SLUG}`);
    await expect(page.locator(".post-toc")).toHaveCount(0);
  });
});

// Mobile must render as the plain single-column article it was before the rail.
test.describe("Blog article - mobile ignores the sidebar", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("stays a single column with no rail and no contents list", async ({
    page,
  }) => {
    await page.goto("/blog/e2e-test-monsoon-checklist");

    await expect(page.locator(".post-body")).toHaveCSS("display", "block");
    await expect(page.locator(".post-body__side")).toHaveCSS(
      "position",
      "static"
    );
    await expect(page.locator(".post-toc")).toBeHidden();
  });

  test("keeps the CTA below the article, not beside it", async ({ page }) => {
    await page.goto(`/blog/${SLUG}`);

    const prose = await page.locator(".prose").boundingBox();
    const cta = await page.locator(".post-cta").boundingBox();
    expect(cta.y).toBeGreaterThan(prose.y + prose.height);
    expect(Math.round(cta.x)).toBe(Math.round(prose.x));
  });

  test("does not overflow sideways", async ({ page }) => {
    await page.goto(`/blog/${SLUG}`);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth
    );
    expect(overflow).toBe(0);
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

  test("lists every category hub in every locale", async ({ request }) => {
    const xml = await (await request.get("/sitemap.xml")).text();

    for (const category of ["reviews", "news", "buying-guides", "maintenance"]) {
      for (const prefix of ["", "/ms", "/zh"]) {
        expect(xml).toContain(
          `https://www.motorkekal.com${prefix}/blog/category/${category}</loc>`
        );
      }
    }
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
