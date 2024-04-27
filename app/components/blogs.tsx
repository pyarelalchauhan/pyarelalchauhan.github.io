"use client";
import { useEffect } from "react";
import { LiaDocker, LiaBlogSolid } from "react-icons/lia";
import BlogThumbnail from "@/public/images/Blog-thumbnail.png";
import DockerBlogThumbnail from "@/public/images/Docker-thumbnail.png";
import Aos from "aos";
import Image from "next/image";

export default function Blogs() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div
      id="blogs"
      className="min-h-[60vh] px-[1rem] py-[5rem] sm:p-[5rem] mt-[4rem] w-full"
    >
      <h3 className="text-2xl text-center mb-4 text-black dark:text-white">
        Blogs
      </h3>
      <div className="flex justify-evenly items-center w-full flex-wrap gap-6 mt-10">
        <div className="flex dark:text-white text-black font-medium relative">
          <LiaDocker size="5rem" className="-z-10 text-zinc-600 absolute -top-12 -left-5" />
          <a
            href="https://pyarelaldse.notion.site/Docker-Documentation-fbc0fecd5a6e42be953a823ae92fc4bd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={370}
              src={DockerBlogThumbnail}
              objectFit="fill"
              className="rounded-lg flex-1"
              style={{borderTopLeftRadius: '30px'}}
              alt="Docker blog"
            />

            <p className="my-2" >Docker setup and nvidia-toolkit installation</p>
          </a>
        </div>
        <div className="flex dark:text-white text-black font-medium relative">
          <LiaBlogSolid size="5rem" className="-z-10 text-zinc-600 absolute -top-12 -left-5" />
          <a
            href="https://pyarelaldse.notion.site/My-Blogs-ef674d95d3cb44c3b318d96e25f33aad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={400}
              src={BlogThumbnail}
              objectFit="fill"
              className="rounded-lg flex-1"
              style={{borderTopLeftRadius: '30px'}}
              alt="Blogs page"
            />
            <p className="my-2" >Follow the given page to read more...</p>
          </a>
        </div>
      </div>
    </div>
  );
}
