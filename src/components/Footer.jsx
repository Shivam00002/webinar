import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { MdOutlineMail } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.from_email.value.trim();

    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    emailjs
      .sendForm(
        "service_70lnyb5",
        "template_syf6z5k",
        form.current,
        "tfeREQ9t5ZvZ8Ir_l"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );

    toast.success("Registration Successful!");
  };

  return (
    <div>
      <div className="w-full md:px-10 px-4 md:py-10 py-6 h-fit md:h-[400px] bg-black">
        <div className="flex md:px-10 items-center gap-4">
          <div className="w-[50px] h-[50px] relative">
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEhPyoWvb2_v22ph8Wrzc6gwdINySTiH93RyWRu7ykjcVhbIvdfG_GmHD_n8lluIUuNJi5XOcB-MFRk1a-FP9Ajut0eR4HdbZu-OJz-4fyzsRJVvJ7UsKfphbGUFRcMT3lFCLFe68KmWMW64w__1jeWcE0UfloV0POBSGUQylFpIKgCkPcH5LJ-mSTmz_Ow"
              alt="logo"
              className="fill absolute"
            />
          </div>
          <h2 className="font-semibold md:text-[35px]  text-[20px] text-white">
            Experience the new way of learning
          </h2>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-5 md:gap-9 py-4  mt-5 md:mt-10 ">
          <p className="text-sm text-white leading-2">
            We are a dynamic and forward-thinking company specializing in online
            training programs. We have been working diligently to create
            cutting-edge courses that empower individuals and businesses with
            the skills necessary to thrive in today's digital landscape.
          </p>
          <div>
            <p className="font-semibold text-white">Kickstart</p>
            <p className="text-white text-sm">
              Personal & Professional Management
            </p>
            <p className="text-[red]  text-sm"><a  href="https://web-admin-mu.vercel.app/">Admin Dashboard</a></p>
            <p className="text-white  text-sm">Skill your goal</p>
            <p className="text-white  text-sm">Personal development</p>
            <p className="text-white  text-sm">Carrier development</p>
            <p className="text-white  text-sm">Carrier launcPad</p>
            <p className="text-white  text-sm">Motivational sessions</p>
            <p className="text-white  text-sm">Live coach</p>
          </div>

          <div>
            <p className="font-semibold text-white text-[20px]">
              Subscribe to our newsletter
            </p>

            <form ref={form} onSubmit={sendEmail}>
              <input
                type="email"
                name="from_email"
                placeholder="Email Address"
                className=" border-2 rounded-md md:w-[250px] md:mt-4 mt-3 w-full h-[35px] px-2"
              />

              <button className="    md:w-[250px] w-full  md:mt-5 mt-5  mx-auto px-4  h-fit md:text-[17px] py-3  md:py-1 bg-[#FF68A0] text-white font-semibold whitespace-nowrap rounded-lg">
                Subscribe
              </button>
            </form>

            <p className="font-semibold mt-5 text-[17px] text-white">
              Reach out to us
            </p>
            <div className="flex items-center  mt-2 gap-2">
              <MdOutlineMail size={20} color="white" />
              <p className="text-sm text-white">Kickstart@gamil.com</p>
            </div>

            <div className="flex items-center  mt-2 gap-2">
              <MdAddIcCall size={20} color="white" />
              <p className="text-sm text-white">+ 91-9843432343</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50px] w-full py-5  hidden bg-slate-200 md:flex items-center justify-around">
        <div className="w-[50px] h-[50px] relative">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEhPyoWvb2_v22ph8Wrzc6gwdINySTiH93RyWRu7ykjcVhbIvdfG_GmHD_n8lluIUuNJi5XOcB-MFRk1a-FP9Ajut0eR4HdbZu-OJz-4fyzsRJVvJ7UsKfphbGUFRcMT3lFCLFe68KmWMW64w__1jeWcE0UfloV0POBSGUQylFpIKgCkPcH5LJ-mSTmz_Ow"
            alt="logo"
            className="fill absolute"
          />
        </div>

        <CiFacebook size={20} />
        <FaInstagram size={20} />
        <FaTwitter size={20} />
        <p className="text-sm font-semibold">
          2024 Perusal. All Rights Reserved
        </p>
        <p className="text-sm font-semibold">Privacy Policy</p>
        <p className="text-sm font-semibold">Cookie Policy</p>
        <p className="text-sm font-semibold">Support</p>
      </div>
    </div>
  );
};

export default Footer;
