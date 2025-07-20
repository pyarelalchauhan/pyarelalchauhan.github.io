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
    <div className="min-h-screen font-sans mx-auto max-w-[1440px] w-full flex flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        <Sidebar />
        {/* Main content area */}
        <div className="flex flex-col flex-1">
          <Navbar sections={sections} />
          <div className="flex-1 scroll-smooth">{children}</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
