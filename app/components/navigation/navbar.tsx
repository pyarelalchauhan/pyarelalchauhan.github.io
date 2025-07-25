"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import HamburgerButton from "./HamburgerButton";
import Sidebar from "./sidebar";
import ThemeSwitch from "../ThemeSwitch";
import { useParams, usePathname } from "next/navigation";

type Props = {};

export const navlist = [
  // { title: "About" },
  { title: "publications" },
  { title: "news" },
  { title: "education" },
  { title: "experience" },
  { title: "blogs" },
  { title: "contact" },
];

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hash, setHash] = useState<string>("");
  const param = useParams();
  const pathname = usePathname();
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

  useEffect(() => {
    let loc = window.location.hash;
    setHash(loc);
  }, [hash,param]);

  const pathParts = pathname.split('/').filter(Boolean);
  if (pathParts?.length && pathParts[0] === 'portfolio') {
    return null;
  }
  return (
    <>
      <nav className="w-[80%] m-auto h-[60px] rounded-[24px] fixed left-[50%] -translate-x-1/2 top-2 shadow-[0_35px_100px_-15px_rgba(0,0,0,0.3)] dark:shadow-[] text-black dark:text-white bg-white dark:bg-zinc-700 px-12 z-10">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="flex-1">
              <Logo />
            </div>
            <ul className="hidden sm:flex gap-x-6">
              {navlist.map((item, index) => {
                const heading = item.title.charAt(0).toUpperCase() + item.title.slice(1);
                return <li key={`${index}-${item.title}`}>
                  <Link href={`#${item.title}`}>
                    <p
                      className={`${
                        hash === `#${item.title}` ? "text-red-600 dark:text-white" : "text-black dark:text-zinc-400"
                      } px-2 rounded-lg hover:shadow-md`}
                    >
                      {heading}
                    </p>
                  </Link>
                </li>
              })}
              {/* <li>
                  <Link href="#about">
                    <p
                      className={`${
                        hash === "#about" ? "text-red-600 dark:text-white" : "text-black dark:text-zinc-400"
                      } px-2 rounded-lg hover:shadow-md`}
                    >
                      about
                    </p>
                  </Link>
                </li>
              <li>
                  <Link href="#publications">
                    <p
                      className={`${
                        hash === "#publications" ? "text-red-600 dark:text-white" : "text-black dark:text-zinc-400"
                      } px-2 rounded-lg hover:shadow-md`}
                    >
                      publications
                    </p>
                  </Link>
                </li>
              <li>
                  <Link href="#education">
                    <p
                      className={`${
                        hash === "#education" ? "text-red-600 dark:text-white" : "text-black dark:text-zinc-400"
                      } px-2 rounded-lg hover:shadow-md`}
                    >
                      education
                    </p>
                  </Link>
                </li>
              <li>
                  <Link href="#experience">
                    <p
                      className={`${
                        hash === "#experience" ? "text-red-600 dark:text-white" : "text-black dark:text-zinc-400"
                      } px-2 rounded-lg hover:shadow-md`}
                    >
                      experience
                    </p>
                  </Link>
                </li>
              <li>
                  <Link href="#awards">
                    <p
                      className={`${
                        hash === "#awards" ? "text-red-600 dark:text-white" : "text-black dark:text-zinc-400"
                      } px-2 rounded-lg hover:shadow-md`}
                    >
                      awards
                    </p>
                  </Link>
                </li>
              <li>
                  <Link href="#contact">
                    <p
                      className={`${
                        hash === "#contact" ? "text-red-600 dark:text-white" : "text-black dark:text-zinc-400"
                      } px-2 rounded-lg hover:shadow-md`}
                    >
                      contact
                    </p>
                  </Link>
                </li> */ }
            </ul>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:px-4 sm:py-2 p-2 mx-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <a
                href="https://drive.google.com/file/d/1B4sG8pJe6FvlimlmD6EXIW0C3E4dJywm/view"
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
