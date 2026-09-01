import Image from "next/image";

export default function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
}: {
  title: string;
  subtitle: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-24 text-center sm:py-32">
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        </>
      )}
      <div className="relative z-10">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-white/75">{subtitle}</p>
      </div>
    </section>
  );
}
