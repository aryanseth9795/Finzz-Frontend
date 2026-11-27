"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { LogoMark } from "@/app/components/ui/LogoMark";
import { PlayButton } from "@/app/components/ui/PlayButton";

const LINKS = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#videos", label: "Videos" },
  { href: "/#faq", label: "FAQ" },
] as const;

export function Navbar({ variant }: { variant: "overlay" | "solid" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Solid look: always on the solid variant, after scrolling, or while the
  // mobile menu is open (so the panel never floats over the gradient).
  const solid = variant === "solid" || scrolled || open;

  const ring = solid
    ? "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-via"
    : "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

  const linkColour = solid
    ? "text-body hover:text-ink"
    : "text-white/85 hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-200 ${
        solid
          ? "bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:h-20"
      >
        <Link
          href="/"
          className={`flex items-center gap-2.5 rounded-lg ${ring}`}
        >
          <span aria-hidden="true" className="flex">
            <LogoMark size={34} />
          </span>
          <span
            className={`font-display text-xl font-semibold tracking-tight ${
              solid ? "text-ink" : "text-white"
            }`}
          >
            Finzz
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`rounded-md text-[15px] font-medium transition-colors ${linkColour} ${ring}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <PlayButton size="sm" tone={solid ? "dark" : "light"} />
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden ${
              solid
                ? "text-ink hover:bg-tint"
                : "text-white hover:bg-white/10"
            } ${ring}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-white shadow-lg md:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-3 text-base font-medium text-ink hover:bg-tint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-via"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
