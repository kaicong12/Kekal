// @ts-check
/**
 * Mock data and route handlers for E2E tests.
 * Intercepts API calls so tests don't require a live database.
 */

const MOCK_MOTORCYCLES = [
  {
    id: "mock_moto_001_cuid25chars",
    brand: "Yamaha",
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
      { id: "mock_img_001a", url: "https://via.placeholder.com/800x600?text=YZF-R15", displayOrder: 0 },
    ],
  },
  {
    id: "mock_moto_002_cuid25chars",
    brand: "Honda",
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
      { id: "mock_img_002a", url: "https://via.placeholder.com/800x600?text=CBR250RR", displayOrder: 0 },
    ],
  },
  {
    id: "mock_moto_003_cuid25chars",
    brand: "Kawasaki",
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
      { id: "mock_img_003a", url: "https://via.placeholder.com/800x600?text=Z900", displayOrder: 0 },
    ],
  },
  {
    id: "mock_moto_004_cuid25chars",
    brand: "KTM",
    name: "Duke 390",
    model: "390 Duke",
    year: "2024",
    price: 32000,
    engine: "Liquid-cooled single",
    engineCapacity: 373,
    gear: "6-speed",
    color: "Orange",
    tags: "naked,beginner",
    description: "Lightweight naked street fighter",
    specification: { weight: "149kg", fuelCapacity: "13.4L", topSpeed: "167km/h" },
    images: [
      { id: "mock_img_004a", url: "https://via.placeholder.com/800x600?text=Duke390", displayOrder: 0 },
    ],
  },
];

const MOCK_BRANDS = ["Honda", "Kawasaki", "KTM", "Yamaha"];

const MOCK_PROMOTIONS = [
  {
    id: "mock_promo_001",
    title: "Year End Sale",
    subtitle: "Up to RM 2000 off",
    description: "Year end clearance on selected models",
    ctaText: "Claim this deal",
    whatsappMessage: "Hi, I'm interested in the Year End Sale",
    isFeatured: true,
    isActive: true,
    startDate: "2024-01-01T00:00:00.000Z",
    endDate: "2027-12-31T00:00:00.000Z",
    displayOrder: 0,
    motorcycleId: "mock_moto_001_cuid25chars",
    motorcycle: MOCK_MOTORCYCLES[0],
  },
];

/**
 * Sets up API route mocking on the given Playwright page.
 * Call in beforeEach or at the start of each test.
 */
async function mockApiRoutes(page) {
  await page.route("**/api/motorcycles/brands", (route) => {
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(MOCK_BRANDS),
    });
  });

  await page.route("**/api/motorcycles?*", (route) => {
    const url = new URL(route.request().url());
    const brand = url.searchParams.get("brand");

    let filtered = MOCK_MOTORCYCLES;
    if (brand) {
      filtered = MOCK_MOTORCYCLES.filter(
        (m) => m.brand.toLowerCase() === brand.toLowerCase()
      );
    }

    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        motorcycles: filtered,
        total: filtered.length,
        page: 1,
        limit: 12,
      }),
    });
  });

  await page.route("**/api/motorcycles", (route) => {
    if (route.request().url().includes("?")) return route.fallback();
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        motorcycles: MOCK_MOTORCYCLES,
        total: MOCK_MOTORCYCLES.length,
        page: 1,
        limit: 12,
      }),
    });
  });

  await page.route("**/api/promotions**", (route) => {
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(MOCK_PROMOTIONS),
    });
  });
}

module.exports = { mockApiRoutes, MOCK_MOTORCYCLES, MOCK_BRANDS, MOCK_PROMOTIONS };
