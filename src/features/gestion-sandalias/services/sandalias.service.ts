import type { StockRow } from "@/features/inventory-shared";
import { sandaliasInventory } from "../models/sandaliasInventory.model";

export function getSandaliasInventory(): StockRow[] {
  return sandaliasInventory;
}
