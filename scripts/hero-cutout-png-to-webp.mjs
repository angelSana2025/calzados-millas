/**
 * Convierte PNG con transparencia (recorte del calzado) a WebP para el hero.
 * Coloca los PNG en: public/images/hero/cutout-source/hero-1.png … hero-3.png
 * Salida: public/images/hero/hero-1-cutout.webp …
 *
 * Uso: node scripts/hero-cutout-png-to-webp.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const srcDir = path.join(root, "public", "images", "hero", "cutout-source");
const outDir = path.join(root, "public", "images", "hero");

fs.mkdirSync(srcDir, { recursive: true });
fs.mkdirSync(outDir, { recursive: true });

let ok = 0;
for (let i = 1; i <= 3; i++) {
  const png = path.join(srcDir, `hero-${i}.png`);
  const webp = path.join(outDir, `hero-${i}-cutout.webp`);
  if (!fs.existsSync(png)) {
    console.warn(`[omitido] No existe: cutout-source/hero-${i}.png`);
    continue;
  }
  await sharp(png)
    .webp({ quality: 86, effort: 6, alphaQuality: 100 })
    .toFile(webp);
  console.log(`[ok] hero-${i}.png → hero-${i}-cutout.webp`);
  ok++;
}

if (ok === 0) {
  console.error(
    "\nExporta cada calzado en PNG con fondo transparente y guárdalos como:\n" +
      `  ${path.relative(root, srcDir)}\\hero-1.png\n` +
      "  … hero-2.png, hero-3.png\n" +
      "Luego vuelve a ejecutar: npm run images:hero-cutout\n",
  );
  process.exitCode = 1;
} else {
  console.log(`\nListo: ${ok} WebP con alpha en public/images/hero/\n`);
}
