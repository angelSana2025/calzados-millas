import type { StockRow } from "@/features/inventory-shared";
import { botinesInventory } from "../models/botinesInventory.model";

export function getBotinesInventory(): StockRow[] {
  return botinesInventory;
}
