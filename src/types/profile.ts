export interface Profile {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  availability: "open" | "employed";
}
