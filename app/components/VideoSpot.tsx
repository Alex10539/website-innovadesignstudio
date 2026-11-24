"use client";

import { useState } from "react";
import Image from "next/image";
import { track, pageName } from "../lib/analytics";

type Props = {
  /** YouTube video ID (the part after youtu.be/ or /shorts/) */
  videoId: string;
  /** Used for the player's accessible title and the analytics event */
  title: string;
  heading: string;
  blurb: string;
  /** A still shown until someone taps play, so the page loads without pulling in YouTube. */
  poster: string;
  posterAlt: string;
  posterPosition?: string;
  /** What is said in the video, shown under it for readers and search engines. */
  transcript: string;
  /** Put the video on the right on wide screens. */
  flip?: boolean;
};

export default function VideoSpot({
  videoId,
  title,
  heading,
  blurb,
  poster,
  posterAlt,
  posterPosition = "center",
  transcript,
  flip = false,
}: Props) {
  const [playing, setPlaying] = useState(false);

  function play() {
    setPlaying(true);
    track("video_play", { video_title: title, video_id: videoId, page: pageName() });
  }

  return (
    <div
      className={`grid items-center gap-8 sm:gap-12 sm:grid-cols-[minmax(0,280px)_1fr] ${
        flip ? "sm:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="mx-auto w-full max-w-[280px]">
        <div className="relative aspect-[9/16] w-full overflow-hidden bg-ink shadow-lg">
          {playing ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1&modestbranding=1`}
              title={title}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <button
              type="button"
              onClick={play}
              aria-label={`Play video: ${title}`}
              className="group absolute inset-0 block h-full w-full cursor-pointer"
            >
              <Image
                src={poster}
                alt={posterAlt}
                fill
                sizes="280px"
                className="object-cover"
                style={{ objectPosition: posterPosition }}
              />
              <span className="absolute inset-0 bg-ink/30 transition-colors group-hover:bg-ink/20" />
              <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform group-hover:scale-105">
                <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-accent">Watch</p>
        <h3 className="mt-3 font-heading text-2xl font-bold">{heading}</h3>
        <p className="mt-3 max-w-xl leading-relaxed text-ink/60">{blurb}</p>
        <details className="mt-6 max-w-xl border-t border-cream-300 pt-4">
          <summary className="cursor-pointer text-sm font-bold text-ink">Read what is said</summary>
          <p className="mt-3 text-sm leading-relaxed text-ink/60">{transcript}</p>
        </details>
      </div>
    </div>
  );
}
