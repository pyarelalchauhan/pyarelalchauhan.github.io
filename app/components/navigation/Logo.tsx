import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
const Logo = () => {
  return (
    <>
      <Link href="#">
        <Image
          width={30}
          height={30}
          className="dark:bg-white dark:rounded-[50%] dark:mix-blend-lighten"
          src={logo}
          alt="logo"
        />
      </Link>
    </>
  );
};

export default Logo;
