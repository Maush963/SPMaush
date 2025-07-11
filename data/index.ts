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
    title: "Charleads - Leadsales",
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
  {
    id: 2,
    title: "SoffyApp - Fundación Soffy",
    des: "Página web/app clínica para Fundación Soffy sin fines de lucro que centraliza expedientes y agiliza flujos administrativos con enfoque en seguridad y eficiencia.",
    img: "https://maush963.github.io/Imagesformysalespage/Soffyapp.png",
    iconLists: [
      "https://maush963.github.io/Imagesformysalespage/node.png",
      "https://maush963.github.io/Imagesformysalespage/kotlin-1-logo.png",
      "https://maush963.github.io/Imagesformysalespage/bulma.png",
      "https://maush963.github.io/Imagesformysalespage/sql.svg",
    ],
    link: "https://github.com/netogu1llen/ITNet/",
    imgClass:
      "w-5/6 h-auto max-w-3/4 max-h-3/4 object-contain rounded-lg transform rotate-3 bottom-1 shadow-lg shadow-ring",
  },
  {
    id: 3,
    title: "Página de ventas - Malky Malk",
    des: "Rediseño de página de ventas para servidor de Skool mediante técnicas de copywriting y diseño estratégico para aumentar las conversiones.",
    img: "https://maush963.github.io/Imagesformysalespage/Malk.png",
    iconLists: ["https://maush963.github.io/Imagesformysalespage/canva.png"],
    link: "https://malkymalk.my.canva.site/",
    imgClass:
      "w-5/6 h-auto max-w-3/4 max-h-3/4 object-contain rounded-lg transform rotate-3 bottom-1 shadow-lg shadow-ring",
  },
  {
    id: 4,
    title: "Sistema de tickets - King Global Cargo",
    des: "Un sistema de tickets para la empresa KGC, que permite a los empleados gestionar y dar seguimiento a tareas de manera eficiente.",
    img: "https://maush963.github.io/Imagesformysalespage/KGC.png",
    iconLists: [
      "https://maush963.github.io/Imagesformysalespage/nextjs.png",
      "https://maush963.github.io/Imagesformysalespage/tail.svg",
    ],
    link: "https://github.com/IramKGC/TicketMasterKGC",
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
