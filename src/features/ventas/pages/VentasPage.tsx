/*
 * Contenedor (patrón Container/Presenter).
 *
 * useVentas() devuelve los métodos con nombres semánticos:
 *   updateFilter → onFilterChange
 *   clearFilters → onClearFilters
 *   goToPage     → onPageChange
 *
 * El view recibe solo las props que necesita para renderizar.
 */
import { useVentas } from "../hooks/useVentas";
import { VentasPageView } from "./VentasPage.view";

export function VentasPage() {
  const {
    updateFilter,
    clearFilters,
    goToPage,
    products,
    categories,
    filters,
    totalPages,
    currentPage,
    totalCount,
  } = useVentas();

  return (
    <VentasPageView
      products={products}
      categories={categories}
      filters={filters}
      totalPages={totalPages}
      currentPage={currentPage}
      totalCount={totalCount}
      onFilterChange={updateFilter}
      onClearFilters={clearFilters}
      onPageChange={goToPage}
    />
  );
}
