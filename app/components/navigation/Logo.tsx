"use client";

import Image from "next/image";
import Link from "next/link";
const Logo = () => {

  return (
    <>
      <Link href="/">
        <Image width={30} height={30} className="dark:bg-white dark:rounded-[50%] dark:mix-blend-lighten" src="/images/logo.png" alt="logo" />
      </Link>
    </>
  );
};

export default Logo;
