import {
  Check,
  LockKeyhole,
  MessageCircle,
  NotebookPen,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { Phone } from "@/app/components/ui/Phone";
import { Reveal } from "@/app/components/ui/Reveal";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { FEATURES, type Feature } from "@/app/lib/content";

const TAB_ICONS: Record<Feature["id"], LucideIcon> = {
  chats: MessageCircle,
  pool: Users,
  expenses: Wallet,
  notes: NotebookPen,
  vault: LockKeyhole,
};

export function Features() {
  return (
    <section id="features" className="bg-tint py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Everything in one app"
          title="Five tabs. One clear picture."
        />
        <div className="mt-12 flex flex-col gap-16 md:mt-16 md:gap-20 lg:gap-24">
          {FEATURES.map((f, i) => {
            const Icon = TAB_ICONS[f.id];
            const flip = i % 2 === 1;
            return (
              <Reveal key={f.id}>
                <article
                  id={`feature-${f.id}`}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  <div className={flip ? "lg:order-2" : undefined}>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-brand-from">
                      <Icon className="size-3.5" aria-hidden="true" />
                      {f.tab}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
                      {f.title}
                    </h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-body">
                      {f.lead}
                    </p>
                    <ul className="mt-5 flex flex-col gap-2.5">
                      {f.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-body sm:text-[15px]"
                        >
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-mint-deep"
                            strokeWidth={3}
                            aria-hidden="true"
                          />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`flex justify-center ${
                      flip ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="relative w-[210px] sm:w-[240px] lg:w-[250px]">
                      {f.extraScreen ? (
                        <div
                          className={`absolute top-10 hidden w-[180px] lg:block ${
                            flip ? "-left-28" : "-right-28"
                          }`}
                        >
                          <Phone
                            screen={f.extraScreen}
                            sizes="180px"
                            className="opacity-95"
                          />
                        </div>
                      ) : null}
                      <Phone
                        screen={f.screen}
                        sizes="(min-width: 1024px) 250px, (min-width: 640px) 240px, 210px"
                        className="relative"
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
