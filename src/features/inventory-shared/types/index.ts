/** Fila de inventario de calzado. Representa un producto con hasta 3 tallas y su stock. */
export type StockRow = {
  id: number;
  model: string;
  color: string;
  /** Talla 1 (ej. 36) con cantidad en pares */
  size1: { size: number; qty: number };
  /** Talla 2 (ej. 37) con cantidad en pares */
  size2: { size: number; qty: number };
  /** Talla 3 (ej. 38) con cantidad en pares */
  size3: { size: number; qty: number };
  /** Suma manual de size1.qty + size2.qty + size3.qty */
  totalPairs: number;
  /** Temporada del producto (ej. "Verano 2024", "Invierno 2025") */
  season: string;
  /** Estado: Activo (disponible) o Bloqueado (inactivo/descontinuado) */
  status: "Activo" | "Bloqueado";
  /** URL opcional de la imagen del producto */
  image?: string;
  /** Nombre del proveedor */
  provider?: string;
  /** Total de pares vendidos históricamente */
  soldTotal?: number;
};

/** Sección de inventario: sandalias o botines */
export type InventorySection = "sandalias" | "botines";
