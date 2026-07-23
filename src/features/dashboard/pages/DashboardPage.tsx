import { InventoryManagementLayout, DashboardPanel } from "@/features/inventory-shared";

export function DashboardPage() {
  return (
    <InventoryManagementLayout title="Dashboard">
      <DashboardPanel />
    </InventoryManagementLayout>
  );
}
