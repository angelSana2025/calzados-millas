import { NavLink } from "react-router-dom";
import { ROUTES } from "@/core";
import type { InventorySection, StockRow } from "../types";
import { stockPillClass } from "../utils/stock";

type InventorySidebarProps = {
  rows: StockRow[];
  currentSection: InventorySection;
};

const SECTION_LINKS: { section: InventorySection; label: string; to: string }[] = [
  { section: "sandalias", label: "Calzado / Sandalias", to: ROUTES.gestionSandalias },
  { section: "botines", label: "Botines", to: ROUTES.gestionBotines },
];

export function InventorySidebar({ rows, currentSection }: InventorySidebarProps) {
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
        <nav className="flex flex-col gap-1.5" aria-label="Módulos de gestión">
          {SECTION_LINKS.map(({ section, label, to }) => (
            <NavLink
              key={section}
              to={to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive || section === currentSection
                    ? "bg-blue-50 text-blue-700 ring-1 ring-blue-200"
                    : "text-slate-600 hover:bg-slate-50"
                }`
              }
              end
            >
              {label}
            </NavLink>
          ))}
        </nav>
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
                    <span className={`stock-pill ${stockPillClass(size.qty)}`}>{size.qty} pares</span>
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
