import { VercelRequest, VercelResponse } from "@vercel/node";
import { sendSuccess, sendError } from "../lib/response";
import { skills } from "../data";
import { SkillCategory } from "../types";
import { runCors } from "../lib/cors";

const VALID_CATEGORIES: SkillCategory[] = [
  "language",
  "frontend",
  "backend",
  "database",
  "tooling",
  "other",
];

export default function handler(req: VercelRequest, res: VercelResponse): void {
  if (runCors(req, res)) return;

  const { category } = req.query;

  if (category) {
    if (typeof category !== "string" || !VALID_CATEGORIES.includes(category as SkillCategory)) {
      sendError(res, 400, `Invalid category. Must be one of: ${VALID_CATEGORIES.join(", ")}`);
      return;
    }

    const filtered = skills.filter((s) => s.category === category);
    sendSuccess(res, filtered, { count: filtered.length, category });
    return;
  }

  sendSuccess(res, skills, { count: skills.length });
}
