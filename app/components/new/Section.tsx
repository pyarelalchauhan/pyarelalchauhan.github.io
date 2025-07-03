// components/Section.tsx
import React from "react";

interface SectionProps {
  id: string;
  label: string;
}

const Section: React.FC<SectionProps> = ({ id, label }) => (
  <section
    id={id}
    className="scroll-mt-14 min-h-[calc(100vh-60px)] border-b border-gray-300 p-10 pt-10"
  >
    <h2 className="text-3xl font-bold mb-4">{label}</h2>
    <p>Content for {label} goes here...</p>
  </section>
);

export default Section;
