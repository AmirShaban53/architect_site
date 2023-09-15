import React from "react";
import { Container } from "./layout";
import { ArrowForwardIos } from "@mui/icons-material";

const Hero = () => {
  return (
    <div className="">
      <Container>
        <div className="flex mt-20 mb-8">
          <div className="flex items-end gap-8">
            <div className="">
              <p className="text-8xl font-semibold tracking-tighter text-neutral-800">
                Architects with different approach.
              </p>
            </div>
            <div className=" flex gap-6 items-end">
              <div className="space-y-8">
                <div className="flex gap-16">
                  <div>
                    <p className="text-red-400 text-4xl tracking-tighter font-semibold">
                      12
                    </p>
                    <p className="text-sm font-semibold">
                      Years <br /> experience
                    </p>
                  </div>
                  <div>
                    <p className="text-red-400 text-4xl tracking-tighter font-semibold">
                      357
                    </p>
                    <p className="text-sm font-semibold">
                      Properties <br /> built
                    </p>
                  </div>
                  <div>
                    <p className="text-red-400 text-4xl tracking-tighter font-semibold">
                      12
                    </p>
                    <p className="text-sm font-semibold">
                      Awards <br /> gained
                    </p>
                  </div>
                </div>
                <div>
                  <p>
                    Founded in Copenhagen with offices worldwide,{" "}
                    <span>Reflex</span> is a studio made up of a highly
                    specialized team of architects, engineers, designers,
                    thinkers and doers.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="h-16 w-16 flex items-center justify-center bg-red-400 text-white font-semibold ">
                <ArrowForwardIos />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
