import { CalzadoPanel, InventoryManagementLayout } from "@/features/inventory-shared";
import type { StockRow } from "@/features/inventory-shared";

type SandaliasWorkspaceProps = {
  title: string;
  inventoryTitle: string;
  rows: StockRow[];
};

/** Componente de presentación pura.
 *  Compone el layout compartido InventoryManagementLayout (modo legacy)
 *  con el panel CalzadoPanel para la sección sandalias.
 *  No contiene lógica de negocio ni efectos secundarios. */
export function SandaliasWorkspace({ title, inventoryTitle, rows }: SandaliasWorkspaceProps) {
  return (
    <InventoryManagementLayout title={title} section="sandalias" rows={rows}>
      <CalzadoPanel rows={rows} inventoryTitle={inventoryTitle} />
    </InventoryManagementLayout>
  );
}
