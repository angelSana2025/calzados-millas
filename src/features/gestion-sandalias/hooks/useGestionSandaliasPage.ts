import { useInventoryCrud } from "@/features/inventory-shared/hooks/useInventoryCrud";

export function useGestionSandaliasPage() {
  const crud = useInventoryCrud("sandalias");

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
