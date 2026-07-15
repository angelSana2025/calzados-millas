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

export type LandingSocialLinks = {
  whatsapp: string;
  tiktok: string;
  instagram: string;
  handle: string;
};
