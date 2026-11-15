import { GOOGLE_REVIEWS_URL, RATING, REVIEW_COUNT, reviews } from "../lib/reviews";

const STARS = "★★★★★";

export function RatingBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="tracking-wider text-amber-500" aria-hidden="true">
        {STARS}
      </span>
      <span>
        <strong>{RATING}</strong> on Google · {REVIEW_COUNT} reviews
      </span>
    </span>
  );
}

export default function GoogleReviews({
  variant = "full",
}: {
  variant?: "full" | "compact";
}) {
  const shown = variant === "full" ? reviews.slice(0, 6) : reviews.slice(0, 3);

  return (
    <section
      id={variant === "full" ? "reviews" : undefined}
      className="border-y border-cream-300 bg-cream-100 px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <div className="font-heading text-4xl font-bold text-ink sm:text-5xl">
            <span className="text-amber-500" aria-hidden="true">
              {STARS}
            </span>
          </div>
          <p className="mt-3 text-sm font-bold uppercase tracking-widest text-ink/60">
            {RATING} on Google · {REVIEW_COUNT} reviews
          </p>
          <h2 className="mt-4 font-heading text-2xl font-bold text-ink sm:text-3xl">
            {variant === "full" ? "Real clients. Real reviews." : "What our clients say"}
          </h2>
          {variant === "full" && (
            <p className="mx-auto mt-3 max-w-xl text-ink/60">
              Homeowners and builders across Atlantic Canada, in their own words — straight
              from our Google profile.
            </p>
          )}
        </div>

        <div className="mt-12 columns-1 gap-5 md:columns-2 lg:columns-3">
          {shown.map((r) => (
            <figure
              key={r.name}
              className="mb-5 break-inside-avoid border border-cream-300 bg-cream-50 p-6"
            >
              <div className="text-sm tracking-wider text-amber-500" aria-hidden="true">
                {STARS}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-ink/80">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-bold text-ink">{r.name}</span>
                <span className="text-ink/50">
                  {r.badge ? ` · ${r.badge}` : ""} · Google review
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-none border border-ink px-8 py-4 text-sm font-bold tracking-wide text-ink transition-colors hover:bg-ink hover:text-white"
          >
            Read all {REVIEW_COUNT} reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
