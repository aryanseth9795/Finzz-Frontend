"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Fade/rise on scroll. Server HTML and the first render carry no hidden
 * class; the hidden state is applied after mount, only to elements below
 * the viewport and only when motion is allowed.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.classList.add("reveal-pending");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.replace("reveal-pending", "reveal-shown");
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      el.classList.remove("reveal-pending", "reveal-shown");
    };
  }, []);

  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;
  const set = (node: HTMLElement | null) => {
    ref.current = node;
  };
  if (as === "li") {
    return (
      <li ref={set} className={className} style={style}>
        {children}
      </li>
    );
  }
  return (
    <div ref={set} className={className} style={style}>
      {children}
    </div>
  );
}
