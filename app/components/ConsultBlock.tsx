const produces = [
  "A lot and bylaw check for your town, in Moncton, Saint John, Fredericton, Dieppe, Riverview, Shediac, or anywhere in New Brunswick. We tell you what your lot allows, and what it does not.",
  "What your permit will need. We tell you the drawings, site plan, and details the city will ask for, before you pay for a full design.",
  "A clear direction on size, layout, and finishes, matched to how you live and what you want to spend to build.",
  "A build-cost range from the Home Cost Calculator, refined on the call for your size and finishes. That is a build cost range, a starting point, not a quote.",
  "Your design scope and fee, locked in on the call. We do not publish design fees on the website. On the call, we agree the scope together and lock in the fee, so you know exactly what you are getting and what it costs before you commit.",
  "Your next steps, in order, with what to have ready and what happens next.",
];

/** "What your free consult produces". Same block on every service page; only the lead line changes. */
export default function ConsultBlock({ lead }: { lead: string }) {
  return (
    <section className="border-y border-cream-300 bg-cream-100 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent">{lead}</p>
        <h2 className="mt-3 font-heading text-2xl font-bold text-ink sm:text-3xl">
          What your free consult produces
        </h2>
        <p className="mt-4 leading-relaxed text-ink/70">
          Your free consult is a working call, not a sales pitch. You leave the call with
          answers, not a brochure. Here is exactly what you get.
        </p>

        <ul className="mt-8 space-y-4">
          {produces.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/80">
              <span className="mt-0.5 font-bold text-accent" aria-hidden="true">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 font-heading text-base italic leading-relaxed text-ink">
          If we are not the right fit for your project, we will tell you on the call, and point
          you to the right professional. No obligation, no pressure.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href="/contact"
            className="rounded-none bg-accent px-8 py-4 text-sm font-bold tracking-wide text-white shadow-lg transition-opacity hover:opacity-90"
          >
            Book my free consult — no obligation
          </a>
          <a href="tel:5063004380" className="text-sm font-bold text-ink hover:text-accent">
            Call 506-300-4380
          </a>
        </div>
        <p className="mt-3 text-xs text-ink/50">We reply within 1 business day.</p>
      </div>
    </section>
  );
}
