import Image from "next/image";
import { blurFor } from "../lib/blur-data";

/**
 * A portfolio card: photo with an always-visible type + photo-count label, and the
 * project's title, confirmed facts, and description as real text underneath.
 */
export default function ProjectTile({
  type,
  image,
  title,
  description,
  facts,
  alt,
  photoCount = 1,
  aspect = "4/3",
  onClick,
}: {
  type: string;
  image: string;
  title?: string;
  description?: string;
  /** e.g. "Moncton, NB · 2,400 sq ft" — only confirmed facts */
  facts?: string;
  alt?: string;
  photoCount?: number;
  aspect?: string;
  onClick?: () => void;
}) {
  const blur = blurFor(image);
  const count = `${photoCount} ${photoCount === 1 ? "photo" : "photos"}`;

  return (
    <button onClick={onClick} className="group block w-full text-left">
      <span
        className="relative block w-full overflow-hidden bg-cream-200"
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={image}
          alt={alt ?? `${type} project by Innova Design Studio, Atlantic Canada`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          placeholder={blur ? "blur" : "empty"}
          blurDataURL={blur}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 bg-ink/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
          {type} · {count}
        </span>
      </span>
      {title && (
        <span className="mt-3 block font-heading text-base font-bold leading-snug text-ink transition-colors group-hover:text-accent">
          {title}
        </span>
      )}
      {facts && (
        <span className="mt-1 block text-[11px] font-bold uppercase tracking-widest text-accent">
          {facts}
        </span>
      )}
      {description && (
        <span className="mt-1.5 block text-sm leading-relaxed text-ink/65">{description}</span>
      )}
    </button>
  );
}
