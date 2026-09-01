"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Lightbox({
  images,
  initialIndex = 0,
  onClose,
  label = "Photo",
}: {
  images: string[] | null;
  initialIndex?: number;
  onClose: () => void;
  label?: string;
}) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    setIndex(initialIndex);
  }, [images, initialIndex]);

  useEffect(() => {
    if (!images) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [images, onClose]);

  if (!images) return null;
  const hasMultiple = images.length > 1;

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-ink/90 p-4 sm:p-8"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-white hover:bg-white/20 sm:right-6 sm:top-6"
      >
        ×
      </button>

      <div className="relative flex w-full flex-1 items-center justify-center">
        {hasMultiple && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i - 1 + images.length) % images.length);
            }}
            aria-label="Previous photo"
            className="absolute left-0 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl font-bold text-white hover:bg-white/20 sm:left-2"
          >
            ‹
          </button>
        )}

        <div
          className="relative h-full max-h-[70vh] w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[index]}
            alt={`${label} — photo ${index + 1} of ${images.length}`}
            fill
            sizes="90vw"
            className="object-contain"
          />
        </div>

        {hasMultiple && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i + 1) % images.length);
            }}
            aria-label="Next photo"
            className="absolute right-0 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl font-bold text-white hover:bg-white/20 sm:right-2"
          >
            ›
          </button>
        )}
      </div>

      {hasMultiple && (
        <div
          className="mt-4 flex max-w-full gap-2 overflow-x-auto px-2 pb-1"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setIndex(i)}
              className="relative h-14 w-14 shrink-0 overflow-hidden sm:h-16 sm:w-16"
              style={{
                outline: i === index ? "2px solid white" : "2px solid transparent",
                outlineOffset: "2px",
              }}
            >
              <Image
                src={src}
                alt={`${label} thumbnail ${i + 1} of ${images.length}`}
                fill
                sizes="64px"
                className="object-cover opacity-70 hover:opacity-100"
                style={i === index ? { opacity: 1 } : undefined}
              />
            </button>
          ))}
        </div>
      )}

      {hasMultiple && (
        <div className="mt-2 text-sm font-bold text-white/70">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
