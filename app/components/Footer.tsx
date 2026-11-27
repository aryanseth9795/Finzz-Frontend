import Link from "next/link";
import { LogoMark } from "@/app/components/ui/LogoMark";
import { DEVELOPER, SUPPORT_EMAIL } from "@/app/lib/site";

const LINKS = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/delete-account", label: "Delete account" },
  { href: `mailto:${SUPPORT_EMAIL}`, label: "Contact" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-via"
          >
            <span aria-hidden="true" className="flex">
              <LogoMark size={32} />
            </span>
            <span className="font-display text-xl font-semibold tracking-tight text-ink">
              Finzz
            </span>
          </Link>
          <p className="mt-3 text-sm text-body">Developed by {DEVELOPER}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="rounded-md text-sm font-medium text-body transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-via"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted sm:px-6">
          © {year} Finzz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
