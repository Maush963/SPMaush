"use client";

import React from "react";
import { motion } from "framer-motion";

const ServicesCircle = () => {
  return (
    <section
      className="pt-20 md:pt-32 pb-0 min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden"
      id="services"
    >
      <div className="container-custom w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 md:mb-0 w-full flex flex-col items-center"
        >
          <h2 className="heading-section mb-4 text-3xl md:text-5xl">
            construimos páginas
          </h2>
          <p className="text-elegant text-xl md:text-4xl text-white/60">
            en la intersección de
          </p>
        </motion.div>

        {/* Desktop SVG - Hidden on mobile */}
        <motion.div
          className="hidden md:block relative w-full max-w-5xl mx-auto aspect-square flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <svg
            viewBox="0 0 1000 900"
            className="w-full h-full"
            style={{ overflow: "visible" }}
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="12"
                markerHeight="10"
                refX="10"
                refY="5"
                orient="auto"
              >
                <polygon points="0 0, 12 5, 0 10" fill="white" />
              </marker>
            </defs>

            {/* CIRCLES STROKES (Background) */}
            <g>
              {/* Circle 1: Copywriting (Top Left) */}
              <motion.circle
                cx="370"
                cy="320"
                r="160"
                fill="none"
                stroke="white"
                strokeWidth="2"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { pathLength: 1, opacity: 1 },
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              {/* Circle 2: Design (Top Right) */}
              <motion.circle
                cx="630"
                cy="320"
                r="160"
                fill="none"
                stroke="white"
                strokeWidth="2"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { pathLength: 1, opacity: 1 },
                }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              />

              {/* Circle 3: Development (Bottom Center) */}
              <motion.circle
                cx="500"
                cy="520"
                r="160"
                fill="none"
                stroke="white"
                strokeWidth="2"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { pathLength: 1, opacity: 1 },
                }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
              />
            </g>

            {/* CENTRAL INTERSECTION - White filled shield shape */}
            <g>
              <motion.path
                d="M 476 361 A 160 160 0 0 1 524 361 A 160 160 0 0 1 500 413 A 160 160 0 0 1 476 361 Z"
                fill="white"
                stroke="white"
                strokeWidth="1"
                variants={{
                  hidden: { pathLength: 0, fillOpacity: 0 },
                  visible: { pathLength: 1, fillOpacity: 0.6 },
                }}
                transition={{ duration: 2.7, ease: "easeInOut", delay: 3 }}
              />
            </g>

            {/* ARROWS AND DESCRIPTIONS (Rendered on top) */}
            <g>
              {/* Top Left Arrow (Copywriting) */}
              <motion.path
                d="M 180 120 Q 250 180 300 250"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                markerEnd="url(#arrowhead)"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { pathLength: 1, opacity: 1 },
                }}
                transition={{ duration: 2.5, delay: 3 }}
              />
              <motion.text
                x="90"
                y="95"
                textAnchor="start"
                fill="white"
                fontSize="16"
                fontStyle="italic"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 2, delay: 3.3 }}
                className="font-serif"
              >
                <tspan x="90" dy="0">
                  Claridad, persuasión
                </tspan>
                <tspan x="90" dy="20">
                  y mensaje
                </tspan>
              </motion.text>

              {/* Top Right Arrow (Design) */}
              <motion.path
                d="M 820 120 Q 750 180 700 250"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                markerEnd="url(#arrowhead)"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { pathLength: 1, opacity: 1 },
                }}
                transition={{ duration: 2.5, delay: 3.2 }}
              />
              <motion.text
                x="720"
                y="95"
                textAnchor="start"
                fill="white"
                fontSize="16"
                fontStyle="italic"
                fontFamily="Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 2, delay: 3.5 }}
                className="font-sans"
              >
                <tspan x="720" dy="0">
                  Estética, experiencia de usuario
                </tspan>
                <tspan x="720" dy="20">
                  (UX), y jerarquía visual
                </tspan>
              </motion.text>

              {/* Bottom Arrow (Development) */}
              <motion.path
                d="M 680 680 Q 600 650 560 580"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                markerEnd="url(#arrowhead)"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { pathLength: 1, opacity: 1 },
                }}
                transition={{ duration: 2.5, delay: 3 }}
              />
              <motion.text
                x="620"
                y="695"
                textAnchor="start"
                fill="white"
                fontSize="16"
                fontStyle="italic"
                fontFamily="Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 2, delay: 3 }}
                className="font-sans"
              >
                <tspan x="620" dy="0">
                  Rendimiento, velocidad
                </tspan>
                <tspan x="620" dy="20">
                  y funcionalidad
                </tspan>
              </motion.text>
            </g>

            {/* TEXT LABELS (Rendered last to be on top of everything) */}
            <g style={{ pointerEvents: "none" }}>
              {/* Copywriting Label */}
              <motion.text
                x="370"
                y="320"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="22"
                fontWeight="bold"
                letterSpacing="2"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ delay: 2.5, duration: 2 }}
              >
                COPYWRITING
              </motion.text>

              {/* Design Label */}
              <motion.text
                x="650"
                y="320"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="22"
                fontWeight="bold"
                letterSpacing="2"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ delay: 2.8, duration: 2 }}
              >
                DISEÑO
              </motion.text>

              {/* Development Label */}
              <motion.text
                x="500"
                y="520"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="22"
                fontWeight="bold"
                letterSpacing="2"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ delay: 3.1, duration: 2 }}
              >
                CÓDIGO
              </motion.text>
            </g>
          </svg>
        </motion.div>

        {/* Mobile Version - Visible only on mobile */}
        <motion.div
          className="md:hidden w-full mx-auto py-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <svg
            viewBox="0 0 1000 900"
            className="w-full h-auto scale-150"
            style={{ overflow: "visible" }}
          >
            <defs>
              <marker
                id="arrowhead-mobile"
                markerWidth="12"
                markerHeight="10"
                refX="10"
                refY="5"
                orient="auto"
              >
                <polygon points="0 0, 12 5, 0 10" fill="white" />
              </marker>
            </defs>

            {/* CIRCLES STROKES (Background) */}
            <g>
              {/* Circle 1: Copywriting (Top Left) */}
              <motion.circle
                cx="370"
                cy="320"
                r="160"
                fill="none"
                stroke="white"
                strokeWidth="2"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { pathLength: 1, opacity: 1 },
                }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />

              {/* Circle 2: Design (Top Right) */}
              <motion.circle
                cx="630"
                cy="320"
                r="160"
                fill="none"
                stroke="white"
                strokeWidth="2"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { pathLength: 1, opacity: 1 },
                }}
                transition={{ duration: 3, ease: "easeInOut", delay: 0.8 }}
              />

              {/* Circle 3: Development (Bottom Center) */}
              <motion.circle
                cx="500"
                cy="520"
                r="160"
                fill="none"
                stroke="white"
                strokeWidth="2"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { pathLength: 1, opacity: 1 },
                }}
                transition={{ duration: 3, ease: "easeInOut", delay: 1.1 }}
              />
            </g>

            {/* CENTRAL INTERSECTION - White filled shield shape */}
            <g>
              <motion.path
                d="M 476 361 A 160 160 0 0 1 524 361 A 160 160 0 0 1 500 413 A 160 160 0 0 1 476 361 Z"
                fill="white"
                stroke="white"
                strokeWidth="1"
                variants={{
                  hidden: { pathLength: 0, fillOpacity: 0 },
                  visible: { pathLength: 1, fillOpacity: 0.6 },
                }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 1.5 }}
              />
            </g>

            {/* TEXT LABELS */}
            <g style={{ pointerEvents: "none" }}>
              {/* Copywriting Label */}
              <motion.text
                x="370"
                y="320"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="24"
                fontWeight="bold"
                letterSpacing="1"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                COPYWRITING
              </motion.text>

              {/* Design Label */}
              <motion.text
                x="630"
                y="320"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="24"
                fontWeight="bold"
                letterSpacing="1"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                DISEÑO
              </motion.text>

              {/* Development Label */}
              <motion.text
                x="500"
                y="520"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="24"
                fontWeight="bold"
                letterSpacing="1"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ delay: 1.6, duration: 0.5 }}
              >
                CÓDIGO
              </motion.text>
            </g>
          </svg>

          {/* Mobile Descriptions Below */}
          <motion.div
            className="space-y-6 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <div className="text-center">
              <h3 className="text-white font-bold text-lg mb-2 tracking-wide">
                COPYWRITING
              </h3>
              <p className="text-white/70 text-sm italic">
                Claridad, persuasión y mensaje
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-white font-bold text-lg mb-2 tracking-wide">
                DISEÑO
              </h3>
              <p className="text-white/70 text-sm italic">
                Estética, experiencia de usuario (UX) y jerarquía visual
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-white font-bold text-lg mb-2 tracking-wide">
                CÓDIGO
              </h3>
              <p className="text-white/70 text-sm italic">
                Rendimiento, velocidad y funcionalidad
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Visible on all devices */}
        <motion.div
          className="mt-10 md:-mt-12 flex flex-col items-center justify-center gap-3"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="relative flex items-center gap-3"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="w-1 h-1 rounded-full bg-white"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <p className="text-white text-xs md:text-sm italic tracking-[0.2em] uppercase">
              Para que te hagas una idea
            </p>
            <motion.div
              className="w-1 h-1 rounded-full bg-white"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.div
            className="flex gap-1.5"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="w-0.5 h-6 bg-white/40"
              animate={{ scaleY: [1, 1.3, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0,
              }}
            />
            <motion.div
              className="w-0.5 h-6 bg-white/50"
              animate={{ scaleY: [1, 1.3, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
            />
            <motion.div
              className="w-0.5 h-6 bg-white/60"
              animate={{ scaleY: [1, 1.3, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCircle;
