import { useGestionSandaliasPage } from "../hooks/useGestionSandaliasPage";
import { GestionSandaliasPageView } from "./GestionSandaliasPage.view";

/** Contenedor smart (patrón Container/View).
 *  Conecta el hook useGestionSandaliasPage con la vista pura.
 *  Punto de entrada público de la feature. */
export function GestionSandaliasPage() {
  const page = useGestionSandaliasPage();

  return <GestionSandaliasPageView {...page} />;
}
