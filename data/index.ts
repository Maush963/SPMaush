import { link } from "fs";

export const navItems = [
  { name: "Proceso", link: "#process" },
  { name: "Proyectos", link: "#projects" },
  { name: "Testimonios", link: "#testimonials" },
  { name: "Contacto", link: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "Arquiplanner ",
    des: "Landing page diseñada con copywriting persuasivo y guion VSL para maximizar conversiones, desarrollada en Next.js y Tailwind para velocidad y escalabilidad.",
    img: "https://maush963.github.io/Imagesformysalespage/stage3-1.png",
    iconLists: [
      "https://maush963.github.io/Imagesformysalespage/nextjs.png",
      "https://maush963.github.io/Imagesformysalespage/tail.svg",
    ],
    link: "https://arquiplanner.com", // Placeholder link, update if known
    imgClass:
      "w-5/6 h-auto max-w-3/4 max-h-3/4 object-contain rounded-lg transform rotate-3 bottom-1 shadow-lg shadow-ring",
  },
  {
    id: 2,
    title: "SOMEFIPP ",
    des: "Landing page institucional desarrollada en React, enfocada en presentar información clara y estructurada para la organización.",
    img: "https://maush963.github.io/Imagesformysalespage/stage4.png",
    iconLists: [
      "https://maush963.github.io/Imagesformysalespage/React.png",
      "https://maush963.github.io/Imagesformysalespage/tail.svg",

    ],
    link: "https://somefipp.com", // Placeholder link, update if known
    imgClass:
      "w-5/6 h-auto max-w-3/4 max-h-3/4 object-contain rounded-lg transform rotate-3 bottom-1 shadow-lg shadow-ring",
  },
  {
    id: 3,
    title: "Leadsales ",
    des: "Página de analítica para la empresa Leadsales, enfocada en mostrar datos clave y respaldar la toma de decisiones estratégicas.",
    img: "https://maush963.github.io/Imagesformysalespage/Charleads.jpeg",
    iconLists: [
      "https://maush963.github.io/Imagesformysalespage/node.png",
      "https://maush963.github.io/Imagesformysalespage/tail.svg",
      "https://maush963.github.io/Imagesformysalespage/sql.svg",
      "https://maush963.github.io/Imagesformysalespage/Php.png",
    ],
    link: "https://github.com/A01705840/CCC_LeadSales",
    imgClass:
      "w-5/6 h-auto max-w-3/4 max-h-3/4 object-contain rounded-lg transform rotate-3 bottom-1 shadow-lg shadow-ring",
  },
];

export const testimonials = [
  {
    quote:
      "El equipo de Sorelli demostró una gran dedicación y enfoque estratégico para lograr resultados. Su entusiasmo y gran capacidad de comunicación marcaron una verdadera diferencia.",
    name: "Eddie Montiel",
    title: "CEO de Azcenzio Marketing",
    img: "https://maush963.github.io/Imagesformysalespage/Rex.png",
  },
  {
    quote:
      "El compromiso de que tienen en Sorelli con cada proyecto es evidente. Son un equipo confiable, constante y con una gran capacidad para adaptarse a lo que uno realmente necesita.",
    name: "Diego Quezada",
    title: "Presidente de la Secretaría de Ciudadanía en FETEC",
    img: "https://maush963.github.io/Imagesformysalespage/Quezada.jpeg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/email.svg",
    link: "mailto:depensamientosecos@gmailF.com",
  },
];
