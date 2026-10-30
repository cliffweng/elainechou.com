import { readFile, writeFile, rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const ssrDir = path.join(root, "dist-ssr");
const htmlPath = path.join(root, "dist", "index.html");

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const template = await readFile(htmlPath, "utf8");
if (!template.includes("<!--app-html-->")) {
  throw new Error("dist/index.html is missing the <!--app-html--> placeholder");
}
await writeFile(htmlPath, template.replace("<!--app-html-->", () => render()));
await rm(ssrDir, { recursive: true, force: true });
console.log("Prerendered dist/index.html");
