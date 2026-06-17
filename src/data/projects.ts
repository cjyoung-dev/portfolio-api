import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "portfolio-api",
    name: "Portfolio API",
    description:
      "An API documentation-style developer portfolio where visitors can query real endpoints to retrieve information about my projects, skills, and experience.",
    status: "active",
    techStack: [
      "TypeScript",
      "Node.js",
      "Vercel",
      "React",
      "Vite",
      "TanStack Query",
      "TanStack Router",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    repoUrl: "https://github.com/cjyoung-dev/portfolio-api",
    liveUrl: "https://cjyoung-dev.github.io",
    highlights: [
      "Designed and built a fully typed serverless REST API from scratch",
      "Architected a two-repo frontend/backend separation with independent deployment pipelines",
      "Implemented professional tooling including ESLint, Prettier, and Bruno API collections",
    ],
    year: 2026,
  },
];
