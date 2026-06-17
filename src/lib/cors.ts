import Cors from "cors";
import { VercelResponse, VercelRequest } from "@vercel/node";

const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:4173",
  "https://cjyoung-dev.github.io",
];

const corsMiddleware = Cors({
  origin: ALLOWED_ORIGINS,
  methods: ["GET", "OPTIONS"],
});

export function runCors(req: VercelRequest, res: VercelResponse): Promise<void> {
  return new Promise((resolve, reject) => {
    corsMiddleware(req as any, res as any, (result) => {
      if (result instanceof Error) reject(result);
      resolve();
    });
  });
}
