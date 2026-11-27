import { BadgeX, Lock, ReceiptText, Trash2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/app/components/ui/Reveal";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { PRIVACY_CARDS } from "@/app/lib/content";

const ICONS: LucideIcon[] = [ReceiptText, Lock, BadgeX, Trash2];

const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";

export function Privacy() {
  return (
    <section id="privacy" className="scroll-mt-20 bg-night py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          tone="dark"
          eyebrow="Your money, your data"
          title="Finzz records money. It never moves it."
          lead="No bank linking, no payments, no ads. You settle up however you like, then record it."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRIVACY_CARDS.map((card, i) => {
            const Icon = ICONS[i];
            const inner = (
              <>
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-mint"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">
                  {card.body}
                </p>
              </>
            );
            const box =
              "block h-full rounded-2xl border border-white/10 bg-white/5 p-5";
            return (
              <Reveal as="li" key={card.title} delay={i * 80}>
                {card.href ? (
                  <a
                    href={card.href}
                    className={`${box} transition-colors hover:bg-white/10 ${FOCUS}`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={box}>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </ul>
        <p className="mt-8">
          <a
            href="/privacy"
            className={`rounded text-sm font-semibold text-mint underline underline-offset-4 hover:text-white ${FOCUS}`}
          >
            Read the privacy policy
          </a>
        </p>
      </div>
    </section>
  );
}
