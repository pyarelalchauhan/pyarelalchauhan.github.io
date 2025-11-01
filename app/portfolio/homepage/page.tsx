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
      <div className="text-xs md:text-base text-gray-600 mt-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
          Hi!
        </h2>
        <br />
        <div className="text-gray-600 text-sm md:text-lg text-left italic selection:text-teal-500">
          <div>
            <p>
              I&apos;m{" "}
              <span className="md:text-[3rem] text-[2rem] font-bold">
                Pyare Lal,
              </span>{" "}
              currently pursuing my Ph.D. at the{" "}
              <b>
                <a
                  href="https://www.iiserb.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Indian Institute of Science Education and Research, Bhopal
                  (IISERB)
                </a>
              </b>{" "}
              in the{" "}
              <b>
                <a
                  href="https://dse.iiserb.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Data Science and Engineering Department
                </a>
              </b>{" "}
              within the{" "}
              <b>
                <a
                  href="https://sites.google.com/iiserb.ac.in/geoai/home?authuser=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GeoAI4Cities Lab
                </a>
              </b>{" "}
              under the supervision of{" "}
              <b>
                <a
                  href="https://sites.google.com/view/vaibhavkumar1/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dr. Vaibhav Kumar
                </a>
              </b>
              .
            </p>
            <p>
              My research currently focuses on 3D Vision, LiDAR, Deep Learning,
              and geospatial data.
            </p>
          </div>
        </div>
      </div>
      <div className="my-[4rem] border border-gray-300"></div>
      {/* News */}
      <div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-gray-600">
          News
        </h3>
        <br />
        <NewsSection />
        {/* </div> */}
      </div>
      <div className="my-[4rem] border border-gray-300"></div>
      {/* Get In Touch */}
      <GetInTouch />
    </Section>
  );
}
