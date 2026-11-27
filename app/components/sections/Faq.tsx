import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { FAQ } from "@/app/lib/content";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { Reveal } from "@/app/components/ui/Reveal";

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Questions" title="Good to know" align="center" />
        <Reveal className="mx-auto mt-10 max-w-3xl space-y-3">
          {FAQ.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-line bg-white open:bg-tint"
            >
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left font-display text-base font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-via [&::-webkit-details-marker]:hidden">
                <span className="min-w-0">{item.q}</span>
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className="shrink-0 text-muted transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <div className="px-5 pb-5 text-[15px] leading-relaxed text-body">
                <p>
                  {item.a}
                  {item.href ? (
                    <>
                      {" "}
                      <Link
                        href={item.href}
                        className="font-semibold text-brand-from underline underline-offset-2 hover:text-brand-to focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-via"
                      >
                        {item.linkLabel ?? item.href}
                      </Link>
                    </>
                  ) : null}
                </p>
              </div>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
