export type ExperienceType = "work" | "education";

export interface Experience {
  id: string;
  type: ExperienceType;
  organization: string;
  role: string;
  startDate: string;
  endDate: string | null;
  description: string;
  highlights: string[];
}
