"use client";

import { useRef, type SyntheticEvent } from "react";
import { FEATURED_VIDEO_ID, VIDEOS, type Video } from "@/app/lib/content";
import { Reveal } from "@/app/components/ui/Reveal";
import { SectionHeading } from "@/app/components/ui/SectionHeading";

function formatLength(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function VideoCard({ video, featured }: { video: Video; featured?: boolean }) {
  return (
    <figure className="min-w-0">
      <div className="aspect-[9/16] overflow-hidden rounded-3xl bg-night shadow-lg ring-1 ring-line">
        <video
          id={`video-${video.id}`}
          className="h-full w-full object-cover"
          controls
          playsInline
          preload="none"
          poster={video.poster}
          src={`/videos/${video.file}`}
        />
      </div>
      <figcaption className="mt-3 px-1">
        <p
          lang={video.lang}
          className={`font-display font-bold leading-snug text-ink ${
            featured ? "text-lg" : "text-sm sm:text-base"
          }`}
        >
          {video.title}
        </p>
        <p className="mt-0.5 text-xs font-medium text-muted">
          {formatLength(video.seconds)}
        </p>
      </figcaption>
    </figure>
  );
}

export function Videos() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Play does not bubble in the DOM, but React's capture handler sees it.
  const onPlayCapture = (e: SyntheticEvent<HTMLDivElement>) => {
    const playing = e.target as HTMLElement;
    rootRef.current?.querySelectorAll("video").forEach((v) => {
      if (v !== playing && !v.paused) v.pause();
    });
  };

  const featured = VIDEOS.find((v) => v.id === FEATURED_VIDEO_ID) ?? VIDEOS[0];
  const others = VIDEOS.filter((v) => v.id !== featured.id);

  return (
    <section id="videos" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="See it in action"
            title="Watch Finzz in a minute"
          />
        </Reveal>
        <Reveal>
          <div
            ref={rootRef}
            onPlayCapture={onPlayCapture}
            className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:items-start lg:gap-10"
          >
            <div className="mx-auto w-full max-w-xs lg:mx-0 lg:max-w-none">
              <VideoCard video={featured} featured />
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 md:gap-x-6">
              {others.map((v) => (
                <VideoCard key={v.id} video={v} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Videos;
