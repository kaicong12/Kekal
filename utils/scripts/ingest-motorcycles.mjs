import "dotenv/config";
import { createRequire } from "module";

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
