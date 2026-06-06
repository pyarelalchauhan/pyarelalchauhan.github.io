import Link from "next/link";
import {
  FiUser,
  FiBell,
  FiFileText,
  FiCode,
  FiBriefcase,
  FiTrendingUp,
  FiEdit3,
  FiMail,
} from "react-icons/fi";

const links = [
  { href: "/#about", label: "About", Icon: FiUser },
  { href: "/#news", label: "News", Icon: FiBell },
  { href: "/#publications", label: "Publications", Icon: FiFileText },
  { href: "/#code", label: "Code", Icon: FiCode },
  { href: "/#experience", label: "Experience", Icon: FiBriefcase },
  { href: "/#venture", label: "Venture", Icon: FiTrendingUp },
  { href: "/blog", label: "Blog", Icon: FiEdit3 },
  { href: "/#contact", label: "Contact", Icon: FiMail },
];

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
      <nav className="mx-auto max-w-6xl overflow-x-auto px-2 sm:px-4">
        <ul className="flex h-14 items-center justify-start gap-0.5 whitespace-nowrap sm:gap-1">
          {links.map(({ href, label, Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex items-center gap-1.5 rounded-md px-2.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-accent-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-accent-400"
              >
                <Icon size="1rem" className="shrink-0" />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
