// Renders scripts/og-image.html to public/og-image.png (1200x630).
// Run: PLAYWRIGHT_MODULE=/path/to/node_modules/playwright node scripts/render-og-image.mjs
// Playwright is intentionally not a project dependency; install it anywhere with
// `npm i playwright && npx playwright install chromium`.
import { pathToFileURL } from "node:url";
import { createRequire } from "node:module";
import { existsSync, statSync } from "node:fs";
import path from "node:path";

async function loadPlaywright() {
  const tried = [];

  // 1. Explicit path via PLAYWRIGHT_MODULE (package directory or its index.mjs).
  const explicit = process.env.PLAYWRIGHT_MODULE;
  if (explicit) {
    let target = path.resolve(explicit);
    if (existsSync(target) && statSync(target).isDirectory()) {
      target = path.join(target, "index.mjs");
    }
    try {
      return await import(pathToFileURL(target).href);
    } catch (err) {
      tried.push(`PLAYWRIGHT_MODULE=${explicit}: ${err.message}`);
    }
  }

  // 2. Normal ESM resolution.
  try {
    return await import("playwright");
  } catch (err) {
    tried.push(`import("playwright"): ${err.message}`);
  }

  // 3. CommonJS resolution from cwd and each NODE_PATH entry.
  const bases = [process.cwd(), ...(process.env.NODE_PATH || "").split(path.delimiter).filter(Boolean)];
  for (const base of bases) {
    try {
      return createRequire(path.join(path.resolve(base), "noop.js"))("playwright");
    } catch (err) {
      tried.push(`require from ${base}: ${err.message}`);
    }
  }

  console.error(
    "Could not load Playwright. Install it (npm i playwright && npx playwright install chromium) and run:\n" +
      "  PLAYWRIGHT_MODULE=/path/to/node_modules/playwright node scripts/render-og-image.mjs\n\nAttempts:\n  " +
      tried.join("\n  "),
  );
  process.exit(1);
}

const pw = await loadPlaywright();
const chromium = pw.chromium ?? pw.default?.chromium;

const root = path.resolve(import.meta.dirname, "..");
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(pathToFileURL(path.join(root, "scripts", "og-image.html")).href);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({
  path: path.join(root, "public", "og-image.png"),
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});
await browser.close();
console.log("Wrote public/og-image.png");
