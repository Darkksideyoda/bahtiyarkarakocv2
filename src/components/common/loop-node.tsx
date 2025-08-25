"use client";

import { m } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function LoopNode() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative h-6 w-6">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-fuchsia-400 to-rose-400 opacity-40 blur-[6px]" />
      <m.svg
        viewBox="0 0 24 24"
        className="absolute inset-0 h-6 w-6"
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={shouldReduceMotion ? {} : { duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <linearGradient id="loopStroke" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <m.path
          d="M12 2.5 C17 2.5, 21.5 7, 21.5 12 C21.5 17, 17 21.5, 12 21.5 C7 21.5, 2.5 17, 2.5 12 C2.5 7, 7 2.5, 12 2.5Z"
          fill="none"
          stroke="url(#loopStroke)"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeDasharray="3 4"
          animate={shouldReduceMotion ? {} : { strokeDashoffset: [0, 14] }}
          transition={shouldReduceMotion ? {} : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <m.path
          d="M12 3.2 C16.4 3, 21 7.2, 20.8 12 C20.6 16.8, 16.4 21, 11.8 20.8 C7.6 20.6, 3 16.8, 3.2 12 C3.4 7.6, 7.6 3.4, 12 3.2Z"
          fill="none"
          stroke="url(#loopStroke)"
          strokeOpacity="0.6"
          strokeWidth="0.8"
          strokeDasharray="2 6"
          animate={shouldReduceMotion ? {} : { strokeDashoffset: [12, -6] }}
          transition={shouldReduceMotion ? {} : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </m.svg>
      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90" />
    </div>
  );
}