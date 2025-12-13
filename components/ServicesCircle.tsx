"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  "BRANDING",
  "WEB DESIGN",
  "DEVELOPMENT",
  "SEO",
  "MARKETING",
  "CONSULTING",
];

const ServicesCircle = () => {
  return (
    <section className="section-padding" id="services">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="heading-section mb-8">WE BUILD WEBSITES</h2>
          <p className="text-elegant text-3xl md:text-4xl mb-20">
            at the intersection of
          </p>

          {/* Circular diagram */}
          <div className="relative mx-auto w-full max-w-2xl aspect-square flex items-center justify-center">
            {/* Center circle */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-white flex items-center justify-center bg-black"
            >
              <div className="text-center">
                <p className="text-sm md:text-base tracking-widest">
                  DIGITAL
                </p>
                <p className="text-2xl md:text-3xl font-bold mt-2">
                  EXCELLENCE
                </p>
              </div>
            </motion.div>

            {/* Orbiting service labels */}
            {services.map((service, index) => {
              const angle = (index * 360) / services.length;
              const radius = 280; // Adjust for spacing

              return (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="absolute"
                  style={{
                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                  }}
                >
                  <div className="bg-white text-black px-4 py-2 text-xs md:text-sm font-bold whitespace-nowrap">
                    {service}
                  </div>
                </motion.div>
              );
            })}

            {/* Connection lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              style={{ zIndex: -1 }}
            >
              {services.map((_, index) => {
                const angle = ((index * 360) / services.length) * (Math.PI / 180);
                const radius = 280;
                const centerX = 50;
                const centerY = 50;
                const x = centerX + radius * Math.cos(angle - Math.PI / 2) / 10;
                const y = centerY + radius * Math.sin(angle - Math.PI / 2) / 10;

                return (
                  <motion.line
                    key={index}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    x1={`${centerX}%`}
                    y1={`${centerY}%`}
                    x2={`${x}%`}
                    y2={`${y}%`}
                    stroke="white"
                    strokeWidth="1"
                    opacity="0.2"
                  />
                );
              })}
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCircle;
