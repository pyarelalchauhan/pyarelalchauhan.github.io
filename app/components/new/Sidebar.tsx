// components/Sidebar.tsx
import Image from "next/image";
import React from "react";
import pyareProfile from "@/public/images/Pyare-Profile-2.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Sidebar = () => (
  <aside
    className="w-full md:w-1/4 text-white p-6 md:fixed md:top-0 md:left-0 md:h-screen flex flex-col justify-center gap-10 items-end"
    style={{
      background:
        "linear-gradient(0deg,rgba(240, 197, 231, 0.96) 0%, rgba(86, 148, 240, 1) 100%)",
    }}
  >
    <div className="w-full flex justify-between items-center md:justify-center md:items-end md:flex-col md:gap-12">
      <div className="flex justify-center md:justify-center items-center">
        <Image
          src={pyareProfile}
          alt="Profile picture"
          width={50}
          height={50}
          className="object-cover w-32 h-32 md:w-64 md:h-64"
        />
      </div>
      <div className="flex flex-col gap-x-2 text-left md:text-right">
        <p>Pyare Lal,</p>
        <p>Phd</p>
        <p>Research Scientist</p>
        <p>@IISERB, Bhopal</p>
      </div>
    </div>

    <footer className="mt-6 hidden md:block">
      <div className="flex gap-4">
        <a href="mailto:pyare22@iiserb.ac.in">
          <MdEmail />
        </a>
        <a href="https://github.com/pyarelalchauhan">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/pyarelaldse/">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  </aside>
);

export default Sidebar;
