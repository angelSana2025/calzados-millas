/** Rutas centralizadas — única fuente de verdad para paths de la app */
export const ROUTES = {
  home: "/",
  gestionSandalias: "/gestion-sandalias",
  gestionBotines: "/gestion-botines",
  iniciarSession: "/iniciar-session",
  calzado: "/calzado",          // Gestión de productos de calzado (antes Ventas)
  dashboard: "/dashboard",      // Analytics y KPIs
  ecommerce: "/tienda",         // Catálogo público (en construcción)
} as const;

export type InventorySection = "sandalias" | "botines";
