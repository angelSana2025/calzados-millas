import type { BannerLayerRole, BannerShoeLayer } from "../types";

/**
 * Hero: 4 fotos con alpha — `back` (detrás del centro), izquierda, centro (foco), derecha.
 * Archivos en `public/images/hero/` deben coincidir con `file` (incluye espacios en nombres Gemini).
 */
const BANNER_FILES: {
  file: string;
  layer: BannerLayerRole;
  fallback?: string;
}[] = [
  {
    file: "Gemini_Generated_Image_61pwn961pwn961pw-convertido-de-png-Photoroom.png",
    layer: "back",
    fallback: "hero-3-cutout.webp",
  },
  {
    file: "Gemini_Generated_Image_mmutbwmmutbwmmut (1)-Photoroom.png",
    layer: "left",
    fallback: "hero-1-cutout.webp",
  },
  {
    file: "Gemini_Generated_Image_p303pzp303pzp303-convertido-de-png-Photoroom.png",
    layer: "center",
    fallback: "banner-center.webp",
  },
  {
    file: "Gemini_Generated_Image_npyrdknpyrdknpyr-convertido-de-png-Photoroom.png",
    layer: "right",
    fallback: "Gemini_Generated_Image_npyrdknpyrdknpyr-convertido-de-png-Photoroom.webp",
  },
];

function bannerPublicUrl(filename: string): string {
  return `/images/hero/${encodeURIComponent(filename)}`;
}

function heroAsset(filename: string): string {
  return `/images/hero/${filename}`;
}

export const bannerShoes: BannerShoeLayer[] = BANNER_FILES.map((row, i) => ({
  id: i + 1,
  image: bannerPublicUrl(row.file),
  fallbackImage: row.fallback ? heroAsset(row.fallback) : undefined,
  alt: `Calzados Mila — vista ${row.layer}`,
  layer: row.layer,
}));
