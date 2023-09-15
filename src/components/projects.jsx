import React from "react";
import { ContainerFluid, Container } from "./layout";
import { ArrowForwardIos } from "@mui/icons-material";

const Projects = () => {
  return (
    <div className="my-32">
      <ContainerFluid>
        <div className="grid grid-cols-12 mb-12">
          <div className="col-span-2 col-start-2">
            <span>Projects</span>
          </div>
          <div className="col-span-7">
            <p className="text-5xl font-semibold md:w-2/3 tracking-tighter">
              We provide more than <br /> just quality services.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 mb-12">
          <div className="col-span-7 relative aspect-[4/3]">
            <img
              src="/court.jpg"
              className="w-full h-full object-cover object-bottom -z-10"
              alt="skincare product"
            />
            <div className="absolute bottom-0 right-0 h-36 bg-white flex justify-between p-8 px-12 gap-12 border">
              <div>
                <p className="text-5xl text-red-400 tracking-tight  mb-3">
                  Architecture
                </p>
                <p className="font-semibold">Service</p>
              </div>
              <div>
                <p className="text-5xl text-red-400 tracking-tight mb-3">
                  16k{" "}
                  <span className="text-sm">
                    m <sup>2</sup>{" "}
                  </span>
                </p>
                <p className="font-semibold">Area</p>
              </div>
            </div>
            <div className="absolute top-0 left-[70%] w-[70%]">
              <p>Aarhus, Denmark</p>
              <p>Moesgaard Museum</p>
              <p>
                Moesgaard Museum is a popular destination for museum enthusiats
                and nature lovers alike. The new museum building is the venue
                for world-class prehistoric and ethnographic exhibitions.
                Situated in the undulating landscape south of Aarhus, the museum
                constitutes a unique trinity of nature, culture and history.
              </p>
            </div>
          </div>
          <div className="col-span-2 flex items-end">
            <div className="w-36 aspect-square flex items-center justify-center bg-red-400 text-white font-semibold ">
              <ArrowForwardIos fontSize="small" className="font-semibold" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-y-24">
          <div className="col-span-3 col-start-4 relative aspect-[3/3.5]">
            <img
              src="/court.jpg"
              className="w-full h-full object-cover object-bottom -z-10"
              alt="skincare product"
            />
            <div className="absolute text-white top-0 left-0 w-full p-12">
              <p>Aarhus, Denmark</p>
              <p>Moesgaard</p>
              <p>Museum</p>
            </div>
          </div>
          <div className="col-span-3 col-start-8 relative aspect-[3/3.5]">
            <img
              src="/court.jpg"
              className="w-full h-full object-cover object-bottom -z-10"
              alt="skincare product"
            />
            <div className="absolute text-white top-0 left-0 w-full p-12">
              <p>reykjavik, Iceland</p>
              <p>Harpa Concert</p>
              <p>Hall & Confrence</p>
              <p>Center</p>
            </div>
          </div>
          <div className="col-span-3 col-start-4 relative aspect-[3/3.5]">
            <img
              src="/court.jpg"
              className="w-full h-full object-cover object-bottom -z-10"
              alt="skincare product"
            />
            <div className="absolute text-white top-0 left-0 w-full p-12">
              <p>Tseung, Hong Kong</p>
              <p>French</p>
              <p>International</p>
              <p>School</p>
            </div>
          </div>
          <div className="col-span-6 col-start-8 relative">
            <img
              src="/court.jpg"
              className="w-full h-full object-cover object-bottom -z-10"
              alt="skincare product"
            />
            <div className="absolute text-white top-0 left-0 w-full p-12 flex flex-col justify-between h-full">
              <div>
                <p>Check all</p>
                <p>357 projects</p>
              </div>
              <div>
                <button type="button">Expore More</button>
              </div>
            </div>
          </div>
        </div>
      </ContainerFluid>
    </div>
  );
};

export default Projects;
