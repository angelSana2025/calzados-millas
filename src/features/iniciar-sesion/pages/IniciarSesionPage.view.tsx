import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROUTES } from "@/core";
import type { LoginFormData } from "../hooks/useIniciarSesionPage";

type Props = {
  register: UseFormRegister<LoginFormData>;
  errors: FieldErrors<LoginFormData>;
  isSubmitting: boolean;
  onSubmit: () => void;
};

export function IniciarSesionPageView({
  register,
  errors,
  isSubmitting,
  onSubmit,
}: Props) {
  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-[#f8f4ff] px-4 py-8">
      <div className="w-full max-w-md rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg sm:p-8">
        <header className="mb-6 text-center">
          <h1 className="font-display text-2xl font-bold text-slate-800 sm:text-3xl">Iniciar sesión</h1>
          <p className="mt-2 text-sm text-slate-500">Accede a la gestión de Milas Calzados</p>
        </header>

        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <div>
            <label htmlFor="login-email" className="mb-1 block text-sm font-medium text-slate-700">
              Correo electrónico
            </label>
            <input
              id="login-email"
              type="email"
              autoComplete="email"
              className="form-control"
              placeholder="tu@correo.com"
              {...register("email")}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="login-password" className="mb-1 block text-sm font-medium text-slate-700">
              Contraseña
            </label>
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              className="form-control"
              placeholder="••••••••"
              {...register("password")}
            />
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
          </div>

          <button type="submit" className="btn btn-primary mt-2 w-full" disabled={isSubmitting}>
            {isSubmitting ? "Ingresando..." : "Entrar"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          <Link to={ROUTES.home} className="font-medium text-[#c45c7a] hover:underline">
            Volver al inicio
          </Link>
        </p>
      </div>
    </main>
  );
}
