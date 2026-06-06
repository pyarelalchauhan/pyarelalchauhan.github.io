import Image from "next/image";
import { Section } from "./ui";
import { education } from "../lib/site";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-4">
        {education.map((e, i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-lg border border-slate-200 p-4 dark:border-slate-800"
          >
            <Image
              src={e.logo}
              alt={`${e.institute} logo`}
              width={56}
              height={56}
              className="h-14 w-14 shrink-0 rounded object-contain"
            />
            <div className="flex-1">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="font-medium text-slate-900 dark:text-white">
                  {e.degree} in {e.field}
                </h3>
                <span className="shrink-0 text-sm text-slate-500">
                  {e.period}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {e.institute}, {e.location}
              </p>
              <p className="mt-0.5 text-sm font-medium text-accent-700 dark:text-accent-400">
                {e.grade}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
