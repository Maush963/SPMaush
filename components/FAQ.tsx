"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "¿CUÁNTO TIEMPO NECESITO INVERTIR?",
    answer:
      "El proceso está pensado para ser eficiente: al inicio dedicamos el tiempo necesario para entender la visión, los objetivos y las prioridades.\n\nDespués de eso, el trabajo corre de nuestro lado. Tu participación se limita a aprobaciones puntuales y feedback claro.",
  },
  {
    question: "¿CUÁNDO VERÉ RESULTADOS?",
    answer:
      "Diseñamos y construimos tu sitio de alta conversión en 2 a 4 semanas, dependiendo de la complejidad del proyecto.\n\nDe inicio a lanzamiento, velocidad pura.",
  },
  {
    question: "¿Y SI NO ME GUSTA EL DISEÑO?",
    answer:
      "El objetivo es que el sitio se sienta correcto, no impuesto.\n\nEl proceso incluye revisiones para ajustar el diseño y asegurarnos de que la interfaz y el mensaje estén alineados con lo que necesitas comunicar.",
  },
  {
    question: "¿OFRECEN PLANES DE PAGO?",
    answer:
      "Sí. Puedes pagar todo al inicio o dividir el pago en partes.\n\nTodo se define desde el principio, sin cargos escondidos.",
  },
  {
    question: "¿QUÉ PASA SI NECESITO SOPORTE CONTINUO?",
    answer:
      "El lanzamiento no es el final. Ofrecemos acompañamiento posterior para ajustes, mejoras y optimización continua.\n\nYa sea mantenimiento, cambios puntuales o pruebas para mejorar resultados, el soporte es directo y sin fricción.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding" id="faq">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between mb-16">
            <h2 className="heading-section">preguntas frecuentes</h2>
            <div className="hidden md:flex gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="w-2 h-2 rounded-full bg-white"
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-white/20"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="heading-card text-lg md:text-xl pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-base md:text-lg text-gray-400 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
