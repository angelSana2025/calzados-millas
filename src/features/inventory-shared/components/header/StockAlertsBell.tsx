import { useRef, useState, useEffect, useCallback } from "react";
import { Bell } from "lucide-react";
import { useStockAlerts } from "../../hooks/useStockAlerts";
import type { StockRow } from "../../types";

type Props = {
  rows?: StockRow[];
};

/** Ícono de campana con badge de alertas de stock.
 *  Al hacer clic despliega un popover con todas las alertas.
 *  Compatible con modo legacy (recibe rows) y unificado (sin rows). */
export function StockAlertsBell({ rows }: Props) {
  const { alerts, totalCount, highestSeverity } = useStockAlerts(rows);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  const close = useCallback(() => setIsOpen(false), []);

  // Cerrar al hacer clic fuera
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, close]);

  // Cerrar con Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, close]);

  const badgeColor =
    highestSeverity === "critico"
      ? "bg-[#EF4444]"
      : highestSeverity === "bajo"
        ? "bg-[#EAB308]"
        : "bg-[#867275]";

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={toggle}
        className="p-2 text-[#544245] hover:text-[#984258] hover:bg-[#F5DCE9]/50 rounded-lg transition-all relative"
        aria-label="Alertas de stock"
        aria-expanded={isOpen}
      >
        <Bell size={20} />
        {totalCount > 0 && (
          <span
            className={`absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[18px] h-[18px] rounded-full text-[10px] font-bold text-white px-1 leading-none ${badgeColor}`}
          >
            {totalCount > 9 ? "9+" : totalCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div
          className="absolute right-0 top-full mt-2 w-80 z-50 bg-[#FFF7F9] border border-[#E5E7EB] rounded-2xl shadow-lg overflow-hidden"
          role="menu"
        >
          <div className="px-4 py-3 border-b border-[#E5E7EB]">
            <p className="text-[13px] font-bold text-[#251721]">
              Alertas de stock ({totalCount})
            </p>
          </div>

          {alerts.length === 0 ? (
            <div className="px-4 py-8 text-center text-[13px] text-[#867275]">
              No hay alertas de stock
            </div>
          ) : (
            <div className="max-h-[320px] overflow-y-auto custom-scrollbar p-3 space-y-2">
              {alerts.map(({ row, lowSizes }) => (
                <div key={row.id} className="bg-white border border-[#E5E7EB] rounded-xl p-3">
                  <p className="text-[13px] font-semibold text-[#251721] leading-tight">{row.model}</p>
                  <p className="text-[11px] text-[#867275] mb-1.5">Color: {row.color}</p>
                  {lowSizes.map((size) => (
                    <div key={`${row.id}-${size.size}`} className="flex items-center justify-between gap-2">
                      <span className="text-[12px] text-[#544245]">Talla {size.size}</span>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full text-white ${
                        size.qty <= 2 ? "bg-[#EF4444]" : "bg-[#EAB308]"
                      }`}>
                        {size.qty} pares
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
