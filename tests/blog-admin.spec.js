// @ts-check
/**
 * Admin blog authoring flow: create -> translate -> publish.
 *
 * The API is mocked here (the routes need a real Firebase JWT that a browser
 * test cannot mint); the real Gemini round-trip is covered by
 * tests/blogTranslate.test.mjs. Requires the dev server to run with
 * NEXT_PUBLIC_E2E_AUTH_MOCK=1 so AuthProvider honours the injected mock user.
 */
const { test, expect } = require("@playwright/test");
const { mockAdminAuth } = require("./auth-mock");

const POST_ID = "e2e_admin_post_1";

const enBody = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [
        { type: "text", text: "The " },
        { type: "text", marks: [{ type: "bold" }], text: "Yamaha R15" },
        { type: "text", text: " is quick." },
      ],
    },
  ],
};

const msBody = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [
        { type: "text", text: "Sebuah " },
        { type: "text", marks: [{ type: "bold" }], text: "Yamaha R15" },
        { type: "text", text: " memang laju." },
      ],
    },
  ],
};

const post = {
  id: POST_ID,
  slug: "yamaha-r15-review",
  category: "reviews",
  tags: ["yamaha"],
  coverImageUrl: null,
  status: "DRAFT",
  sourceLocale: "en",
  publishedAt: null,
  createdAt: "2026-08-01T00:00:00.000Z",
  updatedAt: "2026-08-01T00:00:00.000Z",
  availableLocales: ["en"],
  translations: {
    en: {
      locale: "en",
      title: "Yamaha R15 review",
      excerpt: "Our verdict on the R15.",
      body: enBody,
      metaTitle: "Yamaha R15 Review | Motor Kekal",
      metaDescription: "Is the R15 worth it?",
      updatedAt: "2026-08-01T00:00:00.000Z",
    },
  },
};

/** Records what the form actually sent so assertions can inspect it. */
async function mockBlogApi(page, sink) {
  // Seeded fixtures point at a placeholder host that is not reachable in CI.
  await page.route(/via\.placeholder\.com/, (route) => route.abort());

  await page.route("**/api/blog-posts**", async (route) => {
    const request = route.request();
    const url = request.url();
    const method = request.method();

    if (url.includes("/translate")) {
      sink.translateCalls.push(request.postDataJSON());
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          translations: {
            ms: {
              title: "Ulasan Yamaha R15",
              excerpt: "Pandangan kami tentang R15.",
              metaTitle: "Ulasan Yamaha R15 | Motor Kekal",
              metaDescription: "Adakah R15 berbaloi?",
              body: msBody,
            },
          },
          warnings: [],
        }),
      });
      return;
    }

    if (method === "PUT") {
      sink.puts.push(request.postDataJSON());
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(post),
      });
      return;
    }

    if (method === "POST") {
      sink.posts.push(request.postDataJSON());
      await route.fulfill({
        status: 201,
        contentType: "application/json",
        body: JSON.stringify(post),
      });
      return;
    }

    if (url.includes("all=true")) {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ posts: [post] }),
      });
      return;
    }

    // Single post fetch for the edit form.
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(post),
    });
  });
}

const openBlogSection = async (page) => {
  await page.goto("/admin", { waitUntil: "domcontentloaded" });
  await page.getByRole("button", { name: /Blog/ }).first().click();
  await expect(page.getByRole("heading", { level: 1, name: "Blog" })).toBeVisible();
};

