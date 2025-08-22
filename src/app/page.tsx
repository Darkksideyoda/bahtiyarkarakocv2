import HeroSection from "@/components/hero-section";
import { ExperiencePath } from "@/components/experience-path";
import { ProjectsSection } from "@/components/projects-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import SiteBackground from "@/components/site-background";

export default function Home() {
  return (
    <main className="relative">
      <SiteBackground /> 
      <HeroSection />
      <AboutSection id="about" />
      <ExperiencePath id="experience" />
      <ProjectsSection id="projects" />
      <ContactSection id="contact" />
    </main>
  );
}
