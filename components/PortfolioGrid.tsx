"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCard {
  id: number;
  title: string;
  category: string;
  image: string;
  size: "large" | "small";
}

const projects: ProjectCard[] = [
  {
    id: 1,
    title: "INNOVATIVE DENTAL STRUCTURE",
    category: "Architecture",
    image: "/projects/dental.jpg",
    size: "large",
  },
  {
    id: 2,
    title: "BRAND CREATION",
    category: "Branding",
    image: "/projects/brand.jpg",
    size: "large",
  },
  {
    id: 3,
    title: "2023 SYSTEMS",
    category: "Development",
    image: "/projects/systems.jpg",
    size: "small",
  },
  {
    id: 4,
    title: "SELECTED WORKS",
    category: "Portfolio",
    image: "/projects/selected.jpg",
    size: "small",
  },
];

const PortfolioGrid = () => {
  return (
    <section className="section-padding" id="portfolio">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid-portfolio">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative overflow-hidden cursor-pointer ${
                  project.size === "large" ? "aspect-[4/5]" : "aspect-square"
                }`}
              >
                {/* Image */}
                <div className="absolute inset-0 bg-gray-900">
                  <div className="w-full h-full bg-gray-800 img-grayscale" />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-xs md:text-sm tracking-widest mb-2 text-white/60">
                    {project.category}
                  </p>
                  <h3 className="heading-card text-white">{project.title}</h3>
                </div>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.9 }}
                  whileHover={{ scale: 1 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
