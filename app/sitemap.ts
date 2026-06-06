import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/site";
import { getAllPosts } from "./lib/blog";

// Generated at build time and emitted as /sitemap.xml in the static export.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/blog`, changeFrequency: "weekly", priority: 0.6 },
  ];

  const posts = getAllPosts().map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: p.date ? new Date(p.date) : undefined,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...routes, ...posts];
}
