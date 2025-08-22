"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone, Brain, Zap } from "lucide-react";
import { ParallaxY, Reveal } from "@/components/motion/reveal";

const skills = [
  {
    category: "Frontend",
    icon: Globe,
    technologies: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "JavaScript", level: 90 },
    ],
  },
  {
    category: "Backend",
    icon: Database,
    technologies: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "REST APIs", level: 85 },
      { name: "WebSocket", level: 75 },
    ],
  },
  {
    category: "Tools & Others",
    icon: Code,
    technologies: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 65 },
      { name: "Three.js", level: 70 },
      { name: "Framer Motion", level: 80 },
      { name: "Algorithm Design", level: 75 },
    ],
  },
];

const SkillBar: React.FC<{ skill: { name: string; level: number }; index: number }> = ({
  skill,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="mb-2 flex justify-between text-sm">
        <span className="text-white/90">{skill.name}</span>
        <span className="text-white/60">{skill.level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        />
      </div>
    </motion.div>
  );
};

const SkillCategory: React.FC<{
  category: typeof skills[0];
  index: number;
}> = ({ category, index }) => {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
          <Icon className="h-5 w-5 text-blue-400" />
        </div>
        <h3 className="text-xl font-semibold text-white">{category.category}</h3>
      </div>
      
      <div className="space-y-4">
        {category.technologies.map((skill, skillIndex) => (
          <SkillBar key={skill.name} skill={skill} index={skillIndex} />
        ))}
      </div>
    </motion.div>
  );
};

export const AboutSection: React.FC<{ id?: string }> = ({ id = "about" }) => {
  return (
    <section id={id} className="relative w-full py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <ParallaxY from={20} to={-10}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </ParallaxY>
          
          <ParallaxY from={12} to={-6} className="mt-4">
            <p className="mx-auto max-w-3xl text-base sm:text-lg lg:text-xl text-gray-300">
              Passionate about creating innovative solutions and pushing the boundaries of technology
            </p>
          </ParallaxY>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Story */}
          <div className="space-y-6">
            <Reveal>
              <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  I'm a passionate <span className="text-blue-400 font-medium">Computer Engineer</span> with 
                  over 2 years of professional experience in software development. My journey began at 
                  Karamanoğlu Mehmetbey University, where I developed a strong foundation in computer science 
                  and discovered my love for creating digital solutions.
                </p>
                
                <p>
                  Currently working as a <span className="text-purple-400 font-medium">Software Engineer at Borda Technology</span>, 
                  I specialize in developing interactive indoor mapping solutions and real-time tracking systems. 
                  My work involves complex algorithm design, digital twin interfaces, and cutting-edge sensor integration.
                </p>
                
                <p>
                  I'm particularly passionate about <span className="text-pink-400 font-medium">AI and machine learning</span>, 
                  constantly exploring how these technologies can solve real-world problems. Whether it's optimizing 
                  mapping algorithms or creating intuitive user interfaces, I strive to build solutions that make a difference.
                </p>
              </div>
            </Reveal>

            {/* Highlights */}
            <Reveal className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">What I Bring</h4>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Brain, text: "Problem-solving mindset" },
                  { icon: Zap, text: "Fast learner & adapter" },
                  { icon: Code, text: "Clean, maintainable code" },
                  { icon: Smartphone, text: "User-focused design" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-3"
                  >
                    <item.icon className="h-5 w-5 text-blue-400" />
                    <span className="text-white/80">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <Reveal>
              <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
            </Reveal>
            
            <div className="space-y-6">
              {skills.map((category, index) => (
                <SkillCategory key={category.category} category={category} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <Reveal className="mt-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "2+", label: "Years Experience" },
              { number: "10+", label: "Projects Completed" },
              { number: "5+", label: "Technologies Mastered" },
              { number: "100%", label: "Passion for Code" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                  {stat.number}
                </motion.div>
                <p className="mt-2 text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutSection;