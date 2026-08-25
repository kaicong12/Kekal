// @ts-check
/**
 * Seeds the database with known test data before E2E runs.
 * Run: node tests/seed.js
 * Cleanup: node tests/seed.js --cleanup
 */
require("dotenv").config();
const { PrismaClient } = require("../app/generated/prisma");
const { PrismaPg } = require("@prisma/adapter-pg");

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const TEST_PREFIX = "E2E_TEST_";

const TEST_MOTORCYCLES = [
  {
    id: "e2e_test_moto_001_cuid25",
    brand: `${TEST_PREFIX}Yamaha`,
    name: "YZF-R15",
    model: "YZF-R15 V4",
    year: "2024",
    price: 12500,
    engine: "Liquid-cooled 4-stroke",
    engineCapacity: 155,
    gear: "6-speed",
    color: "Racing Blue",
    tags: "sport,beginner",
    description: "Entry-level sport bike with VVA technology",
    specification: { weight: "142kg", fuelCapacity: "11L", topSpeed: "136km/h" },
    images: [
      { id: "e2e_img_001a", url: "https://via.placeholder.com/800x600?text=YZF-R15", displayOrder: 0 },
    ],
  },
  {
    id: "e2e_test_moto_002_cuid25",
    brand: `${TEST_PREFIX}Honda`,
    name: "CBR250RR",
    model: "CBR250RR ABS",
    year: "2024",
    price: 28800,
    engine: "Liquid-cooled DOHC",
    engineCapacity: 249,
    gear: "6-speed",
    color: "Tri-Color",
    tags: "sport,mid-range",
    description: "Twin-cylinder sport bike with ride-by-wire",
    specification: { weight: "168kg", fuelCapacity: "14.5L", topSpeed: "167km/h" },
    images: [
      { id: "e2e_img_002a", url: "https://via.placeholder.com/800x600?text=CBR250RR", displayOrder: 0 },
    ],
  },
  {
    id: "e2e_test_moto_003_cuid25",
    brand: `${TEST_PREFIX}Kawasaki`,
    name: "Z900",
    model: "Z900 SE",
    year: "2023",
    price: 52000,
    engine: "Liquid-cooled inline-4",
    engineCapacity: 948,
    gear: "6-speed",
    color: "Metallic Spark Black",
    tags: "naked,premium",
    description: "Super naked with electronic rider aids",
    specification: { weight: "212kg", fuelCapacity: "17L", topSpeed: "240km/h" },
    images: [
      { id: "e2e_img_003a", url: "https://via.placeholder.com/800x600?text=Z900", displayOrder: 0 },
    ],
  },
];

const TEST_PROMOTIONS = [
  {
    id: "e2e_test_promo_001_cuid2",
    title: `${TEST_PREFIX}Year End Sale`,
    subtitle: "Up to RM 2000 off",
    description: "Year end clearance on selected models",
    ctaText: "Claim this deal",
    whatsappMessage: "Hi, I'm interested in the Year End Sale",
    isFeatured: true,
    isActive: true,
    startDate: new Date("2024-01-01"),
    endDate: new Date("2027-12-31"),
    displayOrder: 0,
    motorcycleId: "e2e_test_moto_001_cuid25",
  },
];


const TEST_SLUG_PREFIX = "e2e-test-";

const body = (heading, lead) => ({
  type: "doc",
  content: [
    { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: heading }] },
    {
      type: "paragraph",
      content: [
        { type: "text", text: lead + " " },
        { type: "text", marks: [{ type: "bold" }], text: "Yamaha R15" },
        { type: "text", text: " costs RM 12,500 today. " },
        {
          type: "text",
          marks: [{ type: "link", attrs: { href: "/listing" } }],
          text: "See our stock",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Light and nimble" }] }] },
        { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Cheap to service" }] }] },
      ],
    },
  ],
});

