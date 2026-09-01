export default function ClosingCTA({
  heading,
  body,
  buttonLabel = "Book a free consult",
}: {
  heading: string;
  body: string;
  buttonLabel?: string;
}) {
  return (
    <section className="bg-cream-100 px-6 py-28 text-center">
      <h2 className="font-heading text-2xl font-bold sm:text-3xl">{heading}</h2>
      <p className="mx-auto mt-3 max-w-md text-ink/60">{body}</p>
      <a
        href="/contact"
        className="mt-8 inline-block rounded-none bg-accent px-8 py-4 text-sm font-bold tracking-wide text-white hover:opacity-90"
      >
        {buttonLabel}
      </a>
    </section>
  );
}
