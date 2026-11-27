import Image from "next/image";
import { Download } from "lucide-react";
import { PLAY_BADGE_SRC, PLAY_STORE_URL } from "@/app/lib/site";

const SIZES = {
  sm: "px-3.5 py-2 text-[13px] gap-1.5",
  md: "px-5 py-3 text-[15px] gap-2",
  lg: "px-6 py-3.5 text-base gap-2.5",
} as const;

const ICON = { sm: 15, md: 18, lg: 20 } as const;
const BADGE_H = { sm: 36, md: 48, lg: 56 } as const;

export function PlayButton({
  size = "md",
  tone = "dark",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  tone?: "light" | "dark";
  className?: string;
}) {
  if (PLAY_BADGE_SRC) {
    return (
      <a
        href={PLAY_STORE_URL}
        className={`inline-block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint ${className}`}
      >
        <Image
          src={PLAY_BADGE_SRC}
          alt="Get it on Google Play"
          width={Math.round(BADGE_H[size] * 3.375)}
          height={BADGE_H[size]}
        />
      </a>
    );
  }
  const colours =
    tone === "light"
      ? "bg-white text-ink hover:bg-tint"
      : "bg-ink text-white hover:bg-slate-800";
  return (
    <a
      href={PLAY_STORE_URL}
      aria-label={size === "sm" ? "Get the app on Google Play" : undefined}
      className={`inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint ${SIZES[size]} ${colours} ${className}`}
    >
      <Download size={ICON[size]} aria-hidden="true" />
      {size === "sm" ? "Get the app" : "Get Finzz on Google Play"}
    </a>
  );
}
