"use client";

import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface WireframeParams {
  className?: string; // Optional className props
}

const CircularMesh: React.FC<WireframeParams> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 }); // Track normalized mouse position (-1 to 1)

  // Transform scroll into pulse speed
  const { scrollY } = useScroll();
  // As we scroll down, opacity increases then fades out completely before the next section
  // Assuming 100vh is roughly 800-1000px depending on screen
  const opacity = useTransform(scrollY, [0, 400, 800], [0.2, 0.6, 0]); 
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) - rect.width / 2;
      const y = (e.clientY - rect.top) - rect.height / 2;
      mouseRef.current = { x, y };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!canvasRef.current || e.touches.length === 0) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const x = (e.touches[0].clientX - rect.left) - rect.width / 2;
      const y = (e.touches[0].clientY - rect.top) - rect.height / 2;
      mouseRef.current = { x, y };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

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
      
      const currentScroll = scrollY.get(); 
      // Movement depends directly on scroll position
      // Add a base low speed if desired, or just purely scroll driven?
      // "si me detengo que tambien se vuelva lento el movimiento como en un principio" implies it SHOULD move on its own? 
      // "que el movimiento al escrolear solo sea al escrolear" -> sounds like scroll drives major movement
      // "como en un principio" -> originally it was rotating slowly on its own and speeding up.
      
      // Let's go back to base time + scroll offset for rotation
      // This means if you stop scrolling, it keeps rotating at base speed. 
      // If you scroll, it rotates FASTER (or moves forward in rotation).
      // time is auto-incrementing in loop.
      
      const baseSpeed = 0.005; // Slow idle rotation
      time += baseSpeed;
      
      // We add scroll-based rotation TO the time-based rotation
      const scrollRotation = currentScroll * 0.002; 
      const rotation = (time + scrollRotation) * 0.5; // Combined rotation

      const centerX = width / 2;
      const centerY = height / 2;
      const maxRadius = Math.max(width, height) * 0.8;
      
      const numCircles = 20;
      const numLines = 24;
      // const rotation is now defined above

      // Mouse/Touch interaction
      // We check angular distance and radial distance to current mouse pos
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mouseAngle = Math.atan2(my, mx); // -PI to PI
      const mouseDist = Math.sqrt(mx * mx + my * my);
      
      // Normalize mouse angle to 0-2PI to match loop
      let normMouseAngle = mouseAngle;
      // We will handle normalization in the check loop to be safe against rotation

      for (let i = 0; i < numCircles - 1; i++) {
        for (let j = 0; j < numLines; j++) {
           // Calculate sector bounds
           const angleStart = (j / numLines) * Math.PI * 2 + rotation;
           const angleEnd = ((j + 1) / numLines) * Math.PI * 2 + rotation;
           
           // Normalize angles for comparison
           const normalize = (a: number) => {
             let res = a % (Math.PI * 2);
             if (res < 0) res += Math.PI * 2;
             return res;
           };
           
           const nStart = normalize(angleStart);
           const nEnd = normalize(angleEnd);
           const nMouse = normalize(mouseAngle);

           // Check if mouse angle is within sector
           // Handling wrap-around case 
           let angleHit = false;
           if (nStart < nEnd) {
             angleHit = nMouse >= nStart && nMouse <= nEnd;
           } else {
             angleHit = nMouse >= nStart || nMouse <= nEnd;
           }

           // Check if mouse distance is within ring
           // Base radii
           const baseR1 = (i / numCircles) * maxRadius;
           const baseR2 = ((i + 1) / numCircles) * maxRadius;
           
           const rHit = mouseDist >= baseR1 && mouseDist <= baseR2;
           
           // If mouse is hovering this cell (or touch), highlight it
           // Also highlight neighbors slightly? For now just direct hit or proximity
           
           // Let's do a distance check to the center of the cell for smoother "following" feel
           // Calculate cell center
           const midAngle = (angleStart + angleEnd) / 2;
           const midR = (baseR1 + baseR2) / 2;
           const cellX = Math.cos(midAngle) * midR;
           const cellY = Math.sin(midAngle) * midR;
           
           const distToMouse = Math.sqrt((cellX - mx) ** 2 + (cellY - my) ** 2);
           const toggleThreshold = 100; // Activation radius around mouse

           if (distToMouse < toggleThreshold) {
             const wave1 = Math.sin(time + i * 0.5) * 15;
             const wave2 = Math.sin(time + (i + 1) * 0.5) * 15;
             const r1 = Math.max(0, baseR1 + wave1);
             const r2 = Math.max(0, baseR2 + wave2);

             // Create radial gradient effectively for solid fill now, or just use flat fill?
             // "regresa a que se iluminen las celdas sin la transicion" -> Solid fill
             
             // Intensity based on mouse distance
             const intensity = 1 - (distToMouse / toggleThreshold);
             
             // Base brightness + intensity bonus. Max 0.5 opacity for clear visibility but not blinding white
             const cellAlpha = 0.2 + (intensity * 0.4); 

             ctx.beginPath();
             ctx.arc(centerX, centerY, r2, angleStart, angleEnd);
             ctx.arc(centerX, centerY, r1, angleEnd, angleStart, true); 
             ctx.closePath();

             ctx.fillStyle = `rgba(255, 255, 255, ${cellAlpha})`;
             ctx.fill();
           }
        }
      }

      ctx.lineWidth = 1;
      const globalAlpha = 0.4 + (Math.min(currentScroll, 500) / 500) * 0.4; 
      ctx.strokeStyle = `rgba(255, 255, 255, ${globalAlpha})`;

      // Draw circles
      for (let i = 0; i < numCircles; i++) {
        ctx.beginPath();
        const baseRadius = (i / numCircles) * maxRadius;
        const waveOffset = Math.sin(time + i * 0.5) * 15; 
        const r = Math.max(0, baseRadius + waveOffset);
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw radial lines
      for (let i = 0; i < numLines; i++) {
         ctx.beginPath();
         const angle = (i / numLines) * Math.PI * 2;
         const finalAngle = angle + rotation;

         const x1 = centerX + Math.cos(finalAngle) * 50; 
         const y1 = centerY + Math.sin(finalAngle) * 50;
         const x2 = centerX + Math.cos(finalAngle) * maxRadius;
         const y2 = centerY + Math.sin(finalAngle) * maxRadius;
         
         ctx.moveTo(x1, y1);
         ctx.lineTo(x2, y2);
         ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollY]);

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

export default CircularMesh;
