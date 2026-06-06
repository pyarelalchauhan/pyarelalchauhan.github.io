import Image from "next/image";
import { Section } from "./ui";
import { venture } from "../lib/site";

export default function Venture() {
  return (
    <Section id="venture" title="Venture">
      <div className="rounded-xl border border-slate-200 p-6 dark:border-slate-800">
        <div className="flex items-start gap-4">
          <Image
            src={venture.logo}
            alt={`${venture.name} logo`}
            width={48}
            height={48}
            className="h-12 w-12 shrink-0 rounded-lg"
          />
          <div className="flex-1">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {venture.name}{" "}
                <span className="text-sm font-normal text-slate-500">
                  · {venture.legalName}
                </span>
              </h3>
              <span className="shrink-0 text-sm text-slate-500">
                {venture.period}
              </span>
            </div>
            <p className="text-sm font-medium text-accent-700 dark:text-accent-400">
              {venture.role}
            </p>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              {venture.tagline}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Incubated at the {venture.incubator}.
            </p>
          </div>
        </div>

        {venture.images.length > 0 && (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {venture.images.map((img) => (
              <figure key={img.src}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="h-44 w-full rounded-lg object-cover"
                />
                {img.caption && (
                  <figcaption className="mt-1.5 text-center text-xs text-slate-500">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
