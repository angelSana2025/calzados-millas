import { useMemo, useState } from "react";
import { getVentasCategories, getVentasProducts } from "../services/ventas.service";
import type { VentasFilters, VentaProduct } from "../types/ventas.types";

/*
 * Hook principal del Stock Control.
 *
 * Orquesta dos responsabilidades:
 *   1. Filtrado por búsqueda, categoría y estado de stock
 *   2. Paginación local con 4 productos por página
 *
 * Cuando el backend esté disponible, el fetching de datos se moverá
 * a este hook con useEffect + servicio asíncrono.
 */

const PAGE_SIZE = 4;

export function useVentas() {
  const allProducts = useMemo(() => getVentasProducts(), []);
  const categories = useMemo(() => getVentasCategories(), []);

  const [filters, setFilters] = useState<VentasFilters>({
    search: "",
    category: "",
    status: "",
  });
  const [currentPage, setCurrentPage] = useState(1);

  /*
   * Filtrado en cascada:
   *   1. Búsqueda textual sobre nombre y proveedor
   *   2. Filtro exacto por categoría
   *   3. Filtro exacto por estado de stock
   */
  const filtered = useMemo(() => {
    let result: VentaProduct[] = allProducts;

    if (filters.search) {
      const q = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.supplier.toLowerCase().includes(q)
      );
    }

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }

    if (filters.status) {
      result = result.filter((p) => p.status === filters.status);
    }

    return result;
  }, [allProducts, filters]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  /*
   * Si el usuario cambia de filtro en una página que ya no existe
   * (ej. página 5 con 0 resultados), safePage lo corrige automáticamente.
   */
  const safePage = Math.min(currentPage, totalPages);

  const paginated = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, safePage]);

  /*
   * Al cambiar cualquier filtro, volvemos a la página 1;
   * así el usuario no se queda en una página vacía.
   */
  function updateFilter(key: keyof VentasFilters, value: string) {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  }

  function clearFilters() {
    setFilters({ search: "", category: "", status: "" });
    setCurrentPage(1);
  }

  function goToPage(page: number) {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }

  return {
    products: paginated,
    allProducts,
    categories,
    filters,
    totalPages,
    currentPage: safePage,
    totalCount: filtered.length,
    updateFilter,
    clearFilters,
    goToPage,
  };
}