// Post 1 is published with en + ms only: the missing zh translation is what the
// "hidden in untranslated locales" assertions rely on.
const TEST_BLOG_POSTS = [
  {
    id: "e2e_test_post_001_cuid2",
    slug: `${TEST_SLUG_PREFIX}yamaha-r15-review`,
    category: "reviews",
    tags: "yamaha,150cc",
    // Local asset: an unreachable external host would hang Playwright's load event.
    coverImageUrl: "/images/no-image.svg",
    status: "PUBLISHED",
    sourceLocale: "en",
    publishedAt: new Date("2026-08-01T02:00:00.000Z"),
    translations: [
      {
        locale: "en",
        title: "Yamaha R15 review: still the sharpest 150",
        excerpt: "Our verdict on the R15 after a week of Johor traffic.",
        body: body("The verdict", "After a week of commuting, the"),
        plainText:
          "The verdict After a week of commuting, the Yamaha R15 costs RM 12,500 today. See our stock Light and nimble Cheap to service",
        metaTitle: "Yamaha R15 Review 2026 | Motor Kekal",
        metaDescription: "Is the Yamaha R15 still worth buying in 2026? Our honest review.",
      },
      {
        locale: "ms",
        title: "Ulasan Yamaha R15: masih 150 paling tajam",
        excerpt: "Pandangan kami tentang R15 selepas seminggu di jalan Johor.",
        body: body("Keputusan kami", "Selepas seminggu berulang-alik, "),
        plainText:
          "Keputusan kami Selepas seminggu berulang-alik, Yamaha R15 costs RM 12,500 today. See our stock Light and nimble Cheap to service",
        metaTitle: "Ulasan Yamaha R15 2026 | Motor Kekal",
        metaDescription: "Adakah Yamaha R15 masih berbaloi pada 2026? Ulasan jujur kami.",
      },
    ],
  },
  // Posts 3 and 4 give the index a grid below the featured card, and give
  // category filtering a post to exclude.
  {
    id: "e2e_test_post_003_cuid2",
    slug: `${TEST_SLUG_PREFIX}cbr250rr-review`,
    category: "reviews",
    tags: "honda,250cc",
    coverImageUrl: "/images/no-image.svg",
    status: "PUBLISHED",
    sourceLocale: "en",
    publishedAt: new Date("2026-07-20T02:00:00.000Z"),
    translations: [
      {
        locale: "en",
        title: "Honda CBR250RR review: the twin-cylinder question",
        excerpt: "Smoother than a 150, but is the price gap justified?",
        body: body("The verdict", "After two weeks on the CBR,"),
        plainText:
          "The verdict After two weeks on the CBR, Yamaha R15 costs RM 12,500 today. See our stock Light and nimble Cheap to service",
        metaTitle: "Honda CBR250RR Review | Motor Kekal",
        metaDescription: "Our honest take on the Honda CBR250RR in 2026.",
      },
    ],
  },
  {
    id: "e2e_test_post_004_cuid2",
    slug: `${TEST_SLUG_PREFIX}chain-maintenance`,
    category: "maintenance",
    tags: "maintenance",
    coverImageUrl: "/images/no-image.svg",
    status: "PUBLISHED",
    sourceLocale: "en",
    publishedAt: new Date("2026-07-10T02:00:00.000Z"),
    translations: [
      {
        locale: "en",
        title: "Chain care: the ten-minute job that saves money",
        excerpt: "Most sprocket replacements we do were avoidable.",
        body: body("The routine", "Every fortnight in the wet season,"),
        plainText:
          "The routine Every fortnight in the wet season, Yamaha R15 costs RM 12,500 today. See our stock Light and nimble Cheap to service",
        metaTitle: "Motorcycle Chain Care | Motor Kekal",
        metaDescription: "How to look after your motorcycle chain and sprockets.",
      },
    ],
  },
  // Three h2s: the minimum PostToc renders for.
  {
    id: "e2e_test_post_005_cuid2",
    slug: `${TEST_SLUG_PREFIX}monsoon-checklist`,
    category: "maintenance",
    tags: "maintenance",
    coverImageUrl: "/images/no-image.svg",
    status: "PUBLISHED",
    sourceLocale: "en",
    publishedAt: new Date("2026-07-05T02:00:00.000Z"),
    translations: [
      {
        locale: "en",
        title: "Monsoon checklist: five things to look at",
        excerpt: "What actually fails on a bike in the wet.",
        body: {
          type: "doc",
          content: [
            { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Tyres first" }] },
            { type: "paragraph", content: [{ type: "text", text: "Tread moves water out from under the contact patch." }] },
            { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Then the brakes" }] },
            { type: "paragraph", content: [{ type: "text", text: "You need the lever to feel predictable." }] },
            { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Lights and battery" }] },
            { type: "paragraph", content: [{ type: "text", text: "Being seen matters more than seeing." }] },
          ],
        },
        plainText:
          "Tyres first Tread moves water out from under the contact patch. Then the brakes You need the lever to feel predictable. Lights and battery Being seen matters more than seeing.",
        metaTitle: "Monsoon Motorcycle Checklist | Motor Kekal",
        metaDescription: "Five wet-season checks for your motorcycle.",
      },
    ],
  },
  {
    id: "e2e_test_post_002_cuid2",
    slug: `${TEST_SLUG_PREFIX}unpublished-draft`,
    category: "news",
    tags: null,
    coverImageUrl: null,
    status: "DRAFT",
    sourceLocale: "en",
    publishedAt: null,
    translations: [
      {
        locale: "en",
        title: "A draft nobody should see",
        excerpt: "This post is not published.",
        body: body("Hidden", "This is a draft and"),
        plainText: "Hidden This is a draft and Yamaha R15 costs RM 12,500 today.",
        metaTitle: null,
        metaDescription: null,
      },
    ],
  },
];

async function seed() {
  console.log("Seeding test data...");

  for (const moto of TEST_MOTORCYCLES) {
    const { images, ...data } = moto;
    await prisma.motorcycle.upsert({
      where: { id: data.id },
      update: data,
      create: {
        ...data,
        images: { create: images },
      },
    });
  }

  // Seed promotions only if table exists
  try {
    for (const promo of TEST_PROMOTIONS) {
      await prisma.promotion.upsert({
        where: { id: promo.id },
        update: promo,
        create: promo,
      });
    }
    console.log(`Seeded ${TEST_MOTORCYCLES.length} motorcycles and ${TEST_PROMOTIONS.length} promotions.`);
  } catch (e) {
    if (e.code === "P2021") {
      console.log(`Seeded ${TEST_MOTORCYCLES.length} motorcycles. (promotions table not available, skipped)`);
    } else {
      throw e;
    }
  }

  try {
    for (const post of TEST_BLOG_POSTS) {
      const { translations, ...data } = post;
      await prisma.blogPost.upsert({
        where: { id: data.id },
        update: data,
        create: data,
      });
      for (const translation of translations) {
        await prisma.blogPostTranslation.upsert({
          where: { postId_locale: { postId: data.id, locale: translation.locale } },
          update: translation,
          create: { ...translation, postId: data.id },
        });
      }
    }
    console.log(`Seeded ${TEST_BLOG_POSTS.length} blog posts.`);
  } catch (e) {
    if (e.code === "P2021") {
      console.log("Blog tables not available, skipped.");
    } else {
      throw e;
    }
  }
}

async function cleanup() {
  console.log("Cleaning up test data...");

  try {
    await prisma.promotion.deleteMany({
      where: { title: { startsWith: TEST_PREFIX } },
    });
  } catch (e) {
    if (e.code !== "P2021") throw e;
  }

  try {
    await prisma.blogPost.deleteMany({
      where: { slug: { startsWith: TEST_SLUG_PREFIX } },
    });
  } catch (e) {
    if (e.code !== "P2021") throw e;
  }

  await prisma.motorcycle.deleteMany({
    where: { brand: { startsWith: TEST_PREFIX } },
  });

  console.log("Cleanup complete.");
}

async function main() {
  try {
    if (process.argv.includes("--cleanup")) {
      await cleanup();
    } else {
      await seed();
    }
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
