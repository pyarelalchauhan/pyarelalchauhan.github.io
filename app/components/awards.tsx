import Image from "next/image";
/* Geospatial */
import geospatialhackathon1 from "@/public/images/awards/geospatial_hackathon2.jpg";
import geospatialhackathon2 from "@/public/images/awards/geospatial_hackathon1.jpg";
import geospatialhackathoncertificate from "@/public/images/awards/geospatial_hackathon_certificate.jpg";
import minorclassessegment from "@/public/images/minor_class_seg.png";
import pointcloudsegment from "@/public/images/point_cloud_seg.png";
/* 3D Vision */
import threeDVision from "@/public/images/awards/3dVision.png";
import threeDVisionCertificate from "@/public/images/awards/3dVisionCertificate.png";
import threeDVisionGroup from "@/public/images/awards/3dVisionGroup.png";
/* Anvenshan Setu */
import anvenshanSetu from "@/public/images/awards/anvesanSetuPresentation.jpeg";
/* IEEE-GRSS Hackathon */
import IEEEGRSSCertificate from "@/public/images/awards/IEEEHackathon.jpeg";
/* Manit PP */
import manitBhopalPres from "@/public/images/awards/manitBhopalPresentation.jpeg";
import manitBhopalPresGroup from "@/public/images/awards/manitBhopalPP.jpeg";
/* Indian Symposium */
import symposium from "@/public/images/awards/symposium.jpeg";
import symposiumCertificate from "@/public/images/awards/symposiumCertificate.png";
/* Open House IISER Bhopal */
import openHouseHall from "@/public/images/awards/openHouseHall.png";
import openHouse from "@/public/images/awards/openHouseBhopalPP.jpeg";
import openHouseBhopal from "@/public/images/awards/openHouseBhopalP_P.jpeg";

import {
  FaLinkedinIn,
  FaFacebook,
  FaTwitter,
  FaExternalLinkAlt,
} from "react-icons/fa";
import Link from "next/link";

