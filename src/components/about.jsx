import React from "react";
import { ArrowDownward, South } from "@mui/icons-material";
import { Container, ContainerFluid } from "./layout";

const About = () => {
  return (
    <div className="my-32">
      <ContainerFluid>
        <div className="grid grid-cols-12 h-[65vh]">
          <div className="col-span-2 col-start-2">
            <South fontSize="large" />
          </div>
          <div className="col-span-9 h-full overflow-hidden relative">
            <img
              src="/court.jpg"
              className="w-full h-full object-cover object-bottom -z-10"
              alt="skincare product"
            />
            <p className="absolute text-white bottom-0 left-0 text-[18rem] leading-[14rem] outline-4">
              Architect
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 pt-32">
          <div className="col-span-2 col-start-2">
            <span>About us</span>
          </div>
          <div className="col-span-9 flex gap-10">
            <div className="basis-1/2 pr-12 space-y-8">
              <p className="text-5xl tracking-tighter font-semibold">
                A whole different kind of architectural firm.
              </p>
              <p className="font-semibold leading-8">
                We do it through expertise, creativity, and attention to every
                detail -- our ingredients for over{" "}
                <span>12 years of suceess.</span> We are dirven by an ambition
                to enable architecture to become a sustainable change agent. Our
                starting point is always what buildings can do for people and
                local communities.
              </p>
              <div>
                <button
                  type="button"
                  className="text-lg font-semibold border-b-2 border-red-400 text-red-400"
                >
                  Read more
                </button>
              </div>
            </div>
            <div className="basis-1/2 relative">
              <div className="absolute w-full aspect-square -top-60">
                <img
                  src="/court.jpg"
                  className="w-full h-full object-cover object-bottom -z-10"
                  alt="skincare product"
                />
              </div>
            </div>
          </div>
        </div>
      </ContainerFluid>
    </div>
  );
};

export default About;
