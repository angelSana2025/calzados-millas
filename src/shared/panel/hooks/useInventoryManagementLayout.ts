import { useState } from "react";

export function useInventoryManagementLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return {
    sidebarOpen,
    toggleSidebar: () => setSidebarOpen((open) => !open),
  };
}

export type InventoryManagementLayoutLogic = ReturnType<typeof useInventoryManagementLayout>;
