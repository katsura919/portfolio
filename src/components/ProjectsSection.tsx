// ProjectsSection.tsx
// A section to showcase projects with screenshot and GitHub link.

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Github, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const projects = [
  {
    name: "Yomikata",
    description:
      "A manga reader website built using MangaDex API. This project is a work in progress and I am currently working on adding more features and improving the UI/UX.",
    image: "/project1.png",
    github: "https://github.com/yourusername/project-one",
    demo: "https://project-one.demo",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    name: "TaskVenture Landing Page",
    description:
      "A landing page for a task management app built using React and TailwindCSS.",
    image: "/project2.png",
    github: "https://github.com/yourusername/project-two",
    demo: "https://project-two.demo",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "Pokemania: Pokemon Battle Outcome Predictor",
    description:
      "A pokemon battle outcome predictor built using NextJS, Django and Machine Learning. This project is a work in progress and I am currently working on adding more features and improving the UI/UX.",
    image: "/project3.png",
    github: "https://github.com/yourusername/project-two",
    demo: "https://project-two.demo",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "Enquiro: Multi-Tenant AI Chatbot",
    description:
      "A Saas platform for business to use AI chatbot to answer customer queries and manage escalations. ",
    image: "/project4.png",
    github: "https://github.com/yourusername/project-two",
    demo: "https://project-two.demo",
    tags: ["React", "Node.js", "MongoDB"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="w-full py-20" id="projects">
      <div className="max-w-7xl mx-auto px-4 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <span className="px-4 py-2 bg-gray-800/60 rounded-full border border-gray-700 text-gray-300 text-sm backdrop-blur-xl">
            My Work
          </span>
          <h2 className="mt-6 pb-2 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Featured Projects
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my best work, side projects, and open source
            contributions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-800/50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                  >
                    {project.name}
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="text-neutral-300 text-sm max-w-sm mt-2 line-clamp-2"
                  >
                    {project.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <img
                          src={project.image}
                          height="500"
                          width="500"
                          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer"
                          alt={project.name}
                        />
                      </DialogTrigger>
                      <DialogContent className="w-[95vw] h-[95vh] p-6">
                        <img
                          src={project.image}
                          className="w-full h-full object-contain rounded-lg"
                          alt={project.name}
                        />
                      </DialogContent>
                    </Dialog>
                  </CardItem>
                  <div className="flex justify-between items-center mt-4">
                    <CardItem
                      translateZ={20}
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      <div className="flex gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-900/80 rounded-md text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      className="flex items-center gap-4"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:text-white text-gray-400 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:text-white text-gray-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
