import type { StockRow } from "@/shared/panel";
import { botinesInventory } from "../models/botinesInventory.model";

/** Servicio de acceso a datos del inventario de botines.
 *  Actualmente retorna datos mock sincrónicos.
 *  Diseñado como punto de reemplazo: cuando exista un backend real,
 *  cambiar a async (Promise<StockRow[]>) y actualizar el hook. */
export function getBotinesInventory(): StockRow[] {
  return botinesInventory;
}
