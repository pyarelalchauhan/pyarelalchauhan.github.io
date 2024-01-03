"use client";

import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { FaMessage, FaPhone } from "react-icons/fa6";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div id="contact" className="min-h-[100vh] p-[5rem] w-full">
      <p className="text-4xl text-center text-red-600 font-bold tracking-wider">Contact</p>

      <div className="mt-12 flex gap-2 justify-around items-center">
        <div
          data-aos="slide-left"
          data-aos-duration="5000"
          data-aos-delay="200">
          <div className="grid gap-2 items-center ">
           {/* <div className="flex "> */}

            <Link
              href="#"
              className="p-2 rounded-md bg-blue-500 text-white grid justify-center gap-2 ">
              <FaPhone className="w-full"/>
              <p className="">+91 9988776655</p>
            </Link>
            <Link
              href="#"
              className="p-2 rounded-md bg-cyan-700 text-white flex items-center gap-2">
              <FaMessage />
              <p>inderpal@gmail.com</p>
            </Link>
                {/* </div>
                <div className=""> */}

            <Link
              href="#"
              className="px-2 py-1 rounded-md bg-gray-800 text-white flex items-center gap-2">
              <FaGithub />
              <p>inderpalchauhan</p>
            </Link>
            <Link
              href="#"
              className="px-2 py-1 rounded-md bg-cyan-700 text-white flex items-center gap-2">
              <FaLinkedinIn />
              <p>Linkedin</p>
            </Link>
                {/* </div> */}
          </div>

        </div>
        <div
          className="w-[50%] m-2 flex flex-col items-center justify-around"
          data-aos="slide-right">
         
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export function ContactForm() {
  const [state, handleSubmit] = useForm("xjvnvegy");
  //https://formspree.io/f/xjvnvegy
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="p-2 w-[80%] m-4">
      <input
        type="text"
        className=" w-full rounded-xl m-2 px-4 py-1 bg-gray-100 outline-none"
        name="name"
        id="name"
        placeholder="Name"
      />

      <input
        id="email"
        type="email"
        name="email"
        className="w-full rounded-xl m-2 px-4 py-1 bg-gray-100 outline-none"
        placeholder="Email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        rows={4}
        className=" w-full rounded-xl m-2 px-4 py-2 bg-gray-100 outline-none"
        placeholder="Messages"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        data-aos="flip-up"
        className="text-white font-semibold tracking-widest transition-all w-48 h-auto bg-red-600 hover:bg-red-700 hover:cursor-pointer ml-2 px-4 py-1 rounded-tl-md rounded-br-md ">
        {state.submitting ? "Submitting..." : "Submit"}
      </button>

      <div className="container my-24 mx-auto md:px-6"></div>
    </form>
  );
}
