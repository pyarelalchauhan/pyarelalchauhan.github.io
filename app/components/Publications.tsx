import Image from "next/image";
import { FiGithub, FiExternalLink, FiFileText } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Section } from "./ui";
import { publications, allPapersUrl } from "../lib/site";

// Render **bold** spans (used to highlight the author's own name).
function Authors({ value }: { value: string }) {
  const parts = value.split("**");
  return (
    <span>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <span key={i} className="font-semibold text-slate-900 dark:text-white">
            {p}
          </span>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </span>
  );
}

function Thumb({
  src,
  alt,
  fit = "cover",
}: {
  src?: string;
  alt: string;
  fit?: "cover" | "contain";
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={320}
        height={200}
        className={`h-40 w-full rounded-md ring-1 ring-slate-200 sm:h-48 dark:ring-slate-700 ${
          fit === "contain"
            ? "bg-white object-contain p-1.5"
            : "object-cover object-top"
        }`}
      />
    );
  }
  // Styled placeholder when no teaser image is available yet.
  return (
    <div className="flex h-40 w-full items-center justify-center rounded-md bg-gradient-to-br from-accent-100 to-accent-200 ring-1 ring-accent-200 sm:h-48 dark:from-accent-900/40 dark:to-accent-800/30 dark:ring-accent-800">
      <HiOutlineDocumentText className="text-accent-500/70" size="2rem" />
    </div>
  );
}

function PubEntry({ pub }: { pub: (typeof publications)[number] }) {
  return (
    <li className="grid grid-cols-1 gap-4 sm:grid-cols-[18rem_1fr]">
      <div className="relative sm:row-span-1">
        <a
          href={pub.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={pub.title}
          className="block transition-opacity hover:opacity-90"
        >
          <Thumb src={pub.image} alt={pub.title} fit={pub.imageFit} />
        </a>
        <span className="pointer-events-none absolute left-2 top-2 rounded-md bg-slate-900/75 px-2 py-0.5 text-[11px] font-semibold text-white backdrop-blur">
          {pub.short ? `${pub.short} · ${pub.year}` : pub.year}
        </span>
      </div>
      <div>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-900 hover:text-accent-700 dark:text-white dark:hover:text-accent-400"
              >
                {pub.title}
              </a>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                <Authors value={pub.authors} />
              </p>
              <p className="mt-1 text-sm italic text-slate-500">{pub.venue}</p>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                <span
                  className={`rounded-full px-2 py-0.5 font-medium ${
                    pub.type === "Journal"
                      ? "bg-accent-100 text-accent-800 dark:bg-accent-900/40 dark:text-accent-300"
                      : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  }`}
                >
                  {pub.type}
                </span>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-2 py-0.5 text-slate-600 hover:border-accent-500 hover:text-accent-700 dark:border-slate-700 dark:text-slate-400 dark:hover:text-accent-400"
                >
                  <FiFileText size="0.8rem" /> Paper
                </a>
                {pub.code && (
                  <a
                    href={pub.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-2 py-0.5 text-slate-600 hover:border-accent-500 hover:text-accent-700 dark:border-slate-700 dark:text-slate-400 dark:hover:text-accent-400"
                  >
                    <FiGithub size="0.8rem" /> Code
                  </a>
                )}
                {pub.doi && (
                  <span className="font-mono text-slate-500 dark:text-slate-400">doi:{pub.doi}</span>
                )}
              </div>
            </div>
    </li>
  );
}

export default function Publications() {
  const hasEqual = publications.some((p) => p.authors.includes("*"));
  const byYearDesc = (a: { year: number }, b: { year: number }) =>
    b.year - a.year;
  const groups = [
    {
      label: "Journal Articles",
      items: publications.filter((p) => p.type === "Journal").sort(byYearDesc),
    },
    {
      label: "Conference Papers",
      items: publications
        .filter((p) => p.type === "Conference")
        .sort(byYearDesc),
    },
  ].filter((g) => g.items.length > 0);

  return (
    <Section id="publications" title="Publications">
      <a
        href={allPapersUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-6 inline-flex items-center gap-1 text-sm text-accent-700 hover:underline dark:text-accent-400"
      >
        <FiExternalLink size="0.85rem" /> All paper PDFs
      </a>

      <div className="space-y-10">
        {groups.map((g) => (
          <div key={g.label}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {g.label}
            </h3>
            <ol className="space-y-6">
              {g.items.map((pub, i) => (
                <PubEntry key={i} pub={pub} />
              ))}
            </ol>
          </div>
        ))}
      </div>

      {hasEqual && (
        <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">
          * denotes equal contribution.
        </p>
      )}
    </Section>
  );
}
