import type { BannerLayerRole, BannerShoeLayer, StockRow } from "../types/inventory";

const placeholder = "/images/WhatsApp%20Image%202025-11-27%20at%2014.35.26.jpeg";

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
    /** Arriba-derecha, pequeña y clara (profundidad) — ref. banner */
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
    /** Negro grande, foco central */
    file: "Gemini_Generated_Image_p303pzp303pzp303-convertido-de-png-Photoroom.png",
    layer: "center",
    fallback: "banner-center.webp",
  },
  {
    /** Negro mediano a la derecha */
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

export const calzadoInventory: StockRow[] = [
  {
    id: 1,
    model: "Sandalia Casual S-001",
    color: "Negro",
    size1: { size: 36, qty: 5 },
    size2: { size: 37, qty: 2 },
    size3: { size: 38, qty: 2 },
    totalPairs: 9,
    season: "Verano 2024",
    status: "Activo",
    image: placeholder,
    provider: "Calzados Mila SAC",
    soldTotal: 28,
  },
  {
    id: 2,
    model: "Sandalia Casual S-001",
    color: "Marron",
    size1: { size: 36, qty: 4 },
    size2: { size: 37, qty: 6 },
    size3: { size: 38, qty: 4 },
    totalPairs: 14,
    season: "Verano 2024",
    status: "Activo",
    image: placeholder,
    provider: "Calzados Mila SAC",
    soldTotal: 41,
  },
  {
    id: 3,
    model: "Sandalia Sport S-002",
    color: "Azul",
    size1: { size: 39, qty: 2 },
    size2: { size: 40, qty: 3 },
    size3: { size: 41, qty: 5 },
    totalPairs: 10,
    season: "Verano 2024",
    status: "Activo",
    image: placeholder,
    provider: "Distribuidora Andina",
    soldTotal: 32,
  },
  {
    id: 4,
    model: "Sandalia Sport S-002",
    color: "Gris",
    size1: { size: 39, qty: 1 },
    size2: { size: 40, qty: 0 },
    size3: { size: 41, qty: 2 },
    totalPairs: 3,
    season: "Verano 2024",
    status: "Bloqueado",
    image: placeholder,
    provider: "Distribuidora Andina",
    soldTotal: 19,
  },
];

export const botinesInventory: StockRow[] = [
  {
    id: 101,
    model: "Botin Chelsea B-101",
    color: "Negro",
    size1: { size: 36, qty: 6 },
    size2: { size: 37, qty: 3 },
    size3: { size: 38, qty: 1 },
    totalPairs: 10,
    season: "Invierno 2025",
    status: "Activo",
    image: placeholder,
    provider: "Calzados Mila SAC",
    soldTotal: 12,
  },
  {
    id: 102,
    model: "Botin Chelsea B-101",
    color: "Cafe",
    size1: { size: 36, qty: 4 },
    size2: { size: 37, qty: 5 },
    size3: { size: 38, qty: 4 },
    totalPairs: 13,
    season: "Invierno 2025",
    status: "Activo",
    image: placeholder,
    provider: "Calzados Mila SAC",
    soldTotal: 18,
  },
  {
    id: 103,
    model: "Botin Tacón B-202",
    color: "Beige",
    size1: { size: 37, qty: 2 },
    size2: { size: 38, qty: 2 },
    size3: { size: 39, qty: 0 },
    totalPairs: 4,
    season: "Invierno 2025",
    status: "Activo",
    image: placeholder,
    provider: "Distribuidora Andina",
    soldTotal: 9,
  },
  {
    id: 104,
    model: "Botin Tacón B-202",
    color: "Vino",
    size1: { size: 37, qty: 1 },
    size2: { size: 38, qty: 1 },
    size3: { size: 39, qty: 2 },
    totalPairs: 4,
    season: "Invierno 2025",
    status: "Bloqueado",
    image: placeholder,
    provider: "Distribuidora Andina",
    soldTotal: 6,
  },
];
