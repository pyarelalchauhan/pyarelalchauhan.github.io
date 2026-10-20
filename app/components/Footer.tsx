import { profile } from "../lib/site";
import { socials } from "./socials";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
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
