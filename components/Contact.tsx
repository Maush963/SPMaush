"use client";

import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white scroll-anchor py-14 md:py-20"
    >
      <div className="container-custom">
        {/* CTA en texto */}
        <p className="text-center text-lg md:text-xl text-white/80 mb-8 md:mb-10">
          ¿Empezamos?{" "}
          <span className="text-white">Escríbenos por WhatsApp o correo.</span>
        </p>

        {/* Acciones: WhatsApp y Correo (solo iconos) */}
        <div className="flex items-center justify-center gap-6 md:gap-8">
          <a
            href="https://wa.me/524421803003"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="inline-flex items-center justify-center rounded-full transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            <span className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-black shadow-lg shadow-white/20">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="currentColor"
              >
                <path d="M20.52 3.48A11.94 11.94 0 0 0 12.02 0C5.4 0 .04 5.36.04 11.98c0 2.11.55 4.19 1.59 6.02L0 24l6.18-1.6a12 12 0 0 0 5.84 1.49h.01c6.62 0 11.98-5.36 11.98-11.98 0-3.2-1.25-6.2-3.49-8.43ZM12.03 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.21-3.67.95.98-3.58-.23-.37A9.46 9.46 0 1 1 21.49 12c0 5.22-4.24 9.48-9.46 9.48Zm5.38-7.2c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.95-.94 1.15-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.12.3-.32.45-.47.15-.15.2-.25.3-.42.1-.17.05-.32-.02-.47-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.1 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.12-.27-.2-.57-.35Z" />
              </svg>
            </span>
          </a>

          <a
            href="mailto:maush.solutions@gmail.com"
            aria-label="Contactar por correo"
            className="inline-flex items-center justify-center rounded-full transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            <span className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-black shadow-lg shadow-white/20">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="currentColor"
              >
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 12 4 6.01V6h16ZM4 18V8.24l7.4 5.55a1 1 0 0 0 1.2 0L20 8.24V18H4Z" />
              </svg>
            </span>
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-12 text-center text-sm text-white/60">
          © 2026 Sorelli Agency. Todos los derechos reservados.
        </p>
      </div>
    </section>
  );
};

export default Contact;
