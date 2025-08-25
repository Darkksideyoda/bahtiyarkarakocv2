export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  tags: string[];
  category: string;
  featured: boolean;
  imageUrl?: string;
  slug: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  count: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  challenge: string;
  impact: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  status: "completed" | "in-progress" | "planned";
  category: "web" | "mobile" | "desktop" | "ai" | "other";
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  type: string;
  period: string;
  location?: string;
  summary?: string;
  details?: string;
  tags?: string[];
  logoUrl?: string;
}