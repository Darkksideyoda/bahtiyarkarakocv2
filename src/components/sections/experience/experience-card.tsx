"use client";

import { ChevronDown } from "lucide-react";
import { m } from "framer-motion";
import { Logo } from "@/components/common/logo";
import { Tag } from "@/components/common/tag";
import { LoopNode } from "@/components/common/loop-node";
import { MotionDiv } from "@/components/motion/motion-primitives";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { ExperienceItem } from "@/types/content";

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

export function ExperienceCard({ experience, index, isOpen, onToggle }: ExperienceCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionDiv
      variant="slideUp"
      delay={index * 0.05}
      className="relative cursor-pointer rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-4 backdrop-blur-[2px] transition-colors hover:bg-white/[0.06]"
      onClick={onToggle}
    >
      {/* Timeline node */}
      <MotionDiv
        variant="scaleIn"
        delay={0.05 + index * 0.05}
        className="pointer-events-none absolute left-[-2rem] top-1/2 hidden -translate-y-1/2 sm:block sm:-ml-3 z-10"
      >
        <LoopNode />
      </MotionDiv>

      {/* Card content */}
      <div className="flex items-start">
        <Logo url={experience.logoUrl} alt={experience.company} className="mr-3" />
        
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2">
            <h3 className="truncate text-lg font-semibold text-white">
              {experience.role}
            </h3>
            <span className="text-white/50">·</span>
            <p className="truncate text-white/80">{experience.company}</p>
            <Tag label={experience.type} variant="status" className="ml-2 border-white/10 bg-white/5 text-white/70" />
          </div>
          
          <p className="mt-1 text-sm text-white/60">
            {experience.period}
            {experience.location ? ` · ${experience.location}` : ""}
          </p>
          
          {experience.summary && (
            <p className="mt-2 text-sm leading-6 text-white/80">
              {experience.summary}
            </p>
          )}
          
          {experience.tags && experience.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {experience.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          )}

          {/* Expandable details */}
          <m.div
            initial={false}
            animate={{
              height: isOpen && experience.details ? "auto" : 0,
              opacity: isOpen && experience.details ? 1 : 0,
            }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.25 }}
            className="overflow-hidden"
          >
            {experience.details && (
              <div className="mt-3 text-sm leading-6 text-white/70 whitespace-pre-line">
                {experience.details}
              </div>
            )}
          </m.div>
        </div>

        {/* Expand/collapse indicator */}
        <m.div
          aria-hidden
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: shouldReduceMotion ? 0.1 : 0.2 }}
          className="ml-3 mt-1 text-white/50"
        >
          <ChevronDown size={18} />
        </m.div>
      </div>
    </MotionDiv>
  );
}