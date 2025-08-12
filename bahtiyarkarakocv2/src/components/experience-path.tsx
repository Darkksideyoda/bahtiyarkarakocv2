"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ParallaxY, Reveal } from "@/components/motion/reveal";

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  type: string;
  period: string;
  location?: string;
  summary?: string;
  details?: string;
  tags?: string[];
  logoUrl?: string;
};

const demoItems: ExperienceItem[] = [
  {
    logoUrl:"https://media.licdn.com/dms/image/v2/D4D0BAQGE9uQ3sKanwg/company-logo_200_200/company-logo_200_200/0/1698674245320/borda_technology_logo?e=1758153600&v=beta&t=uDUVS8v0na_vSU33oB4x96Hz3CwZG437u-vx1slGWPs",
    id: "borda-se",
    company: "Borda Technology",
    role: "Software Engineer",
    type: "Full-time",
    period: "Oct 2022 – Present · 2 yrs 11 mos",
    location: "Istanbul, Türkiye",
    summary:
      "Interactive indoor mapping, real-time person tracking using radar & sensors, and digital twin UIs.",
    details:
      "Implemented multiple internal tools, optimized mapping algorithms, integrated complex APIs.",
    tags: ["JavaScript", "Algorithm Design"],
  },
  {
    logoUrl:"https://media.licdn.com/dms/image/v2/D4D0BAQGE9uQ3sKanwg/company-logo_200_200/company-logo_200_200/0/1698674245320/borda_technology_logo?e=1758153600&v=beta&t=uDUVS8v0na_vSU33oB4x96Hz3CwZG437u-vx1slGWPs",
    id: "borda-intern",
    company: "Borda Technology",
    role: "Software Engineer Intern",
    type: "Internship",
    period: "Jun 2022 – Oct 2022 · 5 mos",
    location: "İzmir, Türkiye",
    summary: "Prototype features for digital twin services; internal tooling.",
    details:
      "Developed prototypes, tested features, and contributed to UI improvements.",
    tags: ["React", "TypeScript"],
  },
  {
    logoUrl:"https://media.licdn.com/dms/image/v2/D4D0BAQFAd7w-hI3Zbw/company-logo_200_200/company-logo_200_200/0/1737619087276?e=1758153600&v=beta&t=vPzObvJpjC890eWXieGd3fUBss-ZV1Y9hSemZqMPx-U",
    id: "antalya-ataturk-state-hospital-intern",
    company: "Antalya Atatürk State Hospital",
    role: "Software Engineer Intern",
    type: "Internship",
    period: "Jun 2022 – Oct 2022 · 5 mos",
    location: "Antalya, Türkiye",
    summary: "Emergency Screens",
    details:
      "Developed prototypes, tested features, and contributed to UI improvements.",
    tags: ["React", "TypeScript"],
  },
  {
    logoUrl:"https://dosya.kmu.edu.tr/kmu/userfiles/images/Bas%C4%B1n/KM%C3%9C%20Logo%20Tr.png",
    id: "kmu-intern",
    company: "Antalya Atatürk State Hospital",
    role: "Software Engineer Intern",
    type: "Internship",
    period: "Jun 2022 – Oct 2022 · 5 mos",
    location: "Antalya, Türkiye",
    summary: "Emergency Screens",
    details:
      "Developed prototypes, tested features, and contributed to UI improvements.",
    tags: ["React", "TypeScript"],
  },
];


/* Small parts */
const Tag: React.FC<{ label: string }> = ({ label }) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/80">
    {label}
  </span>
);

const Logo: React.FC<{ url?: string; alt: string }> = ({ url, alt }) => (
  <div className="mr-3 flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5">
    {url ? <img src={url} alt={alt} className="h-full w-full object-cover" /> : null}
  </div>
);

