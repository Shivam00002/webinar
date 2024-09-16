import React from "react";
import { FaStar } from "react-icons/fa";

export const HeroComponent = () => {
  let star = [0, 0, 0, 0, 0];
  return (
    <div className="w-full md:px-20 md:py-10 py-5  px-4 h-full border bg-black">
      <div className=" w-full md:h-full h-[700px] mx-auto">
        <h2 className="text-white  font-semibold text-[25px] leading-7 md:leading-10 md:text-[36px]">
          {" "}

          <span className="text-blue-400">Live epic</span> Kickstart That Makes
          You Complete
        </h2>
        <p className="md:text-[21px] md:mt-2 text-sm text-white">
          Empowering Your Future Through Knowledge
        </p>
   
        <div className="md:w-[440px] w-full border-b-2 border-[#FF9B7B] py-2 md:mt-10">
          <p className=" md:text-[26px] text-[17px] text-white">
            Join Our Masterclasses On{" "}
          </p>
          <p className=" md:text-[26px] text-[17px] -mt-1 md:-mt-2 text-white">
            Online E-Learning Platform 2024
          </p>
          <p className="text-white md:text-[15px] text-sm mt-2 leading-5">
            Join our limited-space webinar for exclusive insights, expert tips
            and transformative strategies in just 4 hours
          </p>
        </div>

        <div className="md:flex relative  items-center w-full gap-5  mt-4">
          <div className="md:w-[50%] w-full h-fit md:h-[150px] py-2 md:rounded-tr-full rounded-lg bg-[#FFF5F9]">
            <div className="flex items-center justify-around mr-7">
              <div>
                {" "}
                <p className="font-semibold md:text-[17px] text-[13px]">
                  27 January 2024
                </p>
                <p className="font-semibold md:text-[17px] text-[13px]">
                  (09AM - 1PM)
                </p>
              </div>

              <div>
                <p className="font-semibold md:text-[17px] text-[13px]">
                  Discover new way of
                </p>
                <p className="font-semibold -mt-1  md:text-[17px] text-[13px]">
                  learning opportunities
                </p>
              </div>
            </div>

            <div className="flex md:mt-5  mt-3 items-center justify-around">
              <button className="bg-[#ED5E93] py-1  px-3  rounded-md font-semibold text-sm md:text-[18px] text-white">
                Register Now
              </button>
              <div>
                <p className="font-semibold -mt-1 md:text-sm text-[13px]">
                  4 Hours (3.5Hrs+ 30 mins Bonus
                </p>
                <p className="font-semibold -mt-1 md:text-sm text-[13px]">
                  Content) Live Online
                </p>
              </div>
            </div>
          </div>

          <div className="w-[300px]   absolute md:-bottom-4  -bottom-[340px] md:right-[40px] z-50 ">
            <div className=" w-fit h-fit">
              <p className="text-white md:text-[15px] text-[12px] leading-1 ">
                I will be the coach for 4 Hours (3.5 Hrs+ 30 mins Bonus Content)
                Live Online
              </p>
              <h2 className="text-[#FFCAB9] -mt-2 md:text-[42px] text-[35px] font-semibold">
                Priyanka Soni
              </h2>

              <div className="flex items-center md:h-fit h-[45px] gap-5 bg-[#595959] rounded-lg px-2">
                <div className="flex items-center   gap-1">
                  {star.map((el, index) => {
                    return <FaStar key={index} color="yellow" />;
                  })}
                </div>

                <p className="text-white md:text-sm text-[10px]">
                  10,000+ Peoples Rated My Programs with 5 Star
                </p>
              </div>
            </div>
          </div>

          <div className="md:h-[500px]  w-[300px] md:w-[300px]  md:right-0  right-0 top-[-10px] md:top-[-300px] z-0 absolute">
            <img
              alt="priyanka-img"
              src="https://blogger.googleusercontent.com/img/a/AVvXsEi4nXAL_9LoN7F99dGyVHayOhLgHeqIOSAciSTDVwLkR5j-ajBhY9F3NkUf5qWd_PSwqsgFdbzM5IZn0wDZAFRJ0IfAB2oVXLLSvTwkKelCLKoGDilTImtxNflyB0Hc-79-tDWNGR-Ri-XhwdiQZ1-zUvzv0qKMvpOKvNhfhDQk5_ogdRTJNWQLOQMWKIk"
              className=" fill absolute  "
            />
          </div>
        </div>
      </div>

      <div className="flex items-center md:mt-10 md:px-10   -mt-5  justify-around">
        <div>
          <p className="text-white md:text-[23px] text-[14px]">
            &#8377; 499/-
            <span
              className="md:text-[18px] text-[13px] ml-3"
              style={{ textDecoration: "line-through" }}
            >
              &#8377; 999
            </span>
          </p>
          <p className="text-white  md:text-sm text-[12px] whitespace-nowrap">
            Offers Ends in 30 Mins
          </p>
        </div>

        <button className="bg-[#ED9BB1]  px-2 md:py-2 py-1 rounded-md font-semibold md:text-[13px] text-[12px] text-white">
          BOOK YOUR SPOT NOW AT
        </button>
      </div>
    </div>
  );
};
