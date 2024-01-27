import React from "react";
import { Link } from "react-router-dom";

export const EventCard = () => {
  return (
    <div className="w-full h-fit  mt-2  md:mt-10">
      <div className="md:w-[380px] w-full  md:h-fit pb-2  px-2 md:px-0 border">
        <div className="w-full h-fit  bg-[#FFF3EB] py-4 ">
          <div className="flex items-center px-5 py-1 text-white rounded-lg w-fit mx-auto ">
            <h3 className="bg-[#03338F]  text-[18px] px-6  py-2 rounded-l-lg ">
              Online
            </h3>
            <h3 className="bg-[#FFAC70]  text-[18px] px-6 py-2 rounded-r-lg">
              Masterclasses
            </h3>
          </div>

          <div className="flex items-center gap-10 w-full px-5 md:px-10 mt-7">
            <div className="w-[50%] h-fit">
              <h2 className="font-bold leading-6 text-[20px]">
                How To Build Your Skills
              </h2>
              <h2 className="font-bold leading-6 text-[20px] text-[#ED5E93] whitespace-nowrap py-1">
                With Top Expert
              </h2>
              <p className="mt-9 font-semibold text-sm">
                Course Overview with Priyanka Soni
              </p>
            </div>
            <div className="w-[50%] h-fit">
              <div className="w-[110px] h-[110px] rounded-full border relative ">
                <img
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEj760A-Elp2mLSdZbywEH0vpLomDfaSFY911R6w9egWiHPjHd4GhB0jAzvzseaCw9relpWdVL8aLjyUSTPX4NzYh-wdDQBcm9Hb0uWxHQN8AjZ9Z1xjVEkx0DRROZZq5NPZuaotviLmN4OIL9h-f93gdYdqiC8ZkbQQNBJNLoY_4pol1dzhWPSOm6kicQE"
                  alt="img"
                  className="fill absolute"
                />
              </div>

              <p className="font-semibold text-[16px] mt-2">Priyanka Soni</p>
              <p className="font-semibold text-[16px]">Masterclasses</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-2 mt-4">
          <h2 className="font-semibold text-[20px]">
            How To Build Your Skills
          </h2>
          <button className="px-4 py-1 bg-[#FF7F37] font-semibold whitespace-nowrap rounded-lg text-white">
            Price &#8377; 499/-
          </button>
        </div>

        <p className=" text-sm font-semibold px-2  leading-1 mt-4 ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters,
        </p>

        <div className="flex items-center justify-around gap-2 w-full mt-4">
          <div className=" font-semibold  bg-[#FFCAB9]  px-2 py-1 rounded-lg whitespace-nowrap">
            27 January 2024
          </div>
          <div className=" font-semibold bg-[#ED9BB7]  px-2 py-1 rounded-lg whitespace-nowrap">
            08 PM to 10 PM
          </div>
          <div className="font-semibold bg-[#FDDDB1]  px-2 py-1 rounded-lg whitespace-nowrap">
            2 Hour
          </div>
        </div>
        <p className="font-semibold  mt-2 px-2 ">
          {" "}
          &#x1F525; 235 Peoples Have Registered
        </p>
        <Link
          to="/form"
          className=" mt-3 w-[90%] mx-auto  grid place-content-center h-fit md:text-[15px] text-sm  py-2 bg-[#FF68A0] text-white font-semibold rounded-lg"
        >
          BOOK A SEAT
        </Link>
      </div>
    </div>
  );
};
