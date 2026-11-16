import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import JsonLd from "../../components/JsonLd";
import { CALCULATOR_URL } from "../../components/CalculatorCta";
import { articles, getArticle } from "../../lib/articles";
import { SITE_URL, SITE_NAME } from "../../lib/site";
import { renderInline, stripLinks } from "../../lib/inline";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | ${SITE_NAME}, Moncton NB`,
    description: article.summary,
    alternates: { canonical: `/knowledge/${article.slug}` },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = article.related
    .map((s) => getArticle(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    image: `${SITE_URL}${article.image}`,
    mainEntityOfPage: `${SITE_URL}/knowledge/${article.slug}`,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: stripLinks(f.a) },
    })),
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqJsonLd} />
      <Header />
      <PageHero
        title={article.title}
        subtitle={article.category}
        image={article.image}
        imageAlt={article.imageAlt}
      />

      <article className="mx-auto w-full max-w-2xl px-6 py-16">
        <p className="mb-8 text-sm">
          <a href="/knowledge" className="font-bold text-accent">
            ← All articles
          </a>
        </p>

        <div className="flex flex-col gap-5">
          {article.blocks.map((b, i) =>
            b.type === "h2" ? (
              <h2 key={i} className="mt-5 font-heading text-xl font-bold text-ink sm:text-2xl">
                {renderInline(b.text)}
              </h2>
            ) : (
              <p key={i} className="leading-relaxed text-ink/75">
                {renderInline(b.text)}
              </p>
            ),
          )}
        </div>

        <section className="mt-14 border-t border-cream-300 pt-10">
          <h2 className="font-heading text-xl font-bold text-ink sm:text-2xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6">
            {article.faq.map((f) => (
              <div key={f.q}>
                <dt className="font-heading font-bold text-ink">{f.q}</dt>
                <dd className="mt-1.5 leading-relaxed text-ink/75">{renderInline(f.a)}</dd>
              </div>
            ))}
          </dl>
        </section>
      </article>

      <section className="bg-ink px-6 py-16 text-center">
        <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
          {article.cta.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">{article.cta.body}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/contact"
            className="rounded-none bg-accent px-8 py-4 text-sm font-bold tracking-wide text-white shadow-lg transition-opacity hover:opacity-90"
          >
            Book a free consult
          </a>
          {article.cta.showCalculator && (
            <a
              href={CALCULATOR_URL}
              className="rounded-none border border-white px-8 py-4 text-sm font-bold tracking-wide text-white transition-colors hover:bg-white/10"
            >
              Try the cost calculator →
            </a>
          )}
          <a href="tel:5063004380" className="text-sm font-bold text-white hover:opacity-80">
            Call 506-300-4380
          </a>
        </div>
      </section>

      <section className="mx-auto w-full max-w-2xl px-6 py-14">
        <h2 className="font-heading text-lg font-bold text-ink">Keep reading</h2>
        <ul className="mt-5 space-y-4">
          {related.map((r) => (
            <li key={r.slug}>
              <a href={`/knowledge/${r.slug}`} className="group block">
                <span className="font-heading font-bold text-ink group-hover:text-accent">
                  {r.title}
                </span>
                <span className="mt-1 block text-sm text-ink/60">{r.summary}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </>
  );
}
