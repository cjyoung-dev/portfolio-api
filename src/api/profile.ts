import { VercelRequest, VercelResponse } from "@vercel/node";
import { sendSuccess } from "../lib/response";
import { profile } from "../data";

export default function handler(req: VercelRequest, res: VercelResponse): void {
  sendSuccess(res, profile);
}
