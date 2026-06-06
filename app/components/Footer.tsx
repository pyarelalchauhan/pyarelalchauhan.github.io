import { FaGithub, FaLinkedin, FaOrcid, FaResearchgate } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { profile } from "../lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { href: profile.socials.googleScholar, label: "Google Scholar", Icon: SiGooglescholar },
    { href: profile.socials.orcid, label: "ORCID", Icon: FaOrcid },
    { href: profile.socials.researchgate, label: "ResearchGate", Icon: FaResearchgate },
    { href: profile.socials.github, label: "GitHub", Icon: FaGithub },
    { href: profile.socials.linkedin, label: "LinkedIn", Icon: FaLinkedin },
    { href: `mailto:${profile.email}`, label: "Email", Icon: HiOutlineMail },
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {year} {profile.name}
        </p>
        <div className="flex gap-4">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-accent-700 dark:hover:text-accent-400"
            >
              <Icon size="1.15rem" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
