import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, formatDate } from "../lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on 3D vision, LiDAR, and geospatial deep learning.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        Notes on 3D vision, LiDAR, and geospatial deep learning.
      </p>

      <div className="mt-10 space-y-8">
        {posts.length === 0 && (
          <p className="text-slate-500">No posts yet. Check back soon.</p>
        )}
        {posts.map((p) => (
          <article key={p.slug} className="group">
            <time className="text-sm text-slate-500">{formatDate(p.date)}</time>
            <h2 className="mt-1 text-xl font-semibold">
              <Link
                href={`/blog/${p.slug}`}
                className="text-slate-900 group-hover:text-accent-700 dark:text-white dark:group-hover:text-accent-400"
              >
                {p.title}
              </Link>
            </h2>
            <p className="mt-1 text-slate-600 dark:text-slate-400">{p.excerpt}</p>
            {p.tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
