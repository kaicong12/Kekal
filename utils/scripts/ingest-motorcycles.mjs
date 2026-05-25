import "dotenv/config";
import { createRequire } from "module";
import { resolveEngineCapacity } from "./lib/engineCapacity.mjs";

const require = createRequire(import.meta.url);
const { prisma } = require("../../prisma/client.js");

async function ingestFile(syncFile) {
  const fileUrl = syncFile.filePath;
  console.log(`\nProcessing: ${fileUrl}`);

  let motorcycles;
  try {
    const res = await fetch(fileUrl);
    if (!res.ok) throw new Error(`Failed to download: ${res.status}`);
    motorcycles = await res.json();
    if (!Array.isArray(motorcycles)) {
      throw new Error("Invalid data format: expected array");
    }
  } catch (err) {
    console.error(`  Error reading sync data from ${fileUrl}: ${err.message}`);
    await prisma.productSyncFile.update({
      where: { id: syncFile.id },
      data: { isProcessed: true },
    });
    return { upserted: 0, skipped: 0 };
  }

  console.log(`  Found ${motorcycles.length} motorcycles in sync data`);

  let upserted = 0;
  let skipped = 0;

  for (const moto of motorcycles) {
    if (!moto.brand || !moto.name || !moto.year) {
      console.warn(
        `  Skipping entry with missing brand/name/year: ${JSON.stringify({
          brand: moto.brand,
          name: moto.name,
          year: moto.year,
        })}`
      );
      skipped++;
      continue;
    }

    // Validate engineCapacity: spec.Performance.Displacement wins over the scraped field
    const engineCapacity = resolveEngineCapacity(moto.specification, moto.engineCapacity);

    try {
      // Upsert motorcycle — idempotent via unique constraint (brand, name, year)
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
          engineCapacity,
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
          engineCapacity,
          gear: moto.gear,
          color: moto.color,
          tags: moto.tags || null,
          description: moto.description || null,
          specification: moto.specification || null,
        },
      });

      // Replace images: delete existing and re-create to stay in sync
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
      console.error(
        `  Error upserting ${moto.brand} ${moto.name} (${moto.year}): ${err.message}`
      );
      skipped++;
    }
  }

  // Mark sync file as processed
  await prisma.productSyncFile.update({
    where: { id: syncFile.id },
    data: { isProcessed: true },
  });

  return { upserted, skipped };
}

async function main() {
  console.log("Starting motorcycle ingestion...");

  // If SYNC_FILE_URL is provided (e.g. from CI), register/re-queue it so the
  // same scrape output can be ingested into multiple databases without
  // re-scraping. filePath is unique, so upsert-by-find handles repeats.
  const externalUrl = process.env.SYNC_FILE_URL;
  if (externalUrl) {
    const existing = await prisma.productSyncFile.findUnique({
      where: { filePath: externalUrl },
    });
    if (!existing) {
      await prisma.productSyncFile.create({
        data: { filePath: externalUrl, isProcessed: false },
      });
      console.log(`Registered sync file: ${externalUrl}`);
    } else if (existing.isProcessed) {
      await prisma.productSyncFile.update({
        where: { id: existing.id },
        data: { isProcessed: false },
      });
      console.log(`Re-queued sync file: ${externalUrl}`);
    } else {
      console.log(`Sync file already pending: ${externalUrl}`);
    }
  }

  const unprocessed = await prisma.productSyncFile.findMany({
    where: { isProcessed: false },
    orderBy: { createdAt: "asc" },
  });

  if (unprocessed.length === 0) {
    console.log("No unprocessed sync files found. Nothing to do.");
    await prisma.$disconnect();
    return;
  }

  console.log(`Found ${unprocessed.length} unprocessed sync file(s)`);

  let totalUpserted = 0;
  let totalSkipped = 0;

  for (const syncFile of unprocessed) {
    const { upserted, skipped } = await ingestFile(syncFile);
    totalUpserted += upserted;
    totalSkipped += skipped;
  }

  console.log(`\nIngestion complete:`);
  console.log(`  Upserted: ${totalUpserted}`);
  console.log(`  Skipped: ${totalSkipped}`);

  await prisma.$disconnect();
}

main().catch(async (err) => {
  console.error(err);
  await prisma.$disconnect();
  process.exit(1);
});
