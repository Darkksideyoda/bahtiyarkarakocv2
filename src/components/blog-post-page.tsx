"use client";

import React from "react";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/types/blog";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

interface BlogPostPageProps {
  post: BlogPost;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatContent = (content: string) => {
    // Simple markdown-like formatting
    return content
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold text-white mt-8 mb-4">{line.slice(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-semibold text-white mt-6 mb-3">{line.slice(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-semibold text-white mt-4 mb-2">{line.slice(4)}</h3>;
        }
        
        // Lists
        if (line.startsWith('- ')) {
          return <li key={index} className="text-white/80 ml-4 mb-1">{line.slice(2)}</li>;
        }
        
        // Bold text
        const boldText = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');
        
        // Empty lines
        if (line.trim() === '') {
          return <br key={index} />;
        }
        
        // Regular paragraphs
        return (
          <p key={index} className="text-white/80 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: boldText }} />
        );
      });
  };

  return (
    <article className="relative w-full py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Reveal>
          <div className="mb-8">
            <Button
              asChild
              variant="ghost"
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </Reveal>

        {/* Hero Image */}
        {post.imageUrl && (
          <Reveal>
            <div className="relative mb-8 h-64 sm:h-80 lg:h-96 overflow-hidden rounded-2xl">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Category badge */}
              <div className="absolute bottom-6 left-6">
                <span className="rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                  {post.category}
                </span>
              </div>
            </div>
          </Reveal>
        )}

        {/* Article Header */}
        <header className="mb-12">
          <Reveal>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
          </Reveal>

          <Reveal>
            <p className="text-lg sm:text-xl text-white/70 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
          </Reveal>

          {/* Meta Information */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>1.2k views</span>
              </div>
            </div>
          </Reveal>

          {/* Tags */}
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Action Buttons */}
          <Reveal>
            <div className="flex items-center gap-4 pb-8 border-b border-white/10">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-white/20 text-white/80 hover:border-white/40 hover:text-white"
              >
                <Heart className="mr-2 h-4 w-4" />
                Like (24)
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-white/20 text-white/80 hover:border-white/40 hover:text-white"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </Reveal>
        </header>

        {/* Article Content */}
        <Reveal>
          <div className="prose prose-lg max-w-none">
            <div className="text-white/80 leading-relaxed space-y-4">
              {formatContent(post.content)}
            </div>
          </div>
        </Reveal>

        {/* Author Bio */}
        <Reveal>
          <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              {post.author.avatar && (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full border-2 border-white/10"
                />
              )}
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  About {post.author.name}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Passionate Computer Engineer with 2+ years of experience in software development. 
                  Currently working as a Software Engineer at Borda Technology, specializing in 
                  indoor mapping solutions and AI-powered systems.
                </p>
                <div className="mt-4 flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="rounded-full border-white/20 text-white/80 hover:border-white/40 hover:text-white"
                  >
                    <Link href="/#contact">Get In Touch</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="rounded-full border-white/20 text-white/80 hover:border-white/40 hover:text-white"
                  >
                    <a href="https://github.com/Darkksideyoda" target="_blank" rel="noopener noreferrer">
                      Follow on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Related Posts */}
        <Reveal>
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">Related Posts</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {/* You can implement related posts logic here */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-2">
                  More posts coming soon...
                </h3>
                <p className="text-white/70 text-sm">
                  Stay tuned for more technical insights and project stories.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  );
};

export default BlogPostPage;