/** Barrel público del módulo inventory-shared.
 *  Exporta componentes, constantes y tipos compartidos entre las
 *  features de gestión (botines, sandalias, ventas).
 *  Los componentes internos (TopNavBar, UnifiedContent) NO se exportan. */
export { AddProductModal } from "./components/AddProductModal";
export { CalzadoPanel } from "./components/CalzadoPanel";
export { InventoryManagementLayout } from "./components/InventoryManagementLayout";
export { InventorySidebar } from "./components/InventorySidebar";
export { ProductGrid } from "./components/ProductGrid";
export { DashboardPanel } from "./components/DashboardPanel";
export { PRODUCT_PLACEHOLDER_IMAGE } from "./constants";
export type { AddProductFormData } from "./components/AddProductModal";
export type { InventorySection, StockRow } from "./types";
export type { StockFilter } from "./components/InventoryManagementLayout";
