// app/portfolio/about/page.tsx
"use client";

import GetInTouch from "../components/GetInTouch";
import NewsCard from "../components/NewsCard";
import NewsSection from "../components/NewsSection";
import Section from "../components/Section";
import newsData from "./news.json";

export default function HOMEPAGE() {
  return (
    <Section id="homepage">
      <div className="text-xs md:text-base text-gray-400 mt-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
          Welcome!
        </h2>
        <br />
        <p className="mb-4">
          I&apos;m a research scientist working with <b>Prof. Luca Carlone</b> at the{" "}
          <b>
            <a href="#">MIT SPARK Lab</a>
          </b>{" "}
          in the Department of{" "}
          <b>
            <a href="#">
              Aeronautics and Astronautics at the Massachusetts Institute of
              Technology (MIT)
            </a>
          </b>
          .
        </p>
        <br />
        <p>
          My main research interests lie in autonomy for intelligent mobile
          systems, where I focus on active and passive 3D perception of complex,
          dynamic, and changing environments for robotic interaction and
          augmented reality. This includes research on dense geometric and
          semantic scene representations, scene abstraction and understanding,
          detection and prediction of moving and changing entities, lifelong
          learning, as well as active perception to enable continuous and
          autonomous improvement of a robot&apos;s scene model and perception
          capabilities.
        </p>
      </div>
      <div className="my-[5rem] border border-gray-200"></div>
      {/* News */}
      <div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-gray-400">
          News
        </h3>
        <br />
        <NewsSection />
        {/* </div> */}
      </div>
      <div className="my-[5rem] border border-gray-200"></div>
      {/* Get In Touch */}
      <GetInTouch />
    </Section>
  );
}
