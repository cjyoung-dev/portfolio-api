import { VercelRequest, VercelResponse } from "@vercel/node";
import { sendSuccess, sendError } from "../lib/response";
import { projects } from "../data";
import { ProjectStatus } from "../types";

const VALID_STATUSES: ProjectStatus[] = ["active", "complete", "archived"];

export default function handler(req: VercelRequest, res: VercelResponse): void {
  const { status } = req.query;

  if (status) {
    if (typeof status !== "string" || !VALID_STATUSES.includes(status as ProjectStatus)) {
      sendError(res, 400, `Invalid status. Must be one of: ${VALID_STATUSES.join(", ")}`);
      return;
    }

    const filtered = projects.filter((p) => p.status === status);
    sendSuccess(res, filtered, { count: filtered.length, status });
    return;
  }

  sendSuccess(res, projects, { count: projects.length });
}
