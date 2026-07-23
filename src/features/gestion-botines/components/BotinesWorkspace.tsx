import { CalzadoPanel, InventoryManagementLayout } from "@/features/inventory-shared";
import type { StockRow } from "@/features/inventory-shared";

type BotinesWorkspaceProps = {
  title: string;
  inventoryTitle: string;
  rows: StockRow[];
  addProduct: (data: { modelo: string; color: string; temporada: string; pares: { talla: number; cantidad: number }[] }) => void;
  updateProduct: (id: number, data: { modelo: string; color: string; temporada: string; pares: { talla: number; cantidad: number }[] }) => void;
  deleteProduct: (id: number) => void;
};

export function BotinesWorkspace({
  title,
  inventoryTitle,
  rows,
  addProduct,
  updateProduct,
  deleteProduct,
}: BotinesWorkspaceProps) {
  return (
    <InventoryManagementLayout title={title} section="botines" rows={rows}>
      <CalzadoPanel
        rows={rows}
        inventoryTitle={inventoryTitle}
        onAddProduct={addProduct}
        onEditProduct={updateProduct}
        onDeleteProduct={deleteProduct}
      />
    </InventoryManagementLayout>
  );
}
