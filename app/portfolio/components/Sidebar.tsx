// components/Sidebar.tsx
import Image from "next/image";
import React from "react";
import pyareProfile from "@/public/images/Pyare-Profile-2.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Sidebar = () => (
  <aside
    className="w-full md:w-1/5 2xl:w-[18%] text-white p-6 md:sticky md:top-0 md:left-0 md:h-screen flex flex-col justify-start gap-10 pt-10 items-end bg-gradient-to-b from-blue-800 to-gray-600"
  >
    <div className="w-full flex justify-between items-center md:justify-center md:items-end md:flex-col md:gap-12">
      <div className="flex justify-center md:justify-center items-center">
        <Image
          src={pyareProfile}
          alt="Profile picture"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border border-white"
        />
      </div>
      <div className="font-medium text-xs md:text-base flex flex-col gap-x-2 text-left md:text-right">
        <p>Pyare Lal,</p>
        <p>Phd</p>
        <p>Research Scientist</p>
        <p>@IISERB, Bhopal</p>
      </div>
    </div>

    <footer className="mt-6 hidden md:block">
      <div className="flex gap-4">
        <a href="mailto:pyare22@iiserb.ac.in">
          <MdEmail size={24} />
        </a>
        <a href="https://github.com/pyarelalchauhan">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/pyarelaldse/">
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  </aside>
);

export default Sidebar;
