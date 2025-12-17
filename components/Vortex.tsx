"use client";

import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface VortexProps {
  className?: string;
  particleCount?: number;
}

const Vortex: React.FC<VortexProps> = ({ 
  className = "", 
  particleCount = 100 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll for dynamic updates if needed
  const { scrollY } = useScroll();
  const rotationSpeed = useTransform(scrollY, [0, 1000], [0.001, 0.005]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width;
    let height = canvas.height;
    
    // Particles state
    const particles: Particle[] = [];
    
    class Particle {
      x: number;
      y: number;
      z: number; // depth
      angle: number;
      radius: number;
      speed: number;
      
      constructor() {
        this.angle = Math.random() * Math.PI * 2;
        this.radius = Math.random() * Math.min(width, height) * 0.4; // Start at random radius
        this.z = Math.random() * 2; // Random depth
        this.speed = Math.random() * 0.002 + 0.001;
        this.x = 0;
        this.y = 0;
        this.updatePosition();
      }

      update(baseRotationSpeed: number) {
        // Spiraling in dynamics
        this.angle += this.speed + baseRotationSpeed;
        this.radius -= 0.1; // Slowly move to center
        
        // Reset if too close to center
        if (this.radius < 5) {
          this.radius = Math.max(width, height) * 0.6; // Reset to outside
          this.z = Math.random() * 2; 
        }

        this.updatePosition();
      }

      updatePosition() {
        const cx = width / 2;
        const cy = height / 2;
        
        // 3D-ish projection usually divides by Z, but for simple vortex just cos/sin
        this.x = cx + Math.cos(this.angle) * this.radius;
        this.y = cy + Math.sin(this.angle) * this.radius * (0.6); // Flat ellipsis effect
      }

      draw(ctx: CanvasRenderingContext2D) {
        const opacity = Math.min(1, (this.radius / 200)); // Fade out in center
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
        ctx.arc(this.x, this.y, Math.random() * 1.5 + 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const handleResize = () => {
      if (containerRef.current && canvas) {
        canvas.width = containerRef.current.clientWidth;
        canvas.height = containerRef.current.clientHeight;
        width = canvas.width;
        height = canvas.height;
        initParticles();
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const render = () => {
      // Clear with slight trail effect? Or just clear.
      // let's do trail for "ink" feel maybe? No, requested vortex.
      ctx.clearRect(0, 0, width, height);
      
      const currentRotationSpeed = rotationSpeed.get();

      particles.forEach(p => {
        p.update(currentRotationSpeed * 5); // Speed multiplier
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount, rotationSpeed]);

  return (
    <div ref={containerRef} className={`absolute inset-0 pointer-events-none ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};

export default Vortex;
