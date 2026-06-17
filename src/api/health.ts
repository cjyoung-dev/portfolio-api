import { VercelRequest, VercelResponse } from "@vercel/node";
import { sendSuccess } from "../lib/response";
import { runCors } from "../lib/cors";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  await runCors(req, res);

  sendSuccess(res, { message: "Portfolio API is running", timestamp: new Date().toISOString() });
}
