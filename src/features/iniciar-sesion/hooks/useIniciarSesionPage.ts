import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { getApiErrorMessage, ROUTES, useAuth } from "@/core";

const loginSchema = z.object({
  email: z.string().min(1, "El correo es obligatorio").email("Correo inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
  rememberMe: z.boolean().optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export function useIniciarSesionPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [apiError, setApiError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const rememberedEmail = localStorage.getItem("rememberedEmail");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: rememberedEmail ?? "",
      password: "",
      rememberMe: !!rememberedEmail,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setApiError(null);
    try {
      await login(data.email, data.password);
      if (data.rememberMe) {
        localStorage.setItem("rememberedEmail", data.email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }
      navigate(ROUTES.gestionSandalias, { replace: true });
    } catch (error) {
      setApiError(getApiErrorMessage(error));
    }
  };

  return {
    register,
    errors,
    isSubmitting,
    apiError,
    showPassword,
    onTogglePassword: () => setShowPassword((prev) => !prev),
    onSubmit: handleSubmit(onSubmit),
  };
}
