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
    question: "¿CUÁNTO TOMA HACER UN PROYECTO WEB?",
    answer:
      "El tiempo varía según la complejidad. Un sitio web básico puede tomar 2-3 semanas, mientras que proyectos más complejos pueden requerir 6-12 semanas.",
  },
  {
    question: "¿QUÉ NECESITO PARA EMPEZAR?",
    answer:
      "Solo necesitas una visión clara de tu proyecto. Nosotros te guiaremos en el resto: diseño, desarrollo, contenido y estrategia digital.",
  },
  {
    question: "¿OFRECEN SOPORTE DESPUÉS DEL LANZAMIENTO?",
    answer:
      "Sí, ofrecemos paquetes de mantenimiento y soporte continuo para asegurar que tu sitio web funcione perfectamente.",
  },
  {
    question: "¿TRABAJAN CON CLIENTES INTERNACIONALES?",
    answer:
      "Absolutamente. Trabajamos con clientes de todo el mundo gracias a nuestras herramientas de comunicación digital.",
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
            <div className="flex gap-2">
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
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
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
                      <p className="pb-6 text-base md:text-lg text-gray-400 leading-relaxed">
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
