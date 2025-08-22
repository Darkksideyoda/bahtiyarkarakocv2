"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Search, ChevronRight } from "lucide-react";
import Link from "next/link";

// Mock blog data - replace with your actual data source
const blogPosts = [
  {
    id: 1,
    slug: "real-time-indoor-mapping",
    title: "Building Real-Time Indoor Mapping Systems with React and WebSockets",
    excerpt: "Learn how I developed an interactive indoor mapping solution with real-time person tracking using radar sensors and digital twin visualization.",
    content: "Full blog post content here...",
    author: "Bahtiyar Karakoç",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["React", "WebSocket", "Three.js", "Real-time", "Indoor Mapping"],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: true
  },
  {
    id: 2,
    slug: "ai-healthcare-solutions",
    title: "AI-Powered Healthcare Solutions: From Concept to Production",
    excerpt: "Exploring the development of machine learning models for medical diagnosis and patient care optimization in modern healthcare systems.",
    content: "Full blog post content here...",
    author: "Bahtiyar Karakoç",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Artificial Intelligence",
    tags: ["AI", "Healthcare", "Machine Learning", "Python", "TensorFlow"],
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: true
  },
  {
    id: 3,
    slug: "microservices-architecture",
    title: "Scaling Applications with Microservices Architecture",
    excerpt: "A comprehensive guide to designing and implementing microservices architecture for large-scale applications using Docker and Kubernetes.",
    content: "Full blog post content here...",
    author: "Bahtiyar Karakoç",
    date: "2024-01-05",
    readTime: "15 min read",
    category: "Backend Development",
    tags: ["Microservices", "Docker", "Kubernetes", "Node.js", "Architecture"],
    image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: false
  },
  {
    id: 4,
    slug: "modern-web-performance",
    title: "Optimizing Modern Web Applications for Peak Performance",
    excerpt: "Best practices and techniques for improving web application performance, including code splitting, lazy loading, and caching strategies.",
    content: "Full blog post content here...",
    author: "Bahtiyar Karakoç",
    date: "2023-12-28",
    readTime: "10 min read",
    category: "Web Development",
    tags: ["Performance", "React", "Next.js", "Optimization", "Web Vitals"],
    image: "https://images.pexels.com/photos/8386425/pexels-photo-8386425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: false
  }
];

const categories = [
  "All Posts",
  "Web Development",
  "Backend Development", 
  "Artificial Intelligence",
  "Healthcare Technology"
];

interface BlogCardProps {
  post: typeof blogPosts[0];
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
        
        {post.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
              Featured
            </span>
          </div>
        )}
        
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium bg-black/50 text-white rounded-full backdrop-blur-sm">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
        >
          Read More
          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
};

interface BlogSectionProps {
  id?: string;
  showAll?: boolean;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ id, showAll = false }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All Posts" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const displayPosts = showAll ? filteredPosts : filteredPosts.slice(0, 3);
  const featuredPosts = displayPosts.filter(post => post.featured);
  const regularPosts = displayPosts.filter(post => !post.featured);

  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent mb-6">
            {showAll ? "Blog & Insights" : "Latest Blog Posts"}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {showAll 
              ? "Thoughts on technology, development practices, and lessons learned from real-world projects"
              : "Insights and experiences from my journey in software development"
            }
          </p>
        </motion.div>

        {showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => {
                const count = category === "All Posts" 
                  ? blogPosts.length 
                  : blogPosts.filter(post => post.category === category).length;
                
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-white/10"
                    }`}
                  >
                    {category} ({count})
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Featured Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} featured />
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: showAll ? 0.4 : 0.3 }}
        >
          {showAll && <h3 className="text-2xl font-bold text-white mb-6">All Posts</h3>}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAll ? regularPosts : displayPosts).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </motion.div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              View All Blog Posts
              <ChevronRight className="h-5 w-5" />
            </Link>
          </motion.div>
        )}

        {showAll && filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No posts found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};