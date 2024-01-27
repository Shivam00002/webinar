import React from "react";

const ContectForm = () => {
  return (
    <div>
      <p className="md:font-semibold md:text-[16px] text-sm text-gray-600">
        Purpose of Payment
      </p>
      <p className="md:mt-3 mt-2 font-semibold md:text-[17px] text-sm ">
        Online E-Learning Webinar
      </p>
      <h2 className="md:mt-3 mt-2 font-semibold md:text-[24px] text-[20px]">
        Amount
      </h2>
      <p className="text-gray-500 font-semibold md:text-[20px] text-sm">
        &#8377; 499
      </p>
      <div className="w-full h-fit md:py-4  py-2 border-t-2 border-b-2 border-gray-200 mt-3 md:text-[19px]  text-sm ">
        Your Details &gt; <span className="text-gray-500">Payment</span>{" "}
      </div>

      <p className="md:text-[17px] text-sm md:mt-5 mt-3   text-gray-500 px-1 ">
        Name
      </p>
      <input
        type="text"
        className="w-full h-fit md:py-3 py-2  border-2 rounded-lg  border-gray-200 "
      />
      <p className="md:text-[17px] text-sm md:mt-5 mt-3   text-gray-500 px-1 ">
        Email
      </p>
      <input
        type="text"
        className="w-full h-fit md:py-3 py-2  border-2 rounded-lg  border-gray-200 "
      />

      <p className="md:text-[17px] text-sm md:mt-5 mt-3   text-gray-500 px-1 ">
        Phone Number
      </p>
      <input
        type="text"
        className="w-full h-fit md:py-3  py-2 border-2 rounded-lg  border-gray-200 "
      />

      <div className="font-semibold text-center md:text-[22px] mt-5 md:mt-7">
        You Pay &#8377; 499 /-
      </div>
      <p className="text-center text-sm text-gray-400">
        <span className="underline">Terms of services</span> and{" "}
        <span className="underline">Refund policy</span>
      </p>
      <button className="md:px-14 py-2 md:text-[18px]  bg-[#ED5E93] text-white font-semibold mx-auto  w-full mt-4 md:w-fit grid place-content-center rounded-lg ">
        NEXT
      </button>
    </div>
  );
};

export default ContectForm;
