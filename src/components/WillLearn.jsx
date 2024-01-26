import React from "react";

import LearnCard from "./LearnCard";
export const WillLearn = () => {
  let learncard = [0, 0, 0, 0];
  return (
    <div className="w-full h-fit bg-black py-5 px-4  md:mt-10">
      <h2 className="font-semibold md:text-[35px] text-[24px] text-center text-white ">
        What You Will Learn In
      </h2>
      <h3 className="font-semibold md:text-[25px] text-[18px] text-center text-white ">
        Our Masterclasses
      </h3>

      <div className="grid w-full md:grid-cols-2 gap-x-4 grid-cols-1">
        {learncard.map((el, index) => {
          return <LearnCard key={index} />;
        })}
      </div>
    </div>
  );
};
