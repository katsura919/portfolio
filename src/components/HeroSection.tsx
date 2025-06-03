// HeroSection.tsx
// A visually appealing hero section for the portfolio using Aceternity UI and Shadcn UI styles.

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Boxes } from "@/components/ui/background-boxes";
import { Github, ArrowRight } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const HeroSection = () => {
  const words = [
    {
      text: "Hi,",
    },
    {
      text: "I'm",
    },
    {
      text: "Jan",
     
    },
    {
      text: "Paul.",
      
    },
  ];

  return (
    <section className="relative w-full flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
      {/* Animated Background */}
      <Boxes/>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 mb-8"
        >
          <span className="px-4 py-2 bg-gray-800/60 rounded-full border border-gray-700 text-gray-300 text-sm backdrop-blur-xl">
            Full Stack Developer
          </span>
        </motion.div>

        <TypewriterEffect words={words} />

        <motion.p
          className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto text-center leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          A passionate Full Stack Developer specialized in React, Next.js, and modern web technologies.
        </motion.p>

        <motion.div
          className="flex items-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <Button asChild size="lg" className="group">
            <a href="#projects" className="flex items-center gap-2">
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a 
              href="https://github.com/katsura919" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>
        </motion.div>

        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
