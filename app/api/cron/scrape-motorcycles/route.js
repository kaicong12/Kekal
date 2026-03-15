import { NextResponse } from "next/server";
import * as cheerio from "cheerio";
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import prisma from "@/utils/prisma";

export const maxDuration = 300;
export const dynamic = "force-dynamic";

const BASE_URL =
  "https://www.motomalaysia.com/category/new-motorcycle-bike-price-list-malaysia/";
const DELAY_MS = 1000;

function getFirestoreAdmin() {
  if (getApps().length === 0) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    initializeApp({ credential: cert(serviceAccount) });
  }
  return getFirestore();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchPage(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return cheerio.load(await res.text());
}

function parseTitleParts(title) {
  const yearMatch = title.match(/\((\d{4})\)/);
  const year = yearMatch ? yearMatch[1] : "";
  const withoutYear = title.replace(/\s*\(\d{4}\)\s*$/, "").trim();
  const parts = withoutYear.split(" ");
  const brand = parts[0];
  const name = parts.slice(1).join(" ");
  return { brand, name, year };
}

function parsePrice(priceStr) {
  const cleaned = priceStr.replace(/[^0-9.]/g, "");
  return parseFloat(cleaned) || 0;
}

function parseCC(ccStr) {
  const num = parseFloat(ccStr);
  return isNaN(num) ? 0 : Math.round(num);
}

function extractListingData($, article) {
  const el = $(article);
  const titleLink = el.find("h2 a");
  const title = titleLink.text().trim();
  const detailUrl = titleLink.attr("href") || "";

  const specs = {};
  el.find("div")
    .filter(function () {
      return $(this).children("div").length === 1 && $(this).children().length === 1;
    })
    .each(function () {
      const label = $(this).children("div").first().text().trim();
      const fullText = $(this).text().trim();
      const value = fullText.replace(label, "").trim();
      if (label && value && label !== value) {
        specs[label] = value;
      }
    });

  let priceText = "";
  for (const [key, value] of Object.entries(specs)) {
    if (key.includes("/ Month")) {
      priceText = value;
      break;
    }
  }
  if (!priceText) {
    const rmMatch = el.text().match(/RM[\d,]+/);
    if (rmMatch) priceText = rmMatch[0];
  }

  return {
    title,
    detailUrl,
    price: priceText,
    type: specs["Type"] || "",
    engine: specs["Engine"] || "",
    cc: specs["CC"] || "",
    transmission: specs["Trans."] || "",
    power: specs["Power"] || "",
    torque: specs["Torque"] || "",
    abs: specs["ABS"] || "",
    fuelSystem: specs["Fuel Sys."] || "",
    status: specs["Status"] || "",
  };
}

async function scrapeDetailPage(url) {
  await sleep(DELAY_MS);
  const $ = await fetchPage(url);

  const images = [];
  $("a[href*='/wp-content/uploads/']").each((_i, el) => {
    const href = $(el).attr("href");
    if (href && /\.(jpg|jpeg|png|webp)$/i.test(href) && !images.includes(href)) {
      images.push(href);
    }
  });

  const descParagraphs = [];
  $("table")
    .filter(function () {
      return $(this).find("h2").text().includes("Overview");
    })
    .find("p")
    .each((_, el) => {
      const text = $(el).text().trim();
      if (text) descParagraphs.push(text);
    });
  const description = descParagraphs.join("\n\n");

  const specification = {};
  let currentSection = "General";
  $("table")
    .filter(function () {
      return $(this).find("h2").text().includes("Specification");
    })
    .find("tr")
    .each((_, tr) => {
      const cells = $(tr).find("td, th");
      if (cells.length === 1) {
        const text = cells.first().text().trim();
        if (
          text &&
          !text.includes("Specification") &&
          ["General", "Performance", "Chassis"].includes(text)
        ) {
          currentSection = text;
          specification[currentSection] = specification[currentSection] || {};
        }
      } else if (cells.length === 2) {
        const key = $(cells[0]).text().trim();
        const value = $(cells[1]).text().trim();
        if (key && value && key !== "Generation") {
          specification[currentSection] = specification[currentSection] || {};
          specification[currentSection][key] = value;
        }
      }
    });

  const colors = [];
  $("tr")
    .filter(function () {
      return $(this).find("td").first().text().trim() === "Colour Available";
    })
    .find("li")
    .each((_, li) => {
      const text = $(li)
        .text()
        .replace(/[█\u2588–—\-\s]+/g, " ")
        .trim();
      if (text) colors.push(text);
    });

  return { images, description, specification, colors };
}

