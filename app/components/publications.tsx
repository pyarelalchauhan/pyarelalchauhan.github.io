"use client";
import { useEffect } from "react";
import Aos from "aos";

export default function Publications() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const linkClass = "underline ml-1";

  return (
    <div
      id="publications"
      className="min-h-[50vh] px-[1rem] py-[3rem] sm:px-[5rem] mt-[4rem] w-full"
    >
      <h3 className="text-2xl text-center mb-4 text-black dark:text-white">
        Publications
      </h3>

      <p className="text-center text-sm mb-2 text-black dark:text-white">
        <span className="italic">* denotes equal contribution.</span>{" "}
        <a
          href="https://drive.google.com/drive/folders/1M7FkledowRbZmnEr-FXBjfBJQgA9Gkpp"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          [All paper PDFs]
        </a>
      </p>
      <p className="text-center text-xs mb-6 text-gray-600 dark:text-gray-400">
        Impact Factor: Journal Citation Reports 2024 (Clarivate). Quartile (Q):
        Scopus/SCImago, journal&apos;s best subject category.
      </p>

      <h4 className="text-lg font-semibold mb-2 text-black dark:text-white">
        Peer-Reviewed Journal Articles
      </h4>

      {/* J1. Subsampled LiDAR semantic segmentation – Applied Intelligence */}
      <div
        data-aos="zoom-in-up"
        className="bg-zinc-300 text-black rounded-md p-4 my-2"
      >
        <h2 className="text-md mb-2 italic">
          [J1] <span className="font-bold">Pyare Lal Chauhan</span>, Aakash Singh
          Bais and Vaibhav Kumar, &quot;Performance Analysis of Subsampled LiDAR
          Point Clouds Using Deep Learning Based Semantic Segmentation,&quot;
          <span className="ml-1 italic">Applied Intelligence</span>, Volume 56,
          2026, Article 273. (IF&nbsp;3.5, Q2)
          <a
            href="https://doi.org/10.1007/s10489-026-07282-2"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            [DOI]
          </a>
          <a
            href="https://github.com/geoai4cities/LiDAR-Subsampling-Benchmark"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            [Code]
          </a>
          <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">
            Journal • 2026
          </span>
        </h2>
      </div>

      {/* J2. Ke-MLS – Environment and Planning B */}
      <div
        data-aos="zoom-in-up"
        className="bg-zinc-300 text-black rounded-md p-4 my-2"
      >
        <h2 className="text-md mb-2 italic">
          [J2] Vaibhav Kumar, Bharat Lohani,{" "}
          <span className="font-bold">Pyare Lal</span>, Aakash Singh Bais and
          Aditya, &quot;Ke-MLS: A Large-Scale Labeled Mobile LiDAR Data Set from
          Indian Urban Region,&quot;
          <span className="ml-1 italic">
            Environment and Planning B: Urban Analytics and City Science
          </span>
          , OnlineFirst, 2026. (IF&nbsp;3.1, Q1)
          <a
            href="https://doi.org/10.1177/23998083261430812"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            [DOI]
          </a>
          <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">
            Journal • 2026
          </span>
        </h2>
      </div>

      {/* J3. Pedestrian oriented route planning – IJAEOG */}
      <div
        data-aos="zoom-in-up"
        className="bg-zinc-300 text-black rounded-md p-4 my-2"
      >
        <h2 className="text-md mb-2 italic">
          [J3] <span className="font-bold">Pyare Lal Chauhan</span>, Tanishq
          Kumar Baswal and Vaibhav Kumar, &quot;A Data-Driven Framework for
          Pedestrian Oriented Route Planning Leveraging Deep Learning and Spatial
          Perception,&quot;
          <span className="ml-1 italic">
            International Journal of Applied Earth Observation and Geoinformation
          </span>
          , Volume 144, 2025, Article 104932. (IF&nbsp;8.6, Q1)
          <a
            href="https://doi.org/10.1016/j.jag.2025.104932"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            [DOI]
          </a>
          <a
            href="https://github.com/geoai4cities/svi_perception"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            [Code]
          </a>
          <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">
            Journal • 2025
          </span>
        </h2>
      </div>

      {/* J4. Urban Quality of Life – IJAEOG */}
      <div
        data-aos="zoom-in-up"
        className="bg-zinc-300 text-black rounded-md p-4 my-2"
      >
        <h2 className="text-md mb-2 italic">
          [J4] Ayush Dabra, <span className="font-bold">Pyare Lal Chauhan</span>{" "}
          and Vaibhav Kumar, &quot;Deep Learning and Multi Source 2D and 3D
          Geospatial Data for Urban Quality of Life Assessment,&quot;
          <span className="ml-1 italic">
            International Journal of Applied Earth Observation and Geoinformation
          </span>
          , Volume 144, 2025, Article 104838. (IF&nbsp;8.6, Q1)
          <a
            href="https://doi.org/10.1016/j.jag.2025.104838"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            [DOI]
          </a>
          <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">
            Journal • 2025
          </span>
        </h2>
      </div>

      {/* J5. UMDMix – Neurocomputing */}
      <div
        data-aos="zoom-in-up"
        className="bg-zinc-300 text-black rounded-md p-4 my-2"
      >
        <h2 className="text-md mb-2 italic">
          [J5] Anurag Nihal*, <span className="font-bold">Pyare Lal</span>* and
          Vaibhav Kumar, &quot;Urban Multi-Domain Mixing (UMDMix) Based
          Unsupervised Domain Adaptation for LiDAR Semantic Segmentation,&quot;
          <span className="ml-1 italic">Neurocomputing</span>, 2025, Article
          131526. (IF&nbsp;6.5, Q1)
          <a
            href="https://doi.org/10.1016/j.neucom.2025.131526"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            [DOI]
          </a>
          <a
            href="https://github.com/geoai4cities/umdmix-uda"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            [Code]
          </a>
          <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">
            Journal • 2025
          </span>
        </h2>
      </div>

      <h4 className="text-lg font-semibold mb-2 mt-6 text-black dark:text-white">
        Peer-Reviewed Conference Papers
      </h4>

      {/* C1. IEEE InGARSS 2023 conference paper */}
      <div
        data-aos="zoom-in-up"
        className="bg-zinc-300 text-black rounded-md p-4 my-2"
      >
        <h2 className="text-md mb-2 italic">
          [C1] <span className="font-bold">Pyare Lal Chauhan</span>, J.
          Vijaywargiya and A. M. Ramiya, &quot;Addressing Class Imbalance
          Challenge in Semantic Segmentation of ALS Data through Performance
          Analysis of RandLA-NET and PointNET++,&quot; 2023 IEEE India Geoscience
          and Remote Sensing Symposium (InGARSS), Bangalore, India, 2023, pp.
          1-4.
          <a
            href="https://doi.org/10.1109/InGARSS59135.2023.10490326"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            [DOI]
          </a>
          <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">
            Conference • 2023
          </span>
        </h2>
      </div>
    </div>
  );
}
