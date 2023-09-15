import React from "react";
import { ContainerFluid } from "./layout";

const Services = () => {
  return (
    <div className="my-32">
      <ContainerFluid>
        <div className="grid grid-cols-12">
          <div className="col-span-2 col-start-2">
            <span>Services</span>
          </div>
          <div className="col-span-7">
            <p className="text-5xl font-semibold md:w-2/3 tracking-tighter mb-12">
              We shape the life of tomorrow.
            </p>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-4 text-xl font-semibold space-x-6">
                <span className="text-neutral-300">01/</span>
                <span className="tracking-tight">Architecture</span>
              </div>
              <div className="col-span-4 text-xl font-semibold space-x-6">
                <span className="text-neutral-300">02/</span>
                <span className="tracking-tight">Landscape desgin</span>
              </div>
              <div className="col-span-4 text-xl font-semibold space-x-6">
                <span className="text-neutral-300">03/</span>
                <span className="tracking-tight">Engineering</span>
              </div>
              <div className="col-span-4 text-xl font-semibold space-x-6">
                <span className="text-neutral-300">04/</span>
                <span className="tracking-tight">Interior design</span>
              </div>
              <div className="col-span-4 text-xl font-semibold space-x-6">
                <span className="text-neutral-300">05/</span>
                <span className="tracking-tight">Graphic design</span>
              </div>
              <div className="col-span-4 text-xl font-semibold space-x-6">
                <span className="text-neutral-300">06/</span>
                <span className="tracking-tight">Consultancy</span>
              </div>
            </div>
          </div>
        </div>
      </ContainerFluid>
    </div>
  );
};

export default Services;
