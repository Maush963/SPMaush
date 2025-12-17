"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const team = [
    {
      name: "Mauricio Salas",
      role: "Ingeniero de Software",
      image: "https://maush963.github.io/Imagesformysalespage/Maushh.jpeg",
    },
    {
      name: "Sebastian Ugalde",
      role: "Diseñador Multimedia",
      image: "https://maush963.github.io/Imagesformysalespage/Uger.jpeg",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="section-padding bg-black text-white relative overflow-hidden scroll-anchor"
      id="about"
    >
      {/* Línea decorativa diagonal eliminada para limpiar el fondo */}

      <div className="container-custom relative z-10">
        {/* Header con tono casual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="heading-section text-center md:text-left">
            <span className="block text-white/40 text-2xl md:text-3xl mb-2">
              LOS CULPABLES
            </span>
            <span className="block text-white">DE TODO ESTO</span>
          </h2>
        </motion.div>

        {/* Bloque equilibrado con paneles, imágenes e info separadas */}
        <div className="relative max-w-6xl mx-auto">
          {/* Panel eliminado para evitar huecos y mantener foco en contenido */}

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
            {team.map((member, index) => {
              const [firstName, ...restName] = member.name.split(" ");
              const lastName = restName.join(" ");
              return (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Imagen vertical a la izquierda */}
                    <div className="relative w-full md:w-[48%] h-[300px] md:h-[520px] bg-neutral-900">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                    {/* Información a la derecha */}
                    <div className="p-6 md:p-8 md:w-[52%] flex items-center">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                          <span>{firstName}</span>
                          {lastName && (
                            <>
                              <span className="md:hidden"> {lastName}</span>
                              <span className="hidden md:block">
                                {lastName}
                              </span>
                            </>
                          )}
                        </h3>
                        <p className="text-white/70 font-medium text-xs md:text-sm uppercase tracking-widest mt-2">
                          {member.role}
                        </p>
                        <p className="text-white/60 text-sm md:text-base leading-relaxed mt-3">
                          {member.description}
                        </p>
                        <div className="h-px bg-white/10 mt-6" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Separador y descripción corta de la propuesta */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-16"
          >
            <div className="h-px w-24 bg-white/10 mx-auto mb-6" />
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center">
              En Sorelli, con bases sólidas en diseño y software, el trabajo se
              enfoca en una estrategia clara: comunicar para convertir. Cada
              proyecto equilibra estética, tecnología y resultados medibles.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
