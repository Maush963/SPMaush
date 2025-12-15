"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import NewHero from "@/components/NewHero";
import TheProblem from "@/components/TheProblem";
import Highlights from "@/components/Highlights";
import HowItWorks from "@/components/HowItWorks";
import ServicesCircle from "@/components/ServicesCircle";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
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
        <div className="container-custom py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tight">
            SORELLI
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a
              href="#highlights"
              className="hover:opacity-60 transition-opacity"
            >
              HIGHLIGHTS
            </a>
            <a href="#process" className="hover:opacity-60 transition-opacity">
              PROCESS
            </a>
            <a href="#services" className="hover:opacity-60 transition-opacity">
              SERVICES
            </a>
            <a href="#faq" className="hover:opacity-60 transition-opacity">
              FAQ
            </a>
            <a href="#contact" className="hover:opacity-60 transition-opacity">
              CONTACT
            </a>
          </div>
          <button className="md:hidden">
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
          </button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <NewHero />
      <TheProblem />
      <ServicesCircle />
      <Highlights />
      <HowItWorks />
      <FAQ />
      <Contact />
    </main>
  );
}
