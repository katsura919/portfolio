// SkillsSection.tsx
// A section to showcase developer skills using icons and modern UI.

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  Server,
  Terminal,
  Box,
} from "lucide-react";

const skills = [
  {
    name: "Frontend",
    description: "React, Next.js, TypeScript, TailwindCSS",
    icon: Layout,
    color: "text-blue-400/80",
  },
  {
    name: "Backend",
    description: "Node.js, Express.js, Mongoose",
    icon: Server,
    color: "text-emerald-400/80",
  },
  {
    name: "Databases",
    description: "MongoDB, PostgreSQL",
    icon: Database,
    color: "text-yellow-400/80",
  },
  {
    name: "Languages",
    description: "TypeScript, JavaScript",
    icon: Code2,
    color: "text-pink-400/80",
  },
  {
    name: "Tools",
    description: "GitHub, Postman, Swagger",
    icon: Terminal,
    color: "text-orange-400/80",
  },
  {
    name: "UI Libraries",
    description: "Shadcn/ui, Aceternity UI, Framer Motion",
    icon: Box,
    color: "text-cyan-400/80",
  },
];

const SkillsSection = () => {
  return (
    <section className="w-full py-20" id="skills">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <span className="px-4 py-2 bg-gray-800/60 rounded-full border border-gray-700 text-gray-300 text-sm backdrop-blur-xl">
            My Expertise
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit that enables me to build complete, scalable applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-800/50 hover:border-gray-700/50 hover:bg-gray-800/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className={`p-2.5 rounded-lg bg-gray-900/50 ring-1 ring-white/10 ${skill.color} transition-colors duration-300`}>
                  <skill.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-white group-hover:text-white/90 transition-colors">
                  {skill.name}
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
