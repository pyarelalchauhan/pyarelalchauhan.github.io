"use client";
const experience = [
  {
    title: "Teaching Assistant",
    location: "",
    category: "Artificial Intelligence",
    timeline: {
      startTime: "Jan 2023",
      endTime: "May 2023",
    },
    description:
      "During my tenure as a Teaching Assistant for Artificial Intelligence, I undertook a range of responsibilities geared toward facilitating students' learning and growth. As part of this role, I meticulously prepared quizzes, designed coding tutorials, and diligently evaluated exams to assess students' understanding and progress in the subject matter.",
    extra: "Spatial Data Science and Applications",
  },
];
const internships = [
  {
    title: "Data Science Intern",
    location: "GalaxEye Pvt Ltd ( IIT Madras Startup ), Chennai.",
    responsibilities: [
      " Research, find solutions, and implement solutions for real-world problems. Worked on Road network detection (research), Natural Disaster monitoring System (research), vegetation cover change, Sentinel-1 pre-processing",
      "Using python and pre-fire risk prediction with optical (Sentinel-2) and SAR (Sentinel-1) satellite image data",
    ],
    timeline: {
      startTime: "Feb 2022",
      endTime: "May 2022",
    },
  },
  {
    title: "Outreach intern",
    location:
      "Indian Institute of Soil & Water Conservation (IISWC), Dehradun.",
    responsibilities: [
      "Research work on Land use, Land Cover Classification, Post classification, NDVI and EVI Time Series Analysis using GEE.",
    ],
    timeline: {
      startTime: "Jun 2022",
      endTime: "Aug 2022",
    },
  },
  {
    title: "Graduate Apprentice Trainee",
    location:
      "Civil Engineering Department, Hindustan Aeronautics Limited (HAL), Korwa, Amethi, Uttar Pradesh.",
    responsibilities: [
      "Tendering: technical and financial evaluation, site visits, making drawings, and estimate preparation. ",
    ],
    timeline: {
      startTime: "Aug 2017",
      endTime: "Aug 2018",
    },
  },
];

import Aos from "aos";
import { useEffect } from "react";

export default function Experience() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <div id="experience" className="min-h-[100vh] p-[5rem] w-full">
      <h3 className="text-2xl text-center mb-4">Experience</h3>
      {/* Experience */}
      {experience?.map((exp, i) => (
        <div
          key={i}
          data-aos={i % 2 == 0 ? "flip-down" : "flip-up"}
          className="md:max-w-[80%] w-[100%] mx-auto bg-white dark:bg-zinc-600 shadow-lg rounded-lg overflow-hidden border-2 border-gray-200 mb-4"
        >
          <div className="px-6 py-4">
            <div className="text-lg font-bold mb-2 text-teal-600">
              {exp.title}
            </div>
            <div className="text-sm text-gray-600 dark:text-white mb-2">
              {exp.category}
            </div>
            <p className="text-gray-700 dark:text-white text-base">
              {exp.description}
            </p>
            <div className="mt-4">
              <div className="flex justify-between items-center text-sm text-orange-400">
                <span className="flex-2">{exp.timeline.startTime}</span>
                <span className="flex-4 h-[2px] w-[50%] bg-teal-400"></span>
                <span className="flex-2">{exp.timeline.endTime}</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-white">
                {exp.extra}
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Internships */}
      {internships?.map((intern, i) => (
        <div
          key={i}
          data-aos={i % 2 === 0 ? "flip-left" : "flip-right"}
          className={`relative md:w-[80%] mx-auto overflow-hidden  mb-4`}
          
        >
          <div className={`px-6 py-41 md:w-3/4 md:max-w-[80%] shadow-lg bg-white dark:bg-zinc-600 border-2 border-gray-200 rounded-lg ${i%2==0?"sm:float-end":"sm:float-start"}`}>
            <div className="text-lg font-bold mb-2 text-teal-600">
              {intern.title}
            </div>
            <div className="text-sm text-gray-600 dark:text-white mb-2">
              {intern.location}
            </div>
            <ul className="text-gray-700 dark:text-white text-base list-disc list-inside mb-4">
              {intern.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
            <div className="mt-4">
              <div className="flex justify-between items-center text-sm text-orange-400">
                <span className="flex-2">{intern.timeline.startTime}</span>
                <span className="flex-4 h-[2px] w-[50%] bg-teal-400"></span>
                <span className="flex-2">{intern.timeline.endTime}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
