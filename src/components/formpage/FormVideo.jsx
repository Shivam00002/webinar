import React from "react";
import ReactPlayer from "react-player";
import YouLearn from "./YouLearn";

const FormVideo = () => {
  return (
    <div className="w-full md:py-4 py-2  md:px-2 px-2 mx-auto h-fit  ">
      <h1 className="font-semibold md:text-[35px] md:px-24 text-[25px] text-center leading-8 md:leading-10 ">
        It’s never too late. Join our army and make your future bright.
      </h1>
      <h1 className="font-semibold md:text-[35px] text-[25px] text-center md:py-2 leading-8  text-[#FCCB4D]">
        How To Build And Scale Your Skills
      </h1>

      <h2 className="font-semibold md:text-[25px] text-[19px]">
        Priyanka Soni
      </h2>
      <p className="text-sm font-semibold text-gray-600">CEO Of Perusal Tech</p>

      <div className="w-full md:h-[400px] h-[200px]  border mt-5">
        <ReactPlayer
          url="https://youtu.be/8KKGj9EfV3E"
          width="100%"
          height="100%"
          controls={true}
        />
      </div>

      <div className="md:mt-7 mt-4 w-full h-fit md:py-7  md:flex justify-between md:px-10 items-center ">
        <div className="md:w-[160px] w-[120px] h-[120px] md:h-[160px] rounded-full border relative">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEj760A-Elp2mLSdZbywEH0vpLomDfaSFY911R6w9egWiHPjHd4GhB0jAzvzseaCw9relpWdVL8aLjyUSTPX4NzYh-wdDQBcm9Hb0uWxHQN8AjZ9Z1xjVEkx0DRROZZq5NPZuaotviLmN4OIL9h-f93gdYdqiC8ZkbQQNBJNLoY_4pol1dzhWPSOm6kicQE"
            alt="img"
            className="fill absolute"
          />
        </div>

        <div className="md:w-[400px]  h-fit">
          <p className="text-[15px] font-semibold leading-5 md:mt-0 mt-4">
            Priyanka Soni will walk you through a collaborative journey of
            building and scaling of how to build and scale your goals in life,
            and also how to make your future bright. Teach you all the things in
            our live classes.
          </p>

          <h2 className="font-semibold mt-3 md:mt-5 md:text-[22px] ">
            Set Goals
          </h2>

          <div className="px-4 py-1 mt-2 md:mt-4 rounded-md w-fit h-fit bg-[#4B93FF] text-white font-semibold md:text-[18px]">
            On Dimand
          </div>
        </div>
      </div>

      <div className="w-full md:flex  gap-2  md:py-4 py-4 px-2 h-fit ">
        <div className="md:w-[50%] w-full h-fit ">
          <YouLearn />
        </div>

        <div className="border md:w-[50%] w-full h-[500px]"></div>
      </div>
    </div>
  );
};

export default FormVideo;
