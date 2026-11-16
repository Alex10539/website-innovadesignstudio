import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ClosingCTA from "../components/ClosingCTA";
import PortfolioGrid from "../components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Our Work — Custom Homes and Renovations in Moncton, NB | Innova Design Studio",
  description:
    "See custom homes, multi-unit buildings, and renovations designed by Innova Design Studio in Moncton, Dieppe, Riverview, and Shediac.",
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <PageHero
        title="Our Work"
        subtitle="Custom homes, multi-unit developments, and renovations across Atlantic Canada."
        image="/images/portfolio/renovations-32.jpg"
        tall
        imagePosition="center 62%"
        imageAlt="Beachfront home with a dark gabled roof and a glass-enclosed timber pergola"
      />
      <section className="mx-auto w-full max-w-5xl px-6 py-14">
        <PortfolioGrid />
      </section>
      <ClosingCTA heading="Like what you see?" body="Let's talk about your project." />
      <Footer />
    </>
  );
}