test.describe("Admin blog", () => {
  /** @type {{translateCalls: any[], puts: any[], posts: any[]}} */
  let sink;

  test.beforeEach(async ({ page }) => {
    sink = { translateCalls: [], puts: [], posts: [] };
    await mockAdminAuth(page);
    await mockBlogApi(page, sink);
  });

  test("reaches the dashboard and lists posts with locale chips", async ({ page, viewport }) => {
    test.skip((viewport?.width ?? 0) < 900, "desktop table only; mobile uses cards");
    await openBlogSection(page);

    await expect(page.getByText("Yamaha R15 review").first()).toBeVisible();
    await expect(page.getByText("/blog/yamaha-r15-review")).toBeVisible();
    // EN exists, MS and ZH do not.
    await expect(page.getByTitle("EN: complete")).toBeVisible();
    await expect(page.getByTitle("MS: missing")).toBeVisible();
    await expect(page.getByTitle("ZH: missing")).toBeVisible();
  });

  test("auto-generates a slug from the title on a new post", async ({ page }) => {
    await openBlogSection(page);
    await page.getByRole("button", { name: /New post/i }).click();

    await page.getByLabel("Title", { exact: true }).fill("2026 Honda RS-X First Ride!");
    await expect(page.getByLabel("URL slug", { exact: true })).toHaveValue("2026-honda-rs-x-first-ride");

    // Manual edits win from then on.
    await page.getByLabel("URL slug", { exact: true }).fill("honda-rsx-review");
    await page.getByLabel("Title", { exact: true }).fill("A completely different title");
    await expect(page.getByLabel("URL slug", { exact: true })).toHaveValue("honda-rsx-review");
  });

  test("loads a post, translates it, and saves both locales", async ({ page }) => {
    await openBlogSection(page);
    await page.getByText("Yamaha R15 review").first().click();

    // Source locale hydrates.
    await expect(page.getByLabel("Title", { exact: true })).toHaveValue("Yamaha R15 review");
    await expect(page.getByLabel("Excerpt", { exact: true })).toHaveValue("Our verdict on the R15.");
    await expect(page.locator(".ProseMirror")).toContainText("Yamaha R15 is quick.");

    // The Malay tab starts empty.
    await page.getByRole("button", { name: "Bahasa Malaysia" }).click();
    await expect(page.getByLabel("Title", { exact: true })).toHaveValue("");

    await page.getByRole("button", { name: /Translate/ }).first().click();

    // Filled from the translate response, and switched to that locale.
    await expect(page.getByLabel("Title", { exact: true })).toHaveValue("Ulasan Yamaha R15", {
      timeout: 15000,
    });
    await expect(page.getByLabel("Excerpt", { exact: true })).toHaveValue("Pandangan kami tentang R15.");
    await expect(page.locator(".ProseMirror")).toContainText("Yamaha R15 memang laju.");

    expect(sink.translateCalls).toHaveLength(1);
    expect(sink.translateCalls[0]).toMatchObject({
      sourceLocale: "en",
      targetLocales: ["ms"],
    });

    // Publish and save.
    await page.getByText("Live on the site").click();
    await page.getByRole("button", { name: /Save changes/i }).click();

    await expect.poll(() => sink.puts.length, { timeout: 15000 }).toBe(1);
    const body = sink.puts[0];
    expect(body.status).toBe("PUBLISHED");
    expect(body.sourceLocale).toBe("en");
    expect(Object.keys(body.translations).sort()).toEqual(["en", "ms"]);
    expect(body.translations.ms.title).toBe("Ulasan Yamaha R15");
    // The Malay body kept its bold mark through the whole round trip.
    expect(JSON.stringify(body.translations.ms.body)).toContain('"bold"');
    // zh was never touched, so it stays absent and the post stays hidden there.
    expect(body.translations.zh).toBeUndefined();
  });

  test("shows a live SERP preview driven by the meta fields", async ({ page }) => {
    await openBlogSection(page);
    await page.getByText("Yamaha R15 review").first().click();

    await expect(page.getByText("Yamaha R15 Review | Motor Kekal")).toBeVisible();
    await page.getByLabel("Meta title", { exact: true }).fill("A brand new meta title");
    await expect(page.getByText("A brand new meta title")).toBeVisible();
  });
});

test.describe("Admin blog - mobile", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("uses cards instead of a horizontal-scroll table", async ({ page }) => {
    const sink = { translateCalls: [], puts: [], posts: [] };
    await mockAdminAuth(page);
    await mockBlogApi(page, sink);

    await page.goto("/admin", { waitUntil: "domcontentloaded" });
    await page.getByRole("button", { name: /Blog/ }).first().click();

    await expect(page.getByText("Yamaha R15 review").first()).toBeVisible();
    await expect(page.locator("table")).toHaveCount(0);
  });
});
