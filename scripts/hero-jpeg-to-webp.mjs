/**
 * Convierte los JPEG del hero a WebP (mejor compresión).
 * Uso: node scripts/hero-jpeg-to-webp.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const heroDir = path.join(root, "public", "images", "hero");

const PAIRS = [
  ["WhatsApp Image 2026-04-21 at 13.23.53.jpeg", "hero-1.webp"],
  ["WhatsApp Image 2026-04-21 at 13.23.53 (1).jpeg", "hero-2.webp"],
  ["WhatsApp Image 2026-04-21 at 13.23.53 (2).jpeg", "hero-3.webp"],
];

fs.mkdirSync(heroDir, { recursive: true });

let ok = 0;
for (const [jpegName, webpName] of PAIRS) {
  const input = path.join(heroDir, jpegName);
  const output = path.join(heroDir, webpName);
  if (!fs.existsSync(input)) {
    console.warn(`[omitido] No existe: ${jpegName}`);
    continue;
  }
  await sharp(input)
    .webp({ quality: 85, effort: 6 })
    .toFile(output);
  console.log(`[ok] ${jpegName} → ${webpName}`);
  ok++;
}

if (ok === 0) {
  console.error(
    "\nNo se convirtió ningún archivo. Coloca los JPEG en public/images/hero/ y vuelve a ejecutar el script.\n",
  );
  process.exitCode = 1;
} else {
  console.log(`\nListo: ${ok} archivo(s) WebP en public/images/hero/\n`);
}
