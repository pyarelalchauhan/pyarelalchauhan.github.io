"use client";
import { useEffect } from "react";
import Aos from "aos";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div id="about" className="min-h-[100vh] px-[1rem] py-[5rem] sm:p-[5rem] mt-[4rem] w-full">
      <div className="bg-gray-100 dark:bg-transparent shadow-lg rounded-lg overflow-hidden py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-center mb-4 text-white dark:text-black">
            About Me
          </h2>
          <div className="lg:text-center">
            <p
              data-aos="fade-down-left"
              className="mt-4 text-sm sm:text-lg dark:text-zinc-100 lg:mx-auto transition-all duration-300 hover:text-gray-700f selection:text-orange-400"
            >
              <b>Ph.D. Scholar</b> at {" "}
              <b>
                Indian Institute of Science Education and Research, Bhopal
                (IISERB)
              </b>
              , pursuing my{" "}
              <i>
                <b>
                  doctoral studies in the Department of Data Science and
                  Engineering (DSE)
                </b>
              </i>{" "}
              within the GeoAI Lab. Under the guidance of Dr. Vaibhav Kumar,
              delved into the exciting realms of <b>Machine Learning</b> and{" "}
              <b>Deep Learning</b>, specializing in the field of <b>GeoAI</b>.
              My passion for research and my fascination with cutting-edge
              technologies have driven me to explore the vast potential of
              <b> Machine Learning and Deep Learning</b> in the context of
              geospatial data analysis. Worked extensively with{" "}
              <b>satellite imagery, LiDAR data, and geospatial techniques</b> to
              uncover insights and address complex challenges in our
              ever-changing world. Primarily focused on
              <b>
                {" "}
                tackling the issue of vehicle accessibility in dense urban
                regions.
              </b>{" "}
              By leveraging datasets such as LiDAR and images, aiming to develop
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
