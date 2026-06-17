import { VercelRequest, VercelResponse } from "@vercel/node";
import { sendSuccess, sendError } from "../lib/response";
import { experience } from "../data";
import { ExperienceType } from "../types";
import { runCors } from "../lib/cors";

const VALID_TYPES: ExperienceType[] = ["work", "education"];

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  await runCors(req, res);

  const { type } = req.query;

  if (type) {
    if (typeof type !== "string" || !VALID_TYPES.includes(type as ExperienceType)) {
      sendError(res, 400, `Invalid type. Must be one of: ${VALID_TYPES.join(", ")}`);
      return;
    }

    const filtered = experience.filter((e) => e.type === type);
    sendSuccess(res, filtered, { count: filtered.length, type });
    return;
  }

  sendSuccess(res, experience, { count: experience.length });
}
