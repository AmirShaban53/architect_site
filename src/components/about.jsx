import { useRef } from "react";
import { ArrowDownward, South } from "@mui/icons-material";
import { Container, ContainerFluid } from "./layout";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  aboutArrowVart,
  aboutImgVart,
  aboutItemVart,
  aboutParentVart,
} from "../animations";

const About = () => {
  const img1Ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: img1Ref,
    offset: ["start end", "end start"],
  });
  const position = useTransform(
    scrollYProgress,
    [0.25, 0.5, 0.8],
    ["0%", "50%", "90%"]
  );
  return (
    <div className="my-16 md:my-32" id="about">
      <ContainerFluid>
        <div className="grid grid-cols-12 h-[30vh] md:h-[65vh]">
          <div className="col-span-2 col-start-2 relative">
            <motion.div
              variants={aboutArrowVart}
              className="absolute"
              style={{ top: position }}
            >
              <South fontSize="large" />
            </motion.div>
          </div>
          <motion.div
            variants={aboutImgVart}
            ref={img1Ref}
            className="col-span-9 h-full overflow-hidden relative"
          >
            <img
              src="/luke-van-zyl-koH7IVuwRLw-unsplash.webp"
              className="w-full h-full object-cover object-bottom -z-10"
              alt="building with glass finishing"
            />
            <p className="absolute text-white bottom-0 left-0 text-7xl leading-[3.9rem] md:text-[18rem] md:leading-[14rem] outline-4">
              Architect
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-12 pt-16 md:pt-32">
          <div className="col-span-2 md:col-start-2">
            <span className="text-xs md:text-base">About us</span>
          </div>
          <div className="col-span-9 flex gap-10">
            <motion.div
              variants={aboutParentVart}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true, amount: 0.6 }}
              className="md:basis-1/2 md:pr-12 space-y-4 md:space-y-8"
            >
              <motion.p
                variants={aboutItemVart}
                className="text-3xl md:text-5xl tracking-tighter font-semibold"
              >
                A whole different kind of architectural firm.
              </motion.p>
              <motion.p
                variants={aboutItemVart}
                className="md:font-semibold md:leading-8"
              >
                We do it through expertise, creativity, and attention to every
                detail -- our ingredients for over{" "}
                <span>12 years of suceess.</span> We are dirven by an ambition
                to enable architecture to become a sustainable change agent. Our
                starting point is always what buildings can do for people and
                local communities.
              </motion.p>
              <motion.div variants={aboutItemVart}>
                <button
                  type="button"
                  className="text-lg font-semibold border-b-2 border-red-400 text-red-400"
                >
                  Read more
                </button>
              </motion.div>
            </motion.div>
            <div className="hidden md:block basis-1/2 relative">
              <div className="absolute w-full aspect-square -top-60">
                <div className="absolute h-full w-full bg-black/10"></div>
                <img
                  src="/pexels-francisco-valerio-trujillo-1824392.webp"
                  className="w-full h-full object-cover object-bottom -z-10"
                  alt="white building with concrete finish"
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
