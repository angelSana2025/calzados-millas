/** Cuatro botas: fondo detrás del centro, laterales, centro al frente (foco) */
export type BannerLayerRole = "back" | "left" | "center" | "right";

export type BannerShoeLayer = {
  id: number;
  image: string;
  alt: string;
  layer: BannerLayerRole;
  /** Si el PNG principal falla (404), se usa esta ruta (p. ej. WebP en /public/images/hero/) */
  fallbackImage?: string;
  /** Clases Tailwind extra en la imagen (escala / posición fina) */
  imgClass?: string;
};

export type StockRow = {
  id: number;
  model: string;
  color: string;
  size1: { size: number; qty: number };
  size2: { size: number; qty: number };
  size3: { size: number; qty: number };
  totalPairs: number;
  season: string;
  status: "Activo" | "Bloqueado";
  image?: string;
  provider?: string;
  soldTotal?: number;
};
