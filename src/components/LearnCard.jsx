import React from "react";
import { TiTick } from "react-icons/ti";

const LearnCard = () => {
  return (
    <div className="flex items-center md:gap-2 gap-4 mt-5">
      <TiTick
        color=""
        className="text-white w-6 h-6 bg-[#FF7F37] rounded-md border border-white"
      />

      <p className="text-white md:text-[17px] text-sm  rounded-lg md:px-5 px-2 md:py-4 py-2 bg-[#6e6b6c]">
        Subject Matter Expertise will share their knowledge on a specific field
      </p>
    </div>
  );
};

export default LearnCard;
