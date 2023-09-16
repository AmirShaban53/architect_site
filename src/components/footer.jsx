import React from "react";
import { Container, ContainerFluid } from "./layout";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white ">
      <ContainerFluid>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 relative">
            <img
              src="/court.jpg"
              className="w-full h-full object-cover object-bottom -z-10"
              alt="skincare product"
            />
            <div className="absolute top-0 right-0 font-semibold text-xl aspect-square leading-tight bg-red-400 text-white p-8">
              <div>
                <p>Open <br /> maps</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 text-white p-12">
            <p className="font-semibold text-xl md:text-4xl tracking-tight mb-6 md:mb-12">Contact us</p>
            <div className="flex justify-between mb-8">
              <div className="basis-1/2 md:basis-1/3 text-sm space-y-2">
                <p className=" text-neutral-500">For Clients</p>
                <p>+ 32 097 555 7579</p>
                <p className="text-red-400">jp@reflex.com</p>
              </div>
              <div className="basis-1/2 md:basis-1/3 text-sm space-y-2">
                <p className=" text-neutral-500">Office</p>
                <p>St. Marion Jola 13.</p>
                <p>Toge, 02000</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className=" text-neutral-500">For Contractors</p>
              <p>+ 32 097 555 75 79</p>
              <p className="text-red-400">info@reflex.com</p>
            </div>
          </div>
        </div>
      </ContainerFluid>
      <ContainerFluid>
        <div className="md:flex justify-between py-8 md:py-16 w-[67%] mx-auto">
          <div className="space-x-2 md:space-x-8">
            <span>
              <LinkedIn />
            </span>
            <span>
              <Facebook />
            </span>
            <span>
              <Twitter />
            </span>
          </div>
          <div className="text-sm text-neutral-400">
            <p>Company 2023 All rights Reserved</p>
          </div>
        </div>
      </ContainerFluid>
    </footer>
  );
};

export default Footer;
