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
      <p className="text-4xl text-center text-red-600 font-bold tracking-wider">
        Contact
      </p>

      <div className="sm:flex sm:flex-row flex flex-col gap-2 justify-around items-center">
        <div
          data-aos="slide-left"
          data-aos-duration="5000"
          data-aos-delay="200"
        >
          <div className="flex flex-row sm:flex sm:flex-col sm:flex-1 gap-2 items-center justify-between">
            <Link
              href="#"
              className="p-2 rounded-md w-full bg-blue-400 text-white flex items-center gap-2 "
            >
              <FaPhone size="1.5rem" />
              <p className="hidden sm:block">+91 9566065406</p>
            </Link>
            <Link
              href="#"
              className="p-2 rounded-md w-full bg-cyan-700 text-white flex items-center gap-2"
            >
              <FaMessage size="1.5rem" />
              <p className="hidden sm:block">pyare.lal.dse@gmail.com</p>
            </Link>
            <Link
              href="#"
              className="p-2 rounded-md w-full bg-gray-800 text-white flex items-center gap-2"
            >
              <FaGithub size="1.5rem" />
              <p className="hidden sm:block">pyarelalchauhan</p>
            </Link>
            <Link
              href="#"
              className="p-2 rounded-md w-full bg-cyan-700 text-white flex items-center gap-2"
            >
              <FaLinkedinIn size="1.5rem" />
              <p className="hidden sm:block">pyarelaldse</p>
            </Link>
          </div>
        </div>
        <div
          className="w-[100%] sm:w-[50%] flex flex-col items-center justify-around"
          data-aos="slide-right"
        >
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
    <form
      onSubmit={handleSubmit}
      className="shadow-lg rounded-lg p-2 w-[100%] flex flex-col items-stretch"
    >
      <input
        type="text"
        className="rounded-xl m-2 p-2 bg-gray-100 outline-none"
        name="name"
        id="name"
        placeholder="Name"
      />
      <input
        id="email"
        type="email"
        name="email"
        className="rounded-xl m-2 p-2 bg-gray-100 outline-none"
        placeholder="Email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        rows={4}
        className="rounded-xl m-2 p-2 bg-gray-100 outline-none"
        placeholder="Messages"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        data-aos="flip-up"
        className="text-white font-semibold tracking-widest transition-all m-2 p-2 w-[50%] h-auto bg-red-600 hover:bg-red-700 hover:cursor-pointer ml-2 px-4 py-1 rounded-tl-md rounded-br-md "
      >
        {state.submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
