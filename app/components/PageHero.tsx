import Image from "next/image";
import { blurFor } from "../lib/blur-data";

export default function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
  tall = false,
  imagePosition = "center",
}: {
  title: string;
  subtitle: string;
  image?: string;
  imageAlt?: string;
  /** Big photo-first banner: taller, lighter overlay, text sits at the bottom */
  tall?: boolean;
  /** CSS object-position for the photo, e.g. "center 55%" */
  imagePosition?: string;
}) {
  return (
    <section
      className={
        tall
          ? "relative flex min-h-[400px] items-end justify-center overflow-hidden bg-ink px-6 pb-14 pt-32 text-center sm:min-h-[620px] lg:min-h-[75vh]"
          : "relative overflow-hidden bg-ink px-6 py-24 text-center sm:py-32"
      }
    >
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            sizes="100vw"
            priority
            placeholder={blurFor(image) ? "blur" : "empty"}
            blurDataURL={blurFor(image)}
            className={`object-cover ${tall ? "opacity-100" : "opacity-55"}`}
            style={{ objectPosition: imagePosition }}
          />
          <div
            className={
              tall
                ? "absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-ink/10"
                : "absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30"
            }
          />
        </>
      )}
      <div className="relative z-10">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-white/85">{subtitle}</p>
      </div>
    </section>
  );
}
