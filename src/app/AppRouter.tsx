import { Navigate, Route, Routes } from "react-router-dom";
import { botinesInventory, calzadoInventory } from "../shared/data/inventory";
import { LandingPage } from "../features/landing/pages/LandingPage";
import { OrderManagementPage } from "../features/orders/pages/OrderManagementPage";
import { CalzadoPanel } from "../features/orders/components/CalzadoPanel";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/gestion-pedido" element={<OrderManagementPage />}>
        <Route index element={<Navigate to="sandalias" replace />} />
        <Route path="sandalias" element={<CalzadoPanel rows={calzadoInventory} />} />
        <Route
          path="botines"
          element={<CalzadoPanel rows={botinesInventory} inventoryTitle="Inventario de Botines" />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
