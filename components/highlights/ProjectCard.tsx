"use client";

import { AnimatedText } from "./AnimatedText";

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

interface ProjectCardProps {
  project: Project;
  isVisible?: boolean;
  scrollDirection?: "up" | "down";
}

/**
 * Componente de tarjeta de proyecto con diseño responsive
 */
export const ProjectCard = ({
  project,
  isVisible = true,
  scrollDirection = "down",
}: ProjectCardProps) => {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 md:px-12">
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block cursor-pointer"
        >
          {/* Título y Año - Arriba en móvil */}
          <div className="mb-4 md:hidden flex items-start justify-between">
            <div className="text-2xl font-black leading-tight tracking-tighter text-white">
              <AnimatedText
                text={project.title.toUpperCase()}
                viewportAmount={0.3}
              />
            </div>
            <div className="text-4xl font-black text-white/20 leading-none ml-4">
              <AnimatedText
                text={project.year || ""}
                delay={0.2}
                viewportAmount={0.3}
              />
            </div>
          </div>

          {/* Image Container */}
          <div className="relative aspect-[16/10] overflow-visible bg-gray-900 rounded-lg md:shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent rounded-lg" />

            {/* Year - Solo desktop */}
            <div className="hidden md:block absolute -top-8 -right-4 md:-top-12 md:-right-8 z-0">
              <span className="text-6xl md:text-[8rem] font-black text-black leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                {project.year}
              </span>
            </div>

            {/* Title - Solo desktop con animación dominó */}
            <div className="hidden md:block absolute -bottom-6 -left-2 md:-bottom-10 md:-left-8 z-30">
              <h3 className="text-3xl md:text-5xl lg:text-7xl font-black leading-none tracking-tighter text-white drop-shadow-lg">
                <AnimatedText
                  text={project.title.toUpperCase()}
                  delay={0.1}
                  isVisible={isVisible}
                  scrollDirection={scrollDirection}
                />
              </h3>
            </div>
          </div>

          {/* Info Overlay - Solo desktop */}
          <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="flex-1">
                <p className="text-xs md:text-sm tracking-widest text-white/80 mb-3 font-bold uppercase">
                  {project.category}
                </p>
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
                      className={`w-5 h-5 object-contain ${
                        icon.includes("nextjs") ? "invert" : ""
                      }`}
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

            <div className="flex justify-center gap-3">
              {project.iconLists.map((icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center"
                >
                  <img
                    src={icon}
                    alt="tech"
                    className={`w-5 h-5 object-contain ${
                      icon.includes("nextjs") ? "invert" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </a>
      ) : (
        <div className="relative group">
          {/* Título y Año - Arriba en móvil */}
          <div className="mb-4 md:hidden flex items-start justify-between">
            <div className="text-2xl font-black leading-tight tracking-tighter text-white">
              <AnimatedText
                text={project.title.toUpperCase()}
                viewportAmount={0.3}
              />
            </div>
            <div className="text-4xl font-black text-white/20 leading-none ml-4">
              <AnimatedText
                text={project.year || ""}
                delay={0.2}
                viewportAmount={0.3}
              />
            </div>
          </div>

          {/* Image Container */}
          <div className="relative aspect-[16/10] overflow-visible bg-gray-900 rounded-lg md:shadow-2xl">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent rounded-lg" />

            {/* Year - Solo desktop */}
            <div className="hidden md:block absolute -top-8 -right-4 md:-top-12 md:-right-8 z-0">
              <span className="text-6xl md:text-[8rem] font-black text-black leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                {project.year}
              </span>
            </div>

            {/* Title - Solo desktop con animación dominó */}
            <div className="hidden md:block absolute -bottom-6 -left-2 md:-bottom-10 md:-left-8 z-30">
              <h3 className="text-3xl md:text-5xl lg:text-7xl font-black leading-none tracking-tighter text-white drop-shadow-lg">
                <AnimatedText
                  text={project.title.toUpperCase()}
                  delay={0.1}
                  isVisible={isVisible}
                  scrollDirection={scrollDirection}
                />
              </h3>
            </div>
          </div>

          {/* Info Overlay - Solo desktop */}
          <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="flex-1">
                <p className="text-xs md:text-sm tracking-widest text-white/80 mb-3 font-bold uppercase">
                  {project.category}
                </p>
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
                      className={`w-5 h-5 object-contain ${
                        icon.includes("nextjs") ? "invert" : ""
                      }`}
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

            <div className="flex justify-center gap-3">
              {project.iconLists.map((icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center"
                >
                  <img
                    src={icon}
                    alt="tech"
                    className={`w-5 h-5 object-contain ${
                      icon.includes("nextjs") ? "invert" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
