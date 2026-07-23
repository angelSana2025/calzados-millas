import { NavLink } from "react-router-dom";
import { LayoutGrid, Package, BarChart3, BarChart, Flower2, PlusCircle, HelpCircle, LogOut, Mountain } from "lucide-react";
import { ROUTES } from "@/core";
import type { InventorySection, StockRow } from "../types";
import type { ViewCategory } from "./InventoryManagementLayout";

// Props para el modo legacy (sección fija sin alertas — ahora en el header)
type LegacyProps = {
  rows: StockRow[];
  currentSection: InventorySection;
  activeView?: never;
  onViewChange?: never;
};

// Props para el modo unificado (cambio de vistas por botones)
type UnifiedProps = {
  activeView: ViewCategory;
  onViewChange: (view: ViewCategory) => void;
  rows?: never;
  currentSection?: never;
};

// Discriminated union: la presencia de activeView determina el modo
type InventorySidebarProps = LegacyProps | UnifiedProps;

// Iconos y etiquetas de navegación en modo unificado
const NAV_ITEMS: { view: ViewCategory; label: string; icon: React.ReactNode }[] = [
  { view: "product-grid",  label: "Cuadrícula",  icon: <LayoutGrid size={18} /> },
  { view: "stock-table",   label: "Stock",        icon: <Package size={18} /> },
  { view: "dashboard",     label: "Dashboard",    icon: <BarChart3 size={18} /> },
  { view: "sales-report",  label: "Ventas",       icon: <BarChart size={18} /> },
];

// Enlaces a las secciones del inventario legacy
const SECTION_LINKS: { section: InventorySection; label: string; to: string }[] = [
  { section: "sandalias", label: "Calzado / Sandalias", to: ROUTES.gestionSandalias },
  { section: "botines", label: "Botines", to: ROUTES.gestionBotines },
];

/** Sidebar de navegación con dos modos:
 *  - Unificado: botones para cambiar entre vistas (cuadrícula, stock, dashboard, ventas)
 *  - Legacy: enlaces a secciones (las alertas de stock están en el header) */
export function InventorySidebar(props: InventorySidebarProps) {
  // Detecta el modo por la presencia de activeView en props
  const isUnified = "activeView" in props;

  if (isUnified) {
    const { activeView, onViewChange } = props as UnifiedProps;
    return (
      <aside className="flex flex-col h-full">
        <div className="mb-3 px-2">
          <p className="text-[10px] font-bold text-[#867275] uppercase tracking-widest mb-4">Gestión</p>
          <nav className="space-y-1">
            {NAV_ITEMS.map(({ view, label, icon }) => (
              <button
                key={view}
                onClick={() => onViewChange(view)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-left w-full ${
                  activeView === view
                    ? "bg-[#E8839A] text-[#671c32] font-bold shadow-sm"
                    : "text-[#544245] hover:bg-[#F5DCE9]/50"
                }`}
              >
                {icon}
                <span className="text-[14px] font-medium">{label}</span>
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-auto pt-4 border-t border-[#E5E7EB]">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-[#984258] bg-[#984258]/5 hover:bg-[#984258]/10 rounded-lg font-bold transition-all mb-4">
            <PlusCircle size={18} />
            <span className="text-[14px] font-medium">Registrar Producto</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-[#544245] hover:bg-[#F5DCE9]/50 rounded-lg transition-all text-left">
            <HelpCircle size={18} aria-hidden="true" />
            <span className="text-[14px] font-medium">Centro de ayuda</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-[#544245] hover:bg-[#F5DCE9]/50 rounded-lg transition-all text-left">
            <LogOut size={18} aria-hidden="true" />
            <span className="text-[14px] font-medium">Cerrar sesión</span>
          </button>
        </div>
      </aside>
    );
  }

  const { currentSection } = props as LegacyProps;

  return (
    <aside className="flex flex-col h-full">
      <div className="mb-3 px-2">
        <p className="text-[10px] font-bold text-[#867275] uppercase tracking-widest mb-4">Gestión</p>
        <nav className="space-y-1">
          {SECTION_LINKS.map(({ section, label, to }) => (
            <NavLink
              key={section}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-left w-full ${
                  isActive || section === currentSection
                    ? "bg-[#E8839A] text-[#671c32] font-bold shadow-sm"
                    : "text-[#544245] hover:bg-[#F5DCE9]/50"
                }`
              }
              end
            >
              {section === "sandalias" ? <Flower2 size={18} /> : <Mountain size={18} />}
              <span className="text-[14px] font-medium">{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="mt-auto pt-4 border-t border-[#E5E7EB] px-2">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-[#984258] bg-[#984258]/5 hover:bg-[#984258]/10 rounded-lg font-bold transition-all mb-4 text-left">
          <PlusCircle size={18} />
          <span className="text-[14px] font-medium">Registrar Producto</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 text-[#544245] hover:bg-[#F5DCE9]/50 rounded-lg transition-all text-left">
          <HelpCircle size={18} aria-hidden="true" />
          <span className="text-[14px] font-medium">Centro de ayuda</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 text-[#544245] hover:bg-[#F5DCE9]/50 rounded-lg transition-all text-left">
          <LogOut size={18} aria-hidden="true" />
          <span className="text-[14px] font-medium">Cerrar sesión</span>
        </button>
      </div>
    </aside>
  );
}
