import React, { useState } from "react";
import { FreqQues } from "./FreqQues";

export const Frequently = () => {
  return (
    <div className="w-full md:h-fit bg-[#f9f8f8] md:py-10 py-7 h-fit md:mt-5 mt-10">
      <h2 className="font-semibold md:text-[32px] text-[27px] text-center ">
        Frequently Asked Questions:
      </h2>

      <div className="md:mt-10 mt-5">
        <FreqQues />
        <FreqQues />
        <FreqQues />
        <FreqQues />
        <FreqQues />
      </div>


      <button className=" text-white font-semibold md:mt-20 mt-10 md:text-[17px] text-[12px] rounded-lg grid place-content-center mx-auto md:px-4 px-6 md:py-1 py-2 bg-[#ED9BB7] ">
        BOOK YOUR SPOT NOW AT &#8377; 499
      </button>
    </div>
  );
};
