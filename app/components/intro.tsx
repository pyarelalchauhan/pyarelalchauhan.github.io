import Image from "next/image";
import { FaGithub,FaLinkedin,FaVoicemail } from "react-icons/fa";

export default function Intro() {
  return (
    <div
      id="intro"
      className="min-h-[100vh] p-[5rem] w-full flex flex-col-reverse md:flex-row gap-8 items-center justify-between border-2"
    >
      <div className="flex-2 text-sm md:text-lg text-center p-6">
        I&apos;m <span className="text-[2rem] font-bold">Pyare Lal,</span> a Ph.D. Scholar at the Indian Institute of Science
        Education and Research, Bhopal (IISERB), where I am pursuing my doctoral
        studies in the Department of Data Science and Engineering (DSE) within
        the GeoAI Lab. Under the guidance of Dr. Vaibhav Kumar, I delve into the
        exciting realms of Machine Learning and Deep Learning, specializing in
        the field of GeoAI.
      </div>
      <div className="flex-3 relative">
        <div
          style={{
            clipPath: "circle(50.8% at 48% 51%)",
          }}
          className="relative h-[10rem] w-[10rem] bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          <Image
            src="/images/profile.png"
            alt="profile-background"
            width={300}
            height={300}
            className="absolute top-[20%] left-[50%] -translate-x-1/2"
          />
        </div>
        <div>
          <FaGithub/>
          <FaVoicemail/>
          <FaLinkedin/>
          
        </div>
      </div>
    </div>
  );
}
