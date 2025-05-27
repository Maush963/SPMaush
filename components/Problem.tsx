import React from "react";
import { Highlight } from "./ui/Hero-highlight";
import { ArrowDown } from "lucide-react";

const Problem = () => {
  return (
    <div
      className="w-full pb-10 mb-[100px] md:mb-5 mt-40 z-40 justify-center"
      id="Problem"
    >
      <h2 className="lg:max-w-[60vw] font-bold text-2xl md:text-3xl pb-8 text-center mx-auto">
        Tu trabajo habla bien de ti.{" "}
        <Highlight className="text-black">
          Tu página debería hacer lo mismo.
        </Highlight>
      </h2>

      <div className="flex flex-col items-center justify-center text-white-200 text-sm md:text-lg lg:text-xl max-w-[70ch] mx-auto space-y-6">
        {/* Bloque 1 – Problema con borde lateral */}
        <div className="border-l-4 border-red-500 pl-4">
          <p>
            Uno solo es tan bueno como su habilidad para comunicarlo. Y si tu
            página no lo hace,{" "}
            <span className="font-semibold text-red-400">
              estás limitando tu potencial.
            </span>
          </p>
        </div>

        {/* Flecha entre bloques */}
        <div className="flex items-center justify-center text-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 13l-5 5m0 0l-5-5m5 5V6"
            />
          </svg>
        </div>

        {/* Bloque 2 – Solución con borde lateral */}
        <div className="border-l-4 border-purple pl-4">
          <p>
            <span className="font-semibold text-purple">
              La buena noticia es que eso puede cambiar.
            </span>{" "}
            Nosotros te ayudamos a que eso suceda. Diseñamos soluciones a
            medida, pensadas para vender, y enfocadas en mostrar lo mejor de lo
            que haces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Problem;
