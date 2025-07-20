// export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang='en' suppressHydrationWarning>
//       <body>
//         {/* Only render portfolio-specific layout */}
//         {children}
//       </body>
//     </html>
//   );
// }

// app/portfolio/layout.tsx
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const sections = [
  { id: "homepage", label: "HOME PAGE" },
  { id: "about", label: "ABOUT ME" },
  { id: "publications", label: "PUBLICATIONS" },
  { id: "teaching", label: "SKILLS" },
  { id: "open-source", label: "OPEN SOURCE CODE" },
];

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en">
    //   <body className="max-w-[1440px] mx-auto">
    //     <main className="flex flex-col md:flex-row min-h-screen font-sans">
    //       <Navbar sections={sections} isMobile />
    //       <Sidebar />
    //       <div className="flex-1 scroll-smooth">
    //         <Navbar sections={sections} />
    //         {children} {/* <-- this changes per route */}
    //       </div>
    //     </main>
    //     <Footer />
    //   </body>
    // </html>
    <>
      <div className="flex flex-col md:flex-row min-h-screen font-sans max-w-[1440px] mx-auto">
        <Navbar sections={sections} isMobile />
        <Sidebar />
        <div className="flex-1 scroll-smooth">
          <Navbar sections={sections} />
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
