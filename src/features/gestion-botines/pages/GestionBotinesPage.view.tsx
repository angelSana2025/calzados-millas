import type { StockRow } from "@/features/inventory-shared";
import { BotinesWorkspace } from "../components/BotinesWorkspace";

type GestionBotinesPageViewProps = {
  title: string;
  inventoryTitle: string;
  rows: StockRow[];
  addProduct: (data: { modelo: string; color: string; temporada: string; pares: { talla: number; cantidad: number }[] }) => void;
  updateProduct: (id: number, data: { modelo: string; color: string; temporada: string; pares: { talla: number; cantidad: number }[] }) => void;
  deleteProduct: (id: number) => void;
};

export function GestionBotinesPageView({
  title,
  inventoryTitle,
  rows,
  addProduct,
  updateProduct,
  deleteProduct,
}: GestionBotinesPageViewProps) {
  return (
    <BotinesWorkspace
      title={title}
      inventoryTitle={inventoryTitle}
      rows={rows}
      addProduct={addProduct}
      updateProduct={updateProduct}
      deleteProduct={deleteProduct}
    />
  );
}
