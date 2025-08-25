export type ProjectItem = {
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
};

export const projects: ProjectItem[] = [
  {
    id: "indoor-mapping",
    title: "Indoor Mapping & Navigation System",
    description: "Real-time indoor mapping solution with person tracking using radar sensors and digital twin visualization.",
    longDescription: "A comprehensive indoor mapping platform that combines real-time person tracking with interactive digital twin interfaces. Built for smart building applications with WebSocket integration for live updates.",
    challenge: "Achieving sub-meter accuracy with real-time tracking while handling 100+ concurrent WebSocket connections.",
    impact: "Reduced navigation errors by 85% and improved building efficiency through real-time occupancy insights.",
    technologies: ["React", "TypeScript", "Node.js", "WebSocket", "Three.js", "Radar API"],
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    status: "completed",
    category: "web"
  },
  {
    id: "hospital-management",
    title: "Emergency Department Dashboard",
    description: "Real-time emergency department status displays and patient queue management system for healthcare facilities.",
    longDescription: "Developed during my internship at Antalya Atatürk State Hospital. Features real-time patient tracking, queue management, and emergency status displays for medical staff.",
    challenge: "Integrating with legacy hospital systems while ensuring HIPAA compliance and 99.9% uptime.",
    impact: "Reduced patient wait times by 30% and improved staff efficiency through better information flow.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Real-time APIs", "Healthcare Systems"],
    imageUrl: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
    githubUrl: "#",
    featured: false,
    status: "completed",
    category: "web"
  },
  {
    id: "portfolio-v2",
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio website built with Next.js, featuring smooth animations and interactive elements.",
    longDescription: "This very website! Built with modern web technologies including Next.js 15, Tailwind CSS, and Framer Motion. Features smooth scrolling, animated components, and responsive design.",
    challenge: "Achieving 100/100 Lighthouse scores while maintaining rich animations and interactive elements.",
    impact: "Increased professional inquiries by 200% and showcases modern web development capabilities.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
    imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    liveUrl: "#",
    githubUrl: "https://github.com/Darkksideyoda",
    featured: true,
    status: "in-progress",
    category: "web"
  },
  {
    id: "ai-project",
    title: "AI-Powered Data Analysis Tool",
    description: "Machine learning application for data pattern recognition and automated insights generation.",
    longDescription: "An intelligent data analysis platform that uses machine learning algorithms to identify patterns and generate automated insights from complex datasets.",
    challenge: "Processing large datasets efficiently while providing real-time insights and maintaining model accuracy.",
    impact: "Reduced data analysis time by 75% and improved decision-making accuracy for business stakeholders.",
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
    imageUrl: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
    githubUrl: "#",
    featured: false,
    status: "planned",
    category: "ai"
  }
];