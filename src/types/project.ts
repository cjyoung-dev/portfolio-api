export type ProjectStatus = "active" | "complete" | "archived";

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  techStack: string[];
  repoUrl?: string;
  liveUrl?: string;
  highlights: string[];
  year: number;
}
