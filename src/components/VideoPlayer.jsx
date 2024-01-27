import React from "react";
import ReactPlayer from "react-player";
export const VideoPlayer = () => {
  return (
    <div className="w-full md:px-20  px-4 mt-10  md:h-fit bg-[#FFFFFF] ">
      <h2 className="font-semibold md:text-[28px] text-[22px]">
        {" "}
        <span className="text-[#FF7F37]">Host Of The Webinar-</span> Industry
        Trends In 2024 With Priyanka Soni
      </h2>

      <div className=" md:flex mt-4  w-full h-fit gap-5 ">
        <div className=" md:w-[50%] w-full h-[200px] md:h-[250px]">
          <ReactPlayer
         //   url="https://www.youtube.com/watch?v=EwWMV9RGfcQ&list=RDEwWMV9RGfcQ&start_radio=1"
            url="https://youtu.be/8KKGj9EfV3E"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
        <div className=" md:px-10 py-5 md:w-[50%] w-full h-fit">
          <h2 className="font-semibold   text-[22px]">
            Hight quality video & Audio
          </h2>
          <h2 className="font-semibold  leading-7 text-[22px] mt-5 md:mt-10">
            Develop your skills in a new and unique way{" "}
          </h2>
          <p className="font-semibold text-gray-600 leading-6  ">
            Introduction Our Mentor Explore high quality vedio, audio content,
            and live classes on diverse subjects through various online classes.
          </p>
        </div>
      </div>
    </div>
  );
};
