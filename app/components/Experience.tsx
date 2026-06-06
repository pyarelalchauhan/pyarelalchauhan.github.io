import { Section } from "./ui";
import { experience, teaching } from "../lib/site";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8 border-l border-slate-200 pl-6 dark:border-slate-800">
        {experience.map((e, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-[1.92rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent-500 bg-white dark:bg-slate-950" />
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="font-medium text-slate-900 dark:text-white">
                {e.title}
              </h3>
              <span className="shrink-0 text-sm text-slate-500">{e.period}</span>
            </div>
            <p className="text-sm text-accent-700 dark:text-accent-400">
              {e.orgUrl ? (
                <a
                  href={e.orgUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {e.org}
                </a>
              ) : (
                e.org
              )}
              {e.advisor && (
                <span className="text-slate-500 dark:text-slate-400">
                  {" · Advisor: "}
                  {e.advisor.url ? (
                    <a
                      href={e.advisor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                    >
                      {e.advisor.name}
                    </a>
                  ) : (
                    e.advisor.name
                  )}
                </span>
              )}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-400">
              {e.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Teaching
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          {teaching.role}:{" "}
          {teaching.courses.map((c, i) => (
            <span key={c.name}>
              {c.url ? (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  {c.name}
                </a>
              ) : (
                c.name
              )}
              {i < teaching.courses.length - 1 ? ", " : "."}
            </span>
          ))}
        </p>
      </div>
    </Section>
  );
}
