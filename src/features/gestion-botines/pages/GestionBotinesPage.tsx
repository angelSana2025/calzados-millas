import { useGestionBotinesPage } from "../hooks/useGestionBotinesPage";
import { GestionBotinesPageView } from "./GestionBotinesPage.view";

/** Contenedor smart (patrón Container/View).
 *  Conecta el hook useGestionBotinesPage con la vista pura.
 *  Es el punto de entrada público de la feature. */
export function GestionBotinesPage() {
  const page = useGestionBotinesPage();

  return <GestionBotinesPageView {...page} />;
}
