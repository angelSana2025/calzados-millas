import type { StockRow } from "@/features/inventory-shared";
import { SandaliasWorkspace } from "../components/SandaliasWorkspace";

type GestionSandaliasPageViewProps = {
  title: string;
  inventoryTitle: string;
  rows: StockRow[];
  addProduct: (data: { modelo: string; color: string; temporada: string; pares: { talla: number; cantidad: number }[] }) => void;
  updateProduct: (id: number, data: { modelo: string; color: string; temporada: string; pares: { talla: number; cantidad: number }[] }) => void;
  deleteProduct: (id: number) => void;
};

export function GestionSandaliasPageView({
  title,
  inventoryTitle,
  rows,
  addProduct,
  updateProduct,
  deleteProduct,
}: GestionSandaliasPageViewProps) {
  return (
    <SandaliasWorkspace
      title={title}
      inventoryTitle={inventoryTitle}
      rows={rows}
      addProduct={addProduct}
      updateProduct={updateProduct}
      deleteProduct={deleteProduct}
    />
  );
}
