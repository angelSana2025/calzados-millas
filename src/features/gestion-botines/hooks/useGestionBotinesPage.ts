import { useMemo } from "react";
import { getBotinesInventory } from "../services/botines.service";

export function useGestionBotinesPage() {
  const rows = useMemo(() => getBotinesInventory(), []);

  return {
    title: "Gestión de Botines",
    inventoryTitle: "Inventario de Botines",
    section: "botines" as const,
    rows,
  };
}
