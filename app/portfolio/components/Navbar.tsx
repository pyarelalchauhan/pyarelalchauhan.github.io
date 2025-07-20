"use client";
import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaUserCircle,
  FaGraduationCap,
  FaSchool,
  FaCode,
} from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  sections: { id: string; label: string }[];
  isMobile?: boolean;
}
const iconMap: Record<string, React.ReactNode> = {
  homepage: <FaHome />,
  about: <FaUserCircle />,
  publications: <FaGraduationCap />,
  teaching: <FaSchool />,
  "open-source": <FaCode />,
};

const Navbar: React.FC<NavbarProps> = ({ sections, isMobile = false }) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    const pathParts = pathname.split("/").filter(Boolean);
    const currentSection = pathParts[pathParts.length - 1] || "homepage";
    setActiveSection(currentSection);
  }, [pathname]);

  return (
    <nav
      className={`h-14 sticky bg-white shadow-sm top-0 z-50 p-4 transition-colors duration-300 ${
        isMobile
          ? "flex items-center justify-between md:hidden"
          : "hidden md:flex justify-between"
      } space-x-4`}
    >
      {sections.map((section) => (
        <Link
          key={section.id}
          href={`/portfolio/${section.id.replace(/\s+/g, "-").toLowerCase()}`} // for 'about me' → 'about-me'
          className={`flex items-center gap-2 font-medium text-xs md:text-base px-2 py-1 rounded transition-colors duration-300 
    ${activeSection === section.id ? "text-black font-bold" : "text-gray-400"}
    hover:text-gray-600`}
        >
          <span className="text-base md:text-lg p-2 rounded-full bg-gray-200 text-gray-700 text-lg">{iconMap[section.id]}</span>
          <span>{section.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
