import HeroSection from "@/components/hero-section";
import { ExperiencePath } from "@/components/experience-path";
import SiteBackground from "@/components/site-background";

export default function Home() {
  return (
    <main className="relative">
      <SiteBackground /> 
      <HeroSection />
      <ExperiencePath id="experience" />
    </main>
  );
}
