import { CalzadoPanel, InventoryManagementLayout } from "@/features/inventory-shared";
import type { StockRow } from "@/features/inventory-shared";

type SandaliasWorkspaceProps = {
  title: string;
  inventoryTitle: string;
  rows: StockRow[];
};

/** Maquetado puro: solo recibe datos y pinta la pantalla de sandalias. */
export function SandaliasWorkspace({ title, inventoryTitle, rows }: SandaliasWorkspaceProps) {
  return (
    <InventoryManagementLayout title={title} section="sandalias" rows={rows}>
      <CalzadoPanel rows={rows} inventoryTitle={inventoryTitle} />
    </InventoryManagementLayout>
  );
}
