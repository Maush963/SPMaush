import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full pb-10 mb-[100px] md:mb-5 mt-40 z-40" id="aboutus">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2">
          <h2 className="lg:max-w-[40vw] font-bold text-2xl md:text-3xl text-left">
            ¿Quién es <span className="text-purple">Mauricio Salas?</span>
          </h2>
          <p className="text-white-200 md:mt-5 my-5 text-justify">
            Soy un estudiante mexicano de 21 años que disfruta pasar tiempo de
            calidad con su familia y amigos, conectar con la naturaleza y
            aprender. Me apasiona la calistenia y la escalada,{" "}
            <span className="font-extralight">
              además de tener un gran interés por el emprendimiento.{" "}
            </span>
            Actualmente, estoy enfocado en combinar mi carrera como ingeniero en
            software con mi pasión por el marketing y los negocios.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center ">
          <img
            src="https://maush963.github.io/Imagesformysalespage/Maush.jpeg"
            alt="Mauricio Salas"
            className="w-4/5 h-full rounded-lg shadow-md shadow-purple"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
