import JsonLd from "./JsonLd";
import { renderInline, stripLinks } from "../lib/inline";
import type { Faq } from "../lib/faqs";

/** Visible questions and answers, plus matching FAQ structured data */
export default function FaqSection({ heading, faqs }: { heading: string; faqs: Faq[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: stripLinks(f.a) },
    })),
  };

  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-16">
      <JsonLd data={jsonLd} />
      <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">{heading}</h2>
      <dl className="mt-8 divide-y divide-cream-300 border-y border-cream-300">
        {faqs.map((f) => (
          <div key={f.q} className="py-6">
            <dt className="font-heading font-bold text-ink">{f.q}</dt>
            <dd className="mt-2 leading-relaxed text-ink/70">{renderInline(f.a)}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
