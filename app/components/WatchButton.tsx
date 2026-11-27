"use client";

import type { MouseEvent } from "react";
import { Play } from "lucide-react";
import { FEATURED_VIDEO_ID } from "@/app/lib/content";

export default function WatchButton() {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const video = document.getElementById(
      `video-${FEATURED_VIDEO_ID}`,
    ) as HTMLVideoElement | null;
    if (!video) return; // fall back to the plain #videos jump
    e.preventDefault();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    video.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "center",
    });
    // Same click, so the browser counts it as a user gesture.
    video.play()?.catch(() => {});
  };

  return (
    <a
      href="#videos"
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/15 px-5 py-3 text-[15px] font-semibold text-white ring-1 ring-white/30 transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
    >
      <Play size={18} aria-hidden="true" fill="currentColor" />
      Watch the 60-sec video
    </a>
  );
}
