import { useGestionSandaliasPage } from "../hooks/useGestionSandaliasPage";
import { GestionSandaliasPageView } from "./GestionSandaliasPage.view";

/** Contenedor dinámico: lógica → vista. */
export function GestionSandaliasPage() {
  const page = useGestionSandaliasPage();

  return <GestionSandaliasPageView {...page} />;
}
