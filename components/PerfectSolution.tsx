import React from "react";
import { Timeline } from "./ui/Timeline";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const timelineData: TimelineEntry[] = [
  {
    title: "Entendemos tu negocio",
    content: (
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 p-3">
          <p className="text-white-200 md:mt-5 my-5 text-wrap">
            Agendamos una llamada para entender tu negocio. Hablamos sobre lo
            que ofreces, a quién le vendes{" "}
            <span className="font-bold text-white">
              y qué esperas lograr con tu sitio web.
            </span>
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://maush963.github.io/Imagesformysalespage/zoom.jpg"
            alt="Llamada de consulta"
            className="rounded-lg object-cover h-40 md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Diseño y propuesta",
    content: (
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 order-2 md:order-1">
          <img
            src="https://maush963.github.io/Imagesformysalespage/diseño.jpg"
            alt="Diseño de sitio web"
            className="rounded-lg object-cover h-40 md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
        <div className="md:w-1/2 p-3 order-1 md:order-2">
          <p className="text-white-200 md:mt-5 my-5 text-wrap">
            Te presentamos una propuesta clara y un diseño inicial. Con base en
            lo que hablamos, diseñamos una estructura que{" "}
            <span className="font-bold text-white">
              conecte con tus clientes y te diferencie
            </span>
            . Tú apruebas antes de pasar al desarrollo.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Desarrollo y lanzamiento",
    content: (
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 p-3">
          <p className="text-white-200 md:mt-5 my-5 text-wrap">
            Construimos tu sitio con tecnología moderna (Next.js + Tailwind)
            para que{" "}
            <span className="text-white font-extrabold">
              cargue rápido, se vea bien en todos los dispositivos y genere
              confianza
            </span>
            . Cuando estés listo, lo ponemos en línea.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://maush963.github.io/Imagesformysalespage/launch.jpg"
            alt="Desarrollo web"
            className="rounded-lg object-cover h-40 md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
];

const PerfectSolution = () => {
  return (
    <div className="w-full pb-10 mb-[100px] md:mb-5 mt-40 z-40" id="process">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <h2 className=" lg:max-w-[40vw] font-bold text-3xl md:text-4xl text-center">
          ¿Cómo <span className="text-purple">trabajamos?</span>
        </h2>
      </div>
      <div className="max-w-[70ch] mx-auto text-center mb-10 mt-6">
        <p className="text-white-200 text-sm md:text-lg">
          Queremos que te sientas acompañado desde el inicio. Por eso,
          simplificamos el proceso en 3 pasos claros para que no tengas
          complicaciones.
        </p>
      </div>
      <Timeline data={timelineData} />
    </div>
  );
};

export default PerfectSolution;
