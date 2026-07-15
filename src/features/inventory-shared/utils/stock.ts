/** Clases CSS según cantidad en stock */
export function stockClass(qty: number): "stock-good" | "stock-warning" | "stock-bad" {
  if (qty >= 4) return "stock-good";
  if (qty >= 3) return "stock-warning";
  return "stock-bad";
}

export function stockPillClass(qty: number): "stock-pill-critical" | "stock-pill-low" {
  return qty <= 2 ? "stock-pill-critical" : "stock-pill-low";
}
