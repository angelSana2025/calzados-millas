/**
 * Quita el fondo con @imgly/background-removal-node (ONNX local vía red la 1.ª vez).
 * Entrada: public/images/hero/hero-N.webp (fotos originales)
 * Salida: public/images/hero/hero-N-cutout.webp (WebP con alpha)
 *
 * Uso: npm run images:hero-remove-bg
 */
import { removeBackground } from "@imgly/background-removal-node";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const heroDir = path.join(root, "public", "images", "hero");

let ok = 0;
for (let i = 1; i <= 3; i++) {
  const src = path.join(heroDir, `hero-${i}.webp`);
  const dest = path.join(heroDir, `hero-${i}-cutout.webp`);
  if (!fs.existsSync(src)) {
    console.warn(`[omitido] No existe hero-${i}.webp (genera primero con npm run images:hero-webp)`);
    continue;
  }
  console.log(`\nProcesando hero-${i}.webp …`);
  /** Ruta absoluta: el decodificador de imgly suele aceptar PNG/JPEG; si falla WebP, usa JPEG fuente en hero-jpeg-to-webp */
  const blob = await removeBackground(pathToFileURL(path.resolve(src)).href, {
    model: "small",
    output: {
      format: "image/webp",
      quality: 0.86,
      type: "foreground",
    },
    progress: (key, current, total) => {
      if (total > 0) console.log(`  ${key}: ${current} / ${total}`);
    },
  });
  const buf = Buffer.from(await blob.arrayBuffer());
  fs.writeFileSync(dest, buf);
  console.log(`[ok] hero-${i}-cutout.webp (${Math.round(buf.length / 1024)} KB)`);
  ok++;
}

if (ok === 0) {
  console.error("\nNo se procesó ningún archivo.\n");
  process.exitCode = 1;
} else {
  console.log(`\nListo: ${ok} recorte(s) con transparencia.\n`);
}
