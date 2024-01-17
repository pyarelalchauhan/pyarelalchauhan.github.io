"use client";
import { useEffect } from "react";
import Aos from "aos";

export default function Publications() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div id="publications" className="min-h-[100vh] p-[5rem] w-full">
      <h3 className="text-center text-xl font-bold mb-2">
        Publications
      </h3>
      <div data-aos="zoom-in-up" className="bg-zinc-300 text-black rounded-md p-4 my-2">
        <h2 className="text-md mb-2 font-bold italic">
          Performance Analysis of Subsampled LiDAR Point Clouds
          <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">
            Deep Learning
          </span>
        </h2>
        <p className="p-4 font-medium text-sm md:text-md">
          I ( Pyare Lal Chauhan ), Aakash Bais and Vaibhav Kumar (Communicated
          on 8th June 2023) Performance Analysis of Subsampled LiDAR Point
          Clouds Using Deep Learning. Automation in Construction,2023
        </p>
      </div>
      <div data-aos="zoom-in-up" className="bg-zinc-300 text-black rounded-md p-4 my-2">
        <h2 className="text-md mb-2 font-bold italic">
          Performance Analysis of Subsampled LiDAR Point Clouds
          <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">
            Deep Learning
          </span>
        </h2>
        <p className="p-4 font-medium text-sm md:text-md">
          I ( Pyare Lal Chauhan ), Aakash Bais and Vaibhav Kumar (Communicated
          on 8th June 2023) Performance Analysis of Subsampled LiDAR Point
          Clouds Using Deep Learning. Automation in Construction,2023
        </p>
      </div>
    </div>
  );
}
