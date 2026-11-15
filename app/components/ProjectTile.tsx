import Image from "next/image";
import { blurFor } from "../lib/blur-data";

export default function ProjectTile({
  type,
  image,
  title,
  alt,
  location,
  photoCount = 1,
  aspect = "4/5",
  onClick,
}: {
  type: string;
  image: string;
  title?: string;
  alt?: string;
  location?: string;
  photoCount?: number;
  aspect?: string;
  onClick?: () => void;
}) {
  const blur = blurFor(image);
  const meta = [type, location, `${photoCount} ${photoCount === 1 ? "photo" : "photos"}`]
    .filter(Boolean)
    .join(" · ");

  return (
    <button
      onClick={onClick}
      className="group relative block w-full overflow-hidden bg-cream-200 text-left"
      style={{ aspectRatio: aspect }}
    >
      <Image
        src={image}
        alt={alt ?? `${type} project by Innova Design Studio, Atlantic Canada`}
        fill
        sizes="(min-width: 640px) 33vw, 100vw"
        placeholder={blur ? "blur" : "empty"}
        blurDataURL={blur}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        {title && (
          <div className="font-heading text-base font-bold leading-snug text-white">{title}</div>
        )}
        <div className="mt-1 text-[11px] font-bold uppercase tracking-widest text-white/75">
          {meta}
        </div>
      </div>
    </button>
  );
}
