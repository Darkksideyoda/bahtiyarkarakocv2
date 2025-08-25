"use client";
import { m, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { durations, easings, viewportDefault } from "@/lib/motion-tokens";

/**
 * Simple fade + y slide animation component
 */
export function Reveal({
  children,
  y = 24,
  delay = 0,
  duration = durations.base,
  amount = 0.2,
  once = true,
  className = "",
}: {
  children: React.ReactNode;
  y?: number;
  delay?: number;
  duration?: number;
  amount?: number;   // görünürlük eşiği
  once?: boolean;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ 
        duration: shouldReduceMotion ? 0.1 : duration, 
        ease: easings.out, 
        delay: shouldReduceMotion ? 0 : delay 
      }}
    >
      {children}
    </m.div>
  );
}

/**
 * Parallax Y animation based on scroll progress
 */
export function ParallaxY({
  children,
  from = 16,
  to = -8,
  start = "start 80%",
  end = "end 20%",
  className = "",
}: {
  children: React.ReactNode;
  from?: number; // px
  to?: number;   // px
  start?: string;
  end?: string;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: [start as any, end as any] });
  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [from, to]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <m.div ref={ref} className={className} style={{ y, opacity }}>
      {children}
    </m.div>
  );
}
