"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

export default function SimplePhotoGrid({
  images,
  label = "Photo",
}: {
  images: string[];
  label?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div>
      <div className="columns-1 gap-x-3 sm:columns-2 lg:columns-3">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setActiveIndex(i)}
            className="group relative mb-3 block w-full overflow-hidden bg-cream-200 break-inside-avoid"
            style={{ aspectRatio: i % 3 === 1 ? "3/4" : "4/5" }}
          >
            <Image
              src={src}
              alt={`${label} — photo ${i + 1} of ${images.length}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/10" />
          </button>
        ))}
      </div>
      <Lightbox
        images={activeIndex === null ? null : images}
        initialIndex={activeIndex ?? 0}
        onClose={() => setActiveIndex(null)}
        label={label}
      />
    </div>
  );
}
