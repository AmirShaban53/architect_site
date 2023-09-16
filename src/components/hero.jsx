import React from "react";
import { Container } from "./layout";
import { ArrowForwardIos } from "@mui/icons-material";

import { motion } from "framer-motion";
import {
  parentVart,
  parentStatsVart,
  titleItemVart,
  statsItemVart,
  heroTextVart,
  heroBoxVart,
} from "../animations";

const Hero = () => {
  return (
    <div className="">
      <Container>
        <div className="flex mt-20 mb-8">
          <div className="space-y-6 md:space-y-0 md:flex items-end gap-8">
            <div className="">
              <motion.p
                variants={parentVart}
                className=" text-5xl md:text-8xl font-semibold tracking-tighter text-neutral-800"
              >
                <motion.span variants={titleItemVart} className="inline-block">
                  Architects
                </motion.span>{" "}
                <motion.span variants={titleItemVart} className="inline-block">
                  with different
                </motion.span>{" "}
                <motion.span variants={titleItemVart} className="inline-block">
                  approach.
                </motion.span>
              </motion.p>
            </div>
            <div className="flex gap-6 items-end">
              <div className="space-y-8">
                <motion.div variants={parentStatsVart} className="flex gap-6 md:gap-16">
                  <motion.div variants={statsItemVart}>
                    <p className="text-red-400 text-lg md:text-4xl tracking-tighter font-semibold">
                      12
                    </p>
                    <p className="text-xs md:text-sm font-semibold">
                      Years <br /> experience
                    </p>
                  </motion.div>
                  <motion.div variants={statsItemVart}>
                    <p className="text-red-400 text-lg md:text-4xl tracking-tighter font-semibold">
                      357
                    </p>
                    <p className="text-xs md:text-sm font-semibold">
                      Properties <br /> built
                    </p>
                  </motion.div>
                  <motion.div variants={statsItemVart}>
                    <p className="text-red-400 text-lg md:text-4xl tracking-tighter font-semibold">
                      12
                    </p>
                    <p className="text-xs md:text-sm font-semibold">
                      Awards <br /> gained
                    </p>
                  </motion.div>
                </motion.div>
                <motion.div variants={heroTextVart}>
                  <p className="text-sm md:text-base">
                    Founded in Copenhagen with offices worldwide,{" "}
                    <span>Reflex</span> is a studio made up of a highly
                    specialized team of architects, engineers, designers,
                    thinkers and doers.
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="">
              <motion.div
                variants={heroBoxVart}
                className="h-12 md:h-16 aspect-square flex items-center justify-center bg-red-400 text-white font-semibold "
              >
                <ArrowForwardIos />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
