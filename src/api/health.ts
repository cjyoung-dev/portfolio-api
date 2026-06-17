import { VercelRequest, VercelResponse } from "@vercel/node";
import { sendSuccess } from "../lib/response";
import { runCors } from "../lib/cors";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (runCors(req, res)) return;

  sendSuccess(res, { message: "Portfolio API is running", timestamp: new Date().toISOString() });
}
