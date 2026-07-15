import { useMemo } from "react";
import { getSandaliasInventory } from "../services/sandalias.service";

export function useGestionSandaliasPage() {
  const rows = useMemo(() => getSandaliasInventory(), []);

  return {
    title: "Gestión de Sandalias",
    inventoryTitle: "Inventario de Sandalias",
    section: "sandalias" as const,
    rows,
  };
}
