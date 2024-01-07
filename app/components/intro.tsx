"use client";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

export default function Intro() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div
      id="intro"
      className="min-h-[100vh] p-[8rem] flex flex-col-reverse md:flex-row gap-8 items-center justify-between"
    >
      <div
        className="flex-2 text-zinc-600 text-sm md:text-lg text-center p-6 italic selection:text-teal-500"
        data-aos="fade-down-left"
        data-aos-anchor-placement="bottom-bottom"
      >
        I&apos;m <span className="text-[2rem] font-bold">Pyare Lal,</span> a
        Ph.D. Scholar at the{" "}
        <b>
          Indian Institute of Science Education and Research, Bhopal (IISERB).
        </b>
      </div>
      <div
        className="flex-3 flex flex-col justify-center items-center relative"
        data-aos="fade-down-right"
      >
        <div
          style={{
            clipPath:
              "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
          }}
          className="relative h-[14rem] w-[14rem] bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          <Image
            src="/images/profile.png"
            alt="profile-background"
            width={400}
            height={400}
            className="absolute top-[15%] left-[52%] -translate-x-1/2"
          />
        </div>
        <div className="flex flex-row items-center justify-between m-4">
          <a
            href="https://github.com/pyarelalchauhan"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="m-4 p-4 border border-zinc-200 shadow-md rounded-md"
          >
            <FaGithub size="2rem" />
          </a>
          <a
            href="mailto:pyare22@iiserb.ac.in"
            aria-label="Mail"
            target="_blank"
            rel="noopener noreferrer"
            className="m-4 p-4 border border-zinc-200 shadow-md rounded-md"
          >
            <MdAttachEmail size="2rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/pyarelaldse/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="m-4 p-4 border border-zinc-200 shadow-md rounded-md"
          >
            <FaLinkedin size="2rem" />
          </a>
        </div>
      </div>
    </div>
  );
}
