type Variant = "home" | "multi-unit" | "process";

const content: Record<Variant, { intro?: string; items?: string[]; copy?: string }> = {
  home: {
    intro: "You do not need a finished plan to book. Bring what you have, and we will work from there.",
    items: [
      "Your lot address or civic address, and your town",
      "Any lot survey, site plan, or grading plan you already have",
      "Rough size in mind, bedrooms and bathrooms, one storey or two",
      "Photos or a list of homes you like, if you have them",
      "Your build budget range, if you know it, or use the Home Cost Calculator before the call",
      "Your timeline, if you have one, and who else is deciding with you",
    ],
  },
  "multi-unit": {
    intro: "Bring what you have, and we will work from there.",
    items: [
      "Your lot address, town, and zoning if you know it",
      "Your target unit count and unit mix, one-bed, two-bed, three-bed",
      "Any funding target, including CMHC MLI Select points if you are chasing them",
      "Parking count and servicing information, if you have it",
      "Your timeline and who else is deciding with you",
    ],
  },
  process: {
    copy: "Your lot address and town, a rough size in mind, and any survey or site plan you already have. That is enough to start. We will tell you what else we need on the call.",
  },
};

/** "What to have ready for the call". Custom Homes and Renovations use "home". */
export default function ReadyChecklist({ variant }: { variant: Variant }) {
  const c = content[variant];
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-16">
      <h2 className="font-heading text-xl font-bold text-ink sm:text-2xl">
        {variant === "process" ? "What to have ready" : "What to have ready for the call"}
      </h2>
      {c.intro && <p className="mt-3 text-ink/70">{c.intro}</p>}
      {c.copy && <p className="mt-3 leading-relaxed text-ink/70">{c.copy}</p>}
      {c.items && (
        <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {c.items.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/80">
              <span
                className="mt-1 h-3.5 w-3.5 shrink-0 border border-ink/30"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
