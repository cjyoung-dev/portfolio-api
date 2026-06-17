import { VercelRequest, VercelResponse } from "@vercel/node";
import { sendSuccess } from "../lib/response";
import { profile } from "../data";
import { runCors } from "../lib/cors";

export default function handler(req: VercelRequest, res: VercelResponse): void {
  if (runCors(req, res)) return;

  sendSuccess(res, profile);
}
