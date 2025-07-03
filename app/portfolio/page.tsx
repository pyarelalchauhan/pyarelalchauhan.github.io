// pages/portfolio.tsx or app/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/new/Navbar";
import Sidebar from "../components/new/Sidebar";
import Section from "../components/new/Section";
import Footer from "../components/new/Footer";

const sections = [
  { id: "homepage", label: "HOME PAGE" },
  { id: "about me", label: "ABOUT ME" },
  { id: "publications", label: "PUBLICACTIONS" },
  { id: "teaching", label: "SKILLS" },
  { id: "open source code", label: "OPEN SOURCE CODE" },
];

const Portfolio = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <main className="flex flex-col md:flex-row min-h-screen font-sans">
        <Navbar sections={sections} isMobile />
        <Sidebar />
        <div className="flex-1 md:ml-[25%] scroll-smooth">
          <Navbar sections={sections} />
          {sections.map((section) => (
            <Section key={section.id} id={section.id} label={section.label} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;




// "use client";

// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import pyareProfile from "@/public/images/Pyare-Profile-2.png";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";

// const sections = [
//   { id: "about", label: "About Me" },
//   { id: "projects", label: "Projects" },
//   { id: "skills", label: "Skills" },
//   { id: "contact", label: "Contact" },
// ];

// const Portfolio = () => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true); // Set flag after client-side mount
//   }, []);

//   if (!mounted) return null;

//   return (
//     <>
//       <main className="flex flex-col md:flex-row min-h-screen font-sans">

//         {/* ===== Mobile Sticky Navbar ===== */}
//         <nav className="sticky top-0 z-50 bg-white shadow-md p-4 flex justify-center md:hidden space-x-4">
//           {sections.map((section) => (
//             <a
//               key={section.id}
//               href={`#${section.id}`}
//               className="text-gray-700 hover:text-black font-medium"
//             >
//               {section.label}
//             </a>
//           ))}
//         </nav>

//         {/* ===== Sidebar (Profile) ===== */}
//         <aside
//           className="w-full md:w-1/4 text-white p-6 md:fixed md:top-0 md:left-0 md:h-screen flex flex-col justify-center gap-10 items-end"
//           style={{
//             background:
//               "linear-gradient(180deg,rgb(161, 199, 216) 0%, rgb(134, 134, 133) 100%)",
//           }}
//         >
//           <div className="w-full flex gap-6 items-center md:justify-center md:items-end md:flex-col md:gap-12">
//             <Image
//               src={pyareProfile}
//               alt="Profile picture"
//               width={50}
//               height={50}
//               className="object-cover w-64 h-64"
//             />
//             <div className="flex flex-col flex-wrap gap-x-2 justify-between md:justify-center text-left md:text-right">
//               <p>Pyare Lal,</p>
//               <p>Phd</p>
//               <p>Research Scientist</p>
//               <p>@IISERB, Bhopal</p>
//             </div>
//           </div>

//           {/* Desktop-only footer */}
//           <footer className="mt-6 hidden md:block">
//             <div className="flex gap-4">
//               <a
//                 href="mailto:pyare22@iiserb.ac.in"
//                 aria-label="Email"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <MdEmail />
//               </a>
//               <a
//                 href="https://github.com/pyarelalchauhan"
//                 aria-label="GitHub"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaGithub />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/pyarelaldse/"
//                 aria-label="LinkedIn"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedin />
//               </a>
//             </div>
//           </footer>
//         </aside>

//         {/* ===== Main Content Area ===== */}
//         <div className="flex-1 md:ml-[25%] scroll-smooth">

//           {/* Desktop Sticky Navbar */}
//           <nav className="hidden md:flex sticky top-0 z-50 bg-white shadow-md p-4 justify-end space-x-4">
//             {sections.map((section) => (
//               <a
//                 key={section.id}
//                 href={`#${section.id}`}
//                 className="text-gray-700 hover:text-black font-medium"
//               >
//                 {section.label}
//               </a>
//             ))}
//           </nav>

//           {/* Sections */}
//           {sections.map((section) => (
//             <section
//               key={section.id}
//               id={section.id}
//               className="scroll-mt-14 min-h-[calc(100vh-60px)] border-b border-gray-300 p-10 pt-10"
//             >
//               <h2 className="text-3xl font-bold mb-4">{section.label}</h2>
//               <p>Content for {section.label} goes here...</p>
//             </section>
//           ))}
//         </div>
//       </main>

//       {/* ===== Mobile Footer ===== */}
//       <footer className="block md:hidden bg-gray-100 p-4">
//         <div className="flex items-center justify-center gap-4">
//           <a
//             href="mailto:pyare22@iiserb.ac.in"
//             aria-label="Email"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <MdEmail size={40} />
//           </a>
//           <a
//             href="https://github.com/pyarelalchauhan"
//             aria-label="GitHub"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaGithub size={40} />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/pyarelaldse/"
//             aria-label="LinkedIn"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaLinkedin size={40} />
//           </a>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Portfolio;