export default function Awards() {
  const awardsAndPresentations = [
    {
      title: "Geospatial Hackathon",
      subtitle:
        "Selected in the Top 5 teams in the Geospatial Hackathon: Research Challenge, Conducted by IIIT Hyderabad in collaboration with Survey of India, DST, and Microsoft.",
      timeline: 2023,
      extra: {
        title: "News coverage of the hackathon",
        description: [
          {
            title:
              "CIE at IIITH hosts Geospatial Hackathon in Collaboration with DST, SOI, Microsoft and CIE for geospatial map technologies",
            link: "https://www.aninews.in/news/business/business/cie-at-iiith-hosts-geospatial-hackathon-in-collaboration-with-dst-soi-microsoft-and-cie-for-geospatial-map-technologies20230602170815/",
          },
          {
            title:
              "CIE at IIITH hosts Geospatial Hackathon in Collaboration with DST, SOI, Microsoft and CIE for geospatial map technologies",
            link: "https://www.bloomberg.com/press-releases/2023-06-02/cie-at-iiith-hosts-geospatial-hackathon-in-collaboration-with-dst-soi-microsoft-and-cie-for-geospatial-map-technologies",
          },
          {
            title: "Winners of the DST Geospatial Hackathon 2023",
            link: "https://www.indianweb2.com/2023/06/winners-of-dst-geospatial-hackathon-2023.html",
          },
          {
            title:
              "CIE at IIITH hosts Geospatial Hackathon in Collaboration with DST, SOI, Microsoft and CIE for geospatial map technologies",
            link: "https://www.prnewswire.com/in/news-releases/cie-at-iiith-hosts-geospatial-hackathon-in-collaboration-with-dst-soi-microsoft-and-cie-for-geospatial-map-technologies-301841118.html",
          },
        ],
        social: {
          linkedIn:
            "https://www.linkedin.com/feed/update/urn:li:activity:7071111273630826496/",
          twitter:
            "https://twitter.com/cieatiiithyd/status/1664981837716897795",
          facebook:
            "https://www.facebook.com/100063941174418/posts/pfbid0QqSBcoz7nCLdgr7yMu6EuCNu4YxiaBXhRvF4V2xo54ySoojjSYWAocvCorgAYT1Bl/?app=fbl",
        },
        outputs: {
          title: "Some of the Outputs from hackathon",
          pictures: [
            {
              picture: minorclassessegment,
              title: "Minor Classes Segmentation",
            },
            { picture: pointcloudsegment, title: "Point Cloud Segmentation" },
          ],
        },
      },
      pictures: [
        geospatialhackathon1,
        geospatialhackathon2,
        geospatialhackathoncertificate,
      ],
    },
  ];
  const awardsCertificates = [
    {
      title: "3D Vision Summer School at IIIT Hyderabad: 3DVSS 2023",
      titleLink: "",
      pictures: [threeDVision, threeDVisionCertificate, threeDVisionGroup],
    },
    {
      title: "Anvenshan Setu Fellowship-2023",
      titleLink:
        "https://www.linkedin.com/feed/update/urn:li:activity:7024619832989954048?utm_source=share&utm_medium=member_desktop",
      pictures: [anvenshanSetu],
    },
    {
      title: "Won IEEE GRSS Student hackthon - 2023 ( first price )",
      titleLink:
        "https://www.linkedin.com/posts/pyarelaldse_ieeegrss-banglore-sustainabledevelopmentgoals-activity-7058733838289506304-QLcW?utm_source=share&utm_medium=member_desktop",
      pictures: [IEEEGRSSCertificate],
    },
    {
      title: "MANIT bhopal Poster Presentation",
      titleLink:
        "https://www.linkedin.com/posts/activity-7024332149608620032-vOFc?utm_source=share&utm_medium=member_desktop",
      pictures: [
        manitBhopalPres,
        manitBhopalPresGroup,
        symposium,
        symposiumCertificate,
      ],
    },
    {
      title:
        "Open House: IISER Bhopal: Poster presentation and Experimentation",
      titleLink: "",
      pictures: [openHouse, openHouseBhopal, openHouseHall],
    },
  ];
  return (
    <div id="awards" className="min-h-[100vh] p-[5rem] w-full">
      <h3 className="text-2xl text-center mb-4 text-black dark:text-white">Awards</h3>
      <div className="rounded-md shadow-lg border-2 p-2 dark:bg-zinc-500 dark:text-white">
        <h3 className="font-semibold text-md flex items-center justify-between">
          {awardsAndPresentations[0].title}{" "}
          <span className="text-sm text-blue-800 font-mono bg-blue-100 inline rounded-full px-2 align-top float-right animate-pulse">
            {awardsAndPresentations[0].timeline}
          </span>
        </h3>
        <p className="font-light text-sm px-2">
          {awardsAndPresentations[0].subtitle}
        </p>
        <div className="rounded-md shadow-md p-2">
          <h4 className="text-md font-mono font-bold my-2 text-teal-800 dark:text-teal-200">
            {awardsAndPresentations[0].extra?.title}
          </h4>
          {awardsAndPresentations[0].extra?.description?.map((ele, index) => (
            <div
              className="border-2 hover:text-blue-900 hover:shadow-[inset_0_-2px_2px_#7991e0] rounded-md m-2 p-2 text-[14px] text-ellipsis text-blue-950 font-semibold text-nowrap overflow-hidden flex items-center justify-center gap-1"
              key={index}
            >
              <FaExternalLinkAlt />
              <Link href={ele.link}>{ele.title}</Link>
            </div>
          ))}
        </div>
        {/* Social links */}
        <div className="flex justify-between items-center my-2 px-20">
          <a
            href={awardsAndPresentations[0].extra?.social.twitter}
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter color="skyblue" fontSize="1.5em" />
          </a>
          <a
            href={awardsAndPresentations[0].extra?.social.facebook}
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook color="#0f4d92" fontSize="1.5em" />
          </a>
          <a
            href={awardsAndPresentations[0].extra?.social.linkedIn}
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn color="#2a52be" fontSize="1.5em" />
          </a>
        </div>
        {/* Extra Pictures */}
        <div className="grid sm:grid-cols-3 gap-2 my-4">
          {awardsAndPresentations[0].pictures.map((image, index) => (
            <Image
              key={index}
              src={image}
              sizes="100vw"
              objectFit="cover"
              alt="Geospatial hackathon"
              style={{ borderRadius: "10px" }}
            />
          ))}
        </div>
        {/* Outputs */}
        <div className="text-center">
          <h3 className="text-md md:text-lg font-mono font-bold ">
            {awardsAndPresentations[0].extra?.outputs.title}
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {awardsAndPresentations[0].extra?.outputs.pictures?.map(
              (element, index) => (
                <div className="flex flex-col justify-between" key={index}>
                  <Image
                    sizes="100vw"
                    src={element.picture}
                    alt={element.title}
                  />
                  <h3 className="text-sm sm:text-lg font-mono font-medium">
                    {element.title}
                  </h3>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      {/* Other awards/certification awards */}
      {awardsCertificates?.map((element, index) => (
        <div key={index}>
          <h3 className="text-lg font-mono font-semibold text-center overflow-hidden truncate hover:shadow-lg p-2 m-2 rounded-md">
            {element.titleLink ? (
              <Link
                href={element.titleLink}
                target="_black"
                className="hover:text-blue-800 hover:underline flex items-center justify-center gap-1"
              >
                <FaExternalLinkAlt />
                {element.title}
              </Link>
            ) : (
              <span>{element.title}</span>
            )}
          </h3>
          <div className="flex flex-wrap gap-2 w-full">
            {element.pictures.map((picture, index) => (
              <Image
                key={index}
                src={picture}
                width={100}
                objectFit="fill"
                className="rounded-lg flex-1"
                alt="Poster/hackathons"
              />
              // </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
