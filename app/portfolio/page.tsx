// app/portfolio/page.tsx
"use client";
import { redirect, usePathname } from "next/navigation";
import Section from "./components/Section";

const sections = [
  { id: "homepage", label: "HOME PAGE" },
  { id: "about", label: "ABOUT ME" },
  { id: "publications", label: "PUBLICATIONS" },
  { id: "teaching", label: "SKILLS" },
  { id: "open-source", label: "OPEN SOURCE CODE" },
  { id: "contact", label: "CONTACT" },
];

export default function PortfolioLandingPage() {
  const pathName = usePathname();
  if (pathName === '/portfolio') {
    redirect('/portfolio/homepage');
  }
  return (
    <>
      {sections.map((section) => (
        <Section key={section.id} id={section.id}><></></Section>
      ))}
    </>
  );
}
