"use client";

import React from "react";
import { motion } from "framer-motion";

const NewHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center justify-center"
        >
          <h1 className="heading-hero text-center flex flex-col items-center leading-[0.85]">
            <span 
              className="block text-[8vw] md:text-[10vw] leading-none tracking-tighter font-bold origin-bottom"
              style={{ transform: "scaleY(1.3)" }}
            >
              UN SITIO WEB QUE
            </span>
            <span className="block text-elegant text-6xl md:text-8xl lg:text-9xl font-thin text-white/40 -my-2 md:-my-6 relative z-10 mix-blend-difference">
              CONVIERTE
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mt-12 md:mt-20 max-w-2xl mx-auto text-center text-white/60 text-base md:text-lg lg:text-xl leading-relaxed px-6"
          >
            Creamos experiencias digitales que conectan con tus usuarios<br />
            y cumplen tus objetivos.
          </motion.p>
        </motion.div>
      </div>

      {/* Footer Info */}
      <div className="absolute bottom-8 left-0 right-0 px-6 md:px-12 flex justify-between items-end text-[10px] md:text-xs font-medium tracking-widest text-white/40 z-20 uppercase">
        {/* Left: Location */}
        <div className="text-left">
          Based in Mexico // Global Reach
        </div>

        {/* Center: Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-0 md:bottom-2"
        >
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 md:h-3 bg-white rounded-full"
            />
          </div>
        </motion.div>

        {/* Right: Year */}
        <div className="text-right">
          (2025)
        </div>
      </div>

      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)] pointer-events-none" />
    </section>
  );
};

export default NewHero;
