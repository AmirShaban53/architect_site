import React from "react";
import { ContainerFluid } from "./layout";

import { motion } from "framer-motion";
import { parentVart, titleItemVart, aboutParentVart } from "../animations";

const Services = () => {
  return (
    <div className="my-16 md:my-32" id="services">
      <ContainerFluid>
        <div className="grid grid-cols-12">
          <div className="col-span-2 md:col-start-2">
            <span className="text-xs md:text-base">Services</span>
          </div>
          <motion.div
            variants={aboutParentVart}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true, amount: 0.7 }}
            className="col-span-7"
          >
            <motion.p
              variants={titleItemVart}
              className="text-3xl md:text-5xl font-semibold md:w-2/3 tracking-tighter mb-8 md:mb-12"
            >
              We shape the life of tomorrow.
            </motion.p>
            <motion.div
              variants={titleItemVart}
              className="grid grid-cols-12 gap-6"
            >
              <div className="col-span-12 md:col-span-4 md:text-xl font-semibold space-x-4 md:space-x-6">
                <span className="text-neutral-300">01/</span>
                <span className="tracking-tight">Architecture</span>
              </div>
              <div className="col-span-12 md:col-span-4 md:text-xl font-semibold space-x-4 md:space-x-6">
                <span className="text-neutral-300">02/</span>
                <span className="tracking-tight">Landscape desgin</span>
              </div>
              <div className="col-span-12 md:col-span-4 md:text-xl font-semibold space-x-4 md:space-x-6">
                <span className="text-neutral-300">03/</span>
                <span className="tracking-tight">Engineering</span>
              </div>
              <div className="col-span-12 md:col-span-4 md:text-xl font-semibold space-x-4 md:space-x-6">
                <span className="text-neutral-300">04/</span>
                <span className="tracking-tight">Interior design</span>
              </div>
              <div className="col-span-12 md:col-span-4 md:text-xl font-semibold space-x-4 md:space-x-6">
                <span className="text-neutral-300">05/</span>
                <span className="tracking-tight">Graphic design</span>
              </div>
              <div className="col-span-12 md:col-span-4 md:text-xl font-semibold space-x-4 md:space-x-6">
                <span className="text-neutral-300">06/</span>
                <span className="tracking-tight">Consultancy</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </ContainerFluid>
    </div>
  );
};

export default Services;
