/**
 * prepare-hostinger.mjs
 *
 * Copies the contents of the public/ folder into a clean hostinger-upload/
 * folder so you can upload the hostinger-upload/ folder directly to
 * Hostinger's public/ directory without creating a nested public/public/ path.
 *
 * Usage:
 *   npm run hostinger
 *
 * Then upload the contents of hostinger-upload/ to Hostinger.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = path.resolve(__dirname, "../public");
const OUTPUT_DIR = path.resolve(__dirname, "../hostinger-upload");

function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Clean output directory
if (fs.existsSync(OUTPUT_DIR)) {
  fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
}

// Copy contents
copyRecursive(SOURCE_DIR, OUTPUT_DIR);

const fileCount = fs
  .readdirSync(OUTPUT_DIR, { recursive: true })
  .filter((item) => typeof item === "string" && fs.existsSync(path.join(OUTPUT_DIR, item)) && fs.statSync(path.join(OUTPUT_DIR, item)).isFile()).length;

console.log(`✅ Hostinger upload package ready at: ${OUTPUT_DIR}`);
console.log(`   Files copied: ${fileCount}`);
console.log(`\nNext step: upload the contents of hostinger-upload/ into Hostinger's public/ folder.`);
