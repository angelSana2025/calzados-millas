import { CalzadoPanel, InventoryManagementLayout } from "@/features/inventory-shared";
import type { StockRow } from "@/features/inventory-shared";

type BotinesWorkspaceProps = {
  title: string;
  inventoryTitle: string;
  rows: StockRow[];
};

/** Componente de presentación pura.
 *  Compone el layout compartido InventoryManagementLayout (modo legacy)
 *  con el panel CalzadoPanel para la sección botines.
 *  No contiene lógica de negocio ni efectos secundarios. */
export function BotinesWorkspace({ title, inventoryTitle, rows }: BotinesWorkspaceProps) {
  return (
    <InventoryManagementLayout title={title} section="botines" rows={rows}>
      <CalzadoPanel rows={rows} inventoryTitle={inventoryTitle} />
    </InventoryManagementLayout>
  );
}
