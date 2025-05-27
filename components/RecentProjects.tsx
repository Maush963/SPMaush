import React from "react";
import { projects } from "../data";
import { PinContainer } from "./ui/3d-pin";
import { div } from "three/webgpu";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Nuestros {""}
        <span className="text-purple">proyectos</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-10 sm:gap-y-16 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link, imgClass }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] mb-4"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[75vw] overflow-hidden sm:h-[40vh] h-[22vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#030f0a]">
                  <img
                    src="/bg.png"
                    alt="bg-img"
                    className="h-full w-full object-cover"
                  />
                </div>
                <img
                  src={img}
                  alt={title}
                  className={`z-10 absolute bottom-0 ${
                    imgClass || "object-cover"
                  }`}
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-3">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img
                        src={icon}
                        alt={icon}
                        className={`${icon.endsWith("png") ? "" : "p-2"} ${
                          icon.includes("nextjs.png")
                            ? "invert brightness-100"
                            : ""
                        }`}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    {title === "Página de ventas - Malky Malk"
                      ? "Visitar Página"
                      : "Ver Repositorio"}
                  </p>
                  <FaLocationArrow className="ms-3" color="#3AFFB0" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
