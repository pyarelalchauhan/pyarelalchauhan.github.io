import Link from "next/link";
import { Section } from "./ui";
import { news } from "../lib/site";

function NewsText({ text, url }: { text: string; url?: string }) {
  if (!url) return <span>{text}</span>;
  const internal = url.startsWith("#");
  return (
    <Link
      href={url}
      {...(internal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      className="hover:text-accent-700 dark:hover:text-accent-400"
    >
      {text}
    </Link>
  );
}

export default function News() {
  return (
    <Section id="news" title="News">
      <ul className="space-y-3">
        {news.map((n, i) => (
          <li key={i} className="flex gap-4 text-sm">
            <time className="w-20 shrink-0 font-medium tabular-nums text-slate-500 dark:text-slate-400">
              {n.date}
            </time>
            <span className="text-slate-600 dark:text-slate-400">
              <NewsText text={n.text} url={n.url} />
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
