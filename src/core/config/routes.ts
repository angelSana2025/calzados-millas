/** Rutas centralizadas — única fuente de verdad para paths de la app */
export const ROUTES = {
  home: "/",
  gestionSandalias: "/gestion-sandalias",
  gestionBotines: "/gestion-botines",
  iniciarSession: "/iniciar-session",
} as const;

export type InventorySection = "sandalias" | "botines";
