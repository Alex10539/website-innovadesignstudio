import { getArticle } from "../lib/articles";

/** Links to Knowledge articles, shown on the matching service page */
export default function HelpfulReading({ slugs }: { slugs: string[] }) {
  const items = slugs
    .map((s) => getArticle(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-16">
      <h2 className="font-heading text-xl font-bold sm:text-2xl">Helpful reading</h2>
      <ul className="mt-6 grid gap-6 sm:grid-cols-2">
        {items.map((a) => (
          <li key={a.slug}>
            <a href={`/knowledge/${a.slug}`} className="group block border border-cream-300 p-5 transition-colors hover:border-accent">
              <span className="text-[11px] font-bold uppercase tracking-widest text-accent">
                {a.category}
              </span>
              <span className="mt-1 block font-heading font-bold group-hover:text-accent">
                {a.title}
              </span>
              <span className="mt-2 block text-sm text-ink/60">{a.summary}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
