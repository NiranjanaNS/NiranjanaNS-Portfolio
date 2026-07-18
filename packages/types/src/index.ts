export type SceneId =
  | "loading"
  | "hero"
  | "about"
  | "education"
  | "skills"
  | "developer-city"
  | "projects"
  | "ai"
  | "engineering"
  | "github"
  | "contact"
  | "ending";

export type PublishStatus = "draft" | "published" | "archived";

export interface ProjectSummary {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillSummary {
  id: string;
  name: string;
  category: "frontend" | "backend" | "database" | "devops" | "ai" | "tool";
  projects: string[];
}
