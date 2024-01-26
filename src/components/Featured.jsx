import React from "react";
import { FeatImgBox } from "./FeatImgBox";

export const Featured = () => {
  let Img = [0, 0, 0, 0, 0];
  return (
    <div className="w-full h-full bg-[#fdf8f8] py-10">
      <h2 className="text-center font-semibold text-[24px] md:text-[35px]">
        Featured
      </h2>
      <div className="grid md:grid-cols-5 mx-auto grid-cols-3 mt-5 justify-around gap-2">
        {Img.map((el, index) => {
          return <FeatImgBox key={index} />;
        })}
      </div>

      <h2 className="text-center mt-7 font-semibold text-[15px] whitespace-nowrap md:leading-8 md:text-[35px]">
        Why Join Our Masterclasses Should Attend?
      </h2>

      <div className="md:w-[470px] w-[250px] h-[250px] md:h-[470px] relative rounded-full border-2 mt-12 md:mt-24 border-[#ED5E93] mx-auto">
        <div className="md:w-[120px] w-[50px] h-[50px] md:h-[120px] absolute md:top-[-40px] top-[-30px] right-20 md:right-[138px]">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEgoXIsubYYnpiRcTwefLB9pHM8rAhxsdmOn4ym0QfeB3KZuC26Lam-SWj1HOm9Bm-gTRxnZ8Q9atn7NTNObC-KQbtENec4qyj3JRmkt0hVOYe3tNV5QtJtjdgQ5EB8d3oV63TEfPgp-gycBNjJuYQwCDYbi0MiH9_6OpUwVI2VTbdRIOO1G6CBr2c7Cpmg"
            alt="target"
            className="absolute fill "
          />
          <h3 className="md:bottom-1 whitespace-nowrap  -bottom-4 -left-2 absolute text-sm md:text-[20px] font-semibold">
            Set Goals
          </h3>
          <p className="md:top-[115px] -bottom-[30px] -left-[50px] md:bottom-auto md:-left-[60px] absolute text-[10px] md:text-sm whitespace-nowrap font-semibold text-[#000000]">
            Identify your career aspirations
          </p>
        </div>

        <div className="md:w-[120px] w-[50px] h-[50px] absolute md:bottom-[260px] bottom-[110px] -left-6 md:-left-8">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEjRiVwtlGWMqFeJfxRh2GDhghrYRoBm9WFCv72KVgtbrli00zACg-l1C2Q-XUABT9e60m3ru116EqbOqBIoUnOxcdfgdVowh5vp77aHu9BaeCI1Zj2gacy9mUz-a6659t8avXsYllNLiaNiyTvSOx63WLUoA_zZvEU7YHbTnQdfOOjVOnnlOqj_zytKVGg"
            alt="target"
            className="absolute fill "
          />
          <h3 className="bottom-1 md:-left-28 left-14 absolute md:text-[20px]  text-sm font-semibold">
            Certification
          </h3>
          <p className=" md:top-[50px] top-[48px] left-[40px] md:-left-[150px] absolute md:text-sm text-[10px] whitespace-nowrap font-semibold text-[#000000]">
            Get an certified courses
          </p>
        </div>

        <div className="md:w-[90px] w-[50px] h-[50px] md:h-[90px] absolute bottom-[110px] md:bottom-[230px] -right-[20px] md:-right-10">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEjL-sXHuru8L7wHJpHl8-0k3GZjBvbLguGH67tc6cpiDWEx7mLFNGLjDDc7OXvWX8uuKOFg3pQM3cJCowFxXcb_Tt2_rhE_2cpyzqMDN7PBA6E5rl2KPd-ybUuaPbEh6XxzWa_rtWHMOOJOJYcgxLTRtTuQOZ7jKmX0DL_KOkH0RHzGNhwr0IiVn2OY2Kk"
            alt="target"
            className="absolute fill "
          />
          <h3 className=" whitespace-nowrap md:-bottom-[5px] -bottom-5 right-12 md:-right-[80px] absolute md:text-[20px] text-sm font-semibold">
            Take Risks
          </h3>
          <p className="md:top-[95px] top-[70px] right-10 md:-right-[120px] absolute md:text-sm text-[10px] whitespace-nowrap font-semibold text-[#000000]">
            Embrace new challenges
          </p>
        </div>

        <div className="md:w-[120px] w-[50px] h-[50px] md:h-[120px] absolute -bottom-5 md:bottom-[-0px] left-24 md:left-5">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEj8Qr8YwWf4fqx3dF5_LEb7LRlDWer4yufW4fUjb0nqPAcYW2GQWQ7C3GMyL2uPRpZJMVrhdhk2gUI_njxjcx6uBV34aa57Xt2j808i8bCIgj0ZJo0FnWQe3TaknEa-3idcutG2CcfcaYlEVkq67oWIvz2Q_TG5kQxq3hvsZ5dZ8rY-mJ3tPlkAWhu0TOo"
            alt="target"
            className="absolute fill "
          />
          <h3 className=" md:bottom-1 -bottom-5 md:-left-10 absolute md:text-[20px] text-sm  whitespace-nowrap font-semibold">
            Build Skills
          </h3>
          <p className="md:top-[115px] -bottom-9 -left-10 md:bottom-auto md:-left-[120px] absolute md:text-sm  text-[10px] whitespace-nowrap font-semibold text-[#000000]">
            Identify the skills you need to succeed
          </p>
        </div>

        <div className="md:w-[100px] md:h-[100px] hidden  md:block absolute bottom-[20px] right-5">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEgqkU7be5z1O3P7IJnBEVAceiT4Wy9IOqjQ4C-9sHulnvvVP8vkTg_3YYcl46u9xP08Jk5yiAbsNahNH2rJdECglgogDCCmMWzRUe_ZruXtO6bTJH4VAMXH4adk6L6qhdcRL_Opwo709LdBJou5d2_oz-nqy4en-o6UVj2L9u3JOIfvtjp44c4d7C-8_kw"
            alt="target"
            className="absolute fill "
          />
          <h3 className="-bottom-4 -right-10 absolute text-[20px] font-semibold">
            Q/A
          </h3>
          <p className="top-[115px] -right-[120px] absolute text-sm whitespace-nowrap font-semibold text-[#000000]">
            Engage in live Q/A Sessions
          </p>
        </div>
      </div>

      <button className=" text-white font-semibold md:mt-20 mt-20 md:text-[17px] text-[12px] rounded-lg grid place-content-center mx-auto md:px-4 px-2 py-1 bg-[#ED9BB7] ">
        BOOK YOUR SPOT NOW AT &#8377; 499
      </button>
    </div>
  );
};
