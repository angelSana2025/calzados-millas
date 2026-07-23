import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Search, User } from "lucide-react";
import { ROUTES } from "@/core";
import type { StockRow } from "../types";
import { InventorySidebar } from "./InventorySidebar";
import { TopNavBar } from "./TopNavBar";
import { StockAlertsBell } from "./header/StockAlertsBell";

/** Filtro de categoría para los paneles unificados */
export type StockFilter = "todas" | "sandalias" | "botines";

type InventoryManagementLayoutProps = {
  title: string;
  /** En modo legacy (sandalias/botines), define la sección activa */
  section?: "sandalias" | "botines";
  /** Filas de StockRow para modo legacy (StockAlertsBell) */
  rows?: StockRow[];
  /** Contenido principal de la página */
  children?: ReactNode;
  /** Si es true, usa TopNavBar en vez del header legacy */
  unified?: boolean;
  /** Si es true, oculta el footer */
  noFooter?: boolean;
};

export function InventoryManagementLayout({
  title,
  section,
  rows,
  children,
  unified,
  noFooter,
}: InventoryManagementLayoutProps) {
  const isUnified = unified ?? !section;

  return (
    <div className="min-h-screen bg-[#FBF0F0] text-[#251721]">
      {isUnified ? (
        <TopNavBar />
      ) : (
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
      )}

      <div className="flex">
        <aside className="fixed left-0 top-16 bottom-0 w-64 bg-[#FFF7F9] border-r border-[#E5E7EB] flex flex-col p-4 z-40">
          <InventorySidebar />
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
