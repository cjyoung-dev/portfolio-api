export type SkillCategory = "language" | "frontend" | "backend" | "database" | "tooling" | "other";

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: "familiar" | "proficient" | "expert";
}
