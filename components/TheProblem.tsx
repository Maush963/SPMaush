"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const TheProblem = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const problems = [
    {
      title: "Ventas Perdidas",
      description: "Visitantes con intención real se van al no percibir profesionalismo",
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
      ),
    },
    {
      title: "Inversión Desperdiciada",
      description: "Gastar en anuncios no sirve cuando el sitio no convierte",
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Credibilidad Perdida",
      description: "La confianza comienza con una comunicación clara",
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden"
      id="problem"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] opacity-40" />

      <div className="container-custom relative z-10 py-8 md:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm tracking-[0.3em] text-white/40 mb-3 uppercase"
          >
            La Realidad
          </motion.p>
          
          <motion.h2
            className="font-black text-3xl md:text-6xl lg:text-7xl leading-tight tracking-tight uppercase mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { text: "Las empresas que", className: "block" },
              { text: "Ignoran su sitio web", className: "block text-white/40" },
              { text: "Se Quedan Atrás", className: "block" },
            ].map((line, i) => (
              <motion.span
                key={i}
                className={line.className}
                variants={{
                  hidden: { opacity: 1 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: i * 0.3,
                    },
                  },
                }}
              >
                {line.text.split(" ").map((word, j) => (
                  <motion.span
                    key={j}
                    variants={{
                      hidden: { filter: "blur(10px)", opacity: 0, y: 5 },
                      visible: {
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5 },
                      },
                    }}
                    className="inline-block mr-2 last:mr-0"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </motion.h2>
        </motion.div>

        {/* The Cost Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-8 md:mb-12 text-center"
        >
          <h3 className="text-xl md:text-3xl font-bold">
            El Costo de Ser{" "}
            <span className="text-elegant italic text-white/60">Invisible</span>
          </h3>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
              className="group relative"
            >
              <div className="relative p-4 md:p-8 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-white/30 transition-all duration-500 h-full flex flex-col justify-start">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.2 }}
                  className="w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-4 text-white/60 group-hover:text-white transition-colors duration-500"
                >
                  {problem.icon}
                </motion.div>

                {/* Title */}
                <h4 className="text-base md:text-xl font-bold mb-2 md:mb-3 tracking-tight">
                  {problem.title}
                </h4>

                {/* Description */}
                <p className="text-xs md:text-sm text-white/60 leading-relaxed">
                  {problem.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA with Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="text-center"
        >
          
          {/* Animated Arrow */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <svg
              className="w-6 h-6 text-white/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            <span className="text-sm tracking-widest text-white/40 uppercase">
              Descubre la Solución
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"
      />
    </section>
  );
};

export default TheProblem;
