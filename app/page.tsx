import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Intro from "./components/intro";
import Education from "./components/education";
import Publications from "./components/publications";
import Awards from "./components/awards";

export default function Home() {
  return (
    <main className="relative dark:text-white h-full flex flex-col items-center overflow-x-hidden">
      <Intro />
      <About />
      <Publications />
      <Awards />
      <Education />
      <Experience />
      <Contact />
    </main>
  );
}
