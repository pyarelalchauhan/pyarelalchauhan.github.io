import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import GoogleScholarIcon from "@/public/images/gs.svg"; // Import Google Scholar icon
import pyareProfile from "@/public/images/Pyare-Profile-2.png";

export default function Intro() {
  return (
    <div id="intro" className="px-[1rem] py-[5rem] sm:p-[5rem] mt-[4rem]">
      <div className="min-h-[70dvh] bg-gray-100 dark:bg-transparent flex flex-col-reverse md:flex-row gap-2 items-center justify-evenly">
        <div className="sm:flex-2 flex-2 text-zinc-700 dark:text-zinc-400 text-sm md:text-lg text-center p-6 italic selection:text-teal-500">
          <div>
            <p>
              I&apos;m{" "}
              <span className="md:text-[3rem] text-[2rem] font-bold font-serif">
                Pyare Lal,
              </span>{" "}
              currently pursuing my Ph.D. at the{" "}
              <b>
                <a href="https://www.iiserb.ac.in/" target="_blank" rel="noopener noreferrer">
                  Indian Institute of Science Education and Research, Bhopal (IISERB)
                </a>
              </b>{" "}
              in the{" "}
              <b>
                <a href="https://dse.iiserb.ac.in/" target="_blank" rel="noopener noreferrer">
                  Data Science and Engineering Department
                </a>
              </b>{" "}
              within the GeoAI4Cities Lab under the supervision of{" "}
              <a href="https://sites.google.com/view/vaibhavkumar1/home" target="_blank" rel="noopener noreferrer">
                Dr. Vaibhav Kumar
              </a>
              .
            </p>
            <p>
              My research focuses on utilizing 3D Vision, LiDAR, Deep Learning, and geospatial data.
            </p>
          </div>
        </div>
        <div className="sm:flex-3 flex-3 flex flex-col justify-center items-center relative">
          <div className="h-[14rem] w-[14rem] mt-[-3rem]"> {/* Adjust the margin top to move the image up */}
            <Image
              src={pyareProfile}
              alt="profile-background"
              width={400}
              height={400}
              className="absolute top-0 left-[52%] -translate-x-1/2"
            />
          </div>
          <div className="flex flex-row items-center justify-between m-4">
            <section className="flex justify-center items-center">
              <a
                href="https://github.com/pyarelalchauhan"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="m-4 group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
              >
                <FaGithub size="1.5rem" />
                <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  GitHub
                </span>
              </a>
            </section>

            <section className="flex justify-center items-center">
              <a
                href="mailto:pyare22@iiserb.ac.in"
                aria-label="Mail"
                target="_blank"
                rel="noopener noreferrer"
                className="m-4 group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
              >
                <MdAttachEmail size="1.5rem" />
                <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  Email
                </span>
              </a>
            </section>
            <section className="flex justify-center items-center">
              <a
                href="https://www.linkedin.com/in/pyarelaldse/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="m-4 group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
              >
                <FaLinkedin size="1.5rem" />
                <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  LinkedIn
                </span>
              </a>
            </section>
            <section className="flex justify-center items-center">
              <a
                href="https://scholar.google.com/citations?user=ybKOBzkAAAAJ&hl=en&authuser=1"
                aria-label="Google Scholar"
                target="_blank"
                rel="noopener noreferrer"
                className="m-4 group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
              >
                <GoogleScholarIcon width="24" height="24" /> {/* Display Google Scholar SVG icon */}
                <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  Google Scholar
                </span>
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
