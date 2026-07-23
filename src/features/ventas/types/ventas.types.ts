/** Nivel de stock: verde (optimal), amarillo (low), rojo (critical) */
export type StockStatus = "optimal" | "low" | "critical";

/** Producto individual en la tabla de control de stock */
export type VentaProduct = {
  id: number;
  name: string;            // Nombre comercial del modelo
  category: string;        // Categoría: Stilettos, Loafers, Pumps, Boots
  image: string;           // URL de la imagen del producto (vacío si no hay)
  size: string;            // Talla en formato EU, ej: "38 EU"
  stock: number;           // Unidades disponibles actualmente
  optimal: number;         // Stock óptimo deseado como referencia
  status: StockStatus;     // Indicador semáforo para priorizar reposición
  price: number;           // Precio unitario en USD
  supplier: string;        // Proveedor del producto
};

/** Filtros activos en la barra de búsqueda del Stock Control */
export type VentasFilters = {
  search: string;
  category: string;
  status: string;
};
