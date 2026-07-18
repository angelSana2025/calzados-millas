import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "@/core";
import { ProtectedRoute } from "@/app/ProtectedRoute";
import { GestionBotinesPage } from "@/features/gestion-botines";
import { GestionSandaliasPage } from "@/features/gestion-sandalias";
import { IniciarSesionPage } from "@/features/iniciar-sesion/pages/IniciarSesionPage";
import { LandingPage } from "@/features/landing/pages/LandingPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<LandingPage />} />
      <Route path={ROUTES.iniciarSession} element={<IniciarSesionPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path={ROUTES.gestionSandalias} element={<GestionSandaliasPage />} />
        <Route path={ROUTES.gestionBotines} element={<GestionBotinesPage />} />
      </Route>

      <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
    </Routes>
  );
}
