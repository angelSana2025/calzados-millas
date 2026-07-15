import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "@/core";
import { GestionBotinesPage } from "@/features/gestion-botines";
import { GestionSandaliasPage } from "@/features/gestion-sandalias";
import { IniciarSesionPage } from "@/features/iniciar-sesion/pages/IniciarSesionPage";
import { LandingPage } from "@/features/landing/pages/LandingPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<LandingPage />} />
      <Route path={ROUTES.iniciarSession} element={<IniciarSesionPage />} />
      <Route path={ROUTES.gestionSandalias} element={<GestionSandaliasPage />} />
      <Route path={ROUTES.gestionBotines} element={<GestionBotinesPage />} />
      <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
    </Routes>
  );
}
