"use client";
import React, { useEffect, useState } from "react";

interface NavbarProps {
  sections: { id: string; label: string }[];
  isMobile?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ sections, isMobile = false }) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // triggers when middle of the section is visible
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      className={`sticky bg-white shadow-sm top-0 z-50 p-4 transition-colors duration-300 ${
        isMobile
          ? "flex justify-center md:hidden"
          : "hidden md:flex justify-between"
      } space-x-4`}
    //   style={{ backgroundColor: "#5894F0" }}
    >
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`font-medium text-xs md:text-base px-2 py-1 rounded transition-colors duration-300 
            ${
              activeSection === section.id
                ? "text-black font-bold"
                : "text-gray-400"
            } hover:text-gray-600`}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
