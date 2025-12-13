"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="section-padding bg-white text-black" id="contact">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-section mb-12">
            LET'S <br />
            TALK
          </h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg md:text-xl mb-8 text-gray-700">
                ¿Tienes un proyecto en mente? Trabajemos juntos para crear algo
                extraordinario.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-sm tracking-widest text-gray-500 mb-2">
                    EMAIL
                  </p>
                  <a
                    href="mailto:hello@sorelliagency.com"
                    className="text-2xl md:text-3xl font-bold hover:opacity-60 transition-opacity"
                  >
                    hello@sorelliagency.com
                  </a>
                </div>

                <div>
                  <p className="text-sm tracking-widest text-gray-500 mb-2">
                    TELÉFONO
                  </p>
                  <a
                    href="tel:+526141234567"
                    className="text-2xl md:text-3xl font-bold hover:opacity-60 transition-opacity"
                  >
                    +52 614 123 4567
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  placeholder="NOMBRE"
                  className="w-full bg-transparent border-b-2 border-black/20 py-4 text-lg focus:border-black outline-none transition-colors placeholder:text-gray-400"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-full bg-transparent border-b-2 border-black/20 py-4 text-lg focus:border-black outline-none transition-colors placeholder:text-gray-400"
                />
              </div>

              <div>
                <textarea
                  placeholder="MENSAJE"
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-black/20 py-4 text-lg focus:border-black outline-none transition-colors resize-none placeholder:text-gray-400"
                />
              </div>

              <motion.button
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 text-xl font-bold mt-8"
              >
                ENVIAR MENSAJE
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </motion.form>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 pt-12 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <p className="text-sm text-gray-500">
              © 2025 Sor elli Agency. Todos los derechos reservados.
            </p>
            <div className="flex gap-8">
              <a
                href="#"
                className="text-sm font-bold hover:opacity-60 transition-opacity"
              >
                INSTAGRAM
              </a>
              <a
                href="#"
                className="text-sm font-bold hover:opacity-60 transition-opacity"
              >
                LINKEDIN
              </a>
              <a
                href="#"
                className="text-sm font-bold hover:opacity-60 transition-opacity"
              >
                TWITTER
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
