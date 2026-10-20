import { ReactNode } from "react";

// A home-page section. Content is held to a readable width unless `wide`
// (publication cards, photo grids), but always shares the page's left edge.
export function Section({
  id,
  title,
  children,
  className = "",
  wide = false,
}: {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <section id={id} className={`mx-auto max-w-4xl px-6 py-14 sm:py-16 ${className}`}>
      <SectionHeading>{title}</SectionHeading>
      <div className={wide ? "" : "max-w-3xl"}>{children}</div>
    </section>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-8 text-[1.75rem] font-semibold leading-tight tracking-tight">
      {children}
    </h2>
  );
}
