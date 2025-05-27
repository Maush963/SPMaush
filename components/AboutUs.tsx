import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full pb-10 mb-[100px] md:mb-5 mt-40 z-40" id="aboutus">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2">
          <h1 className="heading">
            Nuestra <span className="text-purple">visión</span>
          </h1>
          <p className="text-white-200 md:mt-5 my-5 text-justify">
            En Sorelli creamos sitios que proyectan confianza, comunican con
            claridad y están hechos para convertir.{" "}
            <span className="font-extralight">
              Unimos diseño visual y desarrollo moderno para que tu negocio
              destaque con una presencia digital que realmente lo represente.{" "}
            </span>
            Cada proyecto está diseñado a la medida. Nada genérico. Solo
            soluciones que conectan, venden y perduran.
          </p>
        </div>
        <div className="md:w-1/4 flex justify-center ">
          <img
            src="https://maush963.github.io/Imagesformysalespage/Uger.jpeg"
            alt="Mauricio Salas"
            className="w-4/5 aspect-[3/4] object-cover rounded-lg shadow-md shadow-purple"
          />
        </div>
        <div className="md:w-1/4 flex justify-center ">
          <img
            src="https://maush963.github.io/Imagesformysalespage/Maushv2.jpeg"
            alt="Mauricio Salas"
            className="w-4/5 aspect-[3/4] object-cover rounded-lg shadow-md shadow-purple"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
