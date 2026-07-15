import { CalzadoPanel, InventoryManagementLayout } from "@/features/inventory-shared";
import type { StockRow } from "@/features/inventory-shared";

type BotinesWorkspaceProps = {
  title: string;
  inventoryTitle: string;
  rows: StockRow[];
};

/** Maquetado puro: solo recibe datos y pinta la pantalla de botines. */
export function BotinesWorkspace({ title, inventoryTitle, rows }: BotinesWorkspaceProps) {
  return (
    <InventoryManagementLayout title={title} section="botines" rows={rows}>
      <CalzadoPanel rows={rows} inventoryTitle={inventoryTitle} />
    </InventoryManagementLayout>
  );
}
