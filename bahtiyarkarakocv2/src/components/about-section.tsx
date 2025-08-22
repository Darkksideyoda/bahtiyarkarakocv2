"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Zap, Code as CodeIcon, Smartphone } from "lucide-react";
import { ParallaxY, Reveal } from "@/components/motion/reveal";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiThreedotjs,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiExpress,
  SiFastapi,
  SiRedis,
  SiAmazonaws,
  SiVercel,
  SiVite,
  SiWebpack,
  SiEslint,
  SiPrettier,
} from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

const skillCategories = [
  {
    category: "Frontend Development",
    color: "from-blue-500 to-cyan-500",
    technologies: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    ],
  },
  {
    category: "Backend & Database",
    color: "from-green-500 to-emerald-500",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],
  },
  {
    category: "Tools & Technologies",
    color: "from-purple-500 to-pink-500",
    technologies: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
      { name: "ESLint", icon: SiEslint, color: "#4B32C3" },
      { name: "Prettier", icon: SiPrettier, color: "#F7B93E" },
    ],
  },
  {
    category: "Design & Development",
    color: "from-orange-500 to-red-500",
    technologies: [
      { name: "Three.js", icon: SiThreedotjs, color: "#000000" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
      { name: "VS Code", icon: VscCode, color: "#007ACC" },
    ],
  },
];

const TechChip: React.FC<{
  tech: { name: string; icon: any; color: string };
  index: number;
}> = ({ tech, index }) => {
  const IconComponent = tech.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30"
        style={{ backgroundColor: tech.color }}
      />
      
      <div className="relative flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-sm transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.06]">
        <IconComponent 
          className="h-5 w-5 transition-colors duration-300" 
          style={{ color: tech.color }}
        />
        <span className="text-sm font-medium text-white/90 group-hover:text-white">
          {tech.name}
        </span>
      </div>
    </motion.div>
  );
};

const SkillCategory: React.FC<{
  category: typeof skillCategories[0];
  index: number;
}> = ({ category, index }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="space-y-6"
    >
      {/* Category Header */}
      <div className="flex items-center gap-3">
        <div 
          className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.color}`}
        />
        <h3 className="text-lg font-semibold text-white">
          {category.category}
        </h3>
      </div>
      
      {/* Technology Chips */}
      <div className="flex flex-wrap gap-3">
        {category.technologies.map((tech, techIndex) => (
          <TechChip key={tech.name} tech={tech} index={techIndex} />
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
                  { icon: CodeIcon, text: "Clean, maintainable code" },
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
              <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
            </Reveal>
            
            <div className="space-y-8">
              {skillCategories.map((category, index) => (
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