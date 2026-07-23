import { useMemo } from "react";
import { getBotinesInventory } from "../services/botines.service";

/** Hook de página para Gestion Botines.
 *  Provee los datos y metadatos necesarios para la vista.
 *  useMemo con deps vacías porque los datos son estáticos (mock).
 *  section se tipa como "botines" (as const) para discriminated unions. */
export function useGestionBotinesPage() {
  const rows = useMemo(() => getBotinesInventory(), []);

  return {
    title: "Gestión de Botines",
    inventoryTitle: "Inventario de Botines",
    section: "botines" as const,
    rows,
  };
}
