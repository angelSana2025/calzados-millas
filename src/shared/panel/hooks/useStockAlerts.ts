import { useMemo } from "react";
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

/** Calcula alertas de stock bajo (qty <= 3) a partir de las filas inyectadas. */
export function useStockAlerts(rows: StockRow[]): StockAlertsResult {
  const alerts = useMemo(() => {
    return rows
      .map((row) => {
        const lowSizes = [row.size1, row.size2, row.size3].filter((s) => s.qty <= 3);
        return { row, lowSizes };
      })
      .filter((entry) => entry.lowSizes.length > 0);
  }, [rows]);

  const totalCount = alerts.length;

  const highestSeverity: StockAlertsResult["highestSeverity"] = useMemo(() => {
    if (totalCount === 0) return null;
    const hasCritical = alerts.some((a) => a.lowSizes.some((s) => s.qty <= 2));
    return hasCritical ? "critico" : "bajo";
  }, [alerts, totalCount]);

  return { alerts, totalCount, highestSeverity };
}
