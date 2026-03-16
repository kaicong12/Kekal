import "dotenv/config";
import * as cheerio from "cheerio";
import { createRequire } from "module";
import fs from "fs";
import path from "path";
import { initializeApp, cert } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";

const require = createRequire(import.meta.url);
const { prisma } = require("../prisma/client.js");

const isProd = process.env.NODE_ENV === "production";
const serviceAccountPath = isProd
  ? path.resolve("utils/keys/prod_privateKey.json")
  : path.resolve("utils/keys/sandbox_privateKey.json");
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf-8"));
initializeApp({
  credential: cert(serviceAccount),
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
});

const BASE_URL =
  "https://www.motomalaysia.com/category/new-motorcycle-bike-price-list-malaysia/";
const DELAY_MS = 1000;
const MAX_PAGES = process.argv.includes("--test") ? 1 : Infinity;
const MAX_MOTORCYCLES = process.argv.includes("--test-one") ? 1 : Infinity;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchPage(url) {
  console.log(`Fetching: ${url}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return cheerio.load(await res.text());
}

function parseTitleParts(title) {
  // "Honda Vario 160 (2025)" → brand="Honda", name="Vario 160", year="2025"
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

  // Parse spec fields: each spec block is a div with exactly one child div (label)
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

  // Extract price: the "/ Month" label entry has the price as its value
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

  // Extract images
  const images = [];
  $("a[href*='/wp-content/uploads/']").each((_i, el) => {
    const href = $(el).attr("href");
    if (href && /\.(jpg|jpeg|png|webp)$/i.test(href) && !images.includes(href)) {
      images.push(href);
    }
  });

  // Extract description from overview section
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

  // Extract full specification table
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

  // Extract colors
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

  const pagesToScrape = Math.min(totalPages, MAX_PAGES);
  console.log(`Scraping ${pagesToScrape} of ${totalPages} pages`);

  for (let page = 1; page <= pagesToScrape; page++) {
    const url = page === 1 ? BASE_URL : `${BASE_URL}page/${page}/`;
    const $ = await fetchPage(url);

    const articles = $("article").toArray();
    console.log(`Page ${page}: found ${articles.length} motorcycles`);

    for (const article of articles) {
      if (allMotorcycles.length >= MAX_MOTORCYCLES) break;
      const listing = extractListingData($, article);
      if (!listing.title || !listing.detailUrl) continue;

      let detail = { images: [], description: "", specification: {}, colors: [] };
      try {
        detail = await scrapeDetailPage(listing.detailUrl);
      } catch (err) {
        console.warn(`  Failed to scrape detail: ${listing.detailUrl}: ${err.message}`);
      }

      const { brand, name, year } = parseTitleParts(listing.title);

      // Engine capacity: prefer listing CC, fall back to detail page Displacement
      let engineCapacity = parseCC(listing.cc);
      if (engineCapacity === 0 && detail.specification?.Performance?.Displacement) {
        engineCapacity = parseCC(detail.specification.Performance.Displacement);
      }

      const engine = listing.engine || detail.specification?.Performance?.Engine || "";
      const gear = listing.transmission || detail.specification?.Performance?.Transmission || "";

      const motorcycle = {
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
        specification: Object.keys(detail.specification).length > 0 ? detail.specification : null,
        images: detail.images,
        sourceUrl: listing.detailUrl,
      };

      console.log(`  Scraped: ${listing.title} (${detail.images.length} images)`);
      allMotorcycles.push(motorcycle);
    }

    if (allMotorcycles.length >= MAX_MOTORCYCLES) break;
    if (page < pagesToScrape) await sleep(DELAY_MS);
  }

  return allMotorcycles;
}

async function main() {
  console.log("Starting motorcycle scrape...");

  const motorcycles = await scrapeAllPages();
  console.log(`\nTotal motorcycles scraped: ${motorcycles.length}`);

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const docName = `motorcycles-${timestamp}`;

  // Upload scraped data as JSON file to Firebase Storage
  const bucket = getStorage().bucket();
  const storagePath = `productSyncFiles/${docName}.json`;
  const file = bucket.file(storagePath);
  await file.save(JSON.stringify(motorcycles), {
    contentType: "application/json",
  });
  await file.makePublic();
  const publicUrl = `https://storage.googleapis.com/${bucket.name}/${storagePath}`;
  console.log(`Uploaded to Firebase Storage: ${publicUrl}`);

  await prisma.productSyncFile.create({
    data: {
      filePath: publicUrl,
      isProcessed: false,
    },
  });
  console.log("Created ProductSyncFile entry (isProcessed: false)");

  await prisma.$disconnect();
  console.log("Done!");
}

main().catch(async (err) => {
  console.error(err);
  await prisma.$disconnect();
  process.exit(1);
});
