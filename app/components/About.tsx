import { Section } from "./ui";
import { about, researchInterests, profile } from "../lib/site";

export default function About() {
  const a = profile.affiliation;
  return (
    <Section id="about" title="About">
      <p className="text-slate-600 dark:text-slate-400">
        Ph.D. research scholar in the{" "}
        <a className="link-underline" href={a.labUrl} target="_blank" rel="noopener noreferrer">
          {a.lab}
        </a>
        ,{" "}
        <a className="link-underline" href={a.departmentUrl} target="_blank" rel="noopener noreferrer">
          {a.department}
        </a>{" "}
        at{" "}
        <a className="link-underline" href={a.instituteUrl} target="_blank" rel="noopener noreferrer">
          IISER Bhopal
        </a>
        , advised by{" "}
        <a className="link-underline" href={a.advisorUrl} target="_blank" rel="noopener noreferrer">
          {a.advisor}
        </a>
        .
      </p>

      <p className="mt-5 border-l-2 border-accent-500 pl-4 font-serif text-lg italic text-slate-700 dark:text-slate-300">
        {profile.tagline}
      </p>

      <div className="mt-6 space-y-4 leading-relaxed text-slate-600 dark:text-slate-400">
        {about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <h3 className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        Research Interests
      </h3>
      <div className="flex flex-wrap gap-2">
        {researchInterests.map((r) => (
          <span
            key={r}
            className="rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-sm text-accent-800 dark:border-accent-800 dark:bg-accent-900/30 dark:text-accent-300"
          >
            {r}
          </span>
        ))}
      </div>
    </Section>
  );
}
