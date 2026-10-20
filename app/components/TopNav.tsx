"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../lib/site";

// `id` is the home-page section a link scrolls to; Blog is its own page.
const links = [
  { href: "/#about", id: "about", label: "About" },
  { href: "/#news", id: "news", label: "News" },
  { href: "/#publications", id: "publications", label: "Publications" },
  { href: "/#code", id: "code", label: "Code" },
  { href: "/#experience", id: "experience", label: "Experience" },
  { href: "/#venture", id: "venture", label: "Venture" },
  { href: "/blog", id: null, label: "Blog" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

export default function TopNav() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [heroVisible, setHeroVisible] = useState(onHome);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  // On the home page: hide the name while the hero (which shows it) is on screen,
  // and track which section crosses the middle of the viewport.
  useEffect(() => {
    if (!onHome) {
      setHeroVisible(false);
      setActive(null);
      return;
    }
    const hero = document.getElementById("top");
    const heroObs = new IntersectionObserver(
      ([e]) => setHeroVisible(e.isIntersecting),
      { rootMargin: "-56px 0px 0px 0px" }
    );
    if (hero) heroObs.observe(hero);

    const sectionObs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    for (const l of links) {
      const el = l.id && document.getElementById(l.id);
      if (el) sectionObs.observe(el);
    }
    return () => {
      heroObs.disconnect();
      sectionObs.disconnect();
    };
  }, [onHome]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (l: (typeof links)[number]) =>
    l.id ? onHome && !heroVisible && active === l.id : pathname.startsWith("/blog");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <nav aria-label="Main" className="mx-auto flex h-14 max-w-4xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          aria-hidden={heroVisible}
          tabIndex={heroVisible ? -1 : undefined}
          className={`truncate font-serif font-semibold text-slate-900 transition-opacity duration-200 dark:text-white ${
            heroVisible ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          {profile.name}
        </Link>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l) ? "true" : undefined}
                  className={`block rounded-md px-2.5 py-1.5 text-sm ${
                    isActive(l)
                      ? "font-medium text-accent-700 underline decoration-2 underline-offset-[6px] dark:text-accent-400"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 lg:hidden dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {open ? <FiX size="1rem" /> : <FiMenu size="1rem" />}
            Menu
          </button>
        </div>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="mx-auto max-w-4xl border-t border-slate-200 px-6 py-2 lg:hidden dark:border-slate-800"
        >
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(l) ? "true" : undefined}
                className={`block py-2.5 ${
                  isActive(l)
                    ? "font-medium text-accent-700 dark:text-accent-400"
                    : "text-slate-700 dark:text-slate-300"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
