import { useLocation, useNavigate } from "react-router-dom";
import type { StockRow } from "../../../shared/types/inventory";

type OrderSidebarProps = {
  rows: StockRow[];
};

type PedidoSection = "sandalias" | "botines";

export function OrderSidebar({ rows }: OrderSidebarProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const section: PedidoSection = pathname.includes("/gestion-pedido/botines") ? "botines" : "sandalias";
  const stockAlerts = rows
    .map((row) => {
      const lowSizes = [row.size1, row.size2, row.size3].filter((size) => size.qty <= 3);
      return { row, lowSizes };
    })
    .filter((entry) => entry.lowSizes.length > 0)
    .slice(0, 3);

  return (
    <aside className="order-sidebar flex flex-col gap-3">
      <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-600">Menú</h2>
        <label htmlFor="order-pedido-section" className="mb-1 block text-[11px] font-medium text-slate-500">
          Tipo de producto
        </label>
        <select
          id="order-pedido-section"
          className="order-menu-select"
          value={section}
          onChange={(e) => {
            const next = e.target.value as PedidoSection;
            navigate(next === "sandalias" ? "/gestion-pedido/sandalias" : "/gestion-pedido/botines");
          }}
          aria-label="Elegir sección de gestión"
        >
          <option value="sandalias">Calzado / Sandalias</option>
          <option value="botines">Botines</option>
        </select>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
        <h3 className="mb-2 text-sm font-bold text-slate-800">Alertas de stock</h3>
        <div className="order-alerts-scroll max-h-[min(200px,32vh)] space-y-2 overflow-y-auto pr-0.5">
          {stockAlerts.length === 0 ? (
            <p className="text-xs text-slate-500">Sin alertas por ahora.</p>
          ) : (
            stockAlerts.map(({ row, lowSizes }) => (
              <article key={row.id} className="stock-alert-card">
                <p className="text-sm font-semibold leading-tight text-slate-800">{row.model}</p>
                <p className="mb-1.5 text-xs text-slate-500">Color: {row.color}</p>
                {lowSizes.map((size) => (
                  <div key={`${row.id}-${size.size}`} className="stock-alert-item">
                    <span className="text-xs text-slate-700">Talla {size.size}</span>
                    <span className={`stock-pill ${size.qty <= 2 ? "stock-pill-critical" : "stock-pill-low"}`}>
                      {size.qty} pares
                    </span>
                  </div>
                ))}
              </article>
            ))
          )}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
        <div className="flex min-w-0 flex-col gap-4">
          <div className="min-w-0">
            <h3 className="mb-2 text-[11px] font-bold uppercase tracking-wide text-slate-600">Acciones rápidas</h3>
            <div className="grid grid-cols-2 gap-2">
              <button type="button" className="quick-action-btn quick-action-btn-compact">
                + Venta
              </button>
              <button type="button" className="quick-action-btn quick-action-btn-compact">
                + Stock
              </button>
              <button type="button" className="quick-action-btn quick-action-btn-compact">
                Temporada
              </button>
              <button type="button" className="quick-action-btn quick-action-btn-compact">
                Reportes
              </button>
            </div>
          </div>

          <div className="sidebar-section-divider border-t border-slate-200 pt-4">
            <h3 className="mb-2 text-[11px] font-bold uppercase tracking-wide text-slate-600">Estado del stock</h3>
            <ul className="m-0 flex list-none flex-col gap-2 p-0 text-[11px] leading-snug text-slate-600">
              <li className="legend-item legend-item-compact">
                <span className="legend-dot legend-good shrink-0" />
                <span className="min-w-0">4+ pares — bueno</span>
              </li>
              <li className="legend-item legend-item-compact">
                <span className="legend-dot legend-low shrink-0" />
                <span className="min-w-0">3 pares — bajo</span>
              </li>
              <li className="legend-item legend-item-compact">
                <span className="legend-dot legend-critical shrink-0" />
                <span className="min-w-0">≤2 — crítico</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
