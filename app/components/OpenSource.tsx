import { FiExternalLink } from "react-icons/fi";
import { Section } from "./ui";
import { openSource } from "../lib/site";

export default function OpenSource() {
  return (
    <Section id="code" title="Open Source & Datasets">
      <ul className="space-y-4">
        {openSource.map((o) => (
          <li
            key={o.name}
            className="rounded-lg border border-slate-200 p-4 dark:border-slate-800"
          >
            <h3 className="font-mono text-sm font-semibold text-slate-900 dark:text-white">
              {o.url ? (
                <a
                  href={o.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-accent-700 dark:hover:text-accent-400"
                >
                  {o.name}
                  <FiExternalLink className="text-slate-400" size="0.8rem" />
                </a>
              ) : (
                o.name
              )}
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {o.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
