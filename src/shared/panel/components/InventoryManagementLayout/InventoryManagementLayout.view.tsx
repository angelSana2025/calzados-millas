import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Menu, PanelLeftClose, Search, User } from "lucide-react";
import { ROUTES } from "@/core";
import type { InventoryManagementLayoutLogic } from "../../hooks/useInventoryManagementLayout";
import type { StockRow } from "../../types";
import { InventorySidebar } from "../InventorySidebar/InventorySidebar";
import { StockAlertsBell } from "../StockAlertsBell/StockAlertsBell";

type InventoryManagementLayoutViewProps = InventoryManagementLayoutLogic & {
  title: string;
  rows: StockRow[];
  children?: ReactNode;
  noFooter?: boolean;
};

export function InventoryManagementLayoutView({
  title,
  rows,
  children,
  noFooter = true,
  sidebarOpen,
  toggleSidebar,
}: InventoryManagementLayoutViewProps) {
  return (
    <div className="h-dvh overflow-hidden bg-[#FBF0F0] text-[#251721]">
      <header className="fixed top-0 w-full flex justify-between items-center px-4 md:px-6 h-14 bg-[#FFF7F9]/80 backdrop-blur-md z-50 border-b border-[#E5E7EB] shadow-sm">
        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={toggleSidebar}
            className="p-2 rounded-lg text-[#544245] hover:text-[#984258] hover:bg-[#F5DCE9]/50 transition-all cursor-pointer"
            aria-label={sidebarOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={sidebarOpen}
          >
            {sidebarOpen ? <PanelLeftClose size={20} /> : <Menu size={20} />}
          </button>
          <span className="text-[18px] font-semibold tracking-tight text-[#984258]">
            Calzados Millas
          </span>
        </div>
        <div className="flex-1 max-w-xl mx-4 md:mx-8 hidden sm:block">
          <div className="relative group">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#544245]"
              aria-hidden="true"
            />
            <input
              className="w-full pl-9 pr-4 py-1.5 bg-[#FFF0F6] rounded-full border-none outline-none text-[13px] text-[#251721] placeholder:text-[#867275]/50 transition-all focus:ring-2 focus:ring-[#984258]/20"
              placeholder="Buscar..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <StockAlertsBell rows={rows} />
          <Link
            to={ROUTES.home}
            className="hidden md:inline-flex px-3 py-1.5 border border-[#984258] !text-[#984258] no-underline font-bold rounded-lg hover:bg-[#984258]/5 hover:!text-[#7A2E45] transition-all text-[12px]"
          >
            Volver al inicio
          </Link>
          <div className="h-7 w-px bg-[#E5E7EB] mx-1 hidden sm:block" />
          <div className="flex items-center gap-2">
            <div className="text-right hidden lg:block">
              <p className="text-[11px] font-bold text-[#251721]">Admin</p>
              <p className="text-[9px] text-[#544245]">Store Manager</p>
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-[#E8839A] overflow-hidden bg-[#FBE1EF] flex items-center justify-center">
              <User size={16} className="text-[#984258]" aria-hidden="true" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-full pt-14">
        <aside
          className={`fixed left-0 top-14 bottom-0 w-56 bg-[#FFF7F9] border-r border-[#E5E7EB] flex flex-col p-3 z-40 transition-transform duration-300 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          aria-hidden={!sidebarOpen}
        >
          <InventorySidebar />
        </aside>
        <main
          className={`flex h-full min-h-0 flex-1 flex-col overflow-hidden p-3 md:p-4 transition-[margin] duration-300 ease-in-out ${
            sidebarOpen ? "ml-56" : "ml-0"
          }`}
        >
          <div className="mb-2 shrink-0">
            <h1 className="text-[20px] font-bold text-[#251721] tracking-tight md:text-[22px]">
              {title}
            </h1>
          </div>
          <div className="flex min-h-0 flex-1 flex-col overflow-hidden">{children}</div>
          {!noFooter && (
            <footer className="w-full shrink-0 py-3 flex justify-between items-center text-[#544245] text-[11px]">
              <div>
                <span className="font-bold text-[#984258] mr-2">Calzados Millas</span>
                <span>&copy; 2024. Todos los derechos reservados.</span>
              </div>
            </footer>
          )}
        </main>
      </div>
    </div>
  );
}
