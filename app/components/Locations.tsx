import { LuHome, LuLandmark, LuMapPin, LuMountain } from "react-icons/lu";
import { profile } from "../lib/site";

const short = (place: string) => place.replace(/, India$/, "");

// Current and permanent location, each followed by symbols for what is there.
export default function Locations({ className = "" }: { className?: string }) {
  const rows = [
    {
      label: "Current location",
      place: profile.location,
      marks: [{ Icon: LuLandmark, title: "Institute" }],
    },
    {
      label: "Permanent location",
      place: profile.hometown,
      marks: [
        { Icon: LuHome, title: "Home" },
        { Icon: LuMountain, title: "Mountains" },
      ],
    },
  ];

  return (
    <ul className={`space-y-1.5 text-sm text-slate-600 dark:text-slate-400 ${className}`}>
      {rows.map(({ label, place, marks }) => (
        <li key={label} className="flex items-start gap-1.5">
          <LuMapPin aria-hidden="true" className="mt-[0.2rem] shrink-0 text-slate-400 dark:text-slate-500" />
          {/* The place and its symbols wrap as one unit, indented past the pin. */}
          <span className="flex flex-wrap items-center gap-x-1.5">
            <span className="font-medium text-slate-700 dark:text-slate-300">{label}:</span>
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
              {short(place)}
              {marks.map(({ Icon, title }) => (
                <Icon
                  key={title}
                  title={title}
                  size="1.05em"
                  className="shrink-0 text-accent-700 dark:text-accent-400"
                />
              ))}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}
