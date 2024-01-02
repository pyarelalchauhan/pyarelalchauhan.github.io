import About from "./components/about/page";
import Contact from "./components/contact/page";
import Experience from "./components/experience/page";
import Intro from "./components/intro/page";
import Projects from "./components/projects/page";
import Skills from "./components/skills/page";

export default function Home() {
  return (
    <main className="relative dark:text-white h-full">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
