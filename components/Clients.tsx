import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "../data";

const clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Testimonios de colaboradores {""}
        <span className="text-purple">satisfechos</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default clients;
