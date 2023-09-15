import React from "react";
import { ContainerFluid } from "./layout";

const Awards = () => {
  return (
    <div className="my-32">
      <ContainerFluid>
        <div className="grid grid-cols-12">
          <div className="col-span-2 col-start-2">
            <span>Awards</span>
          </div>
          <div className="col-span-7">
            <p className="text-5xl font-semibold md:w-2/3 tracking-tighter mb-12">
              Prestigious awards <br />
              that we won.
            </p>
            <div className="space-y-6">
              <div className="p-4 border w-4/5 rounded-lg flex justify-between">
                <div>
                  <span className="text-2xl tracking-tight font-semibold">The Barnero Award</span>
                </div>
                <div className="text-neutral-500 space-x-12">
                  <span>Special Jury Award</span>
                  <span>2020</span>
                </div>
              </div>
              <div className="p-4 border w-4/5 rounded-lg flex justify-between">
                <div>
                  <span className="text-2xl tracking-tight font-semibold">Nagato Arch</span>
                </div>
                <div className="text-neutral-500 space-x-12">
                  <span>1st Runner Up</span>
                  <span>2019</span>
                </div>
              </div>
              <div className="p-4 border w-4/5 rounded-lg flex justify-between">
                <div>
                  <span className="text-2xl tracking-tight font-semibold">The Europe Arch Priz V</span>
                </div>
                <div className="text-neutral-500 space-x-12">
                  <span>Joint Winner</span>
                  <span>2018</span>
                </div>
              </div>
              <div className="p-4 border w-4/5 rounded-lg flex justify-between">
                <div>
                  <span className="text-2xl tracking-tight font-semibold">Medal Architecture</span>
                </div>
                <div className="text-neutral-500 space-x-12">
                  <span>1st Runner Up</span>
                  <span>2016</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerFluid>
    </div>
  );
};

export default Awards;
