import { useState } from "react";
import type { StockRow } from "../../../shared/types/inventory";

type CalzadoPanelProps = {
  rows: StockRow[];
  /** Título del bloque de inventario (ej. sandalias vs botines) */
  inventoryTitle?: string;
};

function stockClass(qty: number) {
  if (qty >= 4) return "stock-good";
  if (qty >= 3) return "stock-warning";
  return "stock-bad";
}

function SellIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 4h2l2.1 9.2a2 2 0 0 0 2 1.5h7.8a2 2 0 0 0 2-1.6L20 7H7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="19" r="1.5" fill="currentColor" />
      <circle cx="17" cy="19" r="1.5" fill="currentColor" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 16.8V20h3.2L18 9.2 14.8 6 4 16.8Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M13.8 7 17 10.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.5 9h11l-.7 9a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6.5 9Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M9 9a3 3 0 1 1 6 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function DeleteIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 7h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M9 7V5h6v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8 7l.7 11a2 2 0 0 0 2 1.8h2.6a2 2 0 0 0 2-1.8L16 7" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10.5 11.2v5M13.5 11.2v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function CalzadoPanel({ rows, inventoryTitle = "Inventario de Sandalias" }: CalzadoPanelProps) {
  const [selectedRow, setSelectedRow] = useState<StockRow | null>(null);
  const totalPairs = rows.reduce((sum, row) => sum + row.totalPairs, 0);
  const lowStock = rows.filter((row) => [row.size1.qty, row.size2.qty, row.size3.qty].some((qty) => qty <= 2)).length;
  const needsBuy = rows.filter((row) => [row.size1.qty, row.size2.qty, row.size3.qty].some((qty) => qty <= 1)).length;
  const inventoryValue = rows.reduce((sum, row) => sum + row.totalPairs * 100.44, 0);

  return (
    <section className="flex min-h-0 flex-1 flex-col gap-3">
      <div className="grid shrink-0 gap-3 md:grid-cols-2 xl:grid-cols-4">
        <article className="kpi-card kpi-card-blue">
          <p className="kpi-number">{totalPairs}</p>
          <p className="kpi-label">Total Pares en Stock</p>
        </article>
        <article className="kpi-card kpi-card-green">
          <p className="kpi-number">S/ {inventoryValue.toFixed(2)}</p>
          <p className="kpi-label">Valor del inventario</p>
        </article>
        <article className="kpi-card kpi-card-amber">
          <p className="kpi-number">{lowStock}</p>
          <p className="kpi-label">Productos en Stock Bajo</p>
        </article>
        <article className="kpi-card kpi-card-red">
          <p className="kpi-number">{needsBuy}</p>
          <p className="kpi-label">Stock Critico (Comprar)</p>
        </article>
      </div>

      <div className="inventory-panel-root flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="shrink-0 border-b border-slate-100 p-4 md:p-5">
          <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h1 className="text-xl font-bold text-slate-800 md:text-2xl">{inventoryTitle}</h1>
            <button type="button" className="add-product-btn">
              + Agregar Producto
            </button>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <input
              type="text"
              className="inventory-search"
              placeholder="Buscar por modelo o color..."
              aria-label="Buscar por modelo o color"
            />
            <button type="button" className="inventory-filter-btn">
              Todas las temporadas
            </button>
            <button type="button" className="inventory-filter-btn">
              Stock bajo
            </button>
          </div>
        </div>

        <div className="inventory-table-scroll min-h-0 flex-1 overflow-auto p-3 md:p-4 md:pt-3">
          <div className="overflow-x-auto">
          <table className="w-full min-w-[1080px] border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-violet-600 text-sm text-white">
                <th className="table-head">Modelo</th>
                <th className="table-head">Color</th>
                <th className="table-head">Talla 1</th>
                <th className="table-head">Talla 2</th>
                <th className="table-head">Talla 3</th>
                <th className="table-head">Total Pares</th>
                <th className="table-head">Temporada</th>
                <th className="table-head">Estado</th>
                <th className="table-head text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-slate-100 text-sm">
                  <td
                    className="table-cell font-medium text-slate-800 model-cell"
                    onDoubleClick={() => setSelectedRow(row)}
                    title="Doble clic para ver detalles"
                  >
                    {row.model}
                  </td>
                  <td className="table-cell">
                    <div className="color-media">
                      <img
                        src={row.image ?? "/images/WhatsApp%20Image%202025-11-27%20at%2014.35.26.jpeg"}
                        alt={`${row.model} ${row.color}`}
                        className="color-thumb"
                      />
                      <span className="color-name">{row.color}</span>
                    </div>
                  </td>
                  <td className="table-cell">
                    <div className={`stock-box ${stockClass(row.size1.qty)}`}>
                      <span className="stock-size">{row.size1.size}</span>
                      <span className="stock-qty">{row.size1.qty} pares</span>
                      <button type="button" className="sell-btn">
                        <SellIcon />
                        Vender
                      </button>
                    </div>
                  </td>
                  <td className="table-cell">
                    <div className={`stock-box ${stockClass(row.size2.qty)}`}>
                      <span className="stock-size">{row.size2.size}</span>
                      <span className="stock-qty">{row.size2.qty} pares</span>
                      <button type="button" className="sell-btn">
                        <SellIcon />
                        Vender
                      </button>
                    </div>
                  </td>
                  <td className="table-cell">
                    <div className={`stock-box ${stockClass(row.size3.qty)}`}>
                      <span className="stock-size">{row.size3.size}</span>
                      <span className="stock-qty">{row.size3.qty} pares</span>
                      <button type="button" className="sell-btn">
                        <SellIcon />
                        Vender
                      </button>
                    </div>
                  </td>
                  <td className="table-cell text-center font-semibold text-blue-600">{row.totalPairs}</td>
                  <td className="table-cell text-center text-slate-500">{row.season}</td>
                  <td className="table-cell text-center">
                    <span className={`status-pill ${row.status === "Activo" ? "status-active" : "status-locked"}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="table-cell">
                    <div className="action-row">
                      <button type="button" className="action-btn action-btn-edit" aria-label="Editar">
                        <EditIcon />
                      </button>
                      <button type="button" className="action-btn action-btn-bag" aria-label="Bolsa">
                        <BagIcon />
                      </button>
                      <button type="button" className="action-btn action-btn-delete" aria-label="Eliminar">
                        <DeleteIcon />
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
              src={selectedRow.image ?? "/images/WhatsApp%20Image%202025-11-27%20at%2014.35.26.jpeg"}
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
    </section>
  );
}
