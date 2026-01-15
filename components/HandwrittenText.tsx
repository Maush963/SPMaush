"use client";

import React from "react";
import { motion } from "framer-motion";

const HandwrittenText = () => {
  // Duración total de la animación
  const totalDuration = 2.5;
  
  // Cada letra tiene su propio timing para que se escriban en secuencia
  const letterTimings = [
    { start: 0, duration: 0.3 },      // c
    { start: 0.25, duration: 0.25 },  // o
    { start: 0.45, duration: 0.3 },   // n
    { start: 0.7, duration: 0.25 },   // v
    { start: 0.9, duration: 0.2 },    // i
    { start: 1.05, duration: 0.3 },   // e
    { start: 1.3, duration: 0.25 },   // r
    { start: 1.5, duration: 0.25 },   // t
    { start: 1.7, duration: 0.3 },    // e
  ];

  return (
    <svg
      viewBox="0 0 520 140"
      className="inline-block w-auto h-[1.1em] align-baseline"
      style={{ 
        marginLeft: "0.15em",
        verticalAlign: "baseline",
        position: "relative",
        top: "0.1em",
        overflow: "visible"
      }}
    >
      <defs>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');
          `}
        </style>
      </defs>
      
      {/* Paths que trazan cada letra de "convierte" */}
      {/* c */}
      <motion.path
        d="M 65 75 Q 50 65, 45 80 Q 42 95, 55 100 Q 65 103, 70 95"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: letterTimings[0].start + 0.5,
          duration: letterTimings[0].duration,
          ease: [0.65, 0, 0.35, 1]
        }}
      />
      
      {/* o */}
      <motion.path
        d="M 85 78 Q 75 70, 70 80 Q 68 90, 75 95 Q 85 100, 95 90 Q 98 80, 90 73 Q 85 70, 80 75"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: letterTimings[1].start + 0.5,
          duration: letterTimings[1].duration,
          ease: [0.65, 0, 0.35, 1]
        }}
      />
      
      {/* n */}
      <motion.path
        d="M 110 100 L 115 75 Q 118 70, 125 72 Q 132 75, 135 85 L 138 100"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: letterTimings[2].start + 0.5,
          duration: letterTimings[2].duration,
          ease: [0.65, 0, 0.35, 1]
        }}
      />
      
      {/* v */}
      <motion.path
        d="M 155 75 L 168 100 L 180 75"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: letterTimings[3].start + 0.5,
          duration: letterTimings[3].duration,
          ease: [0.65, 0, 0.35, 1]
        }}
      />
      
      {/* i */}
      <motion.path
        d="M 195 78 L 198 100"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: letterTimings[4].start + 0.5,
          duration: letterTimings[4].duration,
          ease: [0.65, 0, 0.35, 1]
        }}
      />
      
      {/* punto de la i */}
      <motion.circle
        cx="196"
        cy="68"
        r="2.5"
        fill="white"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: letterTimings[4].start + letterTimings[4].duration + 0.5,
          duration: 0.1
        }}
      />
      
      {/* e */}
      <motion.path
        d="M 215 85 L 240 85 Q 245 85, 245 90 Q 245 100, 230 102 Q 220 103, 215 95"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: letterTimings[5].start + 0.5,
          duration: letterTimings[5].duration,
          ease: [0.65, 0, 0.35, 1]
        }}
      />
      
      {/* r */}
      <motion.path
        d="M 260 100 L 265 78 Q 268 72, 275 73 Q 280 75, 282 80"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: letterTimings[6].start + 0.5,
          duration: letterTimings[6].duration,
          ease: [0.65, 0, 0.35, 1]
        }}
      />
      
      {/* t */}
      <motion.path
        d="M 300 70 L 305 100 Q 307 105, 315 103"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: letterTimings[7].start + 0.5,
          duration: letterTimings[7].duration,
          ease: [0.65, 0, 0.35, 1]
        }}
      />
      
      {/* barra de la t */}
      <motion.path
        d="M 290 78 L 315 78"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: letterTimings[7].start + letterTimings[7].duration + 0.5,
          duration: 0.15,
          ease: [0.65, 0, 0.35, 1]
        }}
      />
      
      {/* e final */}
      <motion.path
        d="M 335 85 L 360 85 Q 365 85, 365 90 Q 365 100, 350 102 Q 340 103, 335 95"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: letterTimings[8].start + 0.5,
          duration: letterTimings[8].duration,
          ease: [0.65, 0, 0.35, 1]
        }}
      />
    </svg>
  );
};

export default HandwrittenText;
