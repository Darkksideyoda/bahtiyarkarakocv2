import HeroSection from "@/components/hero-section";
import { ExperiencePath } from "@/components/experience-path";
import { ProjectsSection } from "@/components/projects-section";
import { AboutSection } from "@/components/about-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import SiteBackground from "@/components/site-background";
import FloatingNav from "@/components/floating-nav";

export default function Home() {
  return (
    <main className="relative">
      <SiteBackground /> 
      <FloatingNav />
      <div id="hero">
        <HeroSection />
      </div>
      <AboutSection id="about" />
      <ExperiencePath id="experience" />
      <ProjectsSection id="projects" />
      <BlogSection id="blog" />
      <ContactSection id="contact" />
    </main>
  );
}
