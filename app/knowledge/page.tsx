import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ClosingCTA from "../components/ClosingCTA";

export const metadata: Metadata = {
  title: "Knowledge | Innova Design Studio | Atlantic Canada",
  description:
    "Straight answers to the questions people ask us most before starting a custom home, multi-unit, or renovation project in Atlantic Canada.",
};

const articles = [
  {
    title: "How long does it take to get a building permit in Atlantic Canada?",
    brief:
      "Realistic timeline expectations, what affects them, and how a bylaw review up front shortens the process.",
  },
  {
    title: "Custom home vs. renovation: what's the real cost difference?",
    brief: "A framework for thinking about the tradeoff between building new and renovating.",
  },
  {
    title: "What does a residential designer do vs. an architect?",
    brief: "Clarifying a commonly-asked comparison question for people weighing their options.",
  },
  {
    title: "Bylaw compliance 101 for homeowners planning an addition",
    brief:
      "A plain-language overview of what zoning, setback, and height rules mean in practice.",
  },
  {
    title: "What developers should know before starting a multi-unit project",
    brief: "Density, zoning, and approval risk — the developer-focused version.",
  },
  {
    title: "Design + permitting timeline: what to expect start to finish",
    brief: "Walks through our 6-phase process with realistic timeframes attached to each phase.",
  },
];

export default function KnowledgePage() {
  return (
    <>
      <Header />
      <PageHero
        title="Knowledge"
        subtitle="Straight answers to the questions people ask us most before starting a project."
        image="/images/portfolio/custom-homes-33.jpg"
        imageAlt="Cozy living room detail with a lit fireplace and styled coffee table, from an Innova Design Studio project"
      />
      <section className="mx-auto w-full max-w-3xl px-6 py-14">
        <div className="flex flex-col divide-y divide-cream-300">
          {articles.map((a) => (
            <div key={a.title} className="py-6">
              <h2 className="font-heading font-bold">{a.title}</h2>
              <p className="mt-1 text-sm text-ink/70">{a.brief}</p>
              <span className="mt-2 inline-block text-xs italic text-ink/40">
                Full article coming soon
              </span>
            </div>
          ))}
        </div>
      </section>
      <ClosingCTA
        heading="Still have questions?"
        body="Book a free consult and ask us directly."
      />
      <Footer />
    </>
  );
}
