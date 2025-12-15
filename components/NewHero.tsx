"use client";

import React from "react";
import { motion } from "framer-motion";
import CircularMesh from "./CircularMesh";
import InkText from "./InkText";

const NewHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Wireframe Background */}
      <CircularMesh className="z-0" />

      <div className="container-custom relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center justify-center w-full space-y-2 md:space-y-4"
        >
          <h1 className="heading-hero text-center flex flex-col items-center leading-none w-full">
            <span 
              className="block text-[10vw] md:text-[8vw] leading-none tracking-tighter font-bold origin-bottom relative -mb-2 md:-mb-4 z-20"
              style={{ transform: "scaleY(1.3)" }}
            >
              DIGITAL
            </span>
            
            <div className="relative z-10 w-full flex justify-center py-0">
              <div className="w-[80vw] md:w-[40vw] max-w-3xl"> 
                <InkText 
                  text="Excellence" 
                  width={400} 
                  height={100} 
                  className="mix-blend-normal" 
                />
              </div>
            </div>

            <span 
              className="block text-[10vw] md:text-[8vw] leading-none tracking-tighter font-bold origin-top relative -mt-2 md:-mt-4 z-20"
              style={{ transform: "scaleY(1.3)" }}
            >
              REDEFINED
            </span>
          </h1>
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

      {/* Background grid pattern - REMOVED per user request */}
    </section>
  );
};

export default NewHero;
