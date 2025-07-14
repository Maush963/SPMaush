"use client";

import { useEffect, useState } from "react";
import { StarsBackground } from "@/components/ui/stars-background";
import FixedLogo from "@/components/ui/FixedLogo";
import ContactForm from "@/components/ContactForm";
import { Analytics } from "@vercel/analytics/next";

export default function FormularioPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <main className="relative bg-slate flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <Analytics />
      <div className="max-w-7xl w-full">
        <StarsBackground className="absolute inset-0 z-0" />
        <FixedLogo />
        <div className="relative z-10">
          {/* Sección del Formulario con padding superior para el nav */}
          <section id="formulario" className="pt-32 pb-20">
            <ContactForm />
          </section>
        </div>
      </div>
    </main>
  );
}
