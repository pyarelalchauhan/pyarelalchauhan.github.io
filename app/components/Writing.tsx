import Link from "next/link";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { Section } from "./ui";
import { writing } from "../lib/site";
import { getAllPosts, formatDate } from "../lib/blog";

export default function Writing() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <Section id="writing" title="Blog">
      {posts.length > 0 && (
        <div className="space-y-5">
          {posts.map((p) => (
            <article key={p.slug}>
              <time className="text-sm text-slate-500">
                {formatDate(p.date)}
              </time>
              <h3 className="mt-0.5 font-medium">
                <Link
                  href={`/blog/${p.slug}`}
                  className="text-slate-900 hover:text-accent-700 dark:text-white dark:hover:text-accent-400"
                >
                  {p.title}
                </Link>
              </h3>
              <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">
                {p.excerpt}
              </p>
            </article>
          ))}
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 font-medium text-accent-700 hover:underline dark:text-accent-400"
        >
          All posts <FiArrowRight size="0.85rem" />
        </Link>
        {writing.map((w) => (
          <a
            key={w.url}
            href={w.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-slate-500 hover:text-accent-700 dark:hover:text-accent-400"
          >
            {w.title} <FiExternalLink size="0.8rem" />
          </a>
        ))}
      </div>
    </Section>
  );
}
