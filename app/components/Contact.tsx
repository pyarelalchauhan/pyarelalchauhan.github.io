import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { Section } from "./ui";
import { profile } from "../lib/site";

export default function Contact() {
  const items = [
    {
      Icon: HiOutlineMail,
      label: profile.email,
      href: `mailto:${profile.email}`,
    },
    { Icon: FaPhone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    {
      Icon: SiGooglescholar,
      label: "Google Scholar",
      href: profile.socials.googleScholar,
    },
    { Icon: FaLinkedin, label: "LinkedIn", href: profile.socials.linkedin },
    { Icon: FaGithub, label: "GitHub", href: profile.socials.github },
  ];

  return (
    <Section id="contact" title="Get in Touch">
      <p className="text-slate-600 dark:text-slate-400">
        I&apos;m always open to discussing research, collaborations, and new
        opportunities. Feel free to reach out.
      </p>

      <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
        <HiOutlineLocationMarker size="1.1rem" />
        <span>{profile.location}</span>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map(({ Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700 hover:border-accent-500 hover:text-accent-700 dark:border-slate-800 dark:text-slate-300 dark:hover:text-accent-400"
          >
            <Icon size="1.15rem" className="shrink-0 text-accent-700 dark:text-accent-400" />
            <span className="truncate">{label}</span>
          </a>
        ))}
      </div>
    </Section>
  );
}
