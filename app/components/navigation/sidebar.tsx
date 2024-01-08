import Link from "next/link";
import React from "react";

type Props = {
  isOpen: boolean;
};

const Sidebar = ({ isOpen }: Props) => {
  return (
    <div
      className={`${
        isOpen
          ? "absolute top-[5rem] right-[2rem] flex shadow-lg p-2 rounded-md w-[50%]"
          : "hidden"
      }`}
    >
      <ul className="flex-col w-full text-right text-white dark:text-black shadow-2xl bg-gradient-to-r from-indigo-500 dark:from-slate-400 to-blue-500 dark:to-gray-300 transition-all duration-500">
        <li className="m-4 p-2 bg-zinc-300 dark:bg-zinc-500 rounded-sm">
          <Link href="#about">
            <p>About</p>
          </Link>
        </li>
        <li className="m-4 p-2 bg-zinc-300 dark:bg-zinc-500 rounded-sm">
          <Link href="#education">
            <p>Education</p>
          </Link>
        </li>
        <li className="m-4 p-2 bg-zinc-300 dark:bg-zinc-500 rounded-sm">
          <Link href="#projects">
            <p>Projects</p>
          </Link>
        </li>
        <li className="m-4 p-2 bg-zinc-300 dark:bg-zinc-500 rounded-sm">
          <Link href="#skills">
            <p>Skills</p>
          </Link>
        </li>
        <li className="m-4 p-2 bg-zinc-300 dark:bg-zinc-500 rounded-sm">
          <Link href="#experience">
            <p>Experience</p>
          </Link>
        </li>
        <li className="m-4 p-2 bg-zinc-300 dark:bg-zinc-500 rounded-sm">
          <Link href="#contact">
            <p>Contact</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
