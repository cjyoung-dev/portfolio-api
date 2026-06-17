import { VercelResponse } from "@vercel/node";

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  meta?: Record<string, unknown>;
}

export function sendSuccess<T>(res: VercelResponse, data: T, meta?: Record<string, unknown>): void {
  const response: ApiResponse<T> = { success: true, data: data };
  if (meta) response.meta = meta;
  res.status(200).json(response);
}

export function sendError(res: VercelResponse, status: number, error: string): void {
  const response: ApiResponse<never> = { success: false, error: error };
  res.status(status).json(response);
}
