import type { StockStatus } from "../types/ventas.types";

type Props = {
  status: StockStatus;
};

/*
 * Mapeo de cada estado a sus clases de color.
 *   - Optimal  → verde #16A34A
 *   - Low      → amarillo #EAB308
 *   - Critical → rojo #EF4444
 * El fondo usa la misma tonalidad al 10% de opacidad para no saturar.
 */
const STATUS_MAP: Record<StockStatus, { label: string; bg: string; dot: string }> = {
  optimal: {
    label: "Óptimo",
    bg: "bg-[#16A34A]/10 text-[#16A34A]",
    dot: "bg-[#16A34A]",
  },
  low: {
    label: "Bajo",
    bg: "bg-[#EAB308]/10 text-[#EAB308]",
    dot: "bg-[#EAB308]",
  },
  critical: {
    label: "Crítico",
    bg: "bg-[#EF4444]/10 text-[#EF4444]",
    dot: "bg-[#EF4444]",
  },
};

export function StockStatusPill({ status }: Props) {
  const s = STATUS_MAP[status];

  return (
    <span
      className={
        "inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider " +
        s.bg
      }
    >
      <span className={"w-1.5 h-1.5 rounded-full mr-2 " + s.dot} />
      {s.label}
    </span>
  );
}
