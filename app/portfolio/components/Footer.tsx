// components/Footer.tsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => (
  <footer className="block md:hidden bg-gray-100 p-4">
    <div className="flex items-center justify-center gap-4">
      <a href="mailto:pyare22@iiserb.ac.in"><MdEmail size={40} /></a>
      <a href="https://github.com/pyarelalchauhan"><FaGithub size={40} /></a>
      <a href="https://www.linkedin.com/in/pyarelaldse/"><FaLinkedin size={40} /></a>
    </div>
  </footer>
);

export default Footer;
