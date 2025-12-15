"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface InkTextProps {
  text: string;
  className?: string; // For font sizing and styling
  width?: number; // Optional viewBox width override
  height?: number; // Optional viewBox height override
}

const InkText: React.FC<InkTextProps> = ({ text, className = "", width, height }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Approximate width calculation based on character count if not provided
  const viewBoxWidth = width || text.length * 50; 
  const viewBoxHeight = height || 120;

  return (
    <div ref={ref} className={`relative flex items-center justify-center ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        className="w-full h-auto overflow-visible"
      >
        {/* Stroke Animation (The "Ink" Path) */}
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="transparent"
          stroke="white"
          strokeWidth="1.5"
          className="font-playfair italic" // Using CSS class for font family
          initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
          animate={isInView ? { strokeDashoffset: 0 } : {}}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
          }}
          style={{
             fontFamily: '"Playfair Display", serif',
             fontSize: "65px", // Smaller font size as requested
             fontWeight: 300
          }}
        >
          {text}
        </motion.text>

        {/* Fill Animation - White fill as requested */}
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          className="font-playfair italic" 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}} // Fully white opacity
          transition={{
            delay: 1.8, // Wait for stroke to mostly finish
            duration: 0.8,
            ease: "easeOut",
          }}
          style={{
             fontFamily: '"Playfair Display", serif',
             fontSize: "65px", // Match stroke font size
             fontWeight: 300
          }}
        >
          {text}
        </motion.text>
      </svg>
    </div>
  );
};

export default InkText;
