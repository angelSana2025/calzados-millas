import { useState } from "react";
import { LayoutGrid, Package, List } from "lucide-react";
import type { VentasFilters, VentaProduct } from "../types/calzado.types";
import { InventoryManagementLayout, ProductGrid, CalzadoPanel } from "@/features/inventory-shared";
import { FilterBar } from "../components/FilterBar";
import { ProductTable } from "../components/ProductTable";
import { Pagination } from "../components/Pagination";
import { AddVentaProductModal } from "../components/AddVentaProductModal";
import type { AddVentaProductFormData } from "../components/AddVentaProductModal";

const PAGE_SIZE = 4;

type Tab = "productos" | "cuadricula" | "stock";

const TABS: { key: Tab; label: string; icon: React.ReactNode }[] = [
  { key: "productos", label: "Productos", icon: <List size={16} /> },
  { key: "cuadricula", label: "Cuadrícula", icon: <LayoutGrid size={16} /> },
  { key: "stock", label: "Stock", icon: <Package size={16} /> },
];

type CalzadoPageViewProps = {
  products: VentaProduct[];
  categories: string[];
  filters: VentasFilters;
  totalPages: number;
  currentPage: number;
  totalCount: number;
  onFilterChange: (key: keyof VentasFilters, value: string) => void;
  onClearFilters: () => void;
  onPageChange: (page: number) => void;
  onAddProduct: (data: AddVentaProductFormData) => void;
  onEditProduct: (id: number, data: AddVentaProductFormData) => void;
  onDeleteProduct: (id: number) => void;
};

export function CalzadoPageView({
  products,
  categories,
  filters,
  totalPages,
  currentPage,
  totalCount,
  onFilterChange,
  onClearFilters,
  onPageChange,
  onAddProduct,
  onEditProduct,
  onDeleteProduct,
}: CalzadoPageViewProps) {
  const [activeTab, setActiveTab] = useState<Tab>("productos");
  const [stockFilter, setStockFilter] = useState<"todas" | "sandalias" | "botines">("todas");
  const [modalMode, setModalMode] = useState<{ mode: "add" } | { mode: "edit"; product: VentaProduct } | null>(null);

  const handleModalSubmit = (data: AddVentaProductFormData) => {
    if (modalMode?.mode === "edit") {
      onEditProduct(modalMode.product.id, data);
    } else {
      onAddProduct(data);
    }
    setModalMode(null);
  };

  return (
    <InventoryManagementLayout title="Calzado">
      <div className="flex flex-col gap-6">

        <div className="flex items-center gap-1 bg-[#FFF7F9] border border-[#E5E7EB] rounded-xl p-1 w-fit shadow-sm">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tab.key
                  ? "bg-white text-[#671c32] shadow-sm"
                  : "text-[#867275] hover:text-[#544245]"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "productos" ? (
          <>
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
                <button
                  onClick={() => setModalMode({ mode: "add" })}
                  className="px-6 py-2 bg-[#251721] text-white font-bold rounded-lg hover:bg-[#3a2a32] transition-all text-[14px] shadow-md uppercase tracking-wider cursor-pointer"
                >
                  + Agregar Producto
                </button>
              </div>
            </div>

            <FilterBar
              filters={filters}
              categories={categories}
              onFilterChange={onFilterChange}
              onClear={onClearFilters}
            />

            <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] overflow-hidden">
              <ProductTable
                products={products}
                onEdit={(product) => setModalMode({ mode: "edit", product })}
                onDelete={onDeleteProduct}
              />

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalCount={totalCount}
                pageSize={PAGE_SIZE}
                onPageChange={onPageChange}
              />
            </div>
          </>
        ) : activeTab === "cuadricula" ? (
          <ProductGrid unifiedFilter={stockFilter} onUnifiedFilterChange={setStockFilter} />
        ) : (
          <CalzadoPanel unifiedFilter={stockFilter} onUnifiedFilterChange={setStockFilter} />
        )}

      </div>

      <AddVentaProductModal
        open={modalMode !== null}
        onClose={() => setModalMode(null)}
        onSubmit={handleModalSubmit}
        editingRow={modalMode?.mode === "edit" ? modalMode.product : undefined}
      />
    </InventoryManagementLayout>
  );
}
