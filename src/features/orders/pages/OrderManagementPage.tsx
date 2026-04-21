import { Link, Outlet, useLocation } from "react-router-dom";
import { botinesInventory, calzadoInventory } from "../../../shared/data/inventory";
import { OrderSidebar } from "../components/OrderSidebar";

export function OrderManagementPage() {
  const { pathname } = useLocation();
  const rowsForAlerts = pathname.includes("/gestion-pedido/botines") ? botinesInventory : calzadoInventory;

  return (
    <main className="order-page flex min-h-screen flex-col">
      <header className="order-page-topbar w-full shrink-0 border-b border-slate-200/90 bg-white/95 px-3 py-3 shadow-sm backdrop-blur md:px-4">
        <div className="order-shell mx-auto flex w-full max-w-[100%] flex-wrap items-center justify-between gap-3">
          <h1 className="truncate text-lg font-bold tracking-tight text-slate-800 md:text-xl">
            Gestión de pedido
          </h1>
          <Link
            to="/"
            className="back-home-btn inline-flex shrink-0 items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white transition"
          >
            Volver al inicio
          </Link>
        </div>
      </header>

      <div className="order-shell mx-auto flex min-h-0 w-full max-w-[100%] flex-1 flex-col px-3 py-3 md:px-4 xl:px-5">
        <div className="order-workspace flex min-h-0 flex-1 flex-col gap-3 xl:flex-row xl:gap-4">
          <div className="order-sidebar-wrap shrink-0 xl:w-[min(100%,280px)] xl:max-w-[280px]">
            <OrderSidebar rows={rowsForAlerts} />
          </div>

          <section className="order-content flex min-h-0 min-w-0 flex-1 flex-col">
            <Outlet />
          </section>
        </div>
      </div>
    </main>
  );
}
