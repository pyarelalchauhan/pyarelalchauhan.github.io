import Image from "next/image";
import Link from "next/link";
import { heroFigure, profile } from "../lib/site";
import { socials } from "./socials";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pb-8 pt-10 sm:pt-12">
      <div className="flex items-center gap-4 sm:gap-6">
        <Image
          src={profile.photo}
          alt={profile.name}
          width={112}
          height={112}
          priority
          className="h-16 w-16 shrink-0 rounded-full object-cover object-top ring-1 ring-slate-200 sm:h-28 sm:w-28 dark:ring-slate-700"
        />
        <div>
          <h1 className="text-[2.125rem] font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-sm text-slate-600 sm:text-base dark:text-slate-400">
            {profile.role}
          </p>
        </div>
      </div>

      <p className="mt-7 max-w-3xl font-serif text-xl leading-normal text-slate-800 sm:text-[1.5rem] dark:text-slate-200">
        {profile.tagline}
      </p>
      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
        Founder of{" "}
        <Link href="/#venture" className="link-underline">
          {profile.founderOf}
        </Link>
        . Based in {profile.location}.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-accent-700 px-5 py-2 text-sm font-medium text-white hover:bg-accent-800"
        >
          View CV
        </a>
        <a
          href={profile.resumeWithMetrics}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-slate-600 underline-offset-4 hover:text-accent-700 hover:underline dark:text-slate-400 dark:hover:text-accent-400"
        >
          CV with citation metrics
        </a>
        <ul className="-ml-2 flex items-center">
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                title={label}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md p-2 text-slate-500 hover:text-accent-700 dark:text-slate-400 dark:hover:text-accent-400"
              >
                <Icon size="1.15rem" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <figure className="mt-8 sm:mt-10">
        <HeroVideo
          src={heroFigure.video}
          poster={heroFigure.poster}
          width={heroFigure.width}
          height={heroFigure.height}
          label={heroFigure.label}
        />
        <figcaption className="mt-3 flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400">
          <span>
            Moving along a street in Bhopal in the{" "}
            <a
              href={heroFigure.datasetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              {heroFigure.dataset}
            </a>{" "}
            dataset, each point coloured by its class.
          </span>
          <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs">
            {heroFigure.legend.map((c) => (
              <li key={c.label} className="inline-flex items-center gap-1.5">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full ring-1 ring-black/10 dark:ring-white/25"
                  style={{ backgroundColor: c.color }}
                />
                {c.label}
              </li>
            ))}
          </ul>
        </figcaption>
      </figure>
    </section>
  );
}
