/* eslint-disable react/no-unescaped-entities */
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
      <div className="dark:text-white dark:bg-zinc-400 w-full h-12 bg-blue-100 flex items-center justify-center gap-8">
        <p className="font-bold">
          © {new Date().getFullYear()} Pyare Lal Chauhan
        </p>
        <div className=" flex gap-4">
          <a
            href="mailto:pyare22@iiserb.ac.in"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail />
          </a>
          <a
            href="https://github.com/pyarelalchauhan"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pyarelaldse/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
  );
};

export default Footer;
