/** Formato estándar de error HTTP de NestJS */
export type NestHttpException = {
  statusCode: number;
  message: string | string[];
  error?: string;
};

export type ApiErrorPayload = NestHttpException | { message?: string };

/* ─── Auth ─────────────────────────────────────────── */

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthUser {
  id: number;
  email: string;
  name?: string;
}

export interface LoginResponse {
  accessToken: string;
  user: AuthUser;
}
