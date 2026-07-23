import { useInventoryCrud } from "@/shared/panel";
import { getBotinesInventory } from "../services/botines.service";

export function useGestionBotinesPage() {
  const crud = useInventoryCrud(getBotinesInventory);

  return {
    title: "Gestión de Botines",
    inventoryTitle: "Inventario de Botines",
    section: "botines" as const,
    rows: crud.rows,
    addProduct: crud.add,
    updateProduct: crud.update,
    deleteProduct: crud.remove,
  };
}
