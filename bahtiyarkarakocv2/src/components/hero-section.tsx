"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSocials from "./social-links";

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const yTitle = useTransform(scrollYProgress, [0, 0.4], [0, -40]);
  const ySub = useTransform(scrollYProgress, [0, 0.4], [0, -20]);

  const smoothScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (!el) return;

    const start = window.scrollY;
    const end = el.getBoundingClientRect().top + window.scrollY - 24;
    const duration = 700;
    const startTime = performance.now();

    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const tick = (now: number) => {
      const p = Math.min(1, (now - startTime) / duration);
      const value = start + (end - start) * ease(p);
      window.scrollTo(0, value);
      if (p < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  return (
<section className="relative flex min-h-screen items-center justify-center overflow-hidden">
<HeroSocials /> 
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.h1
          style={{ y: yTitle }}
          className="mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:via-blue-300 dark:to-purple-300 sm:text-6xl lg:text-7xl"
        >
          Bahtiyar Karakoç
        </motion.h1>

        <motion.p
          style={{ y: ySub }}
          className="mb-8 text-xl font-light leading-relaxed text-gray-600 dark:text-gray-300 sm:text-2xl lg:text-3xl"
        >
          <span className="font-medium text-purple-600 dark:text-purple-400">
            Fullstack
          </span>
          <span className="block sm:inline"> Enthusiast Computer Engineer</span>
        </motion.p>

        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            onClick={() => smoothScrollTo("experience")}
            size="lg"
            className="rounded-full bg-blue-600 px-8 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700"
          >
            View Projects
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="rounded-full border-2 border-gray-300 px-8 py-3 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-blue-400 dark:border-gray-600 dark:hover:border-blue-400"
          >
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              Download CV
              <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500 dark:text-gray-400"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
