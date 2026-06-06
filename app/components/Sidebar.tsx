import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaOrcid, FaResearchgate } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../lib/site";

const socials = [
  { href: profile.socials.googleScholar, label: "Google Scholar", Icon: SiGooglescholar },
  { href: profile.socials.orcid, label: "ORCID", Icon: FaOrcid },
  { href: profile.socials.researchgate, label: "ResearchGate", Icon: FaResearchgate },
  { href: profile.socials.github, label: "GitHub", Icon: FaGithub },
  { href: profile.socials.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  { href: `mailto:${profile.email}`, label: "Email", Icon: HiOutlineMail },
];

export default function Sidebar() {
  return (
    <aside className="border-b border-slate-200 lg:sticky lg:top-14 lg:flex lg:h-[calc(100vh-3.5rem)] lg:w-80 lg:shrink-0 lg:flex-col lg:overflow-y-auto lg:border-b-0 lg:border-r dark:border-slate-800">
      <div className="flex justify-end px-4 pt-4">
        <ThemeToggle />
      </div>

      <div className="flex flex-col items-center px-8 pb-8 text-center lg:items-start lg:pt-2 lg:text-left">
        <Link href="/">
          <Image
            src={profile.photo}
            alt={profile.name}
            width={176}
            height={176}
            priority
            className="h-36 w-36 rounded-full object-cover object-top shadow-md ring-1 ring-slate-200 lg:h-44 lg:w-44 dark:ring-slate-700"
          />
        </Link>

        <h1 className="mt-5 text-xl font-bold tracking-tight">{profile.name}</h1>
        <p className="mt-1 text-sm text-accent-700 dark:text-accent-400">
          {profile.role}
        </p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Founder,{" "}
          <Link href="/#venture" className="hover:text-accent-700 dark:hover:text-accent-400">
            {profile.founderOf}
          </Link>
        </p>
        <p className="mt-2 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
          <HiOutlineLocationMarker aria-hidden="true" /> {profile.location}
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-200 p-2 text-slate-600 hover:border-accent-500 hover:text-accent-700 dark:border-slate-700 dark:text-slate-400 dark:hover:text-accent-400"
            >
              <Icon size="1.1rem" />
            </a>
          ))}
        </div>

        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full rounded-md bg-accent-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-accent-800 lg:w-auto lg:px-6"
        >
          View CV
        </a>
      </div>
    </aside>
  );
}
