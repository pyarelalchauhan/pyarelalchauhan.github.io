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
      className="min-h-[100vh] p-[6rem] w-full flex flex-col-reverse md:flex-row gap-8 items-center justify-between border-2"
    >
      <div
        className="flex-2 text-sm md:text-lg text-center p-6 italic"
        data-aos="zoom-out-right"
      >
        I&apos;m <span className="text-[2rem] font-bold">Pyare Lal,</span> a
        Ph.D. Scholar at the{" "}
        <b>
          Indian Institute of Science Education and Research, Bhopal (IISERB)
        </b>
        , where I am pursuing my doctoral studies in the{" "}
        <b>Department of Data Science and Engineering (DSE)</b> within the GeoAI
        Lab. Under the guidance of Dr. Vaibhav Kumar, I delve into the exciting
        realms of <b>Machine Learning and Deep Learning</b>, specializing in the
        field of <b>GeoAI</b>.
      </div>
      <div className="flex-3 relative" data-aos="zoom-out">
        <div
          style={{
            clipPath:
              "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
          }}
          className="relative h-[12rem] w-[12rem] bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          <Image
            src="/images/profile.png"
            alt="profile-background"
            width={400}
            height={400}
            className="absolute top-[10%] left-[50%] -translate-x-1/2"
          />
        </div>
        <div className="flex flex-row items-center justify-between m-4">
          <a
            href="https://github.com/pyarelalchauhan"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size="1.5rem" />
          </a>
          <a
            href="mailto:pyare22@iiserb.ac.in"
            aria-label="Mail"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdAttachEmail size="1.5rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/pyarelaldse/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size="1.5rem" />
          </a>
        </div>
      </div>
    </div>
  );
}
