import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { LEGAL_UPDATED } from "../lib/site";

export type LegalSection = { heading: string; body: ReactNode };

export default function LegalPage({
  title,
  sections,
  intro,
}: {
  title: string;
  sections: LegalSection[];
  intro?: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="solid" />
      <main className="px-6 pt-28 pb-20 md:pt-32">
        <article className="mx-auto max-w-3xl leading-relaxed text-body">
          <h1 className="font-display text-4xl font-bold text-ink md:text-5xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-muted">
            Last updated: {LEGAL_UPDATED}
          </p>
          {intro && (
            <div className="mt-6 space-y-4 [&_a]:text-brand-to [&_a]:underline [&_a]:underline-offset-2 [&_a]:rounded-sm [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-2 [&_a]:focus-visible:outline-brand-to">
              {intro}
            </div>
          )}
          {sections.map((s) => (
            <section key={s.heading} className="mt-10 border-t border-line pt-8">
              <h2 className="font-display text-2xl font-semibold text-ink">
                {s.heading}
              </h2>
              <div className="mt-3 space-y-3 leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_a]:text-brand-to [&_a]:underline [&_a]:underline-offset-2 [&_a]:rounded-sm [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-2 [&_a]:focus-visible:outline-brand-to">
                {s.body}
              </div>
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </div>
  );
}
