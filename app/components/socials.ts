import { FaGithub, FaLinkedin, FaOrcid, FaResearchgate } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { profile } from "../lib/site";

// Profile links shown in the hero and the footer.
export const socials = [
  { href: profile.socials.googleScholar, label: "Google Scholar", Icon: SiGooglescholar },
  { href: profile.socials.orcid, label: "ORCID", Icon: FaOrcid },
  { href: profile.socials.researchgate, label: "ResearchGate", Icon: FaResearchgate },
  { href: profile.socials.github, label: "GitHub", Icon: FaGithub },
  { href: profile.socials.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  { href: `mailto:${profile.email}`, label: "Email", Icon: HiOutlineMail },
];
