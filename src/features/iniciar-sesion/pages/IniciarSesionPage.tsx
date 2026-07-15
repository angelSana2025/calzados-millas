import { useIniciarSesionPage } from "../hooks/useIniciarSesionPage";
import { IniciarSesionPageView } from "./IniciarSesionPage.view";

export function IniciarSesionPage() {
  const form = useIniciarSesionPage();

  return <IniciarSesionPageView {...form} />;
}
