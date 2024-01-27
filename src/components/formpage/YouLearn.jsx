import React from "react";
import { TiTick } from "react-icons/ti";
const YouLearn = () => {
  return (
    <div>
      <h2 className="font-semibold md:text-[24px] text-[19px]">
        You'll learn:
      </h2>

      <div className="flex  items-start gap-2 mt-4">
        <TiTick
          color=""
          className="text-white md:min-w-4   md:min-h-4 h-4 w-5 bg-[#FF7F37] rounded-md border border-white"
        />
        <p className="text-sm">
          <span className="font-semibold">Subject Matter Expertise</span>
          will share their knowledge on a specific field
        </p>
      </div>
      <div className="flex items-start gap-2  mt-4">
        <TiTick
          color=""
          className="text-white md:min-w-4   md:min-h-4 h-4 w-5 bg-[#FF7F37] rounded-md border border-white"
        />
        <p className="text-sm ">
          <span className="font-semibold">Industry Insights </span>
          Webinar will provide you industry trends, emerging technologies
        </p>
      </div>

      <div className="flex items-start gap-2 mt-4">
        <TiTick
          color=""
          className="text-white  md:min-w-4   md:min-h-4 h-4 w-5 bg-[#FF7F37] rounded-md border border-white"
        />
        <p className="text-sm">
          <span className="font-semibold"> Hands-On-Demonstrations</span>
          Webinar may include live demonstrations and practical
        </p>
      </div>

      <div className="flex items-start gap-2 mt-4">
        <TiTick
          color=""
          className="text-white  md:min-w-4   md:min-h-4 h-4 w-5 bg-[#FF7F37] rounded-md border border-white"
        />
        <p className="text-sm">
          <span className="font-semibold"> Skill Development</span>
          aim of the webinar is to teach participants specific skills
        </p>
      </div>

      <div className="flex items-start gap-2 mt-4">
        <TiTick
          color=""
          className="text-white md:min-w-4   md:min-h-4 h-4 w-5 bg-[#FF7F37] rounded-md border border-white"
        />
        <p className="text-sm">
          <span className="font-semibold">Higher Engagement </span>
          in live webinar class by Perusal Tech Expert Instructors
        </p>
      </div>

      <h2 className="font-semibold md:text-[24px] mt-5 text-[17px]">
        Details of the webinar
      </h2>
      <p className="md:text-[17px] text-sm leading-5 font-semibold text-gray-600 mt-2">
        Session time: 3 Hrs
      </p>

      <p className="text-[14px] mt-4">
        A lot has changed in social media since the early 2000s. Social has
        become influence–it is now the channel on which trends are born,
        important conversations take place and sentiments are revealed. We’re in
        a new era of social media. Is your brand prepared to meet the
        ever-evolving expectations of your audience?
      </p>

      <p className="text-[14px] leading-5 mt-4">
        Rachel Karten, Social Media Consultant and creator of the Link in Bio
        Newsletter, has been in the industry for over a decade and knows quite a
        bit about the evolution of consumer-brand relations in the social world.
        She worked for brands like Bon Appétit and Plated and recently worked on
        the famous campaign at CAVA with Youtube star, Emma Chamberlain
      </p>
    </div>
  );
};

export default YouLearn;
