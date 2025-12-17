"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import NewHero from "@/components/NewHero";
import TheProblem from "@/components/TheProblem";
import Highlights from "@/components/Highlights";
import HowItWorks from "@/components/HowItWorks";
import ServicesCircle from "@/components/ServicesCircle";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import AboutUs from "@/components/AboutUs";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMobileMenuOpen(false); // Close menu on scroll down
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <main className="relative bg-black text-white overflow-x-hidden">
      <Analytics />

      {/* Navigation */}
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
      >
        <div className="container-custom py-4 flex justify-between items-center md:grid md:grid-cols-[1fr_auto_1fr]">
          {/* Logo - Left */}
          <div className="text-2xl font-black tracking-tight md:justify-self-start">
            SORELLI
          </div>

          {/* Navigation - Center (Desktop) */}
          <div className="hidden md:flex gap-8 text-sm font-medium md:justify-self-center">
            <a
              href="#highlights"
              className="text-white hover:opacity-60 transition-opacity"
            >
              HIGHLIGHTS
            </a>
            <a
              href="#process"
              className="text-white hover:opacity-60 transition-opacity"
            >
              PROCESO
            </a>
            <a
              href="#about"
              className="text-white hover:opacity-60 transition-opacity"
            >
              SOBRE NOSOTROS
            </a>
            <a
              href="#contact"
              className="text-white hover:opacity-60 transition-opacity"
            >
              CONTACTO
            </a>
          </div>

          {/* CTA & Mobile Menu Button - Right */}
          <div className="flex items-center gap-4 md:justify-self-end">
            <a
              href="https://calendly.com/maush-solutions/30m-sesion-diagnostico"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block px-4 py-2 text-[10px] font-bold tracking-widest text-black bg-white rounded-full hover:bg-white/90 transition-transform hover:scale-105 whitespace-nowrap"
            >
              RESERVA TU AUDITORÍA
            </a>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black border-b border-white/10 overflow-hidden"
            >
              <div className="container-custom py-6 flex flex-col gap-6">
                <a
                  href="#highlights"
                  onClick={() => setTimeout(() => setMobileMenuOpen(false), 300)}
                  className="text-lg font-medium text-white hover:text-white/60"
                >
                  HIGHLIGHTS
                </a>
                <a
                  href="#process"
                  onClick={() => setTimeout(() => setMobileMenuOpen(false), 300)}
                  className="text-lg font-medium text-white hover:text-white/60"
                >
                  PROCESO
                </a>
                <a
                  href="#about"
                  onClick={() => setTimeout(() => setMobileMenuOpen(false), 300)}
                  className="text-lg font-medium text-white hover:text-white/60"
                >
                  SOBRE NOSOTROS
                </a>
                <a
                  href="#contact"
                  onClick={() => setTimeout(() => setMobileMenuOpen(false), 300)}
                  className="text-lg font-medium text-white hover:text-white/60"
                >
                  CONTACTO
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <NewHero />
      <TheProblem />
      <ServicesCircle />
      <Highlights />
      <HowItWorks />
      <AboutUs />
      <FAQ />
      <Contact />
    </main>
  );
}
