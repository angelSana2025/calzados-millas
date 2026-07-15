import type { StockRow } from "@/features/inventory-shared";
import { SandaliasWorkspace } from "../components/SandaliasWorkspace";

type GestionSandaliasPageViewProps = {
  title: string;
  inventoryTitle: string;
  rows: StockRow[];
};

/** Vista pura: sin hooks ni servicios, solo props → UI. */
export function GestionSandaliasPageView({
  title,
  inventoryTitle,
  rows,
}: GestionSandaliasPageViewProps) {
  return <SandaliasWorkspace title={title} inventoryTitle={inventoryTitle} rows={rows} />;
}
