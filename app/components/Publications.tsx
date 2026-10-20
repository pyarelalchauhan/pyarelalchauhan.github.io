"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FiBookmark,
  FiCheck,
  FiCopy,
  FiDatabase,
  FiGithub,
  FiExternalLink,
  FiFileText,
  FiGlobe,
  FiPlay,
} from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Section } from "./ui";
import { publications, patents, allPapersUrl, type PubType } from "../lib/site";

const pillClass =
  "inline-flex items-center gap-1 rounded-md border border-slate-200 px-2 py-0.5 text-slate-600 hover:border-accent-500 hover:text-accent-700 dark:border-slate-700 dark:text-slate-400 dark:hover:text-accent-400";

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

// A Paper / Code / Video button; with no href it renders greyed out as "coming soon".
function LinkButton({
  href,
  icon,
  label,
}: {
  href?: string;
  icon: React.ReactNode;
  label: string;
}) {
  if (!href) {
    return (
      <span className="inline-flex cursor-default items-center gap-1 rounded-md border border-dashed border-slate-200 px-2 py-0.5 text-slate-400 dark:border-slate-700 dark:text-slate-500">
        {icon} {label}
        <span className="text-[10px] opacity-80">(coming soon)</span>
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={pillClass}>
      {icon} {label}
    </a>
  );
}

// The BibTeX entry with a copy button, shown under a paper when its BibTeX button is open.
function BibtexBlock({ bibtex }: { bibtex: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard blocked: the text is still there to select by hand.
    }
  };
  return (
    <div className="relative mt-2">
      <pre className="overflow-x-auto rounded-md border border-slate-200 bg-slate-50 p-3 pr-20 font-mono text-[11px] leading-relaxed text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
        {bibtex}
      </pre>
      <button type="button" onClick={copy} className={`${pillClass} absolute right-2 top-2 bg-white text-xs dark:bg-slate-950`}>
        {copied ? <FiCheck size="0.8rem" /> : <FiCopy size="0.8rem" />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

function PubEntry({ pub }: { pub: (typeof publications)[number] }) {
  const [showBib, setShowBib] = useState(false);
  const soon = (k: "paper" | "code" | "data") =>
    pub.comingSoon?.includes(k) ?? false;
  return (
    <li className="grid grid-cols-1 gap-4 sm:grid-cols-[18rem_1fr]">
      <div className="relative self-start sm:row-span-1">
        <a
          href={pub.video ?? pub.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={pub.video ? `Watch the video: ${pub.title}` : pub.title}
          className="block transition-opacity hover:opacity-90"
        >
          <Thumb src={pub.image} alt={pub.title} fit={pub.imageFit} />
        </a>
        <span className="pointer-events-none absolute left-2 top-2 rounded-md bg-slate-900/75 px-2 py-0.5 text-[11px] font-semibold text-white backdrop-blur">
          {pub.badge ?? (pub.short ? `${pub.short} · ${pub.year}` : pub.year)}
        </span>
        {pub.video && (
          <span className="pointer-events-none absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-md bg-slate-900/75 px-2 py-0.5 text-[11px] font-semibold text-white backdrop-blur">
            <FiPlay size="0.7rem" /> Video
          </span>
        )}
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
              {pub.summary && (
                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
                  {pub.summary}
                </p>
              )}
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
                <LinkButton
                  href={soon("paper") ? undefined : pub.url}
                  icon={<FiFileText size="0.8rem" />}
                  label="Paper"
                />
                {(pub.code || soon("code")) && (
                  <LinkButton
                    href={pub.code}
                    icon={<FiGithub size="0.8rem" />}
                    label="Code"
                  />
                )}
                {(pub.data || soon("data")) && (
                  <LinkButton
                    href={pub.data}
                    icon={<FiDatabase size="0.8rem" />}
                    label="Data"
                  />
                )}
                {pub.project && (
                  <LinkButton
                    href={pub.project}
                    icon={<FiGlobe size="0.8rem" />}
                    label="Project page"
                  />
                )}
                {pub.video && (
                  <LinkButton
                    href={pub.video}
                    icon={<FiPlay size="0.8rem" />}
                    label="Video"
                  />
                )}
                {pub.bibtex && (
                  <button
                    type="button"
                    onClick={() => setShowBib((v) => !v)}
                    aria-expanded={showBib}
                    className={`${pillClass} ${showBib ? "border-accent-500 text-accent-700 dark:text-accent-400" : ""}`}
                  >
                    <FiBookmark size="0.8rem" /> BibTeX
                  </button>
                )}
                {pub.doi && (
                  <span className="font-mono text-slate-500 dark:text-slate-400">doi:{pub.doi}</span>
                )}
              </div>
              {showBib && pub.bibtex && <BibtexBlock bibtex={pub.bibtex} />}
            </div>
    </li>
  );
}

// A row of mutually exclusive pill buttons, e.g. Newest / Oldest.
function Toggle<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div role="group" aria-label={label} className="flex items-center gap-1.5">
      <span className="mr-0.5 text-slate-500 dark:text-slate-400">{label}</span>
      {options.map((o) => (
        <button
          key={o}
          type="button"
          aria-pressed={value === o}
          onClick={() => onChange(o)}
          className={`rounded-full px-2.5 py-0.5 ${
            value === o
              ? "bg-accent-700 text-white"
              : "border border-slate-200 text-slate-600 hover:border-accent-500 hover:text-accent-700 dark:border-slate-700 dark:text-slate-400 dark:hover:text-accent-400"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export default function Publications() {
  const [order, setOrder] = useState<"Newest" | "Oldest">("Newest");
  const [show, setShow] = useState<"All" | PubType>("All");
  const hasEqual = publications.some((p) => p.authors.includes("*"));

  // Newest first by year; papers from the same year keep their order in site.ts.
  const list = publications
    .map((pub, i) => ({ pub, i }))
    .filter(({ pub }) => show === "All" || pub.type === show)
    .sort((a, b) => b.pub.year - a.pub.year || a.i - b.i)
    .map(({ pub }) => pub);
  if (order === "Oldest") list.reverse();

  return (
    <Section id="publications" title="Publications">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-sm">
        <a
          href={allPapersUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-accent-700 hover:underline dark:text-accent-400"
        >
          <FiExternalLink size="0.85rem" /> All paper PDFs
        </a>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
          <Toggle label="Sort" options={["Newest", "Oldest"]} value={order} onChange={setOrder} />
          <Toggle label="Show" options={["All", "Journal", "Conference"]} value={show} onChange={setShow} />
        </div>
      </div>

      <ol className="space-y-6">
        {list.map((pub) => (
          <PubEntry key={pub.title} pub={pub} />
        ))}
      </ol>

      {hasEqual && (
        <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">
          * denotes equal contribution.
        </p>
      )}

      {patents.length > 0 && (
        <div className="mt-10">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Patents
          </h3>
          <ul className="space-y-4">
            {patents.map((p) => (
              <li key={p.title}>
                <p className="font-medium text-slate-900 dark:text-white">{p.title}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  <Authors value={p.inventors} />
                </p>
                <p className="mt-1 text-sm italic text-slate-500">{p.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
