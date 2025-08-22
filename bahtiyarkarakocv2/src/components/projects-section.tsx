"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight, Code, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParallaxY, Reveal } from "@/components/motion/reveal";

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  status: "completed" | "in-progress" | "planned";
  category: "web" | "mobile" | "desktop" | "ai" | "other";
};

const demoProjects: ProjectItem[] = [
  {
    id: "indoor-mapping",
    title: "Indoor Mapping & Navigation System",
    description: "Real-time indoor mapping solution with person tracking using radar sensors and digital twin visualization.",
    longDescription: "A comprehensive indoor mapping platform that combines real-time person tracking with interactive digital twin interfaces. Built for smart building applications with WebSocket integration for live updates.",
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
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
    imageUrl: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
    githubUrl: "#",
    featured: false,
    status: "planned",
    category: "ai"
  }
];

const ProjectCard: React.FC<{
  project: ProjectItem;
  index: number;
  featured?: boolean;
}> = ({ project, index, featured = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  const statusColors = {
    completed: "bg-green-500/20 text-green-400 border-green-500/30",
    "in-progress": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    planned: "bg-orange-500/20 text-orange-400 border-orange-500/30"
  };

  const categoryIcons = {
    web: Globe,
    mobile: Code,
    desktop: Code,
    ai: Code,
    other: Code
  };

  const CategoryIcon = categoryIcons[project.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Status badge */}
      <div className="absolute right-4 top-4 z-10">
        <span className={`rounded-full border px-2 py-1 text-xs font-medium ${statusColors[project.status]}`}>
          {project.status.replace("-", " ")}
        </span>
      </div>

      {/* Image */}
      {project.imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500"
            animate={{ scale: isHovered ? 1.05 : 1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="mb-3 flex items-center gap-2">
          <CategoryIcon className="h-5 w-5 text-blue-400" />
          <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-white/70">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, featured ? 6 : 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > (featured ? 6 : 4) && (
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/60">
              +{project.technologies.length - (featured ? 6 : 4)} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <Button
              size="sm"
              asChild
              className="rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="rounded-full border-white/20 text-white/80 hover:border-white/40 hover:text-white"
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Hover effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl border border-blue-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "linear-gradient(135deg, rgba(59,130,246,0.05), rgba(168,85,247,0.05))"
        }}
      />
    </motion.div>
  );
};

export const ProjectsSection: React.FC<{
  projects?: ProjectItem[];
  title?: string;
  id?: string;
}> = ({ projects = demoProjects, title = "Projects", id = "projects" }) => {
  const [filter, setFilter] = useState<"all" | ProjectItem["category"]>("all");
  
  const categories = ["all", "web", "mobile", "ai", "other"] as const;
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id={id} className="relative w-full py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <ParallaxY from={20} to={-10}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </ParallaxY>
          
          <ParallaxY from={12} to={-6} className="mt-4">
            <p className="mx-auto max-w-3xl text-base sm:text-lg lg:text-xl text-gray-300">
              A showcase of my recent work in web development, AI, and digital solutions
            </p>
          </ParallaxY>
        </div>

        {/* Filter buttons */}
        <Reveal className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                filter === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "border border-white/20 text-white/70 hover:border-white/40 hover:text-white"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </Reveal>

        {/* Featured projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                featured
              />
            ))}
          </div>
        )}

        {/* Regular projects */}
        {regularProjects.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {regularProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index + featuredProjects.length}
              />
            ))}
          </div>
        )}

        {/* View more */}
        <Reveal className="mt-16 text-center">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="rounded-full border-2 border-white/20 px-8 py-3 text-white/80 backdrop-blur-sm hover:border-blue-400 hover:text-white"
          >
            <a href="https://github.com/Darkksideyoda" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default ProjectsSection;