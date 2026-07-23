import { useCalzadoPanel } from "../../hooks/useCalzadoPanel";
import type { AddProductFormData, StockRow } from "../../types";
import { CalzadoPanelView } from "./CalzadoPanel.view";

type CalzadoPanelProps = {
  rows: StockRow[];
  inventoryTitle: string;
  onAddProduct?: (data: AddProductFormData) => void;
  onEditProduct?: (id: number, data: AddProductFormData) => void;
  onDeleteProduct?: (id: number) => void;
};

/** Contenedor smart: conecta useCalzadoPanel con la vista pura. */
export function CalzadoPanel(props: CalzadoPanelProps) {
  const panel = useCalzadoPanel(props);
  return <CalzadoPanelView {...panel} />;
}
