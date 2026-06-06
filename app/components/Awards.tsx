import { FiExternalLink } from "react-icons/fi";
import { Section } from "./ui";
import { awards } from "../lib/site";

export default function Awards() {
  return (
    <Section id="awards" title="Awards & Honors">
      <ul className="space-y-5">
        {awards.map((a, i) => (
          <li key={i} className="flex gap-4">
            <span className="mt-1 shrink-0 text-sm font-medium tabular-nums text-slate-500 dark:text-slate-400">
              {a.year}
            </span>
            <div>
              <h3 className="font-medium text-slate-900 dark:text-white">
                {a.url ? (
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-accent-700 dark:hover:text-accent-400"
                  >
                    {a.title}
                    <FiExternalLink className="text-slate-400" size="0.85rem" />
                  </a>
                ) : (
                  a.title
                )}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {a.detail}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
