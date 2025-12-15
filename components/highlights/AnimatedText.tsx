"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  delay?: number;
  className?: string;
}

/**
 * Componente reutilizable para animación de texto letra por letra
 */
export const AnimatedText = ({
  text,
  delay = 0,
  className = "",
}: AnimatedTextProps) => {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      rotateX: -90,
      y: 30,
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <motion.div
      style={{
        overflow: "hidden",
        display: "flex",
        fontSize: "inherit",
        perspective: "1000px",
      }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.8 }}
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{
            display: "inline-block",
            transformOrigin: "center bottom",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
