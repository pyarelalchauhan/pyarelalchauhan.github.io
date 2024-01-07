"use client";
import styles from "@/app/components/styles/education.module.css";
import Image from "next/image";
import SRM from "@/public/images/srm.png";
import IISERB from "@/public/images/iiserb.png";
import IISST from "@/public/images/iisst.png";
import Aos from "aos"
import { useEffect } from "react";
const educationArray = [
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
    title: "Doctor of Philosophy (Ph.D)",
    university: "Indian Institute of Science Education and Research",
    location: "Bhopal, Madhya Pradesh",
    department: "Data Science and Engineering",
    grades: `${9.0}(Sem 1)`,
    timeline: {
      startTime: 2022,
      endTime: null,
    },
    logo: IISERB,
  },
];
export default function Education() {
    useEffect(()=>{
        Aos.init()
    },[])
  return (
    <div
      id="education"
      className="min-h-[100vh] p-[5rem] w-full dark:text-black"
    >
      <div className={styles.timeline}>
        {educationArray?.map((education, i) => (
          <div
            key={i}
            className={`${styles.container} ${
              i % 2 == 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles.content}>
              <div>
                <small>2012 - 2016</small>
                <h1>{education.title}</h1>
                <h3>
                  {education.university}, <b>{education.location}</b>
                </h3>
                <h5>{education.department}</h5>
                <h6>Grades: {education.grades}</h6>
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
