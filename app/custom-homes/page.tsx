import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ClosingCTA from "../components/ClosingCTA";
import ProjectGrid from "../components/ProjectGrid";
import JsonLd from "../components/JsonLd";
import { customHomeProjects } from "../lib/portfolio-data";
import { SITE_URL, SITE_NAME } from "../lib/site";

export const metadata: Metadata = {
  title: "Custom Home Design | Innova Design Studio | Atlantic Canada",
  description:
    "Custom home design across Atlantic Canada — from first sketch through permitting and construction-ready documentation.",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom Home Design",
  name: "Custom Home Design",
  provider: { "@type": "LocalBusiness", name: SITE_NAME, url: SITE_URL },
  areaServed: "Atlantic Canada",
  url: `${SITE_URL}/custom-homes`,
};

const included = [
  "Initial consultation and vision planning",
  "Site and bylaw/code review",
  "Preliminary design concepts and refinement",
  "Material and feature planning",
  "Construction drawings",
  "Optional 3D renderings",
  "Full permitting process, submission, and municipal coordination",
  "Ongoing support through construction",
];

export default function CustomHomesPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <Header />
      <PageHero
        title="Custom Homes"
        subtitle="A custom-built home is more than a house — it's a reflection of you. We design it, navigate the approvals, and hand you a project that's ready to build."
        image="/images/portfolio/custom-homes-40.jpg"
        imageAlt="Modern custom home with a wraparound covered deck, designed by Innova Design Studio"
      />

      <section className="mx-auto w-full max-w-2xl px-6 py-24 text-center">
        <p className="font-heading text-xl leading-relaxed text-ink sm:text-2xl">
          Building a custom home starts with a lot of decisions — and a lot of unknowns.
        </p>
        <p className="mx-auto mt-6 max-w-lg text-ink/60">
          What&apos;s actually possible on your lot? What will the municipality approve?
          How do you make sure the home you&apos;re imagining is the home that actually
          gets built?
        </p>
        <p className="mx-auto mt-4 max-w-lg text-ink/60">
          That&apos;s exactly what Innova is here for. We design custom homes built around
          how you live — and we carry that vision all the way through, from first sketch to
          a complete set of construction-ready plans, with every bylaw, code, and approval
          requirement handled along the way.
        </p>
        <p className="mx-auto mt-4 max-w-lg text-ink/60">
          So you can focus on building the home you actually want.
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

      <section className="mx-auto w-full max-w-5xl px-6 py-24">
        <h2 className="mb-10 font-heading text-2xl font-bold">Recent projects</h2>
        <ProjectGrid projects={customHomeProjects} type="Custom Home" />
      </section>

      <ClosingCTA
        heading="Ready to design your custom home?"
        body="Book a free consult — no obligation, just a conversation about what's possible on your lot."
      />
      <Footer />
    </>
  );
}
