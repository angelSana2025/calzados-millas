/**
 * Si aún no tienes PNG recortados, copia hero-N.webp → hero-N-cutout.webp
 * para que la app no falle (sustituye después por WebP con transparencia real).
 * Uso: node scripts/hero-sync-cutout-stubs.mjs
 */
import fs from "node:fs";
import path from "node:path";

const heroDir = path.resolve(import.meta.dirname, "..", "public", "images", "hero");

for (let i = 1; i <= 3; i++) {
  const src = path.join(heroDir, `hero-${i}.webp`);
  const dest = path.join(heroDir, `hero-${i}-cutout.webp`);
  if (!fs.existsSync(src)) {
    console.warn(`[omitido] No existe hero-${i}.webp`);
    continue;
  }
  fs.copyFileSync(src, dest);
  console.log(`[ok] hero-${i}.webp → hero-${i}-cutout.webp (stub; reemplaza por recorte real)`);
}
