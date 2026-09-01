import type { Metadata } from "next";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ClosingCTA from "../components/ClosingCTA";

export const metadata: Metadata = {
  title: "Our Process | Innova Design Studio | Atlantic Canada",
  description:
    "From first sketch to final build — how Innova Design Studio designs, permits, and delivers residential projects across Atlantic Canada.",
};

const phases = [
  {
    n: "01",
    title: "Initial Consultation",
    body: "Every project begins with a conversation. We discuss your vision, functional needs, style preferences, and scope. After the meeting, we prepare a project proposal outlining recommended services and next steps.",
  },
  {
    n: "02",
    title: "Bylaw & Code Review",
    body: "Before design begins, we conduct a thorough bylaw and code review to understand regulatory requirements — zoning regulations, setbacks, height restrictions, and land use guidelines — so the design aligns with local requirements from the start.",
    highlight: true,
  },
  {
    n: "03",
    title: "Design Phase",
    body: "With a clear understanding of your vision and site requirements, we move into the creative and technical core of the project: preliminary concepts, design refinement, material and feature planning, construction drawings, coordination-ready documentation, and optional 3D renderings.",
  },
  {
    n: "04",
    title: "Permitting Process",
    body: "We offer full permitting services — preparing and submitting required drawings, coordinating with municipal departments, and responding to review comments.",
  },
  {
    n: "05",
    title: "Construction Phase",
    body: "Once permits are in place and construction begins, we remain actively involved — site visits, design clarifications, detail review, problem-solving, and collaboration with your build team.",
  },
  {
    n: "06",
    title: "Contractor Coordination",
    body: "We work alongside your contractors, providing drawings, clarifications, and design input as needed throughout the build.",
  },
];

const siteImages = [
  {
    src: "/images/process/process-1.jpg",
    alt: "Aerial view of prefabricated wall panels staged for assembly at a construction site",
  },
  {
    src: "/images/process/process-2.jpg",
    alt: "Aerial view of a custom home under construction on a wooded lot, framing stage",
  },
  {
    src: "/images/process/process-3.jpg",
    alt: "Exterior framing wrapped in house wrap during construction, with a covered entry porch taking shape",
  },
  {
    src: "/images/process/process-4.jpg",
    alt: "Interior wall framing of a home under construction, showing window openings and floor plan layout",
  },
];

export default function ProcessPage() {
  return (
    <>
      <Header />
      <PageHero
        title="From First Sketch to Final Build."
        subtitle="Every project moves through the same six phases. The bylaw and code review happens early — before construction drawings begin — so the design you approve is the design that gets built. No surprises at the permit office. No redesigns after the fact."
        image="/images/process/process-2.jpg"
        imageAlt="Aerial view of a custom home under construction on a wooded lot, framing stage"
      />

      <section className="grid grid-cols-2 sm:grid-cols-4">
        {siteImages.map((img) => (
          <div key={img.src} className="relative aspect-square overflow-hidden bg-cream-200">
            <Image src={img.src} alt={img.alt} fill sizes="25vw" className="object-cover" />
          </div>
        ))}
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 py-24">
        <div className="flex flex-col">
          {phases.map((p, i) => (
            <div
              key={p.n}
              className={`grid gap-6 border-t border-cream-300 py-12 sm:grid-cols-[auto_1fr] sm:gap-16 ${
                i === phases.length - 1 ? "border-b" : ""
              }`}
            >
              <div
                className={`font-heading text-5xl font-bold sm:text-6xl ${
                  p.highlight ? "text-accent" : "text-ink/15"
                }`}
              >
                {p.n}
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold">{p.title}</h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-ink/60">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ClosingCTA
        heading="Start your project with confidence."
        body="Fill out our form and we'll get in touch to discuss timelines, feasibility, and design goals."
      />
      <Footer />
    </>
  );
}
