import { Search, Settings, User } from "lucide-react";
import { StockAlertsBell } from "./header/StockAlertsBell";
import type { StockRow } from "../types";

type TopNavBarProps = {
  rows?: StockRow[];
};

/** Barra superior fija con glassmorphism.
 *  Contiene: buscador global, alertas de stock, configuración y perfil.
 *  Los iconos sin texto llevan aria-label para accesibilidad.
 *  Los iconos decorativos llevan aria-hidden="true". */
export function TopNavBar({ rows }: TopNavBarProps) {
  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 bg-[#FFF7F9]/80 backdrop-blur-md z-50 border-b border-[#E5E7EB] shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-[20px] font-semibold tracking-tight text-[#984258]">
          Calzados Millas
        </span>
      </div>
      <div className="flex-1 max-w-xl mx-8">
        <div className="relative group">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#544245]" aria-hidden="true" />
          <input
            className="w-full pl-10 pr-4 py-2 bg-[#FFF0F6] rounded-full border-none outline-none text-[14px] text-[#251721] placeholder:text-[#867275]/50 transition-all focus:ring-2 focus:ring-[#984258]/20 focus:scale-[1.02]"
            placeholder="Buscar en inventario..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <StockAlertsBell rows={rows} />
        <button className="p-2 text-[#544245] hover:text-[#984258] hover:bg-[#F5DCE9]/50 rounded-lg transition-all" aria-label="Configuración">
          <Settings size={20} />
        </button>
        <div className="h-8 w-px bg-[#E5E7EB] mx-2" />
        <div className="flex items-center gap-2">
          <div className="text-right hidden sm:block">
            <p className="text-[12px] font-bold text-[#251721]">Admin</p>
            <p className="text-[10px] text-[#544245]">Gestor de tienda</p>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-[#E8839A] overflow-hidden bg-[#FBE1EF] flex items-center justify-center">
            <User size={20} className="text-[#984258]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </header>
  );
}
