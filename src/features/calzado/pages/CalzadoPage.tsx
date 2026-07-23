import { useCalzado } from "../hooks/useCalzado";
import { CalzadoPageView } from "./CalzadoPage.view";

export function CalzadoPage() {
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
    addProduct,
    updateProduct,
    deleteProduct,
  } = useCalzado();

  return (
    <CalzadoPageView
      products={products}
      categories={categories}
      filters={filters}
      totalPages={totalPages}
      currentPage={currentPage}
      totalCount={totalCount}
      onFilterChange={updateFilter}
      onClearFilters={clearFilters}
      onPageChange={goToPage}
      onAddProduct={addProduct}
      onEditProduct={updateProduct}
      onDeleteProduct={deleteProduct}
    />
  );
}
