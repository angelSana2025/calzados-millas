import { RefreshCw } from "lucide-react";
import type { VentasFilters } from "../types/ventas.types";

type Props = {
  filters: VentasFilters;
  categories: string[];
  onFilterChange: (key: keyof VentasFilters, value: string) => void;
  onClear: () => void;
};

/*
 * Barra de 4 filtros en grid responsivo:
 *   - Búsqueda textual
 *   - Categoría (dropdown)
 *   - Estado de stock (dropdown)
 *   - Botón para limpiar todo
 *
 * Cualquier cambio en los filtros dispara onFilterChange,
 * que resetea la paginación a la página 1 en el hook.
 */
export function FilterBar({ filters, categories, onFilterChange, onClear }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-[#FFF7F9] p-4 rounded-xl shadow-sm border border-[#E5E7EB]">

      <div className="relative">
        <label className="block text-[10px] font-bold text-[#867275] uppercase mb-1 ml-1">
          Buscar producto
        </label>
        <input
          value={filters.search}
          onChange={(e) => onFilterChange("search", e.target.value)}
          className="w-full bg-[#FFF0F6] border border-[#E5E7EB] rounded-lg px-4 py-2 text-[14px] outline-none transition-all focus:ring-1 focus:ring-[#984258] focus:border-[#984258]"
          placeholder="Nombre o SKU..."
          type="text"
        />
      </div>

      <div>
        <label className="block text-[10px] font-bold text-[#867275] uppercase mb-1 ml-1">
          Categoría
        </label>
        <select
          value={filters.category}
          onChange={(e) => onFilterChange("category", e.target.value)}
          className="w-full bg-[#FFF0F6] border border-[#E5E7EB] rounded-lg px-4 py-2 text-[14px] outline-none transition-all focus:ring-1 focus:ring-[#984258] focus:border-[#984258] appearance-none cursor-pointer"
        >
          <option value="">Todas las categorías</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-[10px] font-bold text-[#867275] uppercase mb-1 ml-1">
          Estado de stock
        </label>
        <select
          value={filters.status}
          onChange={(e) => onFilterChange("status", e.target.value)}
          className="w-full bg-[#FFF0F6] border border-[#E5E7EB] rounded-lg px-4 py-2 text-[14px] outline-none transition-all focus:ring-1 focus:ring-[#984258] focus:border-[#984258] appearance-none cursor-pointer"
        >
          <option value="">Todos los estados</option>
          <option value="optimal">Óptimo</option>
          <option value="low">Bajo</option>
          <option value="critical">Crítico</option>
        </select>
      </div>

      <div className="flex items-end">
        <button
          onClick={onClear}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 text-[#544245] hover:text-[#984258] transition-colors cursor-pointer"
        >
          <RefreshCw size={16} aria-hidden="true" />
          <span className="text-[14px] font-bold uppercase tracking-wider">Limpiar filtros</span>
        </button>
      </div>
    </div>
  );
}
