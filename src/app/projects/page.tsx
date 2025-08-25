import type { Metadata } from "next";
import { ProjectsSection } from "@/components/projects-section";
import { SiteBackground } from "@/components/layout/site-background";
import FloatingNav from "@/components/floating-nav";

export const metadata: Metadata = {
  title: "Projects - Bahtiyar Karakoç",
  description: "A showcase of my recent work in web development, AI, and digital solutions",
};

export default function ProjectsPage() {
  return (
    <main className="relative">
      <SiteBackground />
      <FloatingNav />
      <div className="pt-20">
        <ProjectsSection showAll={true} />
      </div>
    </main>
  );
}