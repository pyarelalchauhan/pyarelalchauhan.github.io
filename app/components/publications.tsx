"use client";
import { useEffect } from "react";
import Aos from "aos";

export default function Publications() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div
      id="publications"
      className="min-h-[50vh] px-[1rem] py-[3rem] sm:px-[5rem] mt-[4rem] w-full"
    >
      <h3 className="text-2xl text-center mb-4 text-black dark:text-white">
        Publications
      </h3>

      {/* 1. IEEE InGARSS 2023 conference paper */}
      <div
        data-aos="zoom-in-up"
        className="bg-zinc-300 text-black rounded-md p-4 my-2"
      >
        <h2 className="text-md mb-2 italic">
          1. <span className="font-bold">Pyare Lal Chauhan</span>, J. Vijaywargiya
          and A. M. Ramiya, &quot;Addressing class imbalance challenge in Semantic
          Segmentation of ALS data through performance analysis of RandLA-NET and
          PointNET ++,&quot; 2023 IEEE India Geoscience and Remote Sensing Symposium
          (InGARSS), Bangalore, India, 2023, pp. 1-4,
          <a
            href="https://ieeexplore.ieee.org/document/10490326"
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1"
          >
            doi: 10.1109/InGARSS59135.2023.10490326
          </a>
          .
          <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">
            Conference • 2023
          </span>
        </h2>
        <p className="p-4 font-medium text-sm md:text-md">
          {/* Optional short description here */}
        </p>
      </div>

      {/* 2. A Data-Driven framework for pedestrian oriented route planning... */}
      <div
        data-aos="zoom-in-up"
        className="bg-zinc-300 text-black rounded-md p-4 my-2"
      >
        <h2 className="text-md mb-2 italic">
          2. <span className="font-bold">Pyare Lal Chauhan</span>, Tanishq Kumar
          Baswal and Vaibhav Kumar, &quot;A Data-Driven framework for pedestrian
          oriented route planning leveraging deep learning and spatial
          perception,&quot;
          <span className="ml-1 italic">
            International Journal of Applied Earth Observation and Geoinformation
          </span>
          , Volume 144, 2025, Article 104932,
          <a
            href="https://doi.org/10.1016/j.jag.2025.104932"
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1"
          >
            doi: 10.1016/j.jag.2025.104932
          </a>
          .
          <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">
            Journal • 2025
          </span>
        </h2>
        <p className="p-4 font-medium text-sm md:text-md">
          {/* Optional short description here */}
        </p>
      </div>

      {/* 3. UMDMix – Neurocomputing */}
      <div
        data-aos="zoom-in-up"
        className="bg-zinc-300 text-black rounded-md p-4 my-2"
      >
        <h2 className="text-md mb-2 italic">
          3. Anurag Nihal, <span className="font-bold">Pyare Lal</span> and
          Vaibhav Kumar, &quot;Urban multi-domain mixing (UMDMix) based
          unsupervised domain adaptation for LiDAR semantic segmentation,&quot;
          <span className="ml-1 italic">Neurocomputing</span>, 2025, Article
          131526,
          <a
            href="https://doi.org/10.1016/j.neucom.2025.131526"
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1"
          >
            doi: 10.1016/j.neucom.2025.131526
          </a>
          .
          <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">
            Journal • 2025
          </span>
        </h2>
        <p className="p-4 font-medium text-sm md:text-md">
          {/* Optional short description here */}
        </p>
      </div>

      {/* 4. Deep Learning and Multi Source 2D and 3D Geospatial Data for UQoL */}
      <div
        data-aos="zoom-in-up"
        className="bg-zinc-300 text-black rounded-md p-4 my-2"
      >
        <h2 className="text-md mb-2 italic">
          4. Ayush Dabra, <span className="font-bold">Pyare Lal Chauhan</span> and
          Vaibhav Kumar, &quot;Deep Learning and Multi Source 2D and 3D
          Geospatial Data for Urban Quality of Life Assessment,&quot;
          <span className="ml-1 italic">
            International Journal of Applied Earth Observation and Geoinformation
          </span>
          , Volume 144, 2025, Article 104838,
          <a
            href="https://doi.org/10.1016/j.jag.2025.104838"
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1"
          >
            doi: 10.1016/j.jag.2025.104838
          </a>
          .
          <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">
            Journal • 2025
          </span>
        </h2>
        <p className="p-4 font-medium text-sm md:text-md">
          {/* Optional short description here */}
        </p>
      </div>
    </div>
  );
}
