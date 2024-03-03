import Link from "next/link";
import React, { useEffect, useState } from "react";
import { navlist } from "./navbar";
import { useParams } from "next/navigation";

type Props = {
  isOpen: boolean;
};

const Sidebar = ({ isOpen }: Props) => {
  const [hash, setHash] = useState<string>("");
  const param = useParams();
  useEffect(() => {
    let loc = window.location.hash;
    setHash(loc);
  }, [hash, param]);
  return (
    <div
      className={`${
        isOpen
          ? "absolute top-[5rem] right-[2rem] flex shadow-lg p-2 rounded-md w-[50%]"
          : "hidden"
      }`}
    >
      <ul className="flex-col w-full text-right text-white dark:text-black shadow-2xl bg-gradient-to-r from-indigo-500 dark:from-slate-400 to-blue-500 dark:to-gray-300 transition-all duration-500">
        {navlist.map((item, index) => (
          <li
            className="m-4 p-2 bg-zinc-300 dark:bg-zinc-500 rounded-sm"
            key={index}
          >
            <Link href={item.link}>
              <p
                className={`${
                  hash === item.link
                    ? "text-red-600 dark:text-white"
                    : "text-black dark:text-zinc-400"
                } px-2 rounded-lg hover:shadow-md`}
              >
                {item.title}
              </p>
            </Link>
          </li>
        ))}
        {/* <li
            className="m-4 p-2 bg-zinc-300 dark:bg-zinc-500 rounded-sm"
          >
            <Link href="#about">
              <p
                className={`${
                  hash === "#about"
                    ? "text-red-600 dark:text-white"
                    : "text-black dark:text-zinc-400"
                } px-2 rounded-lg hover:shadow-md`}
              >
                about
              </p>
            </Link>
          </li>
        <li
            className="m-4 p-2 bg-zinc-300 dark:bg-zinc-500 rounded-sm"
          >
            <Link href="#publications">
              <p
                className={`${
                  hash === "#publications"
                    ? "text-red-600 dark:text-white"
                    : "text-black dark:text-zinc-400"
                } px-2 rounded-lg hover:shadow-md`}
              >
                publications
              </p>
            </Link>
          </li>
        <li
            className="m-4 p-2 bg-zinc-300 dark:bg-zinc-500 rounded-sm"
          >
            <Link href="#education">
              <p
                className={`${
                  hash === "#education"
                    ? "text-red-600 dark:text-white"
                    : "text-black dark:text-zinc-400"
                } px-2 rounded-lg hover:shadow-md`}
              >
                education
              </p>
            </Link>
          </li>
        <li
            className="m-4 p-2 bg-zinc-300 dark:bg-zinc-500 rounded-sm"
          >
            <Link href="#experience">
              <p
                className={`${
                  hash === "#experience"
                    ? "text-red-600 dark:text-white"
                    : "text-black dark:text-zinc-400"
                } px-2 rounded-lg hover:shadow-md`}
              >
                experience
              </p>
            </Link>
          </li>
        <li
            className="m-4 p-2 bg-zinc-300 dark:bg-zinc-500 rounded-sm"
          >
            <Link href="#awards">
              <p
                className={`${
                  hash === "#awards"
                    ? "text-red-600 dark:text-white"
                    : "text-black dark:text-zinc-400"
                } px-2 rounded-lg hover:shadow-md`}
              >
                awards
              </p>
            </Link>
          </li>
        <li
            className="m-4 p-2 bg-zinc-300 dark:bg-zinc-500 rounded-sm"
          >
            <Link href="#contact">
              <p
                className={`${
                  hash === "#contact"
                    ? "text-red-600 dark:text-white"
                    : "text-black dark:text-zinc-400"
                } px-2 rounded-lg hover:shadow-md`}
              >
                contact
              </p>
            </Link>
          </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
