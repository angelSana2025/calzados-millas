import { useInventoryCrud } from "@/features/inventory-shared/hooks/useInventoryCrud";

export function useGestionBotinesPage() {
  const crud = useInventoryCrud("botines");

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
