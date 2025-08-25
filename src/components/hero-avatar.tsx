"use client";

import Image from "next/image";
import { m, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export default function HeroAvatar({
  src = "https://avatars.githubusercontent.com/u/53101771?v=4",
  alt = "Bahtiyar Karakoç",
}: { src?: string; alt?: string }) {
  const shouldReduceMotion = useReducedMotion();
  // hafif parallax için mouse takip (isteğe bağlı)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-20, 20], shouldReduceMotion ? [0, 0] : [6, -6]);
  const rotateY = useTransform(x, [-20, 20], shouldReduceMotion ? [0, 0] : [-6, 6]);

  const onMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (shouldReduceMotion) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) / 8);
    y.set((e.clientY - (r.top + r.height / 2)) / 8);
  };

  return (
    <m.div
      onMouseMove={onMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY }}
      className="relative mx-auto mb-8 h-28 w-28 sm:h-32 sm:w-32 lg:h-40 lg:w-40"
    >
      {/* yumuşak glow */}
      <m.div
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-fuchsia-500 to-purple-500 blur-2xl"
        animate={shouldReduceMotion ? { opacity: 0.6 } : { opacity: [0.5, 0.8, 0.5] }}
        transition={shouldReduceMotion ? {} : { duration: 1, repeat: Infinity, ease: "easeInOut" }}
        loading="eager"
      />
<m.div
  className="relative rounded-full p-[3px]"
  style={{
    backgroundImage:
      "linear-gradient(135deg, #60a5fa, #a78bfa, #e879f9, #60a5fa)",
    backgroundSize: "300% 300%",
  }}
  animate={shouldReduceMotion ? {} : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
  transition={shouldReduceMotion ? {} : { duration: 1, repeat: Infinity, ease: "linear" }}
>
  <div className="rounded-full overflow-hidden bg-black/20">
    <Image
      src={src}
      alt={alt}
      width={320}
      height={320}
      priority
      sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, 160px"
      className="h-full w-full object-cover"
    />
  </div>
</m.div>
    </m.div>
  );
}
