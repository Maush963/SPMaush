"use client";

import React, { useRef } from "react";
import { useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useMotionValue, useInView } from "framer-motion";
import { projects } from "@/data";
import { ArrowRight } from "lucide-react";

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

// Text reveal animation component
const AnimatedText = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "inherit" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Highlights = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Control manual del progreso dentro de la sección
  const manualProgress = useMotionValue(0);
  const smoothProgress = useSpring(manualProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Intercepta el scroll sólo cuando la sección está activa
  const isInView = useInView(containerRef, { margin: "0px", amount: 0.6 });

  // Estado para touch
  const touchStartYRef = useRef<number | null>(null);

  const clamp = (v: number, min = 0, max = 1) =>
    Math.min(Math.max(v, min), max);

  const handleWheel = (e: WheelEvent) => {
    if (!isInView) return;
    const current = manualProgress.get();
    // Si aún no hemos terminado las slides, consume el scroll y avanza
    if (current < 1) {
      e.preventDefault();
      const delta = e.deltaY;
      const next = clamp(current + delta / 1200); // sensibilidad del avance
      manualProgress.set(next);
    } else {
      // Al terminar (current == 1), dejar que el scroll natural continúe
      // No llamamos preventDefault para permitir pasar a la siguiente sección
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartYRef.current = e.touches[0]?.clientY ?? null;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isInView || touchStartYRef.current == null) return;
    const currentY = e.touches[0]?.clientY ?? touchStartYRef.current;
    const deltaY = touchStartYRef.current - currentY; // positivo al subir
    const current = manualProgress.get();
    const next = clamp(current + deltaY / 1200);
    manualProgress.set(next);
    touchStartYRef.current = currentY;
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // Evita el scroll normal y usa el manual dentro de la sección
    el.addEventListener("wheel", handleWheel, { passive: false } as any);
    el.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    } as any);
    el.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    } as any);
    return () => {
      el.removeEventListener("wheel", handleWheel as any);
      el.removeEventListener("touchstart", handleTouchStart as any);
      el.removeEventListener("touchmove", handleTouchMove as any);
    };
  }, [containerRef, isInView]);

  // HIGHLIGHTS text animations
  // Starts small (0.5) and opaque (1), ends large (1.5) and faded (0.1)
  const titleOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0.1]);
  const titleScale = useTransform(smoothProgress, [0, 0.1], [0.5, 1.5]);

  // La sección se mantiene fija en pantalla; el scroll sólo avanza slides
  const sectionHeight = `100vh`;

  return (
    <section
      ref={containerRef}
      className="relative bg-black text-white"
      style={{ height: sectionHeight }}
      id="highlights"
    >
      {/* Contenedor fijo: la sección no se mueve mientras avanza el carrusel */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Background "HIGHLIGHTS" text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
          style={{
            opacity: titleOpacity,
            scale: titleScale,
          }}
        >
          <h2 className="text-[15vw] md:text-[20vw] font-black text-white tracking-tighter select-none">
            HIGHLIGHTS
          </h2>
        </motion.div>

        {/* Carousel container */}
        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 z-10 h-full flex items-center justify-center">
          {enhancedProjects.map((project, index) => {
            // Calculate precise scroll range for each project
            // We divide the total scroll space among the projects
            const step = 1 / enhancedProjects.length;
            const start = index * step;
            const end = (index + 1) * step;

            // Overlap factor for smooth transitions
            const fadeStart = start;
            const fadeEnd = start + step * 0.2; // Fade in quickly
            const exitStart = end - step * 0.2; // Start fading out
            const exitEnd = end;

            // Opacity logic: Fade in, stay visible, fade out
            const opacity = useTransform(
              smoothProgress,
              [start - 0.1, fadeStart, fadeEnd, exitStart, exitEnd, end + 0.1],
              [0, 0, 1, 1, 0, 0]
            );

            // Scale logic: Slight zoom effect
            const scale = useTransform(
              smoothProgress,
              [start, end],
              [0.9, 1.1]
            );

            // Y-Axis logic: Enter from bottom, exit to top
            const y = useTransform(
              smoothProgress,
              [start - 0.1, fadeEnd, exitStart, end + 0.1],
              ["50vh", "0vh", "0vh", "-50vh"]
            );

            // Z-Index ensures correct stacking order
            const zIndex = useTransform(smoothProgress, (v) => {
              return v >= start && v < end ? 10 : 0;
            });

            return (
              <motion.div
                key={project.id}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{
                  opacity,
                  scale,
                  y,
                  zIndex,
                }}
              >
                <div className="relative w-full max-w-5xl pointer-events-auto">
                  {/* Project Card */}
                  <div className="relative group">
                    {/* Image Container with Overflow Visible */}
                    <div className="relative aspect-[16/10] overflow-visible bg-gray-900 rounded-lg shadow-2xl">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent rounded-lg" />

                      {/* OVERFLOW ELEMENT: Year - Top Right Outside */}
                      <div className="absolute -top-8 -right-4 md:-top-12 md:-right-8 z-0">
                        <span className="text-6xl md:text-[8rem] font-black text-white/10 leading-none">
                          {project.year}
                        </span>
                      </div>

                      {/* OVERFLOW ELEMENT: Title - Bottom Left Outside */}
                      <div className="absolute -bottom-6 -left-2 md:-bottom-10 md:-left-8 z-30">
                        <h3 className="text-3xl md:text-5xl lg:text-7xl font-black leading-none tracking-tighter text-white drop-shadow-lg">
                          <AnimatedText
                            text={project.title.toUpperCase()}
                            delay={0.1}
                          />
                        </h3>
                      </div>
                    </div>

                    {/* Info Overlay - Inside (Preferred Layout) */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
                      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <div className="flex-1">
                          {/* Category */}
                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xs md:text-sm tracking-widest text-white/80 mb-3 font-bold uppercase"
                          >
                            {project.category}
                          </motion.p>

                          {/* Description */}
                          <p className="text-sm md:text-base text-white/80 max-w-xl leading-relaxed">
                            {project.des}
                          </p>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex gap-3">
                          {project.iconLists.map((icon, i) => (
                            <div
                              key={i}
                              className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                            >
                              <img
                                src={icon}
                                alt="tech"
                                className="w-5 h-5 object-contain"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 right-12 flex items-center gap-3 z-20">
          <span className="text-sm tracking-widest text-white/40">SCROLL</span>
          <div className="w-1 h-16 bg-white/20 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-white"
              style={{
                scaleY: smoothProgress,
                transformOrigin: "top",
              }}
            />
          </div>
        </div>

        {/* Al finalizar, no mostramos botón; el scroll natural continúa */}

        {/* Progress Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {enhancedProjects.map((_, index) => {
            const step = 1 / enhancedProjects.length;
            const start = index * step;
            const end = (index + 1) * step;
            const isActive = useTransform(
              smoothProgress,
              [start, end],
              [0.3, 1]
            );

            return (
              <motion.div
                key={index}
                className="w-1.5 h-1.5 rounded-full bg-white"
                style={{ opacity: isActive }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
