import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ClosingCTA from "../components/ClosingCTA";
import ProjectGrid from "../components/ProjectGrid";
import JsonLd from "../components/JsonLd";
import { multiUnitProjects } from "../lib/portfolio-data";
import { SITE_URL, SITE_NAME } from "../lib/site";

export const metadata: Metadata = {
  title: "Multi-Unit Design | Innova Design Studio | Atlantic Canada",
  description:
    "Multi-unit residential design for developers across Atlantic Canada — bylaw and zoning risk handled before it costs you time or money.",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Multi-Unit Residential Design",
  name: "Multi-Unit Design",
  provider: { "@type": "LocalBusiness", name: SITE_NAME, url: SITE_URL },
  areaServed: "Atlantic Canada",
  url: `${SITE_URL}/multi-unit`,
};

const included = [
  "Site and zoning/bylaw assessment",
  "Density and layout planning",
  "Preliminary design concepts and refinement",
  "Construction drawings",
  "Full permitting process and municipal coordination",
  "Ongoing coordination through construction",
];

const whyUs = [
  {
    n: "01",
    title: "Approval risk, handled early",
    desc: "Bylaw review happens before design is finalized, not after.",
  },
  {
    n: "02",
    title: "One studio, full lifecycle",
    desc: "No handoffs between separate design and permitting consultants.",
  },
  {
    n: "03",
    title: "Local, regional knowledge",
    desc: "Familiarity with how Atlantic Canada municipalities actually evaluate multi-unit proposals.",
  },
];

export default function MultiUnitPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <Header />
      <PageHero
        title="Multi-Unit Design"
        subtitle="Design and approvals for developers building beyond a single home — with bylaw and zoning risk handled before it becomes a costly surprise."
        image="/images/portfolio/multi-unit-4.jpg"
        imageAlt="Row of attached multi-unit townhomes with matching gable rooflines, designed by Innova Design Studio"
      />

      <section className="mx-auto w-full max-w-2xl px-6 py-24 text-center">
        <p className="font-heading text-xl leading-relaxed text-ink sm:text-2xl">
          Multi-unit projects live or die on approvals.
        </p>
        <p className="mx-auto mt-6 max-w-lg text-ink/60">
          A design that looks great on paper but doesn&apos;t match zoning, density, or
          setback requirements doesn&apos;t just get modified — it gets delayed, and delays
          cost money. Innova designs multi-unit residential projects across Atlantic Canada
          — and we don&apos;t hand you a set of drawings that surprises you at the permit
          office.
        </p>
      </section>

      <section className="border-y border-cream-300 bg-cream-100 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 font-heading text-xl font-bold sm:text-2xl">
            What&apos;s included
          </h2>
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-ink/70">
                <span className="text-accent">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 py-24">
        <h2 className="mb-12 font-heading text-2xl font-bold">
          Why developers work with Innova
        </h2>
        <div className="grid gap-12 sm:grid-cols-3">
          {whyUs.map((d) => (
            <div key={d.n}>
              <div className="font-heading text-sm font-bold text-accent">{d.n}</div>
              <h3 className="mt-3 font-heading text-lg font-bold">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-cream-300 bg-cream-100 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 font-heading text-2xl font-bold">Recent projects</h2>
          <ProjectGrid projects={multiUnitProjects} type="Multi-Unit" />
        </div>
      </section>

      <ClosingCTA
        heading="Planning a multi-unit development?"
        body="Let's talk about your site, your timeline, and what's actually possible."
        buttonLabel="Discuss your development"
      />
      <Footer />
    </>
  );
}
