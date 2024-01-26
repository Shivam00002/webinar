import React from "react";

const SeatForm = () => {
  return (
    <div className="w-full md:h-[250px] md:mt-0 mt-10  md:py-7 shadow-lg md:px-0 px-4  ">
      <h2 className="font-semibold md:text-[30px]   text-[23px] text-center">
        Save Your Seat For The Webinar
      </h2>
      <p className="text-center md:text-[20px] text-[22]">
        Enter your name and email address to save your set now
      </p>

      <div className="md:flex md:w-[550px] w-full md:mt-10  mt-5 mx-auto items-center gap-3">
        <input
          type="text"
          placeholder="Student Name"
          className="border-2 rounded-md md:w-[250px]  w-full h-[45px] px-2"
        />
        <input
          type="text"
          placeholder="Email Address"
          className=" border-2 rounded-md md:w-[250px] md:mt-0 mt-3 w-full h-[45px] px-2"
        />
        <button className="   md:w-fit w-full  md:mt-0 mt-5  mx-auto px-4  h-fit md:text-[20px] py-3  md:py-2 bg-[#FF68A0] text-white font-semibold whitespace-nowrap rounded-lg">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default SeatForm;
