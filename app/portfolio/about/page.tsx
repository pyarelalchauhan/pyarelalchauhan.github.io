"use client";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import Section from "../components/Section";

export default function ABOUT() {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetch("/content/about-me.md")
      .then((res) => {
        if (!res.ok) throw new Error("Markdown file not found");
        return res.text();
      })
      .then((text) => setContent(text))
      .catch((err) => {
        console.error("Error loading markdown:", err);
        setContent("Failed to load content.");
      });
  }, []);

  return (
    <Section id="about">
      <div className="prose dark:prose-invert max-w-none about-me-markdown-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeSlug]} // this adds IDs to headings
        >
          {content}
        </ReactMarkdown>
      </div>
    </Section>
  );
}
