import { useMemo } from "react";
import { getSandaliasInventory } from "../services/sandalias.service";

/** Hook de página para Gestion Sandalias.
 *  Provee datos y metadatos a la vista.
 *  useMemo con deps vacías por datos estáticos (mock).
 *  section tipado como "sandalias" (as const) para discriminated unions. */
export function useGestionSandaliasPage() {
  const rows = useMemo(() => getSandaliasInventory(), []);

  return {
    title: "Gestión de Sandalias",
    inventoryTitle: "Inventario de Sandalias",
    section: "sandalias" as const,
    rows,
  };
}
