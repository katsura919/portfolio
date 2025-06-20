"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollColorBackgroundProps {
  sections: {
    id: string;
    color: string; // Can be a solid color or a CSS gradient
  }[];
  showIndicator?: boolean;
  transitionDuration?: number; // Duration in milliseconds
}

export const ScrollColorBackground: React.FC<ScrollColorBackgroundProps> = ({ 
  sections,
  showIndicator = true,
  transitionDuration = 800 // Default fade transition duration
}) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [previousSectionIndex, setPreviousSectionIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Find which section we're currently viewing
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i].id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          if (i !== currentSectionIndex) {
            setPreviousSectionIndex(currentSectionIndex);
            setCurrentSectionIndex(i);
            setIsTransitioning(true);
            
            // Reset transitioning state after animation completes
            setTimeout(() => {
              setIsTransitioning(false);
            }, transitionDuration + 100); // Adding a small buffer
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to set initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections, currentSectionIndex, transitionDuration]);

  // Create particles once and reuse them
  const particles = React.useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      key: `particle-${i}`,
      size: Math.random() * 6 + 1,
      initialX: `${Math.random() * 100}%`,
      initialY: `${Math.random() * 100}%`,
      initialOpacity: Math.random() * 0.5 + 0.3,
      duration: Math.random() * 10 + 10
    }));
  }, []);

  return (
    <>
      <AnimatePresence>
        {/* Current background layer with fade in */}
        <motion.div
          key={`bg-${currentSectionIndex}`}
          className="fixed inset-0 z-0"          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ 
            duration: transitionDuration / 1000, // Convert to seconds for framer-motion
            ease: [0.22, 1, 0.36, 1] // Custom cubic bezier for smoother transition
          }}
          style={{ 
            background: sections[currentSectionIndex]?.color || "rgba(17, 24, 39, 0.8)",
            backgroundSize: "200% 200%",
            backdropFilter: "blur(12px)",
            animation: "gradient 15s ease infinite"
          }}
        >          {/* Subtle noise texture overlay */}
          <motion.div 
            className="absolute inset-0 opacity-[0.03]"
            initial={{ opacity: 0.02, backgroundPosition: "0% 0%" }}
            animate={{ 
              opacity: 0.03, 
              backgroundPosition: ["0% 0%", "100% 100%"]
            }}
            transition={{
              opacity: { duration: transitionDuration / 1000 },
              backgroundPosition: { 
                duration: 120, 
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }
            }}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "200px 200px",
              mixBlendMode: "overlay"
            }}
          />
        
          {/* Add subtle floating particles */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            {particles.map(particle => (
              <motion.div
                key={particle.key}
                className="absolute rounded-full bg-white/50"
                initial={{ 
                  x: particle.initialX, 
                  y: particle.initialY,
                  opacity: particle.initialOpacity
                }}                animate={{ 
                  x: [
                    particle.initialX,
                    `${parseFloat(particle.initialX) + (Math.random() * 10 - 5)}%`,
                    `${parseFloat(particle.initialX) + (Math.random() * 20 - 10)}%`,
                    particle.initialX
                  ], 
                  y: [
                    particle.initialY,
                    `${parseFloat(particle.initialY) + (Math.random() * 10 - 5)}%`,
                    `${parseFloat(particle.initialY) + (Math.random() * 20 - 10)}%`,
                    particle.initialY
                  ],
                  opacity: [particle.initialOpacity, 0.1, particle.initialOpacity],
                  scale: [1, 1.2, 0.9, 1]
                }}
                transition={{ 
                  duration: particle.duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Previous background layer with fade out - only show during transition */}
        {isTransitioning && previousSectionIndex !== null && (
          <motion.div
            key={`bg-prev-${previousSectionIndex}`}
            className="fixed inset-0 z-0"            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0.98 }}
            transition={{ 
              duration: transitionDuration / 1000, // Convert to seconds for framer-motion
              ease: [0.22, 1, 0.36, 1] // Custom cubic bezier for smoother transition
            }}
            style={{ 
              background: sections[previousSectionIndex]?.color || "rgba(17, 24, 39, 0.8)",
              backgroundSize: "200% 200%",
              backdropFilter: "blur(12px)",
              animation: "gradient 15s ease infinite"
            }}
          >            {/* Subtle noise texture overlay for previous */}
            <motion.div 
              className="absolute inset-0 opacity-[0.03]"
              initial={{ opacity: 0.03 }}
              animate={{ opacity: 0 }}
              transition={{ duration: transitionDuration / 1000 * 0.8 }}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
                backgroundSize: "200px 200px",
                mixBlendMode: "overlay"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>      
      {showIndicator && (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
          {sections.map((section, i) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="group flex items-center gap-2"
            >
              <div 
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  i === currentSectionIndex 
                    ? "bg-white scale-110" 
                    : "bg-gray-600 hover:bg-gray-400"
                )}
              />
              <span 
                className={cn(
                  "text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity", 
                  i === currentSectionIndex ? "text-white" : "text-gray-400"
                )}
              >
                {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
              </span>
            </a>
          ))}
        </div>
      )}
    </>
  );
};
