import Image from "next/image";

export const CALCULATOR_URL = "https://calculator.innovadesignstudio.ca/";

const points = [
  "Takes about a minute — no email needed to see your number",
  "Built from real local contractor pricing",
  "Adjust 15+ options and watch the price update live",
];

export default function CalculatorCta({
  variant = "feature",
}: {
  variant?: "feature" | "banner";
}) {
  if (variant === "banner") {
    return (
      <section className="border-y border-cream-300 bg-ink px-6 py-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Free cost estimate
            </span>
            <p className="mt-2 font-heading text-xl font-bold text-white sm:text-2xl">
              What will your home cost to build?
            </p>
            <p className="mt-1 text-sm text-white/70">
              Get a live price guide in about a minute — no email needed.
            </p>
          </div>
          <a
            href={CALCULATOR_URL}
            className="shrink-0 rounded-none bg-accent px-8 py-4 text-sm font-bold tracking-wide text-white shadow-lg transition-opacity hover:opacity-90"
          >
            Try the cost calculator →
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-cream-300 bg-ink px-6 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[2fr_3fr] md:gap-12 lg:gap-16">
        <div className="min-w-0 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Free cost estimate
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
            Know what your custom home will cost — before you spend a dollar.
          </h2>
          <ul className="mx-auto mt-6 max-w-md space-y-3 text-left text-white/75 md:mx-0">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-sm leading-relaxed">
                <span className="font-bold text-accent">✓</span>
                {p}
              </li>
            ))}
          </ul>
          <a
            href={CALCULATOR_URL}
            className="mt-8 inline-block rounded-none bg-accent px-10 py-5 text-base font-bold tracking-wide text-white shadow-lg transition-opacity hover:opacity-90"
          >
            Get my price guide →
          </a>
          <p className="mt-3 text-xs text-white/50">
            Free, no obligation. A planning guide, not a quote.
          </p>
        </div>

        {/* Screenshot of the live calculator (calculator.innovadesignstudio.ca) — retake if its look or pricing changes */}
        <a
          href={CALCULATOR_URL}
          aria-label="Open the home cost calculator"
          className="group mx-auto block w-full min-w-0 shadow-2xl transition-transform hover:-translate-y-1"
        >
          <div className="flex items-center gap-1.5 bg-cream-200 px-3 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
            <span className="ml-3 truncate bg-cream-50 px-3 py-0.5 text-[11px] text-ink/50">
              calculator.innovadesignstudio.ca
            </span>
          </div>
          <Image
            src="/images/calculator-snip.png"
            alt="Screenshot of the Innova home cost calculator showing a live price guide of $429,000 to $525,000 for a 1,400 sq ft bungalow"
            width={780}
            height={418}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="block h-auto w-full"
          />
          <div className="flex items-center justify-between bg-cream-50 px-4 py-3 text-xs">
            <span className="text-ink/50">Example: 1,400 sq ft bungalow</span>
            <span className="font-bold text-accent transition-transform group-hover:translate-x-1">
              Try it yourself →
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
