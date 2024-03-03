"use client";
import styles from "@/app/components/styles/education.module.css";
import Image from "next/image";
import SRM from "@/public/images/srm.png";
import IISERB from "@/public/images/iiserb.png";
import IISST from "@/public/images/iisst.png";
import Aos from "aos";
import { useEffect } from "react";
const educationArray = [
  {
    title: "Doctor of Philosophy (Ph.D)",
    university: "Indian Institute of Science Education and Research",
    location: "Bhopal, Madhya Pradesh",
    department: "Data Science and Engineering",
    grades: `${9.0}`,
    timeline: {
      startTime: 2022,
      endTime: null,
    },
    logo: IISERB,
  },
  {
    title: "Master of Technology (M.Tech)",
    university: "Indian Institute of Space Science and Technology",
    location: "Thiruvananthpuram, Kerala",
    department: "Geoinformatics",
    grades: 8.69,
    timeline: {
      startTime: 2020,
      endTime: 2022,
    },
    logo: IISST,
  },
  {
    title: "Bachelar of Technology (B.Tech)",
    university: "SRM University",
    location: "Chennai, Tamil Nadu",
    department: "Civil Engineering",
    grades: 9.168,
    timeline: {
      startTime: 2012,
      endTime: 2016,
    },
    logo: SRM,
  },
];
export default function Education() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div
      id="education"
      className="min-h-[100vh] p-[5rem] w-full dark:text-black"
    >
       <h3 className="text-center text-xl font-bold">Education</h3>
      <div className={`${styles.timeline}`}>
        {educationArray?.map((education, i) => (
          <div
            key={i}
            className={`${styles.container} ${
              i % 2 == 0 ? styles.left : styles.right
            } drop-shadow-lg`}
            data-aos={i % 2 == 0 ? "fade-down-right" : "fade-down-left"}
          >
            <div className={`${styles.content} text-zinc-800 bg-gray-200 dark:bg-zinc-600 dark:text-white`}>
              <div>
                <small className="text-blue-400 font-bold">
                  {education.timeline.startTime}
                  {" - "}
                  {`${
                    education.timeline.endTime
                      ? education.timeline.endTime
                      : "present"
                  }`}
                </small>
                <h1 className="font-bold italic text-teal-700">
                  {education.title}
                </h1>
                <h3 className="italic text-sm font-semibold">
                  {education.university}, {education.location}
                </h3>
                <h5 className="font-semibold">{education.department}</h5>
                <h6>
                  <span className="text-sm italic">CGPA: </span>
                  <span className="font-semibold text-md text-amber-900">
                    {education.grades}{" "}
                  </span>
                </h6>
              </div>
              <Image
                height={100}
                width={100}
                src={education.logo}
                alt="University logo"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
