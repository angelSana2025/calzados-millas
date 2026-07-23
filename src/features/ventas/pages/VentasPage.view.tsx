import type { VentasFilters, VentaProduct } from "../types/ventas.types";
import { InventoryManagementLayout } from "@/features/inventory-shared";
import { FilterBar } from "../components/FilterBar";
import { ProductTable } from "../components/ProductTable";
import { Pagination } from "../components/Pagination";

const PAGE_SIZE = 4;

type VentasPageViewProps = {
  products: VentaProduct[];
  categories: string[];
  filters: VentasFilters;
  totalPages: number;
  currentPage: number;
  totalCount: number;
  onFilterChange: (key: keyof VentasFilters, value: string) => void;
  onClearFilters: () => void;
  onPageChange: (page: number) => void;
};

export function VentasPageView({
  products,
  categories,
  filters,
  totalPages,
  currentPage,
  totalCount,
  onFilterChange,
  onClearFilters,
  onPageChange,
}: VentasPageViewProps) {
  return (
    <InventoryManagementLayout title="Reportes de Ventas" unified>
      <div className="flex flex-col gap-6">

        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-[28px] font-bold text-[#251721] tracking-tight">
              Control de Stock
            </h1>
            <p className="text-[#544245] text-[14px] font-medium">
              Gestiona y monitorea los niveles de inventario de calzado.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-2 border border-[#984258] text-[#984258] font-bold rounded-lg hover:bg-[#984258]/5 transition-all text-[14px] uppercase tracking-wider cursor-pointer">
              Pedido
            </button>
            <button className="px-6 py-2 bg-[#984258] text-white font-bold rounded-lg hover:bg-[#7A2E45] transition-all text-[14px] shadow-md uppercase tracking-wider cursor-pointer">
              Filtrar
            </button>
          </div>
        </div>

        <FilterBar
          filters={filters}
          categories={categories}
          onFilterChange={onFilterChange}
          onClear={onClearFilters}
        />

        <div className="bg-[#FFF7F9] rounded-2xl shadow-sm border border-[#E5E7EB] overflow-hidden">
          <ProductTable products={products} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalCount={totalCount}
            pageSize={PAGE_SIZE}
            onPageChange={onPageChange}
          />
        </div>

      </div>
    </InventoryManagementLayout>
  );
}
