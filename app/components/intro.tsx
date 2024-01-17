import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

export default function Intro() {
  return (
    <div
      id="intro"
      className="min-h-[100vh] p-[8rem] flex flex-col-reverse md:flex-row gap-8 items-center justify-between "
    >
      <div className="flex-2 text-zinc-700 dark:text-zinc-400 text-sm md:text-lg text-center p-6 italic selection:text-teal-500">
        <div>
          I&apos;m{" "}
          <span className="text-[2rem] font-bold font-serif">Pyare Lal,</span> a
          Ph.D. Scholar at the{" "}
          <b>
            Indian Institute of Science Education and Research, Bhopal (IISERB).
          </b>
        </div>
      </div>
      <div className="flex-3 flex flex-col justify-center items-center relative">
        <div
          style={{
            clipPath:
              "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
          }}
          className="relative h-[14rem] w-[14rem] bg-gradient-to-r from-[#cfd9df] to-[#e2ebf0]"
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
          <section className="flex justify-center items-center">
            <a
              href="https://github.com/pyarelalchauhan"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="m-4 group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
            >
              <FaGithub size="2rem" />
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
              <MdAttachEmail size="2rem" />
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
              <FaLinkedin size="2rem" />
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                LinkedIn
              </span>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
