import Link from "next/link";
import React, { Ref } from "react";

type Props = {
  isOpen: boolean;
};

const Sidebar = ({ isOpen }: Props) => {
  return (
    <div className={`${isOpen ? "absolute top-[5rem] right-[3rem] flex shadow-lg p-2 rounded-md" : "hidden"}`}>
      <ul className="flex-col">
        <li className="m-4 p-2 bg-lime-100 rounded-sm">
          <Link href="/about">
            <p>About Us</p>
          </Link>
        </li>
        <li className="m-4 p-2 bg-lime-100 rounded-sm">
          <Link href="/services">
            <p>Services</p>
          </Link>
        </li>
        <li className="m-4 p-2 bg-lime-100 rounded-sm">
          <Link href="/contacts">
            <p>Contacts</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
