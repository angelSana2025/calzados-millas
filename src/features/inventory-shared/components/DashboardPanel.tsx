import { useMemo } from "react";
import { Package, Wallet, AlertTriangle, TrendingUp } from "lucide-react";
import { getBotinesInventory } from "@/features/gestion-botines/services/botines.service";
import { getSandaliasInventory } from "@/features/gestion-sandalias/services/sandalias.service";

/** Panel de analytics con KPIs y barras de progreso.
 *  Consolida datos de botines + sandalias en memoria.
 *  Muestra: total pares, valor inventario, stock bajo, promedio vendido,
 *  resumen de productos activos/bloqueados y barras de estado. */
export function DashboardPanel() {
  // Cálculos de estadísticas, memorizados por ser datos estáticos (deps vacías)
  const stats = useMemo(() => {
    const botines = getBotinesInventory();
    const sandalias = getSandaliasInventory();
    const all = [...botines, ...sandalias];

    const totalPairs = all.reduce((s, r) => s + r.totalPairs, 0);
    const totalSold = all.reduce((s, r) => s + (r.soldTotal ?? 0), 0);
    const activeProducts = all.filter((r) => r.status === "Activo").length;
    const blockedProducts = all.filter((r) => r.status === "Bloqueado").length;
    const lowStock = all.filter((r) => [r.size1.qty, r.size2.qty, r.size3.qty].some((q) => q <= 2)).length;
    const inventoryValue = all.reduce((s, r) => s + r.totalPairs * 100.44, 0);
    const avgSoldPerProduct = all.length > 0 ? Math.round(totalSold / all.length) : 0;

    return { totalPairs, totalSold, activeProducts, blockedProducts, lowStock, inventoryValue, avgSoldPerProduct, totalProducts: all.length };
  }, []);

  return (
    <section className="flex min-h-0 flex-1 flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <article className="flex flex-col items-center text-center bg-white rounded-xl p-5 md:p-6 shadow-sm">
          <Package size={28} className="mb-2 text-[#984258]" aria-hidden="true" />
          <p className="kpi-number">{stats.totalPairs}</p>
          <p className="kpi-label">Total Pares en Stock</p>
        </article>
        <article className="flex flex-col items-center text-center bg-white rounded-xl p-5 md:p-6 shadow-sm">
          <Wallet size={28} className="mb-2 text-[#984258]" aria-hidden="true" />
          <p className="kpi-number">S/ {stats.inventoryValue.toFixed(2)}</p>
          <p className="kpi-label">Valor del inventario</p>
        </article>
        <article className="flex flex-col items-center text-center bg-white rounded-xl p-5 md:p-6 shadow-sm">
          <AlertTriangle size={28} className="mb-2 text-[#EAB308]" aria-hidden="true" />
          <p className="kpi-number">{stats.lowStock}</p>
          <p className="kpi-label">Productos con Stock Bajo</p>
        </article>
        <article className="flex flex-col items-center text-center bg-white rounded-xl p-5 md:p-6 shadow-sm">
          <TrendingUp size={28} className="mb-2 text-[#16A34A]" aria-hidden="true" />
          <p className="kpi-number">{stats.avgSoldPerProduct}</p>
          <p className="kpi-label">Promedio Vendido x Producto</p>
        </article>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-white border border-[#E5E7EB] p-5 shadow-sm">
          <h3 className="text-sm font-bold text-[#251721] mb-4">Resumen de Productos</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[13px] text-[#544245]">Total productos</span>
              <span className="text-lg font-extrabold text-[#251721]">{stats.totalProducts}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[13px] text-[#544245]">Activos</span>
              <span className="text-lg font-extrabold text-[#16A34A]">{stats.activeProducts}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[13px] text-[#544245]">Bloqueados</span>
              <span className="text-lg font-extrabold text-[#867275]">{stats.blockedProducts}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[13px] text-[#544245]">Total vendido</span>
              <span className="text-lg font-extrabold text-[#984258]">{stats.totalSold} pares</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white border border-[#E5E7EB] p-5 shadow-sm">
          <h3 className="text-sm font-bold text-[#251721] mb-4">Estado del Inventario</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs text-[#544245] mb-1">
                <span>Productos activos</span>
                <span className="font-bold">{Math.round((stats.activeProducts / stats.totalProducts) * 100)}%</span>
              </div>
              <div className="w-full h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                <div className="h-full bg-[#16A34A] rounded-full" style={{ width: `${(stats.activeProducts / stats.totalProducts) * 100}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs text-[#544245] mb-1">
                <span>Stock bajo</span>
                <span className="font-bold">{Math.round((stats.lowStock / stats.totalProducts) * 100)}%</span>
              </div>
              <div className="w-full h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                <div className="h-full bg-[#EAB308] rounded-full" style={{ width: `${(stats.lowStock / stats.totalProducts) * 100}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs text-[#544245] mb-1">
                <span>Bloqueados</span>
                <span className="font-bold">{Math.round((stats.blockedProducts / stats.totalProducts) * 100)}%</span>
              </div>
              <div className="w-full h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                <div className="h-full bg-[#867275] rounded-full" style={{ width: `${(stats.blockedProducts / stats.totalProducts) * 100}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
