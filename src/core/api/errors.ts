import { isAxiosError } from "axios";
import type { ApiErrorPayload, NestHttpException } from "./types";

export class ApiError extends Error {
  readonly statusCode: number;
  readonly details: string[];

  constructor(statusCode: number, message: string, details: string[] = []) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
    this.details = details;
  }
}

function isNestHttpException(payload: unknown): payload is NestHttpException {
  return (
    typeof payload === "object" &&
    payload !== null &&
    "statusCode" in payload &&
    typeof (payload as NestHttpException).statusCode === "number"
  );
}

function messageFromPayload(payload: ApiErrorPayload): { message: string; details: string[] } {
  if (isNestHttpException(payload)) {
    const raw = payload.message;
    if (Array.isArray(raw)) {
      return { message: raw[0] ?? "Error en la solicitud", details: raw };
    }
    return { message: raw, details: [] };
  }

  return { message: payload.message ?? "Error en la solicitud", details: [] };
}

export function toApiError(error: unknown): ApiError {
  if (error instanceof ApiError) {
    return error;
  }

  if (isAxiosError<ApiErrorPayload>(error)) {
    const statusCode = error.response?.status ?? 0;
    const payload = error.response?.data;

    if (payload) {
      const { message, details } = messageFromPayload(payload);
      return new ApiError(statusCode, message, details);
    }

    return new ApiError(statusCode, error.message || "Error de red");
  }

  if (error instanceof Error) {
    return new ApiError(0, error.message);
  }

  return new ApiError(0, "Error desconocido");
}

export function getApiErrorMessage(error: unknown): string {
  return toApiError(error).message;
}
