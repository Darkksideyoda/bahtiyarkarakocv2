import { Metadata } from "next";
import { type PageProps } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import { BlogPostPage } from "@/components/blog-post-page";
import SiteBackground from "@/components/site-background";
import FloatingNav from "@/components/floating-nav";

interface BlogPostPageProps extends PageProps<{ slug: string }> {}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Bahtiyar Karakoç`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.imageUrl ? [post.imageUrl] : [],
    },
  };
}

export default function BlogPost({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative">
      <SiteBackground />
      <FloatingNav />
      <BlogPostPage post={post} />
    </main>
  );
}