import React, { useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
export const FreqQues = () => {
  const [clickOn, setClickOn] = useState(true);
  return (
    <div
      onClick={() => setClickOn(!clickOn)}
      className="flex   md:w-[550px] cursor-pointer border-[#FCCB4D] mx-auto h-14 px-2 border-b-2  items-center justify-between"
    >

      <div>
        <p className="font-semibold text-[17px] ">
          How do I register for a Webinar?
        </p>
        <p className={`${clickOn ? "hidden" : "block"}`}>ababababab</p>
      </div>

      {clickOn ? <FaGreaterThan size={18} /> : <FaChevronDown size={20} />}
    </div>
  );
};
