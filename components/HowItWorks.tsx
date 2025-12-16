"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import type { MotionValue } from "framer-motion";

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
  const [isMobile, setIsMobile] = useState(false);
  // Progreso atado al centro del viewport para sincronía perfecta
  const progress = useMotionValue(0);
  const height = useTransform(progress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handleMQ = (e: MediaQueryListEvent | MediaQueryList) => {
      // e can be event or list depending on initial call
      const matches =
        "matches" in e ? e.matches : (e as MediaQueryList).matches;
      setIsMobile(matches);
    };
    // initial
    handleMQ(mq);
    // subscribe
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", handleMQ as (ev: Event) => void);
    } else {
      // Safari/older
      mq.addListener(
        handleMQ as (this: MediaQueryList, ev: MediaQueryListEvent) => void
      );
    }

    const update = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const containerTop = rect.top + window.scrollY;
      const containerHeight = rect.height;
      const anchor = isMobile ? 0.25 : 0.5; // móvil ancla superior, desktop centro
      const viewportAnchorY = window.scrollY + window.innerHeight * anchor;
      const ratio = (viewportAnchorY - containerTop) / containerHeight;
      const clamped = Math.max(0, Math.min(1, ratio));
      progress.set(clamped);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      if (typeof mq.removeEventListener === "function") {
        mq.removeEventListener("change", handleMQ as (ev: Event) => void);
      } else {
        mq.removeListener(
          handleMQ as (this: MediaQueryList, ev: MediaQueryListEvent) => void
        );
      }
    };
  }, [progress, isMobile]);

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
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10">
            <motion.div
              style={{ height }}
              className="absolute top-0 left-0 w-full bg-white origin-top"
            />
          </div>

          <div className="space-y-20 md:space-y-32">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <TimelineItem
                  key={step.number}
                  step={step}
                  index={index}
                  isEven={isEven}
                  isMobile={isMobile}
                  progress={progress}
                  containerRef={containerRef}
                />
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
  isMobile,
  progress,
  containerRef,
}: {
  step: Step;
  index: number;
  isEven: boolean;
  isMobile: boolean;
  progress: MotionValue<number>;
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // Móvil: activa cerca del borde superior; Desktop: alrededor del centro
    offset: isMobile
      ? ["start 80%", "start 65%"]
      : ["center 55%", "center 45%"],
  });
  // Calcular la posición del punto respecto al contenedor y activar por progreso
  const dotRatioRef = useRef(0.0);
  useEffect(() => {
    const calc = () => {
      if (!ref.current || !containerRef.current) return;
      const itemRect = ref.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top + window.scrollY;
      const containerHeight = containerRect.height;
      // Aproximar la posición visual del punto: centro en desktop, ~15% desde arriba en móvil
      const dotY = isMobile
        ? itemRect.top + window.scrollY + itemRect.height * 0.15
        : itemRect.top + window.scrollY + itemRect.height / 2;
      dotRatioRef.current = Math.max(
        0,
        Math.min(1, (dotY - containerTop) / containerHeight)
      );
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [containerRef, isMobile]);

  const dotColor = useTransform(progress, (v) =>
    v >= dotRatioRef.current - (isMobile ? 0.12 : 0.05) ? "#fff" : "#1a1a1a"
  );
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
        style={{
          backgroundColor: dotColor,
          boxShadow: useTransform(progress, (v) =>
            v >= dotRatioRef.current - (isMobile ? 0.1 : 0.04)
              ? "0 0 14px 3px rgba(255,255,255,0.6)"
              : "0 0 0 0 rgba(255,255,255,0)"
          ),
        }}
        className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 border-2 border-white rounded-full z-10"
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
