"use client";
import { useEffect } from "react";
import Aos from "aos";

export default function Publications() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div id="publications" className="min-h-[100vh] px-[1rem] py-[5rem] sm:p-[5rem] mt-[4rem] w-full">
      <h3 className="text-2xl text-center mb-4 text-black dark:text-white">
        Publications
      </h3>
      <div data-aos="zoom-in-up" className="bg-zinc-300 text-black rounded-md p-4 my-2">
        <h2 className="text-md mb-2 italic">
          1. <span className="font-bold">P. L. Chauhan</span>, J. Vijaywargiya and A. M. Ramiya, &quot;Addressing class imbalance challenge in Semantic Segmentation of ALS data through performance analysis of RandLA-NET and PointNET ++,&quot; 2023 IEEE India Geoscience and Remote Sensing Symposium (InGARSS), Bangalore, India, 2023, pp. 1-4,<a href="https://ieeexplore.ieee.org/document/10490326" target="_blank" rel="noopener noreferrer"> doi: 10.1109/InGARSS59135.2023.10490326</a>.
          <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">

          </span>
        </h2>
        <p className="p-4 font-medium text-sm md:text-md">

        </p>
      </div>
      <div data-aos="zoom-in-up" className="bg-zinc-300 text-black rounded-md p-4 my-2">
        <h2 className="text-md mb-2 font-bold italic">
          Paper 2
          <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">

          </span>
        </h2>
        <p className="p-4 font-medium text-sm md:text-md">

        </p>
      </div>
    </div>
  );
} 
