"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "RESEARCH & STRATEGY",
    description:
      "Analizamos tu marca, competencia y audiencia para crear una estrategia digital sólida.",
  },
  {
    number: "02",
    title: "DESIGN & DEVELOPMENT",
    description:
      "Diseñamos interfaces elegantes y desarrollamos sitios web rápidos y confiables.",
  },
  {
    number: "03",
    title: "LAUNCH & SCALE",
    description:
      "Lanzamos tu proyecto y te ayudamos a escalar tu presencia digital.",
  },
];

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 50%"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const smoothHeight = useSpring(height, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      className="section-padding bg-black text-white relative"
      id="process"
    >
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-32 text-center"
        >
          <h2 className="heading-section">
            COMO <br />
            <span className="text-white/50">TRABAJAMOS</span>
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2">
            <motion.div
              style={{ height: smoothHeight }}
              className="absolute top-0 left-0 w-full bg-white origin-top"
            >
              {/* Glowing Tip */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.5)]" />
            </motion.div>
          </div>

          <div className="space-y-20 md:space-y-32">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <TimelineItem key={step.number} step={step} index={index} isEven={isEven} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({
  step,
  index,
  isEven,
}: {
  step: Step;
  index: number;
  isEven: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "start 40%"],
  });

  const dotColor = useTransform(scrollYProgress, [0, 1], ["#000", "#fff"]);
  const dotScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline Node */}
      <motion.div
        style={{ backgroundColor: dotColor, scale: dotScale }}
        className="absolute left-4 md:left-1/2 w-4 h-4 border-2 border-white rounded-full -translate-x-1/2 z-10 shadow-[0_0_0_8px_rgba(0,0,0,1)]"
      />

      {/* Content Side */}
      <motion.div 
        style={{ opacity: contentOpacity, y: contentY }}
        className="w-full md:w-1/2 pl-12 md:pl-0 md:text-right flex flex-col justify-center"
      >
        <div className={`${isEven ? "md:text-right" : "md:text-left"}`}>
          <span className="text-6xl md:text-8xl font-black text-white/10 block mb-4">
            {step.number}
          </span>
          <h3 className="heading-card mb-4">{step.title}</h3>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-md ml-auto mr-auto md:mx-0">
            {step.description}
          </p>
        </div>
      </motion.div>

      {/* Image Placeholder Side */}
      <motion.div 
        style={{ opacity: contentOpacity, y: contentY }}
        className="w-full md:w-1/2 pl-12 md:pl-0"
      >
        <div
          className={`relative aspect-[4/3] bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden ${
            isEven
              ? "rounded-[2rem] rounded-tr-[5rem]"
              : "rounded-[2rem] rounded-tl-[5rem]"
          }`}
        >
          {/* Placeholder Abstract Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/5 animate-pulse" />
          </div>
          
          {/* Animated Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HowItWorks;
