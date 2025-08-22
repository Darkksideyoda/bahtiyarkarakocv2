"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight, Search, Filter, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParallaxY, Reveal } from "@/components/motion/reveal";
import { blogPosts, blogCategories } from "@/data/blog-posts";
import { BlogPost } from "@/types/blog";

const BlogCard: React.FC<{
  post: BlogPost;
  index: number;
  featured?: boolean;
}> = ({ post, index, featured = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] ${
        featured ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      {/* Featured badge */}
      {post.featured && (
        <div className="absolute right-4 top-4 z-10">
          <span className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 text-xs font-medium text-white">
            Featured
          </span>
        </div>
      )}

      {/* Image */}
      {post.imageUrl && (
        <div className={`relative overflow-hidden ${featured ? "h-64" : "h-48"}`}>
          <motion.img
            src={post.imageUrl}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500"
            animate={{ scale: isHovered ? 1.05 : 1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Category badge on image */}
          <div className="absolute bottom-4 left-4">
            <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {post.category}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className={`p-6 ${featured ? "space-y-4" : "space-y-3"}`}>
        {/* Meta information */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-white/60">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{post.readingTime} min read</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            <span>{post.author.name}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className={`font-semibold text-white group-hover:text-blue-300 transition-colors ${
          featured ? "text-2xl" : "text-xl"
        }`}>
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className={`leading-relaxed text-white/70 ${
          featured ? "text-base" : "text-sm"
        }`}>
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, featured ? 5 : 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80"
            >
              {tag}
            </span>
          ))}
          {post.tags.length > (featured ? 5 : 3) && (
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/60">
              +{post.tags.length - (featured ? 5 : 3)} more
            </span>
          )}
        </div>

        {/* Read more button */}
        <div className="pt-2">
          <Button
            variant="ghost"
            size="sm"
            className="group/btn h-auto p-0 text-blue-400 hover:bg-transparent hover:text-blue-300"
          >
            Read More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Hover effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl border border-blue-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "linear-gradient(135deg, rgba(59,130,246,0.05), rgba(168,85,247,0.05))"
        }}
      />
    </motion.article>
  );
};

const CategoryFilter: React.FC<{
  categories: typeof blogCategories;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}> = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <button
        onClick={() => onCategoryChange("all")}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
          activeCategory === "all"
            ? "bg-blue-600 text-white shadow-lg"
            : "border border-white/20 text-white/70 hover:border-white/40 hover:text-white"
        }`}
      >
        All Posts
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
            activeCategory === category.id
              ? "bg-blue-600 text-white shadow-lg"
              : "border border-white/20 text-white/70 hover:border-white/40 hover:text-white"
          }`}
        >
          {category.name} ({category.count})
        </button>
      ))}
    </div>
  );
};

const SearchBar: React.FC<{
  searchTerm: string;
  onSearchChange: (term: string) => void;
}> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative max-w-md mx-auto">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
      <input
        type="text"
        placeholder="Search blog posts..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full rounded-full border border-white/10 bg-white/[0.03] pl-10 pr-4 py-3 text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300 focus:border-blue-400 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-blue-400/20"
      />
    </div>
  );
};

export const BlogSection: React.FC<{ id?: string }> = ({ id = "blog" }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter posts based on category and search term
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "all" || 
      post.category.toLowerCase().replace(/\s+/g, "-") === activeCategory;
    
    const matchesSearch = searchTerm === "" ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section id={id} className="relative w-full py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <ParallaxY from={20} to={-10}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Blog & Insights
            </h2>
          </ParallaxY>
          
          <ParallaxY from={12} to={-6} className="mt-4">
            <p className="mx-auto max-w-3xl text-base sm:text-lg lg:text-xl text-gray-300">
              Thoughts on technology, development practices, and lessons learned from real-world projects
            </p>
          </ParallaxY>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-8">
          <Reveal>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          </Reveal>
          
          <Reveal>
            <CategoryFilter
              categories={blogCategories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </Reveal>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <Reveal>
              <h3 className="mb-8 text-2xl font-bold text-white">Featured Posts</h3>
            </Reveal>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  index={index}
                  featured
                />
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <div className="mb-16">
            {featuredPosts.length > 0 && (
              <Reveal>
                <h3 className="mb-8 text-2xl font-bold text-white">Latest Posts</h3>
              </Reveal>
            )}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  index={index + featuredPosts.length}
                />
              ))}
            </div>
          </div>
        )}

        {/* No results */}
        {filteredPosts.length === 0 && (
          <Reveal className="text-center py-16">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-12 backdrop-blur-sm">
              <Search className="mx-auto mb-4 h-12 w-12 text-white/40" />
              <h3 className="text-xl font-semibold text-white mb-2">No posts found</h3>
              <p className="text-white/60 mb-6">
                Try adjusting your search terms or category filter
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("all");
                }}
                variant="outline"
                className="rounded-full border-white/20 text-white/80 hover:border-white/40 hover:text-white"
              >
                Clear Filters
              </Button>
            </div>
          </Reveal>
        )}

        {/* Blog Stats */}
        <Reveal className="mt-16">
          <div className="grid gap-6 grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {[
              { number: blogPosts.length.toString(), label: "Blog Posts" },
              { number: blogCategories.length.toString(), label: "Categories" },
              { number: Array.from(new Set(blogPosts.flatMap(p => p.tags))).length.toString(), label: "Topics Covered" },
              { number: Math.round(blogPosts.reduce((acc, post) => acc + post.readingTime, 0) / blogPosts.length).toString() + " min", label: "Avg. Read Time" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center rounded-lg sm:rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-6 backdrop-blur-sm"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                  {stat.number}
                </motion.div>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default BlogSection;