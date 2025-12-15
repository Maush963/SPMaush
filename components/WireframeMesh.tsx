"use client";

import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface WireframeParams {
  className?: string;
  gridSize?: number;
}

const WireframeMesh: React.FC<WireframeParams> = ({ 
  className = "", 
  gridSize = 40
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create a spring-smoothed scroll value for smoother animation
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 800], [0.15, 1]); // Fade in as we scroll down
  const movement = useTransform(scrollY, [0, 1000], [0, 200]); // Move grid down

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width;
    let height = canvas.height;
    let time = 0;

    const handleResize = () => {
      if (containerRef.current && canvas) {
        // Increase resolution for cleaner lines
        const dpr = window.devicePixelRatio || 1;
        canvas.width = containerRef.current.clientWidth * dpr;
        canvas.height = containerRef.current.clientHeight * dpr;
        ctx.scale(dpr, dpr);
        width = containerRef.current.clientWidth;
        height = containerRef.current.clientHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      const currentMove = movement.get();
      const currentOpacity = opacity.get(); // Currently unused in draw loop, controlled by CSS wrapper, but could be used here.
      
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + (currentOpacity * 0.2)})`;
      ctx.lineWidth = 1;
      
      const perspective = 300;
      const horizon = height * 0.4;
      
      // Vertical lines
      for (let x = -width; x < width * 2; x += gridSize) {
        ctx.beginPath();
        // Simple perspective projection logic
        // We just draw lines radiating from a point or moving downwards
        
        const xOffset = Math.sin(time * 0.0005 + x * 0.01) * 20; // Wavy distortion
        
        ctx.moveTo(x + xOffset, 0); 
        ctx.lineTo(x + xOffset, height);
        ctx.stroke();
      }

      // Horizontal lines (moving down)
      const offset = (time * 0.5 + currentMove) % gridSize;
      
      for (let y = -gridSize; y < height + gridSize; y += gridSize) {
        const actualY = y + offset;
        ctx.beginPath();
        
        // Draw slightly curved horizontal lines to simulate a surface
        for (let x = 0; x <= width; x += 20) {
           const wave = Math.sin(x * 0.005 + time * 0.001) * 20;
           if (x === 0) ctx.moveTo(x, actualY + wave);
           else ctx.lineTo(x, actualY + wave);
        }
        ctx.stroke();
      }
      
      time += 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [gridSize, movement, opacity]); // Re-bind if these change, though mostly they are motion values

  return (
    <motion.div 
      ref={containerRef} 
      style={{ opacity }}
      className={`absolute inset-0 pointer-events-none mix-blend-screen ${className}`}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </motion.div>
  );
};

export default WireframeMesh;
