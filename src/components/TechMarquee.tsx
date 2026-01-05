"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiExpo,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiDocker,
  SiFigma,
  SiGit,
  SiShadcnui,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
  { name: "Expo", icon: SiExpo, color: "text-white" },
  { name: "Shadcn UI", icon: SiShadcnui, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
];

const TechMarquee = () => {
  return (
    <div className="w-[90%] mx-auto py-16 overflow-hidden">
      <div className="relative flex w-full max-w-5xl mx-auto">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" />

        <motion.div
          className="flex gap-20 items-center whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {/* Render items twice for seamless loop */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 group cursor-default"
            >
              <tech.icon
                className={`text-5xl ${tech.color} transition-transform duration-300 group-hover:scale-110`}
              />
              <span className="text-1   xl font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechMarquee;
