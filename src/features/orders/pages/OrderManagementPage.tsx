import { Link, Outlet, useLocation } from "react-router-dom";
import { botinesInventory, calzadoInventory } from "../../../shared/data/inventory";
import { OrderSidebar } from "../components/OrderSidebar";

export function OrderManagementPage() {
  const { pathname } = useLocation();
  const rowsForAlerts = pathname.includes("/gestion-pedido/botines") ? botinesInventory : calzadoInventory;

  return (
    <main className="order-page flex min-h-[100dvh] flex-col overflow-x-hidden pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)]">
      <header className="order-page-topbar w-full shrink-0 border-b border-slate-200/90 bg-white/95 py-3 pl-[max(0.75rem,env(safe-area-inset-left))] pr-[max(0.75rem,env(safe-area-inset-right))] shadow-sm backdrop-blur md:px-4">
        <div className="order-shell mx-auto flex w-full max-w-[100%] flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <h1 className="min-w-0 text-lg font-bold tracking-tight text-slate-800 sm:truncate md:text-xl">
            Gestión de pedido
          </h1>
          <Link
            to="/"
            className="back-home-btn inline-flex w-full shrink-0 items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold text-white transition sm:w-auto"
          >
            Volver al inicio
          </Link>
        </div>
      </header>

      <div className="order-shell mx-auto flex min-h-0 w-full max-w-[100%] flex-1 flex-col py-3 pl-[max(0.75rem,env(safe-area-inset-left))] pr-[max(0.75rem,env(safe-area-inset-right))] md:px-4 xl:px-5">
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
