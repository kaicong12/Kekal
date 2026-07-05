// @ts-check
const { execSync } = require("child_process");

module.exports = async function globalSetup() {
  console.log("\n[Global Setup] Seeding test data...");
  try {
    execSync("node tests/seed.js", { stdio: "inherit", timeout: 30000 });
  } catch (e) {
    console.warn("[Global Setup] Seed failed (may already be seeded):", e.message);
  }
};
