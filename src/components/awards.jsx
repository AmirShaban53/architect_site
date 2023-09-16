import React from "react";
import { ContainerFluid } from "./layout";

import { motion } from "framer-motion";
import {
  awardItemVart,
  awardParentVart,
  titleItemVart,
  aboutParentVart,
} from "../animations";

const Awards = () => {
  return (
    <div className="my-16 md:my-32" id="awards">
      <ContainerFluid>
        <div className="grid grid-cols-12">
          <div className="col-span-2 md:col-start-2">
            <span className="text-xs md:text-base">Awards</span>
          </div>
          <motion.div
            variants={aboutParentVart}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true, amount: 0.7 }}
            className="col-span-8 md:col-span-7 "
          >
            <motion.p
              variants={titleItemVart}
              className="text-2xl md:text-5xl font-semibold md:w-2/3 tracking-tighter mb-8 md:mb-12"
            >
              Prestigious awards <br />
              that we won.
            </motion.p>
            <motion.div
              variants={awardParentVart}
              className="space-y-3 md:space-y-6"
            >
              <motion.div
                variants={awardItemVart}
                className="p-2 md:p-4 border md:w-4/5 rounded-lg flex justify-between"
              >
                <div>
                  <span className="md:text-2xl tracking-tight font-semibold">
                    The Barnero Award
                  </span>
                </div>
                <div className="text-sm md:text-base text-neutral-500 space-x-6 md:space-x-12">
                  <span className="hidden md:inline-block">
                    Special Jury Award
                  </span>
                  <span>2020</span>
                </div>
              </motion.div>
              <motion.div
                variants={awardItemVart}
                className="p-2 md:p-4 border md:w-4/5 rounded-lg flex justify-between"
              >
                <div>
                  <span className="md:text-2xl tracking-tight font-semibold">
                    Nagato Arch
                  </span>
                </div>
                <div className="text-sm md:text-base text-neutral-500 space-x-6 md:space-x-12">
                  <span className="hidden md:inline-block">1st Runner Up</span>
                  <span>2019</span>
                </div>
              </motion.div>
              <motion.div
                variants={awardItemVart}
                className="p-2 md:p-4 border md:w-4/5 rounded-lg flex justify-between"
              >
                <div>
                  <span className="md:text-2xl tracking-tight font-semibold">
                    The Europe Arch Priz V
                  </span>
                </div>
                <div className="text-sm md:text-base text-neutral-500 space-x-6 md:space-x-12">
                  <span className="hidden md:inline-block">Joint Winner</span>
                  <span>2018</span>
                </div>
              </motion.div>
              <motion.div
                variants={awardItemVart}
                className="p-2 md:p-4 border md:w-4/5 rounded-lg flex justify-between"
              >
                <div>
                  <span className="md:text-2xl tracking-tight font-semibold">
                    Medal Architecture
                  </span>
                </div>
                <div className="text-sm md:text-base text-neutral-500 space-x-6 md:space-x-12">
                  <span className="hidden md:inline-block">1st Runner Up</span>
                  <span>2016</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </ContainerFluid>
    </div>
  );
};

export default Awards;
