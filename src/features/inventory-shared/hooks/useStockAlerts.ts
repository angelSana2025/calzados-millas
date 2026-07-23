import { useMemo } from "react";
import { getBotinesInventory } from "@/features/gestion-botines/services/botines.service";
import { getSandaliasInventory } from "@/features/gestion-sandalias/services/sandalias.service";
import type { StockRow } from "../types";

type SizeEntry = { size: number; qty: number };

type StockAlertEntry = {
  row: StockRow;
  lowSizes: SizeEntry[];
};

type StockAlertsResult = {
  alerts: StockAlertEntry[];
  totalCount: number;
  highestSeverity: "critico" | "bajo" | null;
};

/** Hook que calcula alertas de stock bajo (qty <= 3).
 *  Si no recibe rows (modo unificado), obtiene datos de ambos servicios
 *  automáticamente — mismo patrón que CalzadoPanel. */
export function useStockAlerts(rows?: StockRow[]): StockAlertsResult {
  const allRows = useMemo(() => {
    if (rows) return rows;
    return [...getBotinesInventory(), ...getSandaliasInventory()];
  }, [rows]);

  const alerts = useMemo(() => {
    return allRows
      .map((row) => {
        const lowSizes = [row.size1, row.size2, row.size3].filter((s) => s.qty <= 3);
        return { row, lowSizes };
      })
      .filter((entry) => entry.lowSizes.length > 0);
  }, [allRows]);

  const totalCount = alerts.length;

  const highestSeverity: StockAlertsResult["highestSeverity"] = useMemo(() => {
    if (totalCount === 0) return null;
    const hasCritical = alerts.some((a) => a.lowSizes.some((s) => s.qty <= 2));
    return hasCritical ? "critico" : "bajo";
  }, [alerts, totalCount]);

  return { alerts, totalCount, highestSeverity };
}
