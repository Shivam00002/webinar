import React from "react";

const NextStep = () => {
  return (
    <div className="w-full md:h-[300px]  mt-10 h-fit md:px-10   md:flex  justify-around items-center md:gap-4 ">
      <div className="md:relative  mx-auto  mt-4 md:w-[210px] w-[310px] h-[200px] md:h-[210px] ">
        <div className=" md:w-[210px] -top-14 -left-16 md:h-[210px] rounded-full border-[3px] border-[#FF7F37] absolute"></div>

        <img src="https://blogger.googleusercontent.com/img/a/AVvXsEgnyh4c7hunV6A52ZAQMOWYXQpyO29W2YfclbADDHOjCcoZBpeosMBCFMs1B2Le2Oh5ckyCXBZO0UyM9x1LM509CsyJQaNCl1PWVVXfHRHiPvHm2dCe0PnMxlNiQZH4uYZLugCT3xh5E7xQSkvcvSwgtOo3RE9Z5IpXmczF67vlfusvBjedIWQA7oh7BhM"
          alt="girl"
          className="fill  absolute"
        />
      </div>

      <div className="md:w-[700px] w-full h-fit md:mt-0 mt-32 md:px-0 px-2">
        <h2 className="font-semibold md:text-[35px] text-[24px] leading-7 md:leading-10 ">
          Take the next step toward your personal and professional goals with
          Kickstarrt.
        </h2>
        <p className="md:text-[24px] text-[18px] leading-6 md:leading-7 mt-4">
          Register now to receive personalized recommendations from the full
          Course catalog.
        </p>
      </div>
    </div>
  );
};

export default NextStep;
