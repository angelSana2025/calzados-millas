import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "@/core";
import { ProtectedRoute } from "@/app/ProtectedRoute";
import { GestionBotinesPage } from "@/features/gestion-botines";
import { GestionSandaliasPage } from "@/features/gestion-sandalias";
import { IniciarSesionPage } from "@/features/iniciar-sesion/pages/IniciarSesionPage";
import { LandingPage } from "@/features/landing/pages/LandingPage";
import { CalzadoPage } from "@/features/calzado";
import { DashboardPage } from "@/features/dashboard";

const EcommercePage = lazy(() =>
  import("@/features/ecommerce").then((m) => ({ default: m.EcommercePage }))
);

export function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<LandingPage />} />
      <Route path={ROUTES.iniciarSession} element={<IniciarSesionPage />} />
<<<<<<< HEAD
=======
      <Route path={ROUTES.ecommerce} element={<EcommercePage />} />
>>>>>>> 7e08e05cb7f7e4ec1c365b628a5b69e843dae642

      <Route element={<ProtectedRoute />}>
        <Route path={ROUTES.gestionSandalias} element={<GestionSandaliasPage />} />
        <Route path={ROUTES.gestionBotines} element={<GestionBotinesPage />} />
<<<<<<< HEAD
=======
        <Route path={ROUTES.calzado} element={<CalzadoPage />} />
        <Route path={ROUTES.dashboard} element={<DashboardPage />} />
>>>>>>> 7e08e05cb7f7e4ec1c365b628a5b69e843dae642
      </Route>

      <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
    </Routes>
  );
}
