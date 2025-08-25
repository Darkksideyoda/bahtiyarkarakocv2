"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, FolderOpen, BookOpen, ArrowLeft } from "lucide-react";
import SiteBackground from "@/components/site-background";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center">
      <SiteBackground />
      
      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
        <div className="mb-8">
          <h1 className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved to a different location.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            asChild
            className="rounded-full border-white/20 text-white/80 hover:border-white/40 hover:text-white"
          >
            <Link href="/projects">
              <FolderOpen className="mr-2 h-4 w-4" />
              View Projects
            </Link>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            asChild
            className="rounded-full border-white/20 text-white/80 hover:border-white/40 hover:text-white"
          >
            <Link href="/blog">
              <BookOpen className="mr-2 h-4 w-4" />
              Read Blog
            </Link>
          </Button>
        </div>

        <div className="mt-8">
          <Button
            variant="ghost"
            asChild
            className="text-white/60 hover:text-white/80"
          >
            <button onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </button>
          </Button>
        </div>
      </div>
    </main>
  );
}