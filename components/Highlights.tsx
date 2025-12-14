"use client";

import React, { useRef } from "react";
import { projects } from "@/data";
import { useScrollCarousel } from "./highlights/useScrollCarousel";
import { ProjectCard } from "./highlights/ProjectCard";

interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  year?: string;
  category?: string;
}

// Enhanced projects with metadata
const enhancedProjects: Project[] = projects.map((project, index) => ({
  ...project,
  year: ["2024", "2024", "2023", "2024"][index],
  category: [
    "WEB DESIGN // ANALYTICS // DASHBOARD",
    "MOBILE APP // HEALTHCARE // CLINIC",
    "SALES PAGE // COPYWRITING // DESIGN",
    "TICKETING SYSTEM // ENTERPRISE // NEXTJS",
  ][index],
}));

const Highlights = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  
  const { currentIndex, scrollDirection } = useScrollCarousel({
    itemCount: enhancedProjects.length,
    sectionRef,
  });

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white h-screen overflow-hidden"
      id="highlights"
    >
      {/* Background "HIGHLIGHTS" text */}
      <div className="highlights-bg-text absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h2 className="text-[20vw] md:text-[20vw] font-black text-white tracking-tighter select-none opacity-100 scale-50">
          HIGHLIGHTS
        </h2>
      </div>

      {/* Slides container */}
      <div
        ref={slidesRef}
        className="absolute inset-0"
        style={{ perspective: "1000px" }}
      >
        {enhancedProjects.map((project, index) => (
          <div
            key={project.id}
            className="slide absolute inset-0 flex items-center justify-center opacity-0"
            style={{ transformStyle: "preserve-3d" }}
          >
            <ProjectCard
              project={project}
              isVisible={currentIndex === index}
              scrollDirection={scrollDirection}
            />
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-4 md:bottom-12 md:right-12 flex items-center gap-2 md:gap-3 z-20">
        <span className="text-[10px] md:text-sm tracking-widest text-white/40">
          SCROLL
        </span>
        <div className="w-0.5 h-12 md:w-1 md:h-16 bg-white/20 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-white transition-transform origin-top"
            style={{
              transform: `scaleY(${
                currentIndex / (enhancedProjects.length - 1)
              })`,
            }}
          />
        </div>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {enhancedProjects.map((_, index) => (
          <div
            key={index}
            className="w-1.5 h-1.5 rounded-full bg-white transition-opacity"
            style={{ opacity: currentIndex === index ? 1 : 0.3 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Highlights;
