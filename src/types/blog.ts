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
  readingTime: number; // in minutes
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