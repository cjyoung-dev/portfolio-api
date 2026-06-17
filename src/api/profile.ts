import { VercelRequest, VercelResponse } from "@vercel/node";
import { sendSuccess } from "../lib/response";
import { profile } from "../data";
import { runCors } from "../lib/cors";

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  await runCors(req, res);

  sendSuccess(res, profile);
}
