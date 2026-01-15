"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="section-padding bg-black text-white relative overflow-hidden scroll-anchor"
    >
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="heading-section">
            <span className="block text-white/40 text-2xl md:text-3xl mb-2">
              COMO IMPACTA EN
            </span>
            <span className="block text-white">NEGOCIOS REALES</span>
          </h2>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16 md:mb-20"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
            {/* YouTube Video Embed */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/vv7QXLwmtN4"
              title="Testimonio Arquiplanner"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-2 md:-left-8 text-white/10 text-6xl md:text-8xl font-serif leading-none">
              "
            </div>

            {/* Quote Text */}
            <blockquote className="relative pl-4 md:pl-8 pr-4 py-6 md:py-8">
              <p className="text-lg md:text-2xl text-white/90 font-light leading-relaxed mb-8 italic">
                Pasamos a una tasa de cierre de 15-25% a 30-50% gracias a la
                implementación de la landing page.
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 md:gap-6">
                {/* Logo */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white p-3 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="https://maush963.github.io/Imagesformysalespage/arquiplanner_logo_min.svg"
                    alt="Arquiplanner Logo"
                    width={60}
                    height={60}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Name & Company */}
                <div>
                  <p className="text-white font-semibold text-lg md:text-xl">
                    Arquiplanner
                  </p>
                  <p className="text-white/60 text-sm md:text-base">
                    Software de Administración para Arquitectos
                  </p>
                </div>
              </div>
            </blockquote>

            {/* Closing Quote */}
            <div className="absolute -bottom-4 right-0 md:right-4 text-white/10 text-6xl md:text-8xl font-serif leading-none">
              "
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Testimonials;
