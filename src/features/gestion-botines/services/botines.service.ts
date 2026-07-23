import type { StockRow } from "@/shared/panel";
import { apiClient } from "@/core";
import { botinesInventory } from "../models/botinesInventory.model";

/** Servicio de acceso a datos del inventario de botines.
 *  Actualmente retorna datos mock sincrónicos.
 *  Diseñado como punto de reemplazo: cuando exista un backend real,
 *  cambiar a async (Promise<StockRow[]>) y actualizar el hook. */
export function getBotinesInventory(): StockRow[] {
  return botinesInventory;
}

/** GET colores disponibles de botines desde el API. */
export async function getBotinesColores() {
  const { data } = await apiClient.get("api/botines-milas/get-colores-bottines");
  return data;
}
