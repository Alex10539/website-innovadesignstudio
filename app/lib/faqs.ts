// FAQ text for the service pages. Rules: no design fees or price ranges for Innova services,
// no promised timelines in weeks. Links use [label](url).

export type Faq = { q: string; a: string };

const CALC = "https://calculator.innovadesignstudio.ca/";
const PERMIT = "/knowledge/moncton-permit-process";

export const customHomesFaq: Faq[] = [
  {
    q: "How much does it cost to build a custom home in New Brunswick?",
    a: `It depends on size, shape, finishes, foundation, and site. Use the [Home Cost Calculator](${CALC}) for a starting build-cost range for your size, then book a free consult and we will refine it for your lot and finishes. That range is a build cost, not a quote, and not your design fee.`,
  },
  {
    q: "How much does Innova charge to design a custom home?",
    a: "We do not publish design fees on the website. On your free consult, we agree the design scope together and lock in the fee on the call, so you know exactly what you are getting and what it costs before you commit.",
  },
  {
    q: "Do I need a lot before I book a consult?",
    a: "No. If you have a lot, bring the address and any survey you have. If you do not have a lot yet, bring your town and your size in mind, and we will tell you what to look for in a lot before you buy.",
  },
  {
    q: "Do you design in Saint John and Fredericton, or only Moncton?",
    a: "We design in Moncton, Dieppe, Riverview, Shediac, Saint John, and Fredericton, and across New Brunswick and Atlantic Canada. We are based in the Greater Moncton area and work across the province.",
  },
  {
    q: "What is the difference between a residential designer and an architect?",
    a: "For most Part 9 custom homes, a residential designer is the right fit. Larger Part 3 buildings need an architect. We will tell you which one applies to your project on the first call. Read more in our Knowledge article on [designer vs. architect](/knowledge/residential-designer-vs-architect).",
  },
  {
    q: "How long does design and permitting take?",
    a: "It depends on the size and complexity of your home, on the lot, and on the city review. We will give you a timeline for your project on the free consult, once we have seen your lot and your scope. Read our Knowledge article on the [design and permitting timeline](/knowledge/design-permitting-timeline) for the steps in order.",
  },
  {
    q: "Will my home be permit-ready?",
    a: `Yes. We design to permit-ready standard from the start, with a pre-submission check before we submit. A complete first submission moves faster than a fast submission with a missing piece. See [the Moncton permit process](${PERMIT}) for what the city checks.`,
  },
  {
    q: "What happens after the consult?",
    a: "If we agree the scope on the call, we start with the concept and preliminaries, then construction drawings, then permitting. You will know the next step, in order, before you leave the call.",
  },
];

export const multiUnitFaq: Faq[] = [
  {
    q: "How many units can I fit on my lot?",
    a: "It depends on zoning, parking, setbacks, and servicing for that lot. Parking is often the real constraint, not the building. Bring your lot and your target unit count to a free consult, and we will tell you what is realistic before you pay for a full design.",
  },
  {
    q: "How much does Innova charge to design a multi-unit project?",
    a: "We do not publish design fees on the website. On your free consult, we agree the design scope together and lock in the fee on the call.",
  },
  {
    q: "Do I need an architect for a multi-unit project?",
    a: "It depends on size and code. Most small multi-unit buildings under Part 9 can be designed by a residential designer. Larger Part 3 buildings need an architect. We will tell you which one applies on the first call. See [residential designer vs. architect](/knowledge/residential-designer-vs-architect).",
  },
  {
    q: "What slows multi-unit permits down most?",
    a: `Incomplete first submissions, parking shortfalls, barrier-free gaps, and missing energy forms. Those are the items we check in our pre-submission review, before we submit. See [the Moncton permit process](${PERMIT}) for how the city reviews a package.`,
  },
  {
    q: "Do you work with CMHC MLI Select and funding targets?",
    a: "Yes. Tell us your funding target early, including affordability and energy points if you are chasing them, so the design is scored as it is drawn, not retrofitted after.",
  },
  {
    q: "Do you design multi-unit in Saint John and Fredericton?",
    a: "Yes. We design multi-unit in Moncton, Saint John, Fredericton, Dieppe, and Riverview, and across New Brunswick. We are based in the Greater Moncton area and work across the province.",
  },
  {
    q: "What do you need from me to start?",
    a: "Your lot address and town, your target unit count and mix, and any funding target. That is enough for the first call. We will tell you what else we need from there.",
  },
];

export const renovationsFaq: Faq[] = [
  {
    q: "Do I need a permit for a renovation in Moncton?",
    a: `Most structural, addition, and layout work needs one. Cosmetic work usually does not. If you are unsure, ask before you start. We will tell you on the free consult. See [the Moncton permit process](${PERMIT}) for how it works.`,
  },
  {
    q: "How much does Innova charge to design a renovation?",
    a: "We do not publish design fees on the website. On your free consult, we agree the design scope together and lock in the fee on the call.",
  },
  {
    q: "Can I add a second storey or an addition to my home?",
    a: "It depends on zoning, structure, and servicing for your lot. We check those before we design the addition, so you do not pay for a design your lot cannot hold.",
  },
  {
    q: "Will a renovation cost less than building new?",
    a: `Sometimes, and sometimes not. It depends on structure, services, and how much of the old home you are keeping. Use the [Home Cost Calculator](${CALC}) for a starting range on a new custom home to compare against, then book a free consult and we will refine it for your project.`,
  },
  {
    q: "My home is older. Will current bylaws be a problem?",
    a: "Older homes were not built to today's rules, and that is normal. A renovation is the right time to fix structure, egress, and energy, because the walls are already open. We design to current bylaws, so the permit package matches what the city will ask for.",
  },
  {
    q: "Do you renovate in Saint John and Fredericton?",
    a: "Yes. We renovate in Moncton, Dieppe, Riverview, Shediac, Saint John, and Fredericton, and across New Brunswick.",
  },
  {
    q: "What should I bring to the consult?",
    a: "Your lot address and town, photos of the home, and what you want to change. If you have a survey or any existing drawings, bring those too.",
  },
];

export const processFaq: Faq[] = [
  {
    q: "What is the first step?",
    a: "Book a free consult. We review your lot, your goals, and your size, and we lock in the design scope and fee on the call. That is step one, and it is free.",
  },
  {
    q: "How much does Innova charge?",
    a: "We do not publish design fees on the website. We agree the scope together on the free consult and lock in the fee on the call.",
  },
  {
    q: "What happens after the consult?",
    a: "Concept and preliminaries, then construction drawings, then a pre-submission check, then permit submission, then build to the approved drawings. You will know the next step, in order, before you leave the call.",
  },
  {
    q: "How long does the whole process take?",
    a: "It depends on the size and complexity of your project, on the lot, and on the city review. We will give you a timeline for your project on the free consult, once we have seen your lot and your scope. The steps in order are in our [design and permitting timeline](/knowledge/design-permitting-timeline).",
  },
  {
    q: "Do you handle permitting?",
    a: `Yes. We prepare the permit-ready package and coordinate with the city, your engineer, and your contractor through the process. A complete first submission is the fastest path to a permit. See [the Moncton permit process](${PERMIT}).`,
  },
  {
    q: "What if my project needs an architect?",
    a: "We will tell you on the first call. If your project is Part 3 or needs a stamp we cannot give, we will say so and point you to the right professional.",
  },
];
