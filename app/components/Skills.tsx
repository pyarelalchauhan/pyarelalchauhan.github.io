import { Section } from "./ui";
import { skills } from "../lib/site";

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <dl className="space-y-3">
        {skills.map((s) => (
          <div
            key={s.label}
            className="flex flex-col gap-1 sm:flex-row sm:gap-4"
          >
            <dt className="w-36 shrink-0 text-sm font-semibold text-slate-900 dark:text-white">
              {s.label}
            </dt>
            <dd className="text-sm text-slate-600 dark:text-slate-400">
              {s.items}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
