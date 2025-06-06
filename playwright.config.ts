import { defineConfig, devices } from "@playwright/test";
import { envVars } from "./config/env-vars";

// Loads the dotenv default config
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  testMatch: ["**/*.spec.ts"],

  // Run all tests in parallel.
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI only.
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use
  // reporter: 'html',

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: envVars.baseUrl,

    // Collect trace when retrying the failed test.
    trace: "on-first-retry",
  },
  // Configure projects for major browsers.
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  // Run your local dev server before starting the tests.
  //   webServer: {
  //     command: 'npm run start',
  //     url: 'http://127.0.0.1:3000',
  //     reuseExistingServer: !process.env.CI,
  //   },
});
