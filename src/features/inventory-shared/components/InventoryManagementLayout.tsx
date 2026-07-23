import { useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Search, User } from "lucide-react";
import { ROUTES } from "@/core";
import type { StockRow } from "../types";
import { InventorySidebar } from "./InventorySidebar";
import { CalzadoPanel } from "./CalzadoPanel";
import { ProductGrid } from "./ProductGrid";
import { DashboardPanel } from "./DashboardPanel";
import { TopNavBar } from "./TopNavBar";
import { StockAlertsBell } from "./header/StockAlertsBell";

/** Vistas disponibles en el sidebar unificado */
export type ViewCategory = "product-grid" | "stock-table" | "dashboard" | "sales-report";
/** Filtro de categoría para los paneles unificados */
export type StockFilter = "todas" | "sandalias" | "botines";

type InventoryManagementLayoutProps = {
  title: string;
  /** En modo legacy, indica si es "sandalias" o "botines" */
  section?: "sandalias" | "botines";
  /** Filas de StockRow para modo legacy */
  rows?: StockRow[];
  /** Contenido personalizado (reemplaza UnifiedContent) */
  children?: ReactNode;
  /** Si es true, usa layout unificado con TopNavBar + sidebar de vistas */
  unified?: boolean;
  /** Si es true, oculta el footer */
  noFooter?: boolean;
};

/** Layout maestro de inventario con dos modos:
 *  - Unificado (unified=true): TopNavBar + sidebar con cambio de vistas
 *  - Legacy (unified=false/section definido): header inline + sidebar por sección */
export function InventoryManagementLayout({
  title,
  section,
  rows,
  children,
  unified,
  noFooter,
}: InventoryManagementLayoutProps) {
  // Modo unificado si explicitamente se pide o no hay section definida
  const isUnified = unified ?? !section;

  const [activeView, setActiveView] = useState<ViewCategory>("stock-table");
  const [stockFilter, setStockFilter] = useState<StockFilter>("todas");

  if (isUnified) {
    return (
      <div className="min-h-screen bg-[#FBF0F0] text-[#251721]">
        <TopNavBar />
        <div className="flex">
          <aside className="fixed left-0 top-16 bottom-0 w-64 bg-[#FFF7F9] border-r border-[#E5E7EB] flex flex-col p-4 z-40">
            <InventorySidebar
              activeView={activeView}
              onViewChange={setActiveView}
            />
          </aside>
          <main className="ml-64 mt-16 p-6 min-h-[calc(100vh-64px)] flex-1">
            {children ?? (
              <UnifiedContent
                activeView={activeView}
                stockFilter={stockFilter}
                onStockFilterChange={setStockFilter}
              />
            )}
            {!noFooter && (
            <footer className="w-full py-6 flex justify-between items-center text-[#544245] text-[12px]">
                <div>
                  <span className="font-bold text-[#984258] mr-2">Calzados Millas</span>
                  <span>&copy; 2024. Todos los derechos reservados.</span>
                </div>
                <div className="flex gap-4">
                  <a className="hover:text-[#984258] transition-colors" href="#">Política de privacidad</a>
                  <a className="hover:text-[#984258] transition-colors" href="#">Términos del servicio</a>
                  <a className="hover:text-[#984258] transition-colors" href="#">Soporte</a>
                </div>
              </footer>
            )}
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF0F0] text-[#251721]">
      <header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 bg-[#FFF7F9]/80 backdrop-blur-md z-50 border-b border-[#E5E7EB] shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-[20px] font-semibold tracking-tight text-[#984258]">Calzados Millas</span>
        </div>
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative group">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#544245]" aria-hidden="true" />
            <input className="w-full pl-10 pr-4 py-2 bg-[#FFF0F6] rounded-full border-none outline-none text-[14px] text-[#251721] placeholder:text-[#867275]/50 transition-all focus:ring-2 focus:ring-[#984258]/20 focus:scale-[1.02]" placeholder="Buscar..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <StockAlertsBell rows={rows!} />
          <Link to={ROUTES.home} className="px-4 py-2 border border-[#984258] text-[#984258] font-bold rounded-lg hover:bg-[#984258]/5 transition-all text-[13px]">
            Volver al inicio
          </Link>
          <div className="h-8 w-px bg-[#E5E7EB] mx-1" />
          <div className="flex items-center gap-2">
            <div className="text-right hidden sm:block">
              <p className="text-[12px] font-bold text-[#251721]">Admin</p>
              <p className="text-[10px] text-[#544245]">Store Manager</p>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-[#E8839A] overflow-hidden bg-[#FBE1EF] flex items-center justify-center">
              <User size={20} className="text-[#984258]" aria-hidden="true" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="fixed left-0 top-16 bottom-0 w-64 bg-[#FFF7F9] border-r border-[#E5E7EB] flex flex-col p-4 z-40">
          <InventorySidebar
            rows={rows!}
            currentSection={section!}
          />
        </aside>
        <main className="ml-64 mt-16 p-6 min-h-[calc(100vh-64px)] flex-1">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h1 className="text-[28px] font-bold text-[#251721] tracking-tight">{title}</h1>
            </div>
          </div>
          {children}
          {!noFooter && (
            <footer className="w-full py-6 flex justify-between items-center text-[#544245] text-[12px]">
              <div>
                <span className="font-bold text-[#984258] mr-2">Calzados Millas</span>
                <span>&copy; 2024. Todos los derechos reservados.</span>
              </div>
              <div className="flex gap-4">
                <a className="hover:text-[#984258] transition-colors" href="#">Política de privacidad</a>
                <a className="hover:text-[#984258] transition-colors" href="#">Términos del servicio</a>
                <a className="hover:text-[#984258] transition-colors" href="#">Soporte</a>
              </div>
            </footer>
          )}
        </main>
      </div>
    </div>
  );
}

/** Contenido interno del modo unificado.
 *  Renderiza el componente según la vista activa (activeView).
 *  Soporta: product-grid, stock-table, dashboard y sales-report (placeholder). */
function UnifiedContent({
  activeView,
  stockFilter,
  onStockFilterChange,
}: {
  activeView: ViewCategory;
  stockFilter: StockFilter;
  onStockFilterChange: (f: StockFilter) => void;
}) {
  switch (activeView) {
    case "product-grid":
      return <ProductGrid unifiedFilter={stockFilter} onUnifiedFilterChange={onStockFilterChange} />;
    case "stock-table":
      return <CalzadoPanel unifiedFilter={stockFilter} onUnifiedFilterChange={onStockFilterChange} />;
    case "dashboard":
      return <DashboardPanel />;
    default:
      return (
        <div className="flex items-center justify-center h-64 text-[#544245]">
          <p className="text-lg font-medium">Sección en construcción</p>
        </div>
      );
  }
}
