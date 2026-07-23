import { useMemo, useState } from "react";
import { getVentasCategories } from "../services/calzado.service";
import { useCalzadoCrud } from "./useCalzadoCrud";
import type { VentasFilters, VentaProduct } from "../types/calzado.types";

const PAGE_SIZE = 4;

export function useCalzado() {
  const crud = useCalzadoCrud();
  const categories = useMemo(() => getVentasCategories(), []);

  const [filters, setFilters] = useState<VentasFilters>({
    search: "",
    category: "",
    status: "",
  });
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    let result: VentaProduct[] = crud.rows;

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
  }, [crud.rows, filters]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);

  const paginated = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, safePage]);

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
    categories,
    filters,
    totalPages,
    currentPage: safePage,
    totalCount: filtered.length,
    updateFilter,
    clearFilters,
    goToPage,
    addProduct: crud.add,
    updateProduct: crud.update,
    deleteProduct: crud.remove,
  };
}
