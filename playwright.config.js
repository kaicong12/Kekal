// @ts-check
const { defineConfig, devices } = require("@playwright/test");

// Port is overridable so a run can avoid a dev server already on 3000.
const PORT = Number(process.env.E2E_PORT || 3000);
const BASE_URL = `http://localhost:${PORT}`;

module.exports = defineConfig({
  testDir: "./tests",
  // E2E only; the default pattern also grabs the *.test.mjs unit tests.
  testMatch: "**/*.spec.js",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? "github" : "html",
  timeout: 30000,
  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },

  projects: [
    {
      name: "desktop",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile",
      use: { ...devices["Pixel 7"] },
    },
  ],

  globalSetup: "./tests/global-setup.js",
  globalTeardown: "./tests/global-teardown.js",

  webServer: {
    // E2E_WEB_SERVER lets a run skip `yarn db:up` when Postgres is already up.
    command: process.env.E2E_WEB_SERVER || `yarn dev --port ${PORT}`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
    // Lets AuthProvider accept the injected mock user so the admin screens are
    // reachable. Scoped to the server Playwright starts, so it never reaches a
    // production build and needs no CI configuration.
    env: { NEXT_PUBLIC_E2E_AUTH_MOCK: "1" },
  },
});
