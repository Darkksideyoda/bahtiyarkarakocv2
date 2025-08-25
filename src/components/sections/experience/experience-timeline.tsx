"use client";

import { m } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface ExperienceTimelineProps {
  children: React.ReactNode;
}

export function ExperienceTimeline({ children }: ExperienceTimelineProps) {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  

  return (
    <div ref={sectionRef} className="relative sm:[--line-x:3.5rem]">
      {/* Animated timeline */}
      <m.div
        className="pointer-events-none absolute top-0 bottom-0 left-[var(--line-x)]
                   hidden w-[2px] -translate-x-1/2 rounded-full sm:block"
        style={{
          background: "linear-gradient(180deg,#3b82f6,#a855f7,#ec4899,#3b82f6)",
          backgroundSize: "100% 300%",
        }}
        animate={shouldReduceMotion ? {} : { backgroundPositionY: ["0%", "100%", "0%"] }}
        transition={shouldReduceMotion ? {} : { duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Content */}
      <ul className="space-y-8 pl-0 sm:pl-[calc(var(--line-x)+2rem)]">
        {children}
      </ul>
    </div>
  );
}