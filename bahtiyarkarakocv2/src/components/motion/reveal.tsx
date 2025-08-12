"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

/** Basit fade + y kaydırma */
export function Reveal({
  children,
  y = 24,
  delay = 0,
  duration = 0.6,
  amount = 0.3,
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
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

/** Scroll oldukça Y ekseninde parallax (başlıklar vs.) */
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
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: [start as any, end as any] });
  const y = useTransform(scrollYProgress, [0, 1], [from, to]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <motion.div ref={ref} className={className} style={{ y, opacity }}>
      {children}
    </motion.div>
  );
}
