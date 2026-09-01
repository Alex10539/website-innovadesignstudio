import Image from "next/image";

export default function ProjectTile({
  type,
  image,
  photoCount = 1,
  aspect = "4/5",
  onClick,
}: {
  type: string;
  image: string;
  photoCount?: number;
  aspect?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative block w-full overflow-hidden bg-cream-200 text-left"
      style={{ aspectRatio: aspect }}
    >
      <Image
        src={image}
        alt={`${type} project by Innova Design Studio, Atlantic Canada`}
        fill
        sizes="(min-width: 640px) 33vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="absolute bottom-5 left-5 flex items-baseline gap-2 opacity-0 transition-opacity group-hover:opacity-100">
        <span className="text-xs font-bold uppercase tracking-widest text-white">{type}</span>
        {photoCount > 1 && (
          <span className="text-xs text-white/60">· {photoCount} photos</span>
        )}
      </div>
    </button>
  );
}
