import { VercelRequest, VercelResponse } from "@vercel/node";
import { sendSuccess } from "../lib/response";

export default function handler(req: VercelRequest, res: VercelResponse) {
  sendSuccess(res, { message: "Portfolio API is running", timestamp: new Date().toISOString() });
}
