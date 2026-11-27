import type { ReactNode } from "react";
import { Phone } from "@/app/components/ui/Phone";
import { Reveal } from "@/app/components/ui/Reveal";
import { SectionHeading } from "@/app/components/ui/SectionHeading";

const CHIP =
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold";

const PENDING = <span className={`${CHIP} bg-chip-pending-bg text-chip-pending-fg`}>Pending</span>;
const VERIFY = <span className={`${CHIP} bg-chip-verified-bg text-chip-verified-fg`}>Verify</span>;
const REJECT = <span className={`${CHIP} bg-chip-rejected-bg text-chip-rejected-fg`}>Reject</span>;

const STEPS: { title: string; body: ReactNode }[] = [
  {
    title: "Add what you gave or got",
    body: (
      <>
        Amount, a note, the date. It shows up on your friend&apos;s phone as {PENDING}.
      </>
    ),
  },
  {
    title: "Your friend checks it",
    body: (
      <>
        They {VERIFY} it, or {REJECT} it with a reason.
      </>
    ),
  },
  {
    title: "Same balance on both phones",
    body: <>Monthly totals, and a PDF report you can preview and share.</>,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeading
              eyebrow="How it works"
              title="No more “I already paid you.”"
              lead="Every entry needs a tick from the other side, so there's one record you both agree on."
            />
            <ol className="mt-10 space-y-6">
              {STEPS.map((step, i) => (
                <Reveal as="li" key={step.title} delay={i * 80} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gradient font-display text-lg font-bold text-white"
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-base leading-relaxed text-body">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal className="mx-auto w-full max-w-[260px] sm:max-w-[300px]">
            <Phone
              screen="ledger"
              sizes="(min-width: 640px) 300px, 260px"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
