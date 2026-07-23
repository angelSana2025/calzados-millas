import type { StockRow } from "@/features/inventory-shared";
import { SandaliasWorkspace } from "../components/SandaliasWorkspace";

type GestionSandaliasPageViewProps = {
  title: string;
  inventoryTitle: string;
  rows: StockRow[];
};

/** Vista pura del patrón Container/View.
 *  Sin hooks ni servicios. Recibe props y delega en SandaliasWorkspace.
 *  Capa de indirección para futura composición de sub-componentes. */
export function GestionSandaliasPageView({
  title,
  inventoryTitle,
  rows,
}: GestionSandaliasPageViewProps) {
  return <SandaliasWorkspace title={title} inventoryTitle={inventoryTitle} rows={rows} />;
}
