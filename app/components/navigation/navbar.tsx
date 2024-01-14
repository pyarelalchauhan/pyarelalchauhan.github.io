"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import HamburgerButton from "./HamburgerButton";
import Sidebar from "./sidebar";
import ThemeSwitch from "../ThemeSwitch";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleNavMenu = (value: boolean) => {
    setIsOpen(value);
  };
  const [windowWidth, setWindowWidth] = useState(1000);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <nav className="w-[80%] m-auto h-[60px] rounded-[24px] fixed left-[50%] -translate-x-1/2 top-2 shadow-[0_35px_100px_-15px_rgba(0,0,0,0.3)] dark:shadow-[] text-black dark:text-white bg-white dark:bg-zinc-700 px-12 z-10">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="flex-1">
              <Logo />
            </div>
            <ul className="hidden md:flex gap-x-6">
              <li>
                <Link href="#about">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link href="#publications">
                  <p>Publications</p>
                </Link>
              </li>
              <li>
                <Link href="#education">
                  <p>Education</p>
                </Link>
              </li>
              <li>
                <Link href="#experience">
                  <p>Experience</p>
                </Link>
              </li>
              <li>
                <Link href="#awards">
                  <p>Awards</p>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mx-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <a
                href="https://drive.google.com/file/d/1P3tfaoqQnkW3193KEUn4X0WNQsSQwvUx/view"
                target="_black"
              >
                Resume
              </a>
            </button>
            <HamburgerButton toggleNavMenu={toggleNavMenu} isOpen={isOpen} />
            <Sidebar isOpen={isOpen} />
            <ThemeSwitch />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
