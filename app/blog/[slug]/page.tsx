import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FiArrowLeft } from "react-icons/fi";
import { getAllPosts, getPost, formatDate } from "../../lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  try {
    const post = getPost(params.slug);
    return { title: post.title, description: post.excerpt };
  } catch {
    return {};
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  let post;
  try {
    post = getPost(params.slug);
  } catch {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-accent-700 dark:hover:text-accent-400"
      >
        <FiArrowLeft size="0.9rem" /> All posts
      </Link>

      <article className="mt-6">
        <time className="text-sm text-slate-500">{formatDate(post.date)}</time>
        <h1 className="mt-1 text-3xl font-bold tracking-tight">{post.title}</h1>

        <div className="prose prose-slate mt-8 max-w-none dark:prose-invert prose-headings:font-serif prose-a:text-accent-700 dark:prose-a:text-accent-400">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
