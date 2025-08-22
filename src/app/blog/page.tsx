import { Metadata } from "next";
import { BlogSection } from "@/components/blog-section";
import SiteBackground from "@/components/site-background";
import FloatingNav from "@/components/floating-nav";

export const metadata: Metadata = {
  title: "Blog - Bahtiyar Karakoç",
  description: "Thoughts on technology, development practices, and lessons learned from real-world projects",
};

export default function BlogPage() {
  return (
    <main className="relative">
      <SiteBackground />
      <FloatingNav />
      <div className="pt-20">
        <BlogSection />
      </div>
    </main>
  );
}