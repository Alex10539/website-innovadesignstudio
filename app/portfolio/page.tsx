import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ClosingCTA from "../components/ClosingCTA";
import PortfolioGrid from "../components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Our Work | Innova Design Studio | Atlantic Canada",
  description:
    "Custom homes, multi-unit developments, and renovations designed by Innova Design Studio across Atlantic Canada.",
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <PageHero
        title="Our Work"
        subtitle="Custom homes, multi-unit developments, and renovations across Atlantic Canada."
        image="/images/portfolio/custom-homes-1.jpg"
        imageAlt="Custom home exterior with a stone base, dark wood siding, and a glass observation tower, designed by Innova Design Studio"
      />
      <section className="mx-auto w-full max-w-5xl px-6 py-14">
        <PortfolioGrid />
      </section>
      <ClosingCTA heading="Like what you see?" body="Let's talk about your project." />
      <Footer />
    </>
  );
}
