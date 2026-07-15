import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/core";
import type { InventorySection, StockRow } from "../types";
import { InventorySidebar } from "./InventorySidebar";

type InventoryManagementLayoutProps = {
  title: string;
  section: InventorySection;
  rows: StockRow[];
  children: ReactNode;
};

export function InventoryManagementLayout({
  title,
  section,
  rows,
  children,
}: InventoryManagementLayoutProps) {
  return (
    <main className="order-page flex min-h-[100dvh] flex-col overflow-x-hidden pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)]">
      <header className="order-page-topbar w-full shrink-0 border-b border-slate-200/90 bg-white/95 py-3 pl-[max(0.75rem,env(safe-area-inset-left))] pr-[max(0.75rem,env(safe-area-inset-right))] shadow-sm backdrop-blur md:px-4">
        <div className="order-shell mx-auto flex w-full max-w-[100%] flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <h1 className="min-w-0 text-lg font-bold tracking-tight text-slate-800 sm:truncate md:text-xl">{title}</h1>
          <Link
            to={ROUTES.home}
            className="back-home-btn inline-flex w-full shrink-0 items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold text-white transition sm:w-auto"
          >
            Volver al inicio
          </Link>
        </div>
      </header>

      <div className="order-shell mx-auto flex min-h-0 w-full max-w-[100%] flex-1 flex-col py-3 pl-[max(0.75rem,env(safe-area-inset-left))] pr-[max(0.75rem,env(safe-area-inset-right))] md:px-4 xl:px-5">
        <div className="order-workspace flex min-h-0 flex-1 flex-col gap-3 xl:flex-row xl:gap-4">
          <div className="order-sidebar-wrap shrink-0 xl:w-[min(100%,280px)] xl:max-w-[280px]">
            <InventorySidebar rows={rows} currentSection={section} />
          </div>

          <section className="order-content flex min-h-0 min-w-0 flex-1 flex-col">{children}</section>
        </div>
      </div>
    </main>
  );
}
