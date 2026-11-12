import { defineConfig } from "@playwright/test";

/**
 * Drives the Chrome already installed on the machine rather than downloading Playwright's
 * browser bundle, so `npx playwright install` is not a prerequisite in CI or the sandbox.
 *
 * The suite runs against a built site: `npm run build && npm run serve` (Node adapter),
 * or point BASE_URL at a Vercel preview. When the preview has Deployment Protection on,
 * pass the bypass token too (see docs/qa-plan.md section 5).
 */
const baseURL = process.env.BASE_URL || "http://127.0.0.1:4322";
const bypass = process.env.VERCEL_PROTECTION_BYPASS;

export default defineConfig({
  testDir: "tests",
  fullyParallel: true,
  reporter: process.env.CI ? [["list"], ["html", { open: "never" }]] : [["list"]],
  use: {
    baseURL,
    channel: "chrome",
    extraHTTPHeaders: bypass ? { "x-vercel-protection-bypass": bypass } : {},
  },
  projects: [
    {
      // 390x844 is the phone viewport the first-screen contract is written against.
      // Set explicitly rather than via a device descriptor, because the iPhone presets
      // imply WebKit and this suite runs on the machine's installed Chrome.
      name: "mobile-390",
      use: {
        browserName: "chromium",
        viewport: { width: 390, height: 844 },
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
      },
    },
  ],
});
