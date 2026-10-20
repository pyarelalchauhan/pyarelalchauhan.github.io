import { Section } from "./ui";
import { about, researchInterests, profile } from "../lib/site";

export default function About() {
  const a = profile.affiliation;
  return (
    <Section id="about" title="About">
      <div className="space-y-4 leading-relaxed text-slate-600 dark:text-slate-400">
        <p>
          Ph.D. research scholar in the{" "}
          <a className="link-underline" href={a.labUrl} target="_blank" rel="noopener noreferrer">
            {a.lab}
          </a>
          ,{" "}
          <a className="link-underline" href={a.departmentUrl} target="_blank" rel="noopener noreferrer">
            {a.department}
          </a>{" "}
          at{" "}
          <a className="link-underline" href={a.instituteUrl} target="_blank" rel="noopener noreferrer">
            IISER Bhopal
          </a>
          , advised by{" "}
          <a className="link-underline" href={a.advisorUrl} target="_blank" rel="noopener noreferrer">
            {a.advisor}
          </a>
          . {about[0]}
        </p>
        {about.slice(1).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p>
          <span className="font-medium text-slate-800 dark:text-slate-200">Research interests:</span>{" "}
          {researchInterests.join(", ")}.
        </p>
      </div>
    </Section>
  );
}
