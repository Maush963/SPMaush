import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "../data";
import { div } from "three/webgpu";
import { Highlight } from "./ui/Hero-highlight";

const Footer = () => {
  const handleClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <footer className="w-full pb-10 mt-[100px] mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <div className="w-full pb-10 mt-40 z-40 text-center" id="isThisForMe">
          <h2 className="font-bold text-2xl md:text-3xl mb-4">¿Es para mi?</h2>
          <p className="text-white-200 max-w-xl mx-auto text-base md:text-lg mb-6">
            Si sientes que lo que hacés vale la pena, pero tu página no lo
            demuestra, esto es para ti.
          </p>
          <a href="/forms">
            <MagicButton
              title="Potencia tu imagen"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-column justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Sorelli
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              onClick={() => handleClick(profile.link)}
            >
              <img src={profile.img} alt={profile.img} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
