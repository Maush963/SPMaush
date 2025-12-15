"use client";

import { useEffect, useState, useRef, RefObject } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseScrollCarouselOptions {
  itemCount: number;
  sectionRef: RefObject<HTMLElement>;
}

/**
 * Hook reutilizable para carruseles con scroll vertical usando GSAP
 */
export const useScrollCarousel = ({
  itemCount,
  sectionRef,
}: UseScrollCarouselOptions) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const previousProgressRef = useRef(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".slide") as HTMLElement[];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${(slides.length + 1) * 100}%`,
          pin: true,
          anticipatePin: 1,
          scrub: 1.2,
          onUpdate: (self) => {
            // Detectar dirección del scroll
            const currentProgress = self.progress;
            if (currentProgress > previousProgressRef.current) {
              setScrollDirection("down");
            } else if (currentProgress < previousProgressRef.current) {
              setScrollDirection("up");
            }
            previousProgressRef.current = currentProgress;

            // Actualizar índice actual
            if (self.progress < 0.2) {
              setCurrentIndex(-1);
            } else {
              const adjustedProgress = (self.progress - 0.2) / 0.8;
              const index = Math.round(adjustedProgress * (slides.length - 1));
              setCurrentIndex(Math.min(index, slides.length - 1));
            }
          },
        },
      });

      // Animación del texto de fondo
      tl.to(
        ".highlights-bg-text",
        {
          scale: 1.5,
          opacity: 0.1,
          duration: 1,
          ease: "power2.inOut",
        },
        0
      );

      // Animar cada slide
      slides.forEach((slide, index) => {
        const slideStart = 1 + index * 1;

        tl.fromTo(
          slide,
          {
            opacity: 0,
            y: "100vh",
            scale: 0.8,
            rotateX: -15,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          slideStart
        );

        if (index < slides.length - 1) {
          tl.to(
            slide,
            {
              opacity: 0,
              y: "-30vh",
              scale: 0.9,
              duration: 0.4,
              ease: "power2.in",
            },
            slideStart + 0.6
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [itemCount, sectionRef]);

  return { currentIndex, scrollDirection };
};
