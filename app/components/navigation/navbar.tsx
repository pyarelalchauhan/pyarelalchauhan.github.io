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
      <div className="w-full h-20 sticky top-0 shadow-sm text-black dark:text-white px-12">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="flex-1">
              <Logo />
            </div>
            <ul className="hidden md:flex gap-x-6">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mx-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Resume
            </button>
            <HamburgerButton toggleNavMenu={toggleNavMenu} isOpen={isOpen} />
            {windowWidth < 768 && <Sidebar isOpen={isOpen} />}
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
