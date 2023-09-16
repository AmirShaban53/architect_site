import React from "react";
import { ContainerFluid, Container } from "./layout";
import { ArrowForwardIos } from "@mui/icons-material";

const Projects = () => {
  return (
    <div className="my-16 md:my-32" id="projects">
      <ContainerFluid>
        <div className="grid grid-cols-12 mb-12">
          <div className="col-span-2 md:col-start-2">
            <span className="text-xs md:text-base">Projects</span>
          </div>
          <div className="col-span-7">
            <p className="text-3xl md:text-5xl font-semibold md:w-2/3 tracking-tighter">
              We provide more than <br className="hidden md:inline-block" />{" "}
              just quality services.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 mb-12">
          <div className="col-span-12 md:col-span-7 relative aspect-square md:aspect-[4/3]">
            <img
              src="/pexels-scott-webb-593153.webp"
              className="w-full h-full object-cover object-bottom -z-10"
              alt="building project"
            />
            <div className="absolute bottom-0 right-0 md:h-36 bg-white flex justify-between p-4 md:p-8 px-6 md:px-12 gap-12 border">
              <div>
                <p className="md:text-5xl text-red-400 tracking-tight md:mb-3">
                  Architecture
                </p>
                <p className="font-semibold">Service</p>
              </div>
              <div>
                <p className="md:text-5xl text-red-400 tracking-tight md:mb-3">
                  16k{" "}
                  <span className="text-sm">
                    m <sup>2</sup>{" "}
                  </span>
                </p>
                <p className="font-semibold">Area</p>
              </div>
            </div>
            <div className="hidden md:block absolute top-16 md:left-[75%] md:w-[65%]">
              <p className="mb-2 text-neutral-600">Aarhus, Denmark</p>
              <p className="mb-8 font-bold text-3xl">Moesgaard Museum</p>
              <p className="leading-8 font-semibold">
                Moesgaard Museum is a popular destination for museum enthusiats
                and nature lovers alike. The new museum building is the venue
                for world-class prehistoric and ethnographic exhibitions.
                Situated in the undulating landscape south of Aarhus, the museum
                constitutes a unique trinity of nature, culture and history.
              </p>
            </div>
          </div>
          <div className="col-span-2 items-end hidden md:flex">
            <div className="w-36 aspect-square flex items-center justify-center bg-red-400 text-white font-semibold ">
              <ArrowForwardIos fontSize="small" className="font-semibold" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-y-12 md:gap-y-24">
          <div className="col-span-8 md:col-span-3 col-start-3 md:col-start-4 relative aspect-[3/3.5]">
            <img
              src="/adam-birkett-BJSLmyungtE-unsplash.webp"
              className="w-full h-full object-cover object-center -z-10"
              alt="building project"
            />
            <div className="absolute text-black top-0 left-0 w-full p-6 md:p-12 font-semibold text-2xl">
              <p className="text-neutral-500 text-base mb-4 font-light">
                Aarhus, Denmark
              </p>
              <p>Moesgaard</p>
              <p>Museum</p>
            </div>
          </div>
          <div className="col-span-8 md:col-span-3 col-start-3 md:col-start-8 relative aspect-[3/3.5]">
            <img
              src="/adam-birkett-1ZEtta_avvE-unsplash.webp"
              className="w-full h-full object-cover object-center -z-10"
              alt="building project"
            />
            <div className="absolute text-black top-0 left-0 w-full p-6 md:p-12 font-semibold text-2xl">
              <p className="text-neutral-500 text-base mb-4 font-light">
                reykjavik, Iceland
              </p>
              <p>Harpa Concert</p>
              <p>Hall & Confrence</p>
              <p>Center</p>
            </div>
          </div>
          <div className="col-span-8 md:col-span-3 col-start-3 md:col-start-4 relative aspect-[3/3.5]">
            <img
              src="/pexels-fomstock-com-1123982.webp"
              className="w-full h-full object-cover object-left-top -z-10"
              alt="building project"
            />
            <div className="absolute text-black top-0 left-0 w-full p-6 md:p-10 font-semibold text-2xl">
              <p className="text-neutral-500 text-base mb-2 font-light">
                Tseung, Hong Kong
              </p>
              <p>French</p>
              <p>International</p>
              <p>School</p>
            </div>
          </div>
          <div className="col-span-8 md:col-span-3 col-start-3 md:col-start-8 relative aspect-[3/3.5]">
            <img
              src="/ricardo-gomez-angel-8oRCwrBn_Fc-unsplash.webp"
              className="h-full w-full object-cover object-bottom -z-10"
              alt="building project"
            />
            <div className="absolute text-white top-0 left-0 w-full p-6 md:p-12 flex flex-col justify-between h-full">
              <div className="font-semibold text-3xl tracking-tighter leading-6">
                <p>Check all</p>
                <p>357 projects</p>
              </div>
              <div>
                <button
                  type="button"
                  className="border-b-4 text-red-400 border-red-400 font-semibold text-2xl"
                >
                  Expore More
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContainerFluid>
    </div>
  );
};

export default Projects;
