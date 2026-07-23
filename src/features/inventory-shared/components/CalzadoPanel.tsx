import { useState, useMemo } from "react";
import { Package, Wallet, AlertTriangle, AlertCircle, Pencil, Trash2, ShoppingCart, Lock } from "lucide-react";
import { AddProductModal } from "./AddProductModal";
import { PRODUCT_PLACEHOLDER_IMAGE } from "../constants";
import type { StockRow } from "../types";
import type { StockFilter } from "./InventoryManagementLayout";
import { getBotinesInventory } from "@/features/gestion-botines/services/botines.service";
import { getSandaliasInventory } from "@/features/gestion-sandalias/services/sandalias.service";

type CalzadoPanelProps = {
  rows?: StockRow[];
  inventoryTitle?: string;
  unifiedFilter?: StockFilter;
  onUnifiedFilterChange?: (f: StockFilter) => void;
};

/** Panel principal de tabla de stock.
 *  Muestra KPIs (total pares, valor, stock bajo, crítico) + tabla scrollable
 *  con tallas, colores, estado y acciones por producto.
 *  Soporta modo unificado (filtro por categoría) y legacy (props directas).
 *  Incluye filtros locales de temporada y stock bajo. */
export function CalzadoPanel({ rows, inventoryTitle, unifiedFilter, onUnifiedFilterChange }: CalzadoPanelProps) {
  const isUnified = unifiedFilter !== undefined;

  // Obtiene filas según el modo: props directas, o merge de botines+sandalias filtrado
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

  const [selectedRow, setSelectedRow] = useState<StockRow | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // KPIs calculados sobre allRows (sin filtros locales)
  const totalPairs = allRows.reduce((sum, row) => sum + row.totalPairs, 0);
  const lowStock = allRows.filter((row) => [row.size1.qty, row.size2.qty, row.size3.qty].some((qty) => qty <= 2)).length;
  const needsBuy = allRows.filter((row) => [row.size1.qty, row.size2.qty, row.size3.qty].some((qty) => qty <= 1)).length;
  const inventoryValue = allRows.reduce((sum, row) => sum + row.totalPairs * 100.44, 0);

  const displayTitle = inventoryTitle ?? (unifiedFilter === "sandalias" ? "Inventario de Sandalias" : unifiedFilter === "botines" ? "Inventario de Botines" : "Tabla de Stock");

  // Filtros locales: temporada (toggle on/off con la primera temporada disponible) y stock bajo
  const [seasonFilter, setSeasonFilter] = useState<string | null>(null);
  const [lowStockFilter, setLowStockFilter] = useState(false);

  // Filas filtradas según estado local (no afecta los KPIs)
  const filteredRows = useMemo(() => {
    let result = allRows;
    if (seasonFilter) {
      result = result.filter(row => row.season === seasonFilter);
    }
    if (lowStockFilter) {
      result = result.filter(row => [row.size1.qty, row.size2.qty, row.size3.qty].some(q => q <= 2));
    }
    return result;
  }, [allRows, seasonFilter, lowStockFilter]);

  return (
    <section className="flex min-h-0 flex-1 flex-col gap-3">
      <div className="grid shrink-0 grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <article className="flex flex-col items-center text-center bg-white rounded-xl p-5 md:p-6 shadow-sm">
          <Package size={28} className="mb-2 text-[#984258]" aria-hidden="true" />
          <p className="kpi-number">{totalPairs}</p>
          <p className="kpi-label">Total Pares en Stock</p>
        </article>
        <article className="flex flex-col items-center text-center bg-white rounded-xl p-5 md:p-6 shadow-sm">
          <Wallet size={28} className="mb-2 text-[#984258]" aria-hidden="true" />
          <p className="kpi-number">S/ {inventoryValue.toFixed(2)}</p>
          <p className="kpi-label">Valor del inventario</p>
        </article>
        <article className="flex flex-col items-center text-center bg-white rounded-xl p-5 md:p-6 shadow-sm">
          <AlertTriangle size={28} className="mb-2 text-[#EAB308]" aria-hidden="true" />
          <p className="kpi-number">{lowStock}</p>
          <p className="kpi-label">Productos en Stock Bajo</p>
        </article>
        <article className="flex flex-col items-center text-center bg-white rounded-xl p-5 md:p-6 shadow-sm">
          <AlertCircle size={28} className="mb-2 text-[#EF4444]" aria-hidden="true" />
          {/* Color rojo condicional para alertar cuando hay stock crítico */}
          <p className="kpi-number" style={needsBuy > 0 ? { color: '#EF4444' } : {}}>{needsBuy}</p>
          <p className="kpi-label">Stock Crítico (Comprar)</p>
        </article>
      </div>

          <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm">
        <div className="shrink-0 border-b border-[#E5E7EB] p-3 md:p-4">
          <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="min-w-0 break-words text-xl font-bold text-[#251721] md:text-2xl">{displayTitle}</h1>
            <button type="button" onClick={() => setShowAddModal(true)} className="border border-[#984258] rounded-lg bg-[#984258] text-white px-4 py-2 text-[14px] font-semibold cursor-pointer hover:bg-[#7A2E45] transition-all w-full shrink-0 sm:w-auto">
              + Agregar Producto
            </button>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
            {isUnified && (
              <div className="flex gap-2">
                {(["todas", "sandalias", "botines"] as StockFilter[]).map((f) => (
                  <button
                    key={f}
                    onClick={() => onUnifiedFilterChange?.(f)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                      unifiedFilter === f
                        ? "bg-[#984258] text-white shadow-sm"
                        : "border border-[#E5E7EB] bg-white text-[#984258] hover:bg-[#FDE2E7]"
                    }`}
                  >
                    {f === "todas" ? "Todas" : f === "sandalias" ? "Sandalias" : "Botines"}
                  </button>
                ))}
              </div>
            )}
            <div className="w-full min-w-0 sm:flex-1 sm:min-w-[10rem]">
              <input
                type="text"
                className="w-full bg-[#FFF0F6] border border-[#E5E7EB] rounded-lg px-4 py-2 text-[14px] text-[#251721] outline-none transition-all focus:ring-1 focus:ring-[#984258] focus:border-[#984258]"
                placeholder="Buscar por modelo o color..."
                aria-label="Buscar por modelo o color"
              />
            </div>
            <button onClick={() => setSeasonFilter(seasonFilter === null ? (allRows[0]?.season ?? null) : null)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                seasonFilter !== null
                  ? "bg-[#984258] text-white shadow-sm"
                  : "border border-[#E5E7EB] bg-white text-[#984258] hover:bg-[#FDE2E7]"
              }`}>
              Todas las temporadas
            </button>
            <button onClick={() => setLowStockFilter(!lowStockFilter)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                lowStockFilter
                  ? "bg-[#EAB308] text-white shadow-sm"
                  : "border border-[#E5E7EB] bg-white text-[#984258] hover:bg-[#FDE2E7]"
              }`}>
              Stock bajo
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-auto p-3 md:p-4 md:pt-3">
          {/* Leyenda de colores: verde (>=4), amarillo (3), rojo (<=2) */}
          <div className="flex items-center gap-4 px-1 pb-2 text-[11px] text-[#544245]" aria-label="Leyenda de colores de stock">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#16A34A]" /> Disponible</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#EAB308]" /> Bajo</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#EF4444]" /> Crítico</span>
          </div>
          <p className="mb-2 text-center text-[11px] text-[#867275] md:hidden">Desliza horizontalmente para ver toda la tabla</p>
          <div className="overflow-x-auto overscroll-x-contain">
          <table className="w-full min-w-[1080px] border-collapse">
            <thead className="bg-[#FFF0F6]">
              <tr>
                <th className="px-4 py-3 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap text-left">Modelo</th>
                <th className="px-4 py-3 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap text-left">Color</th>
                <th className="px-4 py-3 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap text-center">Talla 1</th>
                <th className="px-4 py-3 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap text-center">Talla 2</th>
                <th className="px-4 py-3 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap text-center">Talla 3</th>
                <th className="px-4 py-3 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap text-center">Total Pares</th>
                <th className="px-4 py-3 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap text-left">Proveedor</th>
                <th className="px-4 py-3 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap text-left">Temporada</th>
                <th className="px-4 py-3 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap text-left">Estado</th>
                <th className="px-4 py-3 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {filteredRows.map((row) => (
                <tr
                  key={row.id}
                  className="group hover:bg-[#FBF0F0]/50 transition-all duration-150 hover:translate-x-[4px]"
                  style={{ transition: 'all 0.15s ease' }}
                >
                  <td className="px-4 py-3 text-sm font-bold text-[#251721] cursor-zoom-in" onClick={() => setSelectedRow(row)}>
                    {row.model}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img src={row.image ?? PRODUCT_PLACEHOLDER_IMAGE} alt={`${row.model} ${row.color}`} className="w-11 h-11 rounded-lg border border-[#E5E7EB] object-cover bg-white" />
                      <span className="text-sm font-medium text-[#544245]">{row.color}</span>
                    </div>
                  </td>
                  {[row.size1, row.size2, row.size3].map((size, i) => (
                    <td key={i} className="px-4 py-3 text-center">
                      <div className="inline-flex items-center justify-center gap-1.5">
                        {/* Indicador visual de nivel de stock con tooltip */}
                        <span className={`w-2 h-2 rounded-full shrink-0 ${
                          size.qty >= 4 ? "bg-[#16A34A]" : size.qty >= 3 ? "bg-[#EAB308]" : "bg-[#EF4444]"
                        }`} title={size.qty >= 4 ? "Disponible" : size.qty >= 3 ? "Stock bajo" : "Stock crítico"} />
                        <span className="text-[13px] font-bold text-[#251721]">{size.size}</span>
                        <span className="text-[12px] text-[#544245]">· {size.qty}p</span>
                        <button type="button" className="p-1 text-[#867275] hover:text-[#984258] hover:bg-[#984258]/5 rounded-full transition-all cursor-pointer" aria-label="Vender">
                          <ShoppingCart size={14} />
                        </button>
                      </div>
                    </td>
                  ))}
                  <td className="px-4 py-3 text-center text-lg font-extrabold text-[#984258]">{row.totalPairs}</td>
                  <td className="px-4 py-3 text-[13px] text-[#544245]">{row.provider ?? "—"}</td>
                  <td className="px-4 py-3 text-[13px] text-[#867275]">{row.season}</td>
                  <td className="px-4 py-3">
                    {/* Badge de estado: Activo (verde con punto) / Bloqueado (gris con candado) */}
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                      row.status === "Activo"
                        ? "bg-[#16A34A]/10 text-[#16A34A]"
                        : "bg-[#6B7280]/15 text-[#6B7280]"
                    }`}>
                      {row.status === "Bloqueado" ? (
                        <Lock size={12} className="mr-1.5" />
                      ) : (
                        <span className={`w-1.5 h-1.5 rounded-full mr-2 ${row.status === "Activo" ? "bg-[#16A34A]" : "bg-[#6B7280]"}`} />
                      )}
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-2">
                      <button type="button" className="p-2 text-[#984258] hover:bg-[#984258]/5 rounded-full transition-colors cursor-pointer" aria-label="Editar">
                        <Pencil size={16} />
                      </button>
                      <button type="button" className="p-2 text-[#867275] hover:text-[#EF4444] hover:bg-[#EF4444]/5 rounded-full transition-colors cursor-pointer" aria-label="Eliminar">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
      {/* Modal de detalle del producto al hacer clic en el nombre */}
      {selectedRow ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelectedRow(null)}>
          <article
            className="product-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Detalles de ${selectedRow.model}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="modal-close-btn" onClick={() => setSelectedRow(null)} aria-label="Cerrar modal">
              x
            </button>
            <img
              src={selectedRow.image ?? PRODUCT_PLACEHOLDER_IMAGE}
              alt={selectedRow.model}
              className="modal-photo"
            />
            <h3 className="modal-title">{selectedRow.model}</h3>
            <p className="modal-subtitle">{selectedRow.color}</p>
            <div className="modal-specs">
              <p>
                <strong>Proveedor:</strong> {selectedRow.provider ?? "No registrado"}
              </p>
              <p>
                <strong>Temporada:</strong> {selectedRow.season}
              </p>
              <p>
                <strong>Stock total:</strong> {selectedRow.totalPairs} pares
              </p>
              <p>
                <strong>Total vendido:</strong> {selectedRow.soldTotal ?? 0} pares
              </p>
              <p>
                <strong>Tallas:</strong> {selectedRow.size1.size} ({selectedRow.size1.qty}), {selectedRow.size2.size} (
                {selectedRow.size2.qty}), {selectedRow.size3.size} ({selectedRow.size3.qty})
              </p>
            </div>
          </article>
        </div>
      ) : null}
      <AddProductModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={(data) => {
          console.log("Nuevo producto:", data);
          setShowAddModal(false);
        }}
      />
    </section>
  );
}
