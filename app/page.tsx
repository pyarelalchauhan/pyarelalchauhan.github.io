import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Intro from "./components/intro";
import Education from "./components/education";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="relative dark:text-white h-full flex flex-col items-center">
      <Intro />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
