import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import YouLearn from "./YouLearn";
import ContectForm from "./ContectForm";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const FormVideo = () => {
  const [video, setVideo] = useState([]);
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const idValue = params.get("id");

  const getVideourl = async () => {
    try {
      const response = await fetch(
        `https://webinar-backend.vercel.app/data/${idValue}`
      );
      if (response.ok) {
        const data = await response.json();
        setVideo(data.Webinar.video_url);
      } else {
        console.error(
          "Failed to fetch webinars:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error fetching webinars:", error.message);
    }
  };

  useEffect(() => {
    console.log("ID Value:", idValue);
    getVideourl();
  }, [idValue]);

  console.log("Video:", video);

  return (
    <div className="w-full md:py-4 py-2  md:px-2 px-2 mx-auto h-fit  ">
      <h1 className="font-semibold md:text-[35px] md:px-24 text-[22px] text-center leading-8 md:leading-10 ">
        It’s never too late. Join our army and make your future bright.
      </h1>
      <h1 className="font-semibold md:text-[35px] text-[22px] text-center md:py-2 leading-8  text-[#FCCB4D]">
        How To Build And Scale Your Skills
      </h1>
      <h2 className="font-semibold md:text-[25px] text-[19px]">
        Priyanka Soni
      </h2>
      <p className="text-sm font-semibold text-gray-600">CEO Of Perusal Tech</p>
      <div className="w-full md:h-[400px] h-[200px]  border mt-5">
        <ReactPlayer
          url={video ? video : "https://youtu.be/8KKGj9EfV3E"}
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
        <div className="border md:px-10 py-6  md:mt-0 mt-5 px-2 md:w-[50%] w-full h-fit shadow-lg rounded-lg ">
          <ContectForm />
        </div>
      </div>
      <h2 className="font-semibold md:text-[23px] md:px-0 px-2  text-[17px] text-[#FF7F37] ">
        Share this webinar
      </h2>
      <div className="flex items-center md:px-0 px-2 gap-4 mt-2">
        <CiFacebook size={16} />
        <FaInstagram size={15} />
        <FaTwitter size={15} />
        <FaYoutube size={15} />
      </div>

      <div className="md:max-w-[400px] w-full px-2 py-12 shadow-lg mt-5 h-fit md:h-[350px] mx-auto border rounded-lg ">
        <p className="text-center text-sm border-b-2 w-fit mx-auto border-yellow-400">
          Saturday, 27-01-2024, at 09:00 AM
        </p>
        <div className=" grid grid-cols-2 gap-3  w-[150px] h-[60px]  mx-auto  mt-5">
          <div className="w-full h-full  text-[18px]  px-2 font-semibold leading-5 grid place-content-center  text-center border-2 border-[#FABE93] rounded-lg">
            04 Days
          </div>
          <div className="w-full h-full  text-[18px] px-2 font-semibold leading-5 grid place-content-center  text-center border-2 border-[#FABE93] rounded-lg">
            18 Hourse
          </div>
        </div>

        <button className=" text-white font-semibold md:m mt-10 md:text-[17px] text-[12px] rounded-lg grid place-content-center mx-auto md:px-4 px-2 py-1 bg-[#3A85F4] ">
          Regular Price &#8377; 999 /-
        </button>

        <button className=" text-white font-semibold md:m mt-5 md:text-[17px] text-[12px] rounded-lg grid place-content-center mx-auto md:px-4 px-2 py-1 bg-[#ED9BB7] ">
          BOOK YOUR SPOT NOW AT &#8377; 499 /-
        </button>
      </div>
    </div>
  );
};

export default FormVideo;
