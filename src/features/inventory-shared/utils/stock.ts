/** @deprecated Las clases CSS ahora se aplican inline en CalzadoPanel.
 *  Mantenida por si se requiere en migraciones futuras.
 *  Devuelve clase CSS según cantidad en stock. */
export function stockClass(qty: number): "stock-good" | "stock-warning" | "stock-bad" {
  if (qty >= 4) return "stock-good";
  if (qty >= 3) return "stock-warning";
  return "stock-bad";
}

/** @deprecated Reemplazada por clases inline bg-[#EF4444]/bg-[#EAB308].
 *  Devuelve clase CSS para pills de alerta de stock. */
export function stockPillClass(qty: number): "stock-pill-critical" | "stock-pill-low" {
  return qty <= 2 ? "stock-pill-critical" : "stock-pill-low";
}
