import type { StockRow } from "@/features/inventory-shared";
import { BotinesWorkspace } from "../components/BotinesWorkspace";

type GestionBotinesPageViewProps = {
  title: string;
  inventoryTitle: string;
  rows: StockRow[];
};

/** Vista pura del patrón Container/View.
 *  Sin hooks ni servicios. Recibe props y delega en BotinesWorkspace.
 *  Capa de indirección para futura composición de sub-componentes. */
export function GestionBotinesPageView({
  title,
  inventoryTitle,
  rows,
}: GestionBotinesPageViewProps) {
  return <BotinesWorkspace title={title} inventoryTitle={inventoryTitle} rows={rows} />;
}
