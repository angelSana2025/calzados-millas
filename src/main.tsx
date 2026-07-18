import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "@/app/AppRouter";
import { AuthProvider } from "@/core/context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <AuthProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AuthProvider>
    </React.StrictMode>
  );
}
