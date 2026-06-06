import About from "./components/About";
import News from "./components/News";
import Publications from "./components/Publications";
import OpenSource from "./components/OpenSource";
import Experience from "./components/Experience";
import Venture from "./components/Venture";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Awards from "./components/Awards";
import Writing from "./components/Writing";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <About />
      <News />
      <Publications />
      <OpenSource />
      <Experience />
      <Venture />
      <Education />
      <Skills />
      <Awards />
      <Writing />
      <Contact />
    </>
  );
}
