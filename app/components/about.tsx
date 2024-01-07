"use client";
import { useEffect } from "react";
import Aos from "aos";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div id="about" className="min-h-[100vh] p-[5rem] w-full">
      <div className="bg-gray-100 dark:bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            <p
              data-aos="fade-down-right"
              className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-zinc-400 sm:text-4xl transition-all duration-300 transform hover:scale-y-110 hover:scale-x-105"
            >
              Hi, I&lsquo;m Pyare Lal
            </p>
            <p
              data-aos="fade-down-left"
              className="mt-4 max-w-2xl text-md text-gray-500 dark:text-zinc-400 lg:mx-auto transition-all duration-300 hover:text-gray-700f selection:text-orange-400"
            >
              a <b>Ph.D. Scholar</b> at the{" "}
              <b>
                Indian Institute of Science Education and Research, Bhopal
                (IISERB)
              </b>
              , where I am pursuing my{" "}
              <i>
                <b>
                  doctoral studies in the Department of Data Science and
                  Engineering (DSE)
                </b>
              </i>{" "}
              within the GeoAI Lab. Under the guidance of Dr. Vaibhav Kumar, I
              delve into the exciting realms of <b>Machine Learning</b> and{" "}
              <b>Deep Learning</b>, specializing in the field of <b>GeoAI</b>.
              My passion for research and my fascination with cutting-edge
              technologies have driven me to explore the vast potential of
              <b> Machine Learning and Deep Learning</b> in the context of
              geospatial data analysis. I work extensively with{" "}
              <b>satellite imagery, LiDAR data, and geospatial techniques</b> to
              uncover insights and address complex challenges in our
              ever-changing world. In my Ph.D., I am primarily focused on
              <b>
                {" "}
                tackling the issue of vehicle accessibility in dense urban
                regions.
              </b>{" "}
              By leveraging datasets such as LiDAR and images, I aim to develop
              advanced deep-learning models to automate solutions for enhancing
              accessibility in these areas. Within this domain, my broad area of
              <b> interest lies in 3D Vision</b>, where I strive to unravel the
              intricacies of spatial understanding and perception through the
              lens of <b>artificial intelligence</b>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
