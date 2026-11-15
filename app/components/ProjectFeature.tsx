"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import { blurFor } from "../lib/blur-data";

/**
 * One project = one card: a big cover photo plus two smaller ones, with the rest
 * of the photos one tap away in the gallery viewer.
 */
export default function ProjectFeature({
  id,
  title,
  status,
  description,
  images,
  alts,
  preview = [0, 1, 2],
}: {
  /** Anchor id for jump links */
  id: string;
  title: string;
  /** Small label next to the title, e.g. "Finished". Leave out if unsure. */
  status?: string;
  description: string;
  images: string[];
  /** Alt text per photo, same order as `images` */
  alts: string[];
  /** Which photos (indexes) fill the cover and the two small tiles */
  preview?: [number, number, number];
}) {
  const [openAt, setOpenAt] = useState<number | null>(null);
  const [cover, thumb1, thumb2] = preview;
  const more = images.length - 3;

  const tile = (i: number, className: string, sizes: string, overlay?: React.ReactNode) => (
    <button
      onClick={() => setOpenAt(i)}
      aria-label={`Open the ${title} photo gallery`}
      className={`group relative block overflow-hidden bg-cream-200 ${className}`}
    >
      <Image
        src={images[i]}
        alt={alts[i]}
        fill
        sizes={sizes}
        placeholder={blurFor(images[i]) ? "blur" : "empty"}
        blurDataURL={blurFor(images[i])}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {overlay}
    </button>
  );

  return (
    <article id={id} className="scroll-mt-24">
      <div className="flex flex-wrap items-center gap-3">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">{title}</h2>
        {status && (
          <span className="bg-accent px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
            {status}
          </span>
        )}
      </div>
      <p className="mt-3 max-w-xl text-ink/60">{description}</p>

      <div className="mt-8 grid grid-cols-2 gap-2 sm:h-[460px] sm:grid-cols-3 sm:grid-rows-2">
        {tile(cover, "col-span-2 aspect-[4/3] sm:aspect-auto sm:row-span-2", "(min-width: 640px) 66vw, 100vw")}
        {tile(thumb1, "aspect-square sm:aspect-auto", "(min-width: 640px) 33vw, 50vw")}
        {tile(
          thumb2,
          "aspect-square sm:aspect-auto",
          "(min-width: 640px) 33vw, 50vw",
          more > 0 ? (
            <div className="absolute inset-0 flex items-center justify-center bg-ink/55 font-heading text-lg font-bold text-white">
              +{more} more
            </div>
          ) : undefined,
        )}
      </div>

      <button
        onClick={() => setOpenAt(cover)}
        className="mt-5 text-sm font-bold text-accent hover:opacity-80"
      >
        View all {images.length} photos →
      </button>

      <Lightbox
        images={openAt === null ? null : images}
        initialIndex={openAt ?? 0}
        onClose={() => setOpenAt(null)}
        label={title}
        alts={alts}
        caption={title}
        meta={status}
      />
    </article>
  );
}
