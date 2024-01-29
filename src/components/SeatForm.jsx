import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const SeatForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.from_name.value.trim();
    const email = form.current.from_email.value.trim();

    if (!name || !email) {
      toast.error("All the  fields are required!");
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
    <div className="w-full md:h-[250px] md:mt-0 mt-10  md:py-7 shadow-lg md:px-0 px-4  ">
      <h2 className="font-semibold md:text-[30px]   text-[23px] text-center">
        Save Your Seat For The Webinar
      </h2>
      <p className="text-center md:text-[20px] text-[22]">
        Enter your name and email address to save your set now
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="md:flex md:w-[550px] w-full md:mt-10  mt-5 mx-auto items-center gap-3"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Student Name"
          className="border-2 rounded-md md:w-[250px]  w-full h-[45px] px-2"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Email Address"
          className=" border-2 rounded-md md:w-[250px] md:mt-0 mt-3 w-full h-[45px] px-2"
        />
        <button className="   md:w-fit w-full  md:mt-0 mt-5  mx-auto px-4  h-fit md:text-[20px] py-3  md:py-2 bg-[#FF68A0] text-white font-semibold whitespace-nowrap rounded-lg">
          Register Now
        </button>
      </form>
    </div>
  );
};

export default SeatForm;
