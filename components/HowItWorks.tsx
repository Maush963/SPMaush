"use client";

import React from "react";
import { motion } from "framer-motion";

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
  return (
    <section className="section-padding bg-white text-black" id="process">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-section mb-20">
            HOW IT <br />
            WORKS?
          </h2>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="mb-6">
                  <span className="text-8xl md:text-9xl font-black opacity-10 group-hover:opacity-20 transition-opacity">
                    {step.number}
                  </span>
                </div>
                <h3 className="heading-card mb-4">{step.title}</h3>
                <p className="text-base md:text-lg leading-relaxed text-gray-700">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center accent piece */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 bg-black text-white p-12 md:p-16 mx-auto max-w-2xl"
          >
            <p className="text-2xl md:text-3xl font-bold text-center">
              "CADA PROYECTO ES UNA OPORTUNIDAD PARA CREAR ALGO EXTRAORDINARIO"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
