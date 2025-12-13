"use client";

import React from "react";
import { motion } from "framer-motion";

const ServicesCircle = () => {
  return (
    <section
      className="section-padding min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden"
      id="services"
    >
      <div className="container-custom w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="heading-section mb-4">WE BUILD WEBSITES</h2>
          <p className="text-elegant text-2xl md:text-4xl text-white/60">
            at the intersection of
          </p>
        </motion.div>

        <div className="relative w-full max-w-5xl mx-auto aspect-square flex items-center justify-center">
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
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
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
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
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
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
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
                initial={{ pathLength: 0, fillOpacity: 0 }}
                whileInView={{ pathLength: 1, fillOpacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 1.5 }}
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
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 1.5 }}
              />
              <motion.foreignObject
                x="20"
                y="50"
                width="220"
                height="100"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                <div className="text-right text-sm md:text-base text-white/70 italic pr-2 leading-relaxed font-handwriting">
                  Clarity, Persuasion,
                  <br />
                  and Messaging
                </div>
              </motion.foreignObject>

              {/* Top Right Arrow (Design) */}
              <motion.path
                d="M 820 120 Q 750 180 700 250"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 1.8 }}
              />
              <motion.foreignObject
                x="760"
                y="50"
                width="220"
                height="100"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 2.1 }}
              >
                <div className="text-left text-sm md:text-base text-white/70 italic pl-2 leading-relaxed font-handwriting">
                  Aesthetics, User Experience
                  <br />
                  (UX), and Visual Hierarchy
                </div>
              </motion.foreignObject>

              {/* Bottom Arrow (Development) */}
              <motion.path
                d="M 750 750 Q 650 680 560 580"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 2.1 }}
              />
              <motion.foreignObject
                x="650"
                y="700"
                width="250"
                height="100"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 2.4 }}
              >
                <div className="text-left text-sm md:text-base text-white/70 italic pl-2 leading-relaxed font-handwriting">
                  Performance, Speed,
                  <br />
                  and Functionality
                </div>
              </motion.foreignObject>
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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
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
                fontSize="22"
                fontWeight="bold"
                letterSpacing="2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                DESIGN
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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.6, duration: 0.5 }}
              >
                DEVELOPMENT
              </motion.text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ServicesCircle;
