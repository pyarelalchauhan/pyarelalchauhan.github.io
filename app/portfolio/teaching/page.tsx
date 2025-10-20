"use client";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import Section from "../components/Section";
import ImageGallery from "../components/Gallary";

export default function TEACHING() {
  const [content, setContent] = useState<string>("");
  const [jsonData, setJsonData] = useState({teachingExpImages: []});

  useEffect(() => {
    fetch("/content/teaching.md")
      .then((res) => {
        if (!res.ok) throw new Error("Markdown file not found");
        return res.text();
      })
      .then((text) => setContent(text))
      .catch((err) => {
        console.error("Error loading markdown:", err);
        setContent("Failed to load content.");
      });
    fetch("/content/image-mapping.json")
      .then((res) => {
        if (!res.ok) throw new Error("Json file not found");
        return res.text();
      })
      .then((text) => setJsonData(JSON.parse(text)))
      .catch((err) => {
        console.error("Error loading json:", err);
        setContent("Failed to load content.");
      });
  }, []);
  return (
    <Section id="teaching">
      <div className="prose dark:prose-invert max-w-none text-sm sm:text-base md:text-lg lg:text-base about-me-markdown-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeSlug]} // this adds IDs to headings
          components={{
            ul: ({ node, ...props }) => {
              // detect if it's the Navigation list
              const parentHeading =
                node?.position?.start?.line &&
                content
                  .split("\n")
                  .slice(0, node.position.start.line)
                  .reverse()
                  .find((line) => line.startsWith("## "));

              if (
                typeof parentHeading === "string" &&
                parentHeading.includes("Navigation")
              ) {
                return (
                  <ul
                    {...props}
                    className="flex flex-wrap sm:gap-x-2 gap-x-1 p-0 list-none"
                  />
                );
              }
              return <ul {...props} />;
            },
            li: ({ node, ...props }) => (
              <li
                {...props}
                className="p-2 border-4  border-gray-300 rounded-lg hover:border-blue-600"
              />
            ),
            a: ({ node, ...props }) => (
              <a {...props} className="no-underline" />
            ),
            img: ({ node, ...props }) => (
              <img
                {...props}
                className="inline-block align-middle rounded border border-gray-300 shadow-sm
               min-w-[120px] min-h-[80px] max-w-full"
              />
            ),
            p: ({ node, ...props }) => (
              <p {...props} className="text-left text-sm mt-2" />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
      <ImageGallery data={jsonData?.teachingExpImages} />
    </Section>
  );
}
