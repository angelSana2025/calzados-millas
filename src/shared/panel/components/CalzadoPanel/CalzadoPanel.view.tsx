import {
  AlertCircle,
  AlertTriangle,
  Check,
  Lock,
  Package,
  Pencil,
  ShoppingCart,
  Trash2,
  Wallet,
  X,
} from "lucide-react";
import { PRODUCT_PLACEHOLDER_IMAGE } from "../../constants";
import type { CalzadoPanelViewProps } from "../../hooks/useCalzadoPanel";
import { AddProductModal } from "../AddProductModal/AddProductModal";

export function CalzadoPanelView({
  displayTitle,
  canMutate,
  filteredRows,
  selectedRow,
  deletingId,
  modalMode,
  seasonFilter,
  lowStockFilter,
  totalPairs,
  inventoryValue,
  lowStock,
  needsBuy,
  setSelectedRow,
  setModalMode,
  setDeletingId,
  setLowStockFilter,
  toggleSeasonFilter,
  handleAddSubmit,
  handleDeleteConfirm,
}: CalzadoPanelViewProps) {
  return (
    <section className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-sm">
        <div className="shrink-0 border-b border-[#E5E7EB] p-2.5 md:p-3">
          <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="min-w-0 break-words text-base font-bold text-[#251721] md:text-lg">
              {displayTitle}
            </h2>
            {canMutate && (
              <button
                type="button"
                onClick={() => setModalMode({ mode: "add" })}
                className="border border-[#984258] rounded-lg bg-[#984258] text-white px-3 py-1.5 text-[13px] font-semibold cursor-pointer hover:bg-[#7A2E45] transition-all w-full shrink-0 sm:w-auto"
              >
                + Agregar Producto
              </button>
            )}
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-stretch">
            <div className="w-full min-w-0 sm:flex-1 sm:min-w-[10rem]">
              <input
                type="text"
                className="w-full bg-[#FFF0F6] border border-[#E5E7EB] rounded-lg px-3 py-1.5 text-[13px] text-[#251721] outline-none transition-all focus:ring-1 focus:ring-[#984258] focus:border-[#984258]"
                placeholder="Buscar por modelo o color..."
                aria-label="Buscar por modelo o color"
              />
            </div>
            <button
              type="button"
              onClick={toggleSeasonFilter}
              className={`px-3 py-1.5 rounded-lg text-[13px] font-semibold whitespace-nowrap transition-all ${
                seasonFilter !== null
                  ? "bg-[#984258] text-white shadow-sm"
                  : "border border-[#E5E7EB] bg-white text-[#984258] hover:bg-[#FDE2E7]"
              }`}
            >
              Todas las temporadas
            </button>
            <button
              type="button"
              onClick={() => setLowStockFilter(!lowStockFilter)}
              className={`px-3 py-1.5 rounded-lg text-[13px] font-semibold whitespace-nowrap transition-all ${
                lowStockFilter
                  ? "bg-[#EAB308] text-white shadow-sm"
                  : "border border-[#E5E7EB] bg-white text-[#984258] hover:bg-[#FDE2E7]"
              }`}
            >
              Stock bajo
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-auto p-3 md:p-4 md:pt-3">
          <div
            className="flex items-center gap-4 px-1 pb-2 text-[11px] text-[#544245]"
            aria-label="Leyenda de colores de stock"
          >
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#16A34A]" /> Disponible
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#EAB308]" /> Bajo
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]" /> Crítico
            </span>
          </div>
          <p className="mb-2 text-center text-[11px] text-[#867275] md:hidden">
            Desliza horizontalmente para ver toda la tabla
          </p>
          <div className="overflow-x-auto overscroll-x-contain">
            <table className="w-full min-w-[1080px] border-collapse">
              <thead className="bg-[#FFF0F6]">
                <tr>
                  <th className="px-4 py-3 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap text-left">
                    Modelo
                  </th>
                  <th className="px-4 py-3 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap text-left">
                    Color
                  </th>
                  <th className="px-4 py-3 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap text-center">
                    Talla 1
                  </th>
                  <th className="px-4 py-3 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap text-center">
                    Talla 2
                  </th>
                  <th className="px-4 py-3 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap text-center">
                    Talla 3
                  </th>
                  <th className="px-4 py-3 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap text-center">
                    Total Pares
                  </th>
                  <th className="px-4 py-3 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap text-left">
                    Proveedor
                  </th>
                  <th className="px-4 py-3 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap text-left">
                    Temporada
                  </th>
                  <th className="px-4 py-3 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap text-left">
                    Estado
                  </th>
                  <th className="px-4 py-3 text-[13px] font-semibold text-[#867275] uppercase tracking-[0.02em] whitespace-nowrap text-right">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {filteredRows.map((row) => (
                  <tr
                    key={row.id}
                    className="group hover:bg-[#FBF0F0]/50 transition-all duration-150 hover:translate-x-[4px]"
                    style={{ transition: "all 0.15s ease" }}
                  >
                    <td
                      className="px-4 py-3 text-sm font-bold text-[#251721] cursor-zoom-in"
                      onClick={() => setSelectedRow(row)}
                    >
                      {row.model}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={row.image ?? PRODUCT_PLACEHOLDER_IMAGE}
                          alt={`${row.model} ${row.color}`}
                          className="w-11 h-11 rounded-lg border border-[#E5E7EB] object-cover bg-white"
                        />
                        <span className="text-sm font-medium text-[#544245]">{row.color}</span>
                      </div>
                    </td>
                    {[row.size1, row.size2, row.size3].map((size, i) => (
                      <td key={i} className="px-4 py-3 text-center">
                        <div className="inline-flex items-center justify-center gap-1.5">
                          <span
                            className={`w-2 h-2 rounded-full shrink-0 ${
                              size.qty >= 4
                                ? "bg-[#16A34A]"
                                : size.qty >= 3
                                  ? "bg-[#EAB308]"
                                  : "bg-[#EF4444]"
                            }`}
                            title={
                              size.qty >= 4
                                ? "Disponible"
                                : size.qty >= 3
                                  ? "Stock bajo"
                                  : "Stock crítico"
                            }
                          />
                          <span className="text-[13px] font-bold text-[#251721]">{size.size}</span>
                          <span className="text-[12px] text-[#544245]">· {size.qty}p</span>
                          <button
                            type="button"
                            className="p-1 text-[#867275] hover:text-[#984258] hover:bg-[#984258]/5 rounded-full transition-all cursor-pointer"
                            aria-label="Vender"
                          >
                            <ShoppingCart size={14} />
                          </button>
                        </div>
                      </td>
                    ))}
                    <td className="px-4 py-3 text-center text-lg font-extrabold text-[#984258]">
                      {row.totalPairs}
                    </td>
                    <td className="px-4 py-3 text-[13px] text-[#544245]">{row.provider ?? "—"}</td>
                    <td className="px-4 py-3 text-[13px] text-[#867275]">{row.season}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                          row.status === "Activo"
                            ? "bg-[#16A34A]/10 text-[#16A34A]"
                            : "bg-[#6B7280]/15 text-[#6B7280]"
                        }`}
                      >
                        {row.status === "Bloqueado" ? (
                          <Lock size={12} className="mr-1.5" />
                        ) : (
                          <span
                            className={`w-1.5 h-1.5 rounded-full mr-2 ${
                              row.status === "Activo" ? "bg-[#16A34A]" : "bg-[#6B7280]"
                            }`}
                          />
                        )}
                        {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      {deletingId === row.id ? (
                        <div className="flex justify-end items-center gap-1 text-[12px] text-[#EF4444] font-semibold">
                          <span>¿Eliminar?</span>
                          <button
                            type="button"
                            onClick={() => handleDeleteConfirm(row.id)}
                            className="p-1.5 text-white bg-[#EF4444] rounded-full hover:bg-[#DC2626] transition-colors cursor-pointer"
                            aria-label="Confirmar eliminación"
                          >
                            <Check size={14} />
                          </button>
                          <button
                            type="button"
                            onClick={() => setDeletingId(null)}
                            className="p-1.5 text-[#544245] border border-[#E5E7EB] rounded-full hover:bg-[#FFF0F6] transition-colors cursor-pointer"
                            aria-label="Cancelar eliminación"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ) : (
                        <div className="flex justify-end gap-2">
                          {canMutate && (
                            <>
                              <button
                                type="button"
                                onClick={() => setModalMode({ mode: "edit", row })}
                                className="p-2 text-[#984258] hover:bg-[#984258]/5 rounded-full transition-colors cursor-pointer"
                                aria-label="Editar"
                              >
                                <Pencil size={16} />
                              </button>
                              <button
                                type="button"
                                onClick={() => setDeletingId(row.id)}
                                className="p-2 text-[#867275] hover:text-[#EF4444] hover:bg-[#EF4444]/5 rounded-full transition-colors cursor-pointer"
                                aria-label="Eliminar"
                              >
                                <Trash2 size={16} />
                              </button>
                            </>
                          )}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="shrink-0 border-t border-[#E5E7EB] bg-[#FFF7F9] px-3 py-2">
          <div className="grid grid-cols-2 gap-1.5 lg:grid-cols-4 lg:gap-2">
            <div className="flex items-center gap-2 rounded-md bg-white border border-[#E5E7EB] px-2 py-1">
              <Package size={13} className="shrink-0 text-[#984258]" aria-hidden="true" />
              <div className="min-w-0 leading-tight">
                <p className="text-[12px] font-extrabold text-[#251721]">{totalPairs}</p>
                <p className="text-[9px] text-[#867275]">Pares en stock</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-white border border-[#E5E7EB] px-2 py-1">
              <Wallet size={13} className="shrink-0 text-[#984258]" aria-hidden="true" />
              <div className="min-w-0 leading-tight">
                <p className="text-[12px] font-extrabold text-[#251721]">
                  S/ {inventoryValue.toFixed(2)}
                </p>
                <p className="text-[9px] text-[#867275]">Valor inventario</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-white border border-[#E5E7EB] px-2 py-1">
              <AlertTriangle size={13} className="shrink-0 text-[#EAB308]" aria-hidden="true" />
              <div className="min-w-0 leading-tight">
                <p className="text-[12px] font-extrabold text-[#251721]">{lowStock}</p>
                <p className="text-[9px] text-[#867275]">Stock bajo</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-white border border-[#E5E7EB] px-2 py-1">
              <AlertCircle size={13} className="shrink-0 text-[#EF4444]" aria-hidden="true" />
              <div className="min-w-0 leading-tight">
                <p
                  className={`text-[12px] font-extrabold ${
                    needsBuy > 0 ? "text-[#EF4444]" : "text-[#251721]"
                  }`}
                >
                  {needsBuy}
                </p>
                <p className="text-[9px] text-[#867275]">Stock crítico</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedRow ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelectedRow(null)}>
          <article
            className="product-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Detalles de ${selectedRow.model}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedRow(null)}
              aria-label="Cerrar modal"
            >
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
                <strong>Tallas:</strong> {selectedRow.size1.size} ({selectedRow.size1.qty}),{" "}
                {selectedRow.size2.size} ({selectedRow.size2.qty}), {selectedRow.size3.size} (
                {selectedRow.size3.qty})
              </p>
            </div>
          </article>
        </div>
      ) : null}
      <AddProductModal
        open={modalMode !== null}
        onClose={() => setModalMode(null)}
        onSubmit={handleAddSubmit}
        editingRow={modalMode?.mode === "edit" ? modalMode.row : undefined}
      />
    </section>
  );
}
