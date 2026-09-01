import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ClosingCTA from "../components/ClosingCTA";
import SimplePhotoGrid from "../components/SimplePhotoGrid";

export const metadata: Metadata = {
  title: "Currently Building | Innova Design Studio | Atlantic Canada",
  description:
    "A behind-the-scenes look at what Innova Design Studio is building right now across Atlantic Canada.",
};

const images = Array.from(
  { length: 18 },
  (_, i) => `/images/current-builds/build-${i + 1}.jpg`
);

export default function CurrentBuildsPage() {
  return (
    <>
      <Header />
      <PageHero
        title="Currently Building"
        subtitle="Real photos from real job sites — a look at what's underway right now across Atlantic Canada."
        image="/images/current-builds/build-1.jpg"
        imageAlt="Interior view of a home's roof framing during construction"
      />

      <section className="mx-auto w-full max-w-2xl px-6 py-16 text-center">
        <p className="text-ink/60">
          Our finished-project galleries show the end result. This page shows the part
          in between — framing, site visits, and work in progress on active builds.
        </p>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-24">
        <SimplePhotoGrid images={images} label="Active job site" />
      </section>

      <ClosingCTA
        heading="Want to start your own project?"
        body="Book a free consult — no obligation, just a conversation about what's possible."
      />
      <Footer />
    </>
  );
}
