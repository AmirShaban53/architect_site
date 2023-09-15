import React from "react";
import { Container, ContainerFluid } from "./layout";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white ">
      <ContainerFluid>
        <div className="grid grid-cols-12">
          <div className="col-span-6 aspect-video">
            <img
              src="/court.jpg"
              className="w-full h-full object-cover object-bottom -z-10"
              alt="skincare product"
            />
          </div>
          <div className="col-span-4 text-white">
            <p>Contact us</p>
            <div className="flex justify-between">
              <div className="basis-1/2">
                <p>For Clients</p>
                <p>+ 32 097 555 75 79</p>
                <p>jp@reflex.com</p>
              </div>
              <div className="basis-1/2">
                <p>Office</p>
                <p>St. Marion Jola 13.</p>
                <p>Toge, 02000</p>
              </div>
            </div>
            <div>
              <p>For Contractors</p>
              <p>+ 32 097 555 75 79</p>
              <p>info@reflex.com</p>
            </div>
          </div>
        </div>
      </ContainerFluid>
      <ContainerFluid>
        <div className="flex justify-between w-[67%] mx-auto">
          <div>
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
          <div>
            <p>Company 2023 All rights Reserved</p>
          </div>
        </div>
      </ContainerFluid>
    </footer>
  );
};

export default Footer;
