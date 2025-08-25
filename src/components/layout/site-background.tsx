"use client";

import { m } from "framer-motion";
import React from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function SiteBackground() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  // Snow particles
  const particles = React.useMemo(
    () =>
      Array.from({ length: shouldReduceMotion ? 10 : 40 }).map(() => ({
        left: `${Math.floor(Math.random() * 100)}vw`,
        top: `${Math.floor(Math.random() * 100)}vh`,
        delay: Math.random() * 2,
        dur: 5 + Math.random() * 4,
        size: Math.random() * 2 + 1,
      })),
    [mounted, shouldReduceMotion]
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20" />

      {/* Animated radial textures */}
      <m.div
        className="absolute inset-0"
        animate={shouldReduceMotion ? {} : { backgroundPositionX: ["0%", "100%", "0%"] }}
        transition={shouldReduceMotion ? {} : { duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "radial-gradient(1100px 600px at 12% 18%, rgba(59,130,246,.08), transparent), radial-gradient(900px 500px at 82% 62%, rgba(168,85,247,.08), transparent)",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Snow effect */}
      {mounted &&
        particles.map((p, i) => (
          <m.span
            key={i}
            className="absolute rounded-full bg-white/70"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={shouldReduceMotion ? { opacity: 0.4 } : { y: ["-5vh", "105vh"], opacity: [0.8, 0.8] }}
            transition={shouldReduceMotion ? {} : {
              duration: p.dur,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
          />
        ))}
    </div>
  );
}