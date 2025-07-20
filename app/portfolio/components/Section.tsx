// components/Section.tsx
import React, { useEffect, useRef, ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
  const contentRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (window.innerWidth < 768 && contentRef.current) {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      id={id}
      ref={contentRef}
      className="text-xs md:text-base scroll-mt-14 min-h-[calc(100vh-56px)] border-b border-gray-300 p-6 pt-10"
    >
      {children}
    </section>
  );
};

export default Section;
