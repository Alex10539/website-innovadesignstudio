import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ClosingCTA from "../components/ClosingCTA";
import ProjectGrid from "../components/ProjectGrid";
import JsonLd from "../components/JsonLd";
import { renovationProjects } from "../lib/portfolio-data";
import { SITE_URL, SITE_NAME } from "../lib/site";

export const metadata: Metadata = {
  title: "Renovations & Additions | Innova Design Studio | Atlantic Canada",
  description:
    "Renovation and addition design across Atlantic Canada — designed to fit your existing home, approved to build.",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Renovation and Addition Design",
  name: "Renovations & Additions",
  provider: { "@type": "LocalBusiness", name: SITE_NAME, url: SITE_URL },
  areaServed: "Atlantic Canada",
  url: `${SITE_URL}/renovations-additions`,
};

const included = [
  "Initial consultation and vision planning",
  "Onsite measuring of the existing home",
  "Site and bylaw/code review specific to your existing property",
  "Design concepts that work with your home's existing structure",
  "Construction drawings",
  "Full permitting process and municipal coordination",
  "Ongoing support through construction",
];

const projectTypes = [
  "Kitchen and interior renovations",
  "Home additions (expanding livable space)",
  "Garage additions",
  "New exterior additions",
  "Multi-generational / secondary suite additions",
  "Structural updates tied to a renovation",
];

export default function RenovationsPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <Header />
      <PageHero
        title="Renovations & Additions"
        subtitle="Thoughtful updates and additions to the home you already have — designed to fit, approved to build."
        image="/images/portfolio/renovations-2.jpg"
        imageAlt="Renovated kitchen with white cabinetry, marble-look countertops, and gold hardware, by Innova Design Studio"
      />

      <section className="mx-auto w-full max-w-2xl px-6 py-24 text-center">
        <p className="font-heading text-xl leading-relaxed text-ink sm:text-2xl">
          Not every project starts from an empty lot.
        </p>
        <p className="mx-auto mt-6 max-w-lg text-ink/60">
          Renovations and additions come with their own constraints — matching what&apos;s
          already there, working within your existing structure and property lines, and
          getting municipal approval for a home built under different bylaws than the ones
          in effect today. Innova designs renovations and additions that work with what
          you have — so the project you&apos;re excited about stays that way from start
          to finish.
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

      <section className="mx-auto w-full max-w-3xl px-6 py-24">
        <h2 className="mb-10 font-heading text-2xl font-bold">Common project types</h2>
        <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {projectTypes.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-ink/70">
              <span className="text-accent">—</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-cream-300 bg-cream-100 px-6 py-24">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="mb-10 font-heading text-2xl font-bold">Recent projects</h2>
          <ProjectGrid projects={renovationProjects} type="Renovation" />
        </div>
      </section>

      <ClosingCTA
        heading="Thinking about a renovation or addition?"
        body="Book a free consult — let's talk about what's possible with your existing home."
      />
      <Footer />
    </>
  );
}
