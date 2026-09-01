import type { Metadata } from "next";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ClosingCTA from "../components/ClosingCTA";

export const metadata: Metadata = {
  title: "About | Innova Design Studio | Atlantic Canada",
  description:
    "Innova Design Studio is a residential design studio built around one idea — a great home shouldn't get stuck in permitting.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageHero
        title="About Innova"
        subtitle="A residential design studio built around one idea — a great home shouldn't get stuck in permitting."
        image="/images/portfolio/custom-homes-38.jpg"
        imageAlt="Bright open-concept living and dining space with a vaulted wood ceiling, designed by Innova Design Studio"
      />

      <section className="mx-auto w-full max-w-4xl px-6 py-24">
        <div className="grid gap-12 sm:grid-cols-[280px_1fr] sm:items-start">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden bg-cream-200">
            <Image
              src="/images/about-headshot.jpg"
              alt="Alexander Corasaniti, founder of Innova Design Studio"
              fill
              sizes="(min-width: 640px) 280px, 60vw"
              className="object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <p className="font-heading text-xl leading-relaxed text-ink sm:text-2xl">
              Innova Design Studio was built around a simple observation: residential
              clients deserved better.
            </p>
            <p className="mx-auto mt-6 max-w-lg text-ink/60 sm:mx-0">
              Founder Alexander Corasaniti spent his early career working across firms in
              New Brunswick — and watched the same pattern repeat. When commercial
              projects came in, residential homeowners got pushed to the back burner.
              People would call asking for updates on the most personal project of their
              lives and get no real answer.
            </p>
            <p className="mx-auto mt-4 max-w-lg text-ink/60 sm:mx-0">
              He started Innova to fix that. Ten years and 200+ homes later, that&apos;s
              still what the studio is built around.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-cream-300 bg-cream-100 px-6 py-24 text-center">
        <h2 className="mb-6 font-heading text-2xl font-bold">How we work</h2>
        <p className="mx-auto max-w-lg text-ink/60">
          Innova is a small, focused studio — not a one-person shop, but not a large firm
          either. Our team works across Atlantic Canada, some in-office and some remote, so
          every project gets dedicated attention without the overhead of a big office.
        </p>
      </section>

      <ClosingCTA
        heading="Let's build something together."
        body="Book a free consult — no obligation, just a conversation."
      />
      <Footer />
    </>
  );
}