/* Loop node */
const LoopNode: React.FC = () => (
  <div className="relative h-6 w-6">
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-fuchsia-400 to-rose-400 opacity-40 blur-[6px]" />
    <motion.svg
      viewBox="0 0 24 24"
      className="absolute inset-0 h-6 w-6"
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
      <defs>
        <linearGradient id="loopStroke" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <motion.path
        d="M12 2.5 C17 2.5, 21.5 7, 21.5 12 C21.5 17, 17 21.5, 12 21.5 C7 21.5, 2.5 17, 2.5 12 C2.5 7, 7 2.5, 12 2.5Z"
        fill="none"
        stroke="url(#loopStroke)"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeDasharray="3 4"
        animate={{ strokeDashoffset: [0, 14] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M12 3.2 C16.4 3, 21 7.2, 20.8 12 C20.6 16.8, 16.4 21, 11.8 20.8 C7.6 20.6, 3 16.8, 3.2 12 C3.4 7.6, 7.6 3.4, 12 3.2Z"
        fill="none"
        stroke="url(#loopStroke)"
        strokeOpacity="0.6"
        strokeWidth="0.8"
        strokeDasharray="2 6"
        animate={{ strokeDashoffset: [12, -6] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
    <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90" />
  </div>
);

/* Main */
export const ExperiencePath: React.FC<{
  items?: ExperienceItem[];
  title?: string;
  id?: string;
}> = ({ items = demoItems, title = "Experience", id = "experience" }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  // Scroll progress for the section
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // progress starts when üst kısmın %80'i viewport'a girince, biter alt %20 çıkınca
    offset: ["start 80%", "end 20%"],
  });

  // Parallax for title; line grow
  const titleY = useTransform(scrollYProgress, [0, 1], [20, -10]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <section id={id} className="relative w-full py-24">
      <div ref={sectionRef} className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
  <ParallaxY from={20} to={-10}>
    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold
                   bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-400
                   bg-clip-text text-transparent">
      Career Journey
    </h2>
  </ParallaxY>

  <ParallaxY from={12} to={-6} className="mt-4">
    <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-gray-300">
      Follow my path from computer engineering student to AI-focused software engineer
    </p>
  </ParallaxY>
</div>

        {/* Wrapper: line-x sadece sm+; mobile çizgi/loop yok */}
        <div className="relative sm:[--line-x:3.5rem]">
          {/* Scroll-grow line (sm+) */}
          <motion.div
  className="pointer-events-none absolute top-0 bottom-0 left-[var(--line-x)]
             hidden w-[2px] -translate-x-1/2 rounded-full sm:block"
  style={{
    background: "linear-gradient(180deg,#3b82f6,#a855f7,#ec4899,#3b82f6)",
    backgroundSize: "100% 300%",
  }}
  animate={{ backgroundPositionY: ["0%", "100%", "0%"] }}
  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
/>

          {/* Liste */}
          <ul className="space-y-8 pl-0 sm:pl-[calc(var(--line-x)+2rem)]">
            {items.map((exp, idx) => {
              const isOpen = openId === exp.id;
              return (
                <motion.li
                  key={exp.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35, margin: "0px 0px -40px 0px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.08 }}
                  className="relative cursor-pointer rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-4 backdrop-blur-[2px] transition-colors hover:bg-white/[0.06]"
                  onClick={() => setOpenId(isOpen ? null : exp.id)}
                >
                  {/* Node (sm+), kart görünürken scale+fade */}
                  <motion.div
                    className="pointer-events-none absolute left-[-2rem] top-1/2 hidden -translate-y-1/2 sm:block sm:-ml-3 z-10"
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 + idx * 0.08 }}
                  >
                    <LoopNode />
                  </motion.div>

                  {/* Kart içerik */}
                  <div className="flex items-start">
                    <Logo url={exp.logoUrl} alt={exp.company} />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-2">
                        <h3 className="truncate text-lg font-semibold text-white">
                          {exp.role}
                        </h3>
                        <span className="text-white/50">·</span>
                        <p className="truncate text-white/80">{exp.company}</p>
                        <span className="ml-2 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/70">
                          {exp.type}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-white/60">
                        {exp.period}
                        {exp.location ? ` · ${exp.location}` : ""}
                      </p>
                      {exp.summary && (
                        <p className="mt-2 text-sm leading-6 text-white/80">
                          {exp.summary}
                        </p>
                      )}
                      {!!exp.tags?.length && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {exp.tags.map((t) => (
                            <Tag key={t} label={t} />
                          ))}
                        </div>
                      )}

                      {/* Accordion content */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen && exp.details ? "auto" : 0,
                          opacity: isOpen && exp.details ? 1 : 0,
                        }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        {exp.details && (
                          <div className="mt-3 text-sm leading-6 text-white/70">
                            {exp.details}
                          </div>
                        )}
                      </motion.div>
                    </div>

                    {/* sağdaki küçük ok */}
                    <motion.div
                      aria-hidden
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-3 mt-1 text-white/50"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePath;
