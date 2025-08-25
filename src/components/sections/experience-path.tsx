"use client";

import { useState } from "react";
import { ParallaxY } from "@/components/motion/reveal";
import { ExperienceTimeline } from "./experience/experience-timeline";
import { ExperienceCard } from "./experience/experience-card";
import type { ExperienceItem } from "@/types/content";

interface ExperiencePathProps {
  items: ExperienceItem[];
  title?: string;
  id?: string;
}

export function ExperiencePath({ 
  items, 
  title = "Career Journey", 
  id = "experience" 
}: ExperiencePathProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (experienceId: string) => {
    setOpenId(openId === experienceId ? null : experienceId);
  };

  return (
    <section 
      id={id} 
      className="relative w-full py-24" 
      style={{ 
        contentVisibility: "auto",
        containIntrinsicSize: "0 1000px"
      }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <ParallaxY from={20} to={-10}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold
                           bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-400
                           bg-clip-text text-transparent">
              {title}
            </h2>
          </ParallaxY>

          <ParallaxY from={12} to={-6} className="mt-4">
            <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-gray-300">
              Follow my path from computer engineering student to AI-focused software engineer
            </p>
          </ParallaxY>
        </div>

        {/* Timeline */}
        <ExperienceTimeline>
          {items.map((experience, index) => (
            <li key={experience.id}>
              <ExperienceCard
                experience={experience}
                index={index}
                isOpen={openId === experience.id}
                onToggle={() => handleToggle(experience.id)}
              />
            </li>
          ))}
        </ExperienceTimeline>
      </div>
    </section>
  );
}