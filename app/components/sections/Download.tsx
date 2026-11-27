import { PlayButton } from "@/app/components/ui/PlayButton";
import { Reveal } from "@/app/components/ui/Reveal";

export function Download() {
  return (
    <section id="download" className="px-4 pb-20 sm:px-6 md:pb-28">
      <Reveal className="mx-auto max-w-6xl">
        <div className="bg-brand-gradient flex flex-col items-center gap-10 rounded-3xl px-6 py-14 text-center text-white sm:px-12 sm:py-16 lg:flex-row lg:justify-between lg:text-left">
          <div className="min-w-0">
            <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl">
              Start your first shared ledger.
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-white/85 max-lg:mx-auto">
              Free on Android. Takes a minute to sign up.
            </p>
            <div className="mt-8">
              <PlayButton tone="light" size="lg" />
            </div>
          </div>
          <div className="hidden shrink-0 flex-col items-center gap-3 rounded-2xl bg-white p-4 shadow-lg lg:flex">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/qr-play.svg"
              width={128}
              height={128}
              loading="lazy"
              alt="QR code: Finzz on Google Play"
            />
            <p className="text-sm font-medium text-body">Scan on your phone</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
