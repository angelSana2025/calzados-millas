import { apiClient } from "@/core/api";
import type { LoginResponse } from "@/core/api/types";

export async function login(email: string, password: string): Promise<LoginResponse> {
  const { data } = await apiClient.post<LoginResponse>("/auth/login", {
    email,
    password,
  });
  return data;
}
