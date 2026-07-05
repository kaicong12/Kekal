// @ts-check
const { execSync } = require("child_process");

module.exports = async function globalTeardown() {
  console.log("\n[Global Teardown] Cleaning up test data...");
  try {
    execSync("node tests/seed.js --cleanup", { stdio: "inherit", timeout: 30000 });
  } catch (e) {
    console.warn("[Global Teardown] Cleanup failed:", e.message);
  }
};
