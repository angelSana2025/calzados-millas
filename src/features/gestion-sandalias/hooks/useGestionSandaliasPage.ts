import { useInventoryCrud } from "@/shared/panel";
import { getSandaliasInventory } from "../services/sandalias.service";

export function useGestionSandaliasPage() {
  const crud = useInventoryCrud(getSandaliasInventory);

  return {
    title: "Gestión de Sandalias",
    inventoryTitle: "Inventario de Sandalias",
    section: "sandalias" as const,
    rows: crud.rows,
    addProduct: crud.add,
    updateProduct: crud.update,
    deleteProduct: crud.remove,
  };
}