async function scrapeAllPages() {
  const allMotorcycles = [];

  const $first = await fetchPage(BASE_URL);
  let totalPages = 1;
  $first("nav a, .pagination a").each((_, el) => {
    const num = parseInt($first(el).text().trim());
    if (!isNaN(num) && num > totalPages) totalPages = num;
  });

  console.log(`Scraping ${totalPages} pages`);

  for (let page = 1; page <= totalPages; page++) {
    const url = page === 1 ? BASE_URL : `${BASE_URL}page/${page}/`;
    const $ = await fetchPage(url);

    const articles = $("article").toArray();
    console.log(`Page ${page}: found ${articles.length} motorcycles`);

    for (const article of articles) {
      const listing = extractListingData($, article);
      if (!listing.title || !listing.detailUrl) continue;

      let detail = { images: [], description: "", specification: {}, colors: [] };
      try {
        detail = await scrapeDetailPage(listing.detailUrl);
      } catch (err) {
        console.warn(`  Failed to scrape detail: ${listing.detailUrl}: ${err.message}`);
      }

      const { brand, name, year } = parseTitleParts(listing.title);

      let engineCapacity = parseCC(listing.cc);
      if (engineCapacity === 0 && detail.specification?.Performance?.Displacement) {
        engineCapacity = parseCC(detail.specification.Performance.Displacement);
      }

      const engine = listing.engine || detail.specification?.Performance?.Engine || "";
      const gear = listing.transmission || detail.specification?.Performance?.Transmission || "";

      allMotorcycles.push({
        brand,
        name,
        model: name,
        year,
        price: parsePrice(listing.price),
        engine,
        engineCapacity,
        gear,
        color: detail.colors.length > 0 ? detail.colors.join(", ") : "",
        tags: listing.type,
        description: detail.description || null,
        specification:
          Object.keys(detail.specification).length > 0 ? detail.specification : null,
        images: detail.images,
        sourceUrl: listing.detailUrl,
      });
    }

    if (page < totalPages) await sleep(DELAY_MS);
  }

  return allMotorcycles;
}

async function ingestMotorcycles(motorcycles) {
  let upserted = 0;
  let skipped = 0;

  for (const moto of motorcycles) {
    if (!moto.brand || !moto.name || !moto.year) {
      skipped++;
      continue;
    }

    try {
      const result = await prisma.motorcycle.upsert({
        where: {
          brand_name_year: {
            brand: moto.brand,
            name: moto.name,
            year: moto.year,
          },
        },
        update: {
          model: moto.model,
          price: moto.price,
          engine: moto.engine,
          engineCapacity: moto.engineCapacity,
          gear: moto.gear,
          color: moto.color,
          tags: moto.tags || null,
          description: moto.description || null,
          specification: moto.specification || null,
        },
        create: {
          brand: moto.brand,
          name: moto.name,
          model: moto.model,
          year: moto.year,
          price: moto.price,
          engine: moto.engine,
          engineCapacity: moto.engineCapacity,
          gear: moto.gear,
          color: moto.color,
          tags: moto.tags || null,
          description: moto.description || null,
          specification: moto.specification || null,
        },
      });

      await prisma.motorcycleImage.deleteMany({
        where: { motorcycleId: result.id },
      });

      if (moto.images && moto.images.length > 0) {
        await prisma.motorcycleImage.createMany({
          data: moto.images.map((url, index) => ({
            url,
            displayOrder: index,
            motorcycleId: result.id,
          })),
        });
      }

      upserted++;
    } catch (err) {
      console.error(`  Error upserting ${moto.brand} ${moto.name} (${moto.year}): ${err.message}`);
      skipped++;
    }
  }

  return { upserted, skipped };
}

export async function GET(request) {
  // Verify the request is from Vercel Cron
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const firestoreDb = getFirestoreAdmin();

    // Step 1: Scrape
    const motorcycles = await scrapeAllPages();
    console.log(`Scraped ${motorcycles.length} motorcycles`);

    // Step 2: Upload to Firestore as backup
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const docName = `motorcycles-${timestamp}`;
    await firestoreDb.collection("productSyncFiles").doc(docName).set({
      data: motorcycles,
      isProcessed: false,
      createdAt: new Date().toISOString(),
    });

    // Step 3: Create sync file record
    await prisma.productSyncFile.create({
      data: {
        filePath: docName,
        isProcessed: false,
      },
    });

    // Step 4: Ingest into database
    const { upserted, skipped } = await ingestMotorcycles(motorcycles);

    // Step 5: Mark sync file as processed
    await prisma.productSyncFile.update({
      where: { filePath: docName },
      data: { isProcessed: true },
    });

    const result = {
      success: true,
      scraped: motorcycles.length,
      upserted,
      skipped,
      syncFile: docName,
    };

    console.log("Cron complete:", result);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Cron scrape-motorcycles failed:", error);
    return NextResponse.json(
      { error: "Scrape failed", message: error.message },
      { status: 500 }
    );
  }
}
