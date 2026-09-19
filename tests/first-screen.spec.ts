import { test, expect, type Page } from "@playwright/test";

/**
 * First-screen contract gate (audit B1).
 *
 * At 390px wide, the top 640px of every important template must contain, in order:
 *   H1, service-area line, full-width call button, hours line, trust strip.
 * The form link must be present but text weight, never a competing button.
 * A fixed call bar must be pinned to the bottom of the viewport.
 *
 * Templates that do not exist yet are reported and skipped rather than silently passing;
 * see APPLY_STATUS.md. Once a page is built the assertions apply to it with no edit here.
 */

const FOLD = 640;

/** One page per important template. Golden pages land after Milton approves the designs. */
const TARGETS = [
  { name: "home", path: "/" },
  { name: "service", path: "/services/water-heaters/" },
  { name: "town", path: "/service-areas/truckee/" },
  { name: "contact", path: "/contact/" },
  // Always present, so the contract is exercised even before the golden pages exist.
  { name: "404", path: "/404.html" },
];

async function exists(page: Page, path: string): Promise<boolean> {
  const res = await page.goto(path, { waitUntil: "domcontentloaded" });
  if (!res) return false;
  // The 404 template is served at /404.html with a 200; unknown routes return 404.
  return res.status() < 400;
}

/** Distance from the top of the document to the top of the element. */
async function topOf(page: Page, marker: string): Promise<number> {
  const el = page.locator(`[data-fs="${marker}"]`).first();
  await expect(el, `[data-fs="${marker}"] must be present`).toHaveCount(1);
  await expect(el, `[data-fs="${marker}"] must be visible`).toBeVisible();
  const box = await el.boundingBox();
  expect(box, `[data-fs="${marker}"] must have a layout box`).not.toBeNull();
  return box!.y;
}

for (const target of TARGETS) {
  test.describe(`first screen: ${target.name} (${target.path})`, () => {
    test("shows H1, area, call, hours and trust above the fold", async ({ page }) => {
      test.skip(!(await exists(page, target.path)), `${target.path} is not built yet`);

      const tops: Record<string, number> = {};
      for (const marker of ["h1", "area", "call", "hours", "trust"]) {
        tops[marker] = await topOf(page, marker);
        expect(
          tops[marker],
          `[data-fs="${marker}"] starts at ${Math.round(tops[marker])}px, must be within the first ${FOLD}px`,
        ).toBeLessThan(FOLD);
      }

      // Calling is the primary action: the button comes before the hours and trust lines.
      expect(tops.h1, "H1 comes first").toBeLessThanOrEqual(tops.area);
      expect(tops.area, "area line sits above the call button").toBeLessThanOrEqual(tops.call);
      expect(tops.call, "call button sits above the hours line").toBeLessThanOrEqual(tops.hours);
      expect(tops.hours, "hours line sits above the trust strip").toBeLessThanOrEqual(tops.trust);
    });

    test("call button is full width and dials the one number", async ({ page }) => {
      test.skip(!(await exists(page, target.path)), `${target.path} is not built yet`);

      const call = page.locator('[data-fs="call"]').first();
      await expect(call).toHaveAttribute("href", "tel:+15305870733");

      const button = await call.boundingBox();
      const viewport = page.viewportSize();
      expect(button).not.toBeNull();
      expect(viewport).not.toBeNull();
      // Full width allowing for the page gutter on each side.
      expect(
        button!.width,
        `call button is ${Math.round(button!.width)}px of a ${viewport!.width}px viewport`,
      ).toBeGreaterThan(viewport!.width * 0.8);
    });

    test("form link is secondary and sits under the call button", async ({ page }) => {
      test.skip(!(await exists(page, target.path)), `${target.path} is not built yet`);

      const call = page.locator('[data-fs="call"]').first();
      const formLink = page.locator('[data-fs="form-link"]').first();
      await expect(formLink).toBeVisible();

      const callBox = await call.boundingBox();
      const formBox = await formLink.boundingBox();
      expect(formBox!.y, "form link sits below the call button").toBeGreaterThan(callBox!.y);

      // Text weight, not a second button competing with the call.
      const weight = await formLink.evaluate((el) => getComputedStyle(el).fontWeight);
      expect(Number(weight), "form link must not be bold").toBeLessThan(600);
      expect(formBox!.height, "form link must be smaller than the call button").toBeLessThan(callBox!.height);
    });

    test("fixed call bar is pinned to the bottom of the viewport", async ({ page }) => {
      test.skip(!(await exists(page, target.path)), `${target.path} is not built yet`);

      const bar = page.locator('[data-fs="call-bar"]').first();
      await expect(bar).toBeVisible();
      await expect(bar).toHaveAttribute("href", "tel:+15305870733");
      await expect(bar).toHaveCSS("position", "fixed");

      const box = await bar.boundingBox();
      const viewport = page.viewportSize()!;
      // Bottom edge of the bar within a pixel or two of the viewport bottom.
      expect(Math.abs(box!.y + box!.height - viewport.height)).toBeLessThan(3);
    });
  });
}
