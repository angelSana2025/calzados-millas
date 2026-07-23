import type { StockRow } from "@/features/inventory-shared";
import { sandaliasInventory } from "../models/sandaliasInventory.model";

/** Servicio de acceso a datos del inventario de sandalias.
 *  Actualmente retorna datos mock sincrónicos.
 *  Punto de reemplazo futuro para API real (retornaría Promise<StockRow[]>). */
export function getSandaliasInventory(): StockRow[] {
  return sandaliasInventory;
}
