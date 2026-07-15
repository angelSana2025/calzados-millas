import { useGestionBotinesPage } from "../hooks/useGestionBotinesPage";
import { GestionBotinesPageView } from "./GestionBotinesPage.view";

/** Contenedor dinámico: lógica → vista. */
export function GestionBotinesPage() {
  const page = useGestionBotinesPage();

  return <GestionBotinesPageView {...page} />;
}
