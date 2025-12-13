"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { projects } from "@/data";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".slide") as HTMLElement[];

      // Timeline principal con ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${(slides.length + 1) * 100}%`, // +1 para el título
          pin: true,
          anticipatePin: 1,
          scrub: 1.2,
          onUpdate: (self) => {
            // El primer 25% es para el título
            if (self.progress < 0.2) {
              setCurrentIndex(-1); // Mostrar título
            } else {
              const adjustedProgress = (self.progress - 0.2) / 0.8;
              const index = Math.round(adjustedProgress * (slides.length - 1));
              setCurrentIndex(Math.min(index, slides.length - 1));
            }
          },
        },
      });

      // 1. Animación del texto HIGHLIGHTS (primeros 20% del scroll)
      // Mantenerlo de fondo con baja opacidad
      tl.to(
        ".highlights-bg-text",
        {
          scale: 1.5,
          opacity: 0.1,
          duration: 1,
          ease: "power2.inOut",
        },
        0
      );

      // 2. Animar cada slide con efectos vistosos
      slides.forEach((slide, index) => {
        const slideStart = 1 + index * 1; // Comienza después del título

        // Entrada: desde abajo con rotación y escala
        tl.fromTo(
          slide,
          {
            opacity: 0,
            y: "100vh",
            scale: 0.8,
            rotateX: -15,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          slideStart
        );

        // Salida: hacia arriba con fade (excepto la última)
        if (index < slides.length - 1) {
          tl.to(
            slide,
            {
              opacity: 0,
              y: "-30vh",
              scale: 0.9,
              duration: 0.4,
              ease: "power2.in",
            },
            slideStart + 0.6
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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

      {/* Slides container - apilados para animación vertical */}
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
            <div className="relative w-full max-w-5xl mx-auto px-4 md:px-12">
              {/* Project Card */}
              <div className="relative group">
                {/* Título y Año - Arriba en móvil */}
                <div className="mb-4 md:hidden flex items-start justify-between">
                  <h3 className="text-2xl font-black leading-tight tracking-tighter text-white">
                    {project.title.toUpperCase()}
                  </h3>
                  <span className="text-4xl font-black text-white/20 leading-none ml-4">
                    {project.year}
                  </span>
                </div>

                {/* Image Container with Overflow Visible */}
                <div className="relative aspect-[16/10] overflow-visible bg-gray-900 rounded-lg shadow-2xl">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent rounded-lg" />

                  {/* OVERFLOW ELEMENT: Year - Solo desktop */}
                  <div className="hidden md:block absolute -top-8 -right-4 md:-top-12 md:-right-8 z-0">
                    <span className="text-6xl md:text-[8rem] font-black text-white/10 leading-none">
                      {project.year}
                    </span>
                  </div>

                  {/* OVERFLOW ELEMENT: Title - Solo desktop */}
                  <div className="hidden md:block absolute -bottom-6 -left-2 md:-bottom-10 md:-left-8 z-30">
                    <h3 className="text-3xl md:text-5xl lg:text-7xl font-black leading-none tracking-tighter text-white drop-shadow-lg">
                      <AnimatedText
                        text={project.title.toUpperCase()}
                        delay={0.1}
                      />
                    </h3>
                  </div>
                </div>

                {/* Info Overlay - Solo desktop */}
                <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div className="flex-1">
                      {/* Category */}
                      <p className="text-xs md:text-sm tracking-widest text-white/80 mb-3 font-bold uppercase">
                        {project.category}
                      </p>

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

                {/* Descripción y Tech Stack - Abajo en móvil */}
                <div className="mt-4 md:hidden">
                  <p className="text-xs tracking-widest text-white/60 mb-2 font-bold uppercase">
                    {project.category}
                  </p>
                  <p className="text-xs text-white/70 leading-relaxed mb-4">
                    {project.des}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex justify-center gap-3">
                    {project.iconLists.map((icon, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center"
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
