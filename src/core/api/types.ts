/** Formato estándar de error HTTP de NestJS */
export type NestHttpException = {
  statusCode: number;
  message: string | string[];
  error?: string;
};

export type ApiErrorPayload = NestHttpException | { message?: string };
