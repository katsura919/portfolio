// HeroSection.tsx
// A visually appealing hero section for the portfolio using Aceternity UI and Shadcn UI styles.

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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
    <section className="relative w-full min-h-screen overflow-auto flex flex-col justify-center">
      {/* Content Container - Hero Content Only */}
      <div className="relative z-10 pointer-events-none">
        {/* Hero Content */}
        <div
          id="hero"
          className="flex flex-col items-center justify-center min-h-screen px-4"
        >
          <div className="pointer-events-auto flex flex-col items-center">
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
              A passionate Full Stack Developer specialized in React, Next.js,
              and modern web technologies.
            </motion.p>
            <motion.div
              className="flex items-center gap-4 mt-8 pointer-events-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden bg-white text-black hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.7)]"
              >
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
              >
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
