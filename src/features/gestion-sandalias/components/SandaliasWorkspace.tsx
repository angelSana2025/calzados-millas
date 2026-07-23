import { CalzadoPanel, InventoryManagementLayout } from "@/features/inventory-shared";
import type { StockRow } from "@/features/inventory-shared";

type SandaliasWorkspaceProps = {
  title: string;
  inventoryTitle: string;
  rows: StockRow[];
  addProduct: (data: { modelo: string; color: string; temporada: string; pares: { talla: number; cantidad: number }[] }) => void;
  updateProduct: (id: number, data: { modelo: string; color: string; temporada: string; pares: { talla: number; cantidad: number }[] }) => void;
  deleteProduct: (id: number) => void;
};

export function SandaliasWorkspace({
  title,
  inventoryTitle,
  rows,
  addProduct,
  updateProduct,
  deleteProduct,
}: SandaliasWorkspaceProps) {
  return (
    <InventoryManagementLayout title={title} section="sandalias" rows={rows}>
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
