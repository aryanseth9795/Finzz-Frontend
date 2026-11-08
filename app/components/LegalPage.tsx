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
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <article className="max-w-3xl mx-auto leading-relaxed text-slate-700">
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl font-bold text-slate-900">
            {title}
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Last updated: {LEGAL_UPDATED}
          </p>
          {intro && <div className="mt-6 space-y-4">{intro}</div>}
          {sections.map((s) => (
            <section key={s.heading} className="mt-10">
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-semibold text-slate-900">
                {s.heading}
              </h2>
              <div className="mt-3 space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_a]:text-blue-600 [&_a]:underline">
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
