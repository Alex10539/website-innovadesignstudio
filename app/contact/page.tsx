import type { Metadata } from "next";
import Image from "next/image";
import { blurFor } from "../lib/blur-data";
import { RatingBadge } from "../components/GoogleReviews";
import { GOOGLE_REVIEWS_URL, reviews } from "../lib/reviews";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LeadForm from "../components/LeadForm";

export const metadata: Metadata = {
  title: "Contact | Innova Design Studio | Atlantic Canada",
  description:
    "Get in touch with Innova Design Studio — book a free consult for your custom home, multi-unit, or renovation project in Atlantic Canada.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <section id="contact-form" className="bg-ink px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s talk about your project.
          </h1>
          <p className="mt-4 text-white/80">
            Book a free consult — no obligation, just a conversation about what&apos;s
            possible.
          </p>
          <p className="mt-2 text-sm text-white/60">
            506-300-4380 · info@innovadesignstudio.ca · Atlantic Canada
          </p>
          <div className="mt-10">
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200">
            <Image
              src="/images/portfolio/custom-homes-57.jpg"
              alt="Single-storey custom home with a covered front porch, white siding, and a dark metal roof"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              placeholder="blur"
              blurDataURL={blurFor("/images/portfolio/custom-homes-57.jpg")}
              className="object-cover"
            />
          </div>
          <div>
            <p className="whitespace-pre-line font-heading text-base italic leading-relaxed text-terracotta sm:text-lg">
              &ldquo;{reviews[0].text}&rdquo;
            </p>
            <p className="mt-3 text-sm text-ink/50">— {reviews[0].name}, Google review</p>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-bold text-accent"
            >
              <RatingBadge /> — read them →
            </a>
            <div className="mt-8 flex items-center gap-4 border-t border-cream-300 pt-6">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-cream-200">
                <Image
                  src="/images/about-headshot.jpg"
                  alt="Alexander Corasaniti, founder of Innova Design Studio"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="text-sm">
                <div className="font-bold">Alexander Corasaniti</div>
                <div className="text-ink/60">Founder, Innova Design Studio</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
