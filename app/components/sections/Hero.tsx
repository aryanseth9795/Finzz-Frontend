import { Check } from "lucide-react";
import { PlayButton } from "@/app/components/ui/PlayButton";
import { Phone } from "@/app/components/ui/Phone";
import WatchButton from "@/app/components/WatchButton";

const TRUST = ["Free, no ads", "Verified by both sides", "Never moves your money"];

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="bg-brand-gradient relative overflow-hidden text-white"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-28 text-center sm:px-6 md:pt-36">
        <h1
          id="hero-title"
          className="font-display mx-auto max-w-3xl text-[2.5rem] leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl md:text-6xl"
        >
          Money between friends, finally clear.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
          Log what you gave and got. Your friend verifies every entry, so you
          both see the same balance. Plus your own expenses, shared notes and a
          private vault.
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <PlayButton tone="light" size="lg" />
          <WatchButton />
        </div>
        <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-white/90">
          {TRUST.map((t) => (
            <li key={t} className="inline-flex items-center gap-1.5">
              <Check size={16} strokeWidth={3} className="text-mint" aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Fan: lower halves of the phones sit under the white curve. */}
      <div className="relative z-0 mx-auto mt-10 h-[270px] w-full max-w-6xl sm:h-[310px] md:mt-12 md:h-[360px]">
        <div className="absolute top-9 right-1/2 mr-[50px] w-[100px] origin-bottom -rotate-8 sm:top-10 sm:mr-[54px] sm:w-[150px] md:top-12 md:mr-[65px] md:w-[180px]">
          <Phone
            screen="expenses"
            sizes="(min-width: 768px) 180px, (min-width: 640px) 150px, 100px"
            className="shadow-[0_24px_60px_rgba(15,23,42,0.35)]"
          />
        </div>
        <div className="absolute top-9 left-1/2 ml-[50px] w-[100px] origin-bottom rotate-8 sm:top-10 sm:ml-[54px] sm:w-[150px] md:top-12 md:ml-[65px] md:w-[180px]">
          <Phone
            screen="vault"
            sizes="(min-width: 768px) 180px, (min-width: 640px) 150px, 100px"
            className="shadow-[0_24px_60px_rgba(15,23,42,0.35)]"
          />
        </div>
        <div className="absolute top-0 left-1/2 z-10 w-[150px] -translate-x-1/2 sm:w-[178px] md:w-[210px]">
          <div className="animate-float">
            <Phone
              screen="ledger"
              priority
              sizes="(min-width: 768px) 210px, (min-width: 640px) 178px, 150px"
              className="shadow-[0_24px_60px_rgba(15,23,42,0.4)]"
            />
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute right-[-10%] bottom-[-70px] left-[-10%] z-20 h-[140px] rounded-t-[50%] bg-white md:bottom-[-60px] md:h-[150px]"
      />
    </section>
  );
}
