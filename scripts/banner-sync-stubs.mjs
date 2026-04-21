/**
 * Copia recortes existentes a los 4 nombres del banner hasta que subas fotos definitivas.
 * Uso: node scripts/banner-sync-stubs.mjs
 */
import fs from "node:fs";
import path from "node:path";

const heroDir = path.resolve(import.meta.dirname, "..", "public", "images", "hero");

const MAP = [
  ["hero-3-cutout.webp", "banner-back.webp"],
  ["hero-1-cutout.webp", "banner-left.webp"],
  ["hero-2-cutout.webp", "banner-center.webp"],
  ["hero-3-cutout.webp", "banner-right.webp"],
];

for (const [srcName, destName] of MAP) {
  const src = path.join(heroDir, srcName);
  const dest = path.join(heroDir, destName);
  if (!fs.existsSync(src)) {
    console.warn(`[omitido] Falta ${srcName}`);
    continue;
  }
  fs.copyFileSync(src, dest);
  console.log(`[ok] ${srcName} → ${destName}`);
}
