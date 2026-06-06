import { ReactNode } from "react";

export function Section({
  id,
  title,
  children,
  className = "",
}: {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-3xl px-6 py-16 ${className}`}>
      <SectionHeading>{title}</SectionHeading>
      {children}
    </section>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-8 text-2xl font-semibold tracking-tight">
      <span className="border-b-2 border-accent-500 pb-1">{children}</span>
    </h2>
  );
}
