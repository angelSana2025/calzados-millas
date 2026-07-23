import { useState, useMemo } from "react";
import type { StockRow } from "../types";
import type { StockFilter } from "./InventoryManagementLayout";
import { PRODUCT_PLACEHOLDER_IMAGE } from "../constants";
import { getBotinesInventory } from "@/features/gestion-botines/services/botines.service";
import { getSandaliasInventory } from "@/features/gestion-sandalias/services/sandalias.service";

type ProductGridProps = {
  rows?: StockRow[];
  unifiedFilter?: StockFilter;
  onUnifiedFilterChange?: (f: StockFilter) => void;
};

/** Vista en cuadrícula de productos (alternativa a la tabla).
 *  Muestra tarjetas con imagen, modelo, color, estado y total de pares.
 *  Al hacer clic en una tarjeta abre un modal con detalles completos. */
export function ProductGrid({ rows, unifiedFilter, onUnifiedFilterChange }: ProductGridProps) {
  const isUnified = unifiedFilter !== undefined;

  const allRows = useMemo(() => {
    if (rows) return rows;
    const botines = getBotinesInventory();
    const sandalias = getSandaliasInventory();
    switch (unifiedFilter) {
      case "botines": return botines;
      case "sandalias": return sandalias;
      default: return [...botines, ...sandalias];
    }
  }, [rows, unifiedFilter]);

  const [selected, setSelected] = useState<StockRow | null>(null);

  return (
    <section className="flex min-h-0 flex-1 flex-col gap-4">
      {isUnified && (
        <div className="flex gap-2">
          {(["todas", "sandalias", "botines"] as StockFilter[]).map((f) => (
            <button
              key={f}
              onClick={() => onUnifiedFilterChange?.(f)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                unifiedFilter === f
                  ? "bg-[#E8839A] text-[#671c32] shadow-sm"
                  : "border border-[#E5E7EB] bg-[#FFF7F9] text-[#544245] hover:bg-[#F5DCE9]/50"
              }`}
            >
              {f === "todas" ? "Todas" : f === "sandalias" ? "Sandalias" : "Botines"}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {allRows.map((row) => (
          <article
            key={row.id}
            onClick={() => setSelected(row)}
            className="group rounded-2xl bg-white border border-[#E5E7EB] p-4 shadow-sm hover:shadow-md transition-all cursor-pointer hover:border-[#E8839A]"
          >
            <div className="w-full aspect-square rounded-xl bg-[#FBE1EF] overflow-hidden mb-3 flex items-center justify-center">
              <img
                src={row.image ?? PRODUCT_PLACEHOLDER_IMAGE}
                alt={`${row.model} ${row.color}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-sm font-bold text-[#251721] truncate">{row.model}</h3>
            <p className="text-xs text-[#867275] font-medium">{row.color}</p>
            <div className="flex items-center justify-between mt-2">
              <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${
                row.status === "Activo" ? "bg-[#16A34A]/10 text-[#16A34A]" : "bg-[#6B7280]/15 text-[#6B7280]"
              }`}>
                {row.status}
              </span>
              <span className="text-sm font-extrabold text-[#984258]">{row.totalPairs} pares</span>
            </div>
          </article>
        ))}
      </div>

      {selected && (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelected(null)}>
          <article
            className="product-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Detalles de ${selected.model}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="modal-close-btn" onClick={() => setSelected(null)} aria-label="Cerrar modal">x</button>
            <img src={selected.image ?? PRODUCT_PLACEHOLDER_IMAGE} alt={selected.model} className="modal-photo" />
            <h3 className="modal-title">{selected.model}</h3>
            <p className="modal-subtitle">{selected.color}</p>
            <div className="modal-specs">
              <p><strong>Proveedor:</strong> {selected.provider ?? "No registrado"}</p>
              <p><strong>Temporada:</strong> {selected.season}</p>
              <p><strong>Stock total:</strong> {selected.totalPairs} pares</p>
              <p><strong>Total vendido:</strong> {selected.soldTotal ?? 0} pares</p>
              <p><strong>Tallas:</strong> {selected.size1.size} ({selected.size1.qty}), {selected.size2.size} ({selected.size2.qty}), {selected.size3.size} ({selected.size3.qty})</p>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
