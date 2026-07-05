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
