import type { StockRow } from "@/features/inventory-shared";
import { BotinesWorkspace } from "../components/BotinesWorkspace";

type GestionBotinesPageViewProps = {
  title: string;
  inventoryTitle: string;
  rows: StockRow[];
};

/** Vista pura: sin hooks ni servicios, solo props → UI. */
export function GestionBotinesPageView({
  title,
  inventoryTitle,
  rows,
}: GestionBotinesPageViewProps) {
  return <BotinesWorkspace title={title} inventoryTitle={inventoryTitle} rows={rows} />;
}
