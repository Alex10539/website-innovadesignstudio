// Knowledge articles. Links inside text use [label](url). No design fees or Innova price
// ranges anywhere. Build-cost figures are build costs from the calculator, labelled "not a quote".

export type ArticleBlock = { type: "h2" | "p"; text: string };

export type Article = {
  slug: string;
  title: string;
  /** Meta description / short summary on the index */
  summary: string;
  category: string;
  image: string;
  imageAlt: string;
  blocks: ArticleBlock[];
  faq: { q: string; a: string }[];
  cta: { heading: string; body: string; showCalculator?: boolean };
  /** Slugs of the other articles to suggest at the end */
  related: string[];
};

export const articles: Article[] = [
  {
    slug: "moncton-permit-process",
    title: "The Moncton Permit Process, Step by Step",
    summary:
      "How to get a building permit in Moncton, NB, step by step: what drawings you need, what the city checks, and what slows most applications down.",
    category: "Permits and Bylaws",
    image: "/images/portfolio/custom-homes-70.jpg",
    imageAlt:
      "Modern two-storey custom home with white stone, wood panelling, tall black-framed windows, and an attached garage",
    blocks: [
      {
        type: "p",
        text: "A building permit in Moncton is not one form. It is a package, and the city checks the package as a whole. Most delays are not about the design itself. They are about a missing piece in the package.",
      },
      { type: "p", text: "Here is the process, in order." },
      { type: "h2", text: "Step 1: Check the lot before you design." },
      {
        type: "p",
        text: "Before any drawing starts, check zoning, lot size, setbacks, height, lot coverage, and servicing. In Moncton, Dieppe, Riverview, and Shediac, the rules change by zone and by street. A design that fits one lot can fail on the next lot over. This is the step most homeowners skip, and it is the step that saves the most time later.",
      },
      { type: "h2", text: "Step 2: Get a complete design package." },
      {
        type: "p",
        text: "The city needs construction drawings that show the full home: floor plans, elevations, sections, foundation, framing, and details. It also needs a site plan, and often a grading plan. A partial set gets sent back. At Innova, we design to this standard from the start, so the permit package is the design package, not a second job after it. You can see how that works in our [design process](/process).",
      },
      { type: "h2", text: "Step 3: Submit, and answer the city in full." },
      {
        type: "p",
        text: "Once submitted, the city reviews for zoning, building code, and servicing. If they ask a question, answer it completely and send the revised drawing with it. Partial answers create a second round, and a second round costs weeks.",
      },
      { type: "h2", text: "Step 4: Get the permit, then build to the drawings." },
      {
        type: "p",
        text: "A permit is approval to build what was drawn. Changes on site need to match the approved drawings, or they need a revision. Keep the approved set on site.",
      },
      { type: "h2", text: "What slows applications down most?" },
      {
        type: "p",
        text: "Incomplete first submissions, a site plan that does not match the grading plan, missing energy details, and barrier-free gaps on multi-unit projects. Those are the same items we check in our pre-submission review, because they are the items the city flags most.",
      },
      { type: "h2", text: "How long does it take?" },
      {
        type: "p",
        text: "It depends on the project and on how complete the first submission is. A complete package moves faster than a fast package with a missing piece. If you are planning a [custom home](/custom-homes) in Moncton, Dieppe, Riverview, or Shediac, bring us the lot early and we will tell you what the city will ask for before you pay for a full design.",
      },
      {
        type: "p",
        text: "Wondering what it will cost to build? Read [what affects custom home cost in New Brunswick](/knowledge/custom-home-cost-new-brunswick).",
      },
    ],
    faq: [
      {
        q: "Do I need a designer to get a permit in Moncton?",
        a: "You need a complete, code-compliant drawing package. For most homes under Part 9 of the National Building Code, a building designer can prepare it. Larger buildings need an architect.",
      },
      {
        q: "Can I submit my own drawings?",
        a: "You can, but the city will hold you to the same standard as a professional set. Most owner-drawn sets come back for missing details.",
      },
      {
        q: "What if my lot is in Dieppe or Riverview, not Moncton?",
        a: "The process is the same shape, the bylaws are local. We check the local rules for your town before we design.",
      },
    ],
    cta: {
      heading: "Building in Moncton, Dieppe, Riverview, or Shediac?",
      body: "Book a free consult, no obligation. We will review your lot, tell you what the permit will need, and what to have ready.",
    },
    related: ["custom-home-cost-new-brunswick", "renovating-older-home-new-brunswick"],
  },
  {
    slug: "custom-home-cost-new-brunswick",
    title: "What Affects Custom Home Design Cost in New Brunswick",
    summary:
      "What drives the cost to build a custom home in New Brunswick: size, shape, finishes, foundation, and site. Use the Innova cost calculator for a starting range.",
    category: "Custom Home Cost",
    image: "/images/portfolio/custom-homes-20.jpg",
    imageAlt:
      "Modern custom home with a tall glazed gable, vertical wood siding, and a standing-seam metal roof",
    blocks: [
      {
        type: "p",
        text: "Everyone asks the same first question: what will it cost to build? The honest answer is that it depends on five things, and you control most of them.",
      },
      { type: "h2", text: "1. Size, in square feet." },
      {
        type: "p",
        text: "Size is the biggest driver. A 1,400 sq ft bungalow and a 2,800 sq ft two-storey are not twice the cost, because a two-storey shares one foundation and one roof, but size still sets the range. Start with the size you actually need, not the size you think you should want.",
      },
      { type: "h2", text: "2. Shape." },
      {
        type: "p",
        text: "A simple rectangle is the most efficient shape to build. Every extra corner, wing, and roofline adds cost. An L-shape or a complex custom shape can be worth it for light and for how the home lives, but know that it is a choice with a price.",
      },
      { type: "h2", text: "3. Finishes." },
      {
        type: "p",
        text: "Flooring, trim, doors, paint, kitchen, and bathrooms move the number more than most people expect. The calculator lets you set interior finishes to low, medium, or high, and kitchen to standard, premium, or luxury, so you can see the range before you fall in love with a finish.",
      },
      { type: "h2", text: "4. Foundation and site." },
      {
        type: "p",
        text: "Slab, slab with frost wall, crawl space, and 8 foot or 9 foot basements all cost differently. So does the lot itself: servicing, grading, and access. A flat serviced lot in Moncton and a sloped rural lot outside Shediac are different builds, even for the same house.",
      },
      { type: "h2", text: "5. Systems." },
      {
        type: "p",
        text: "Wood frame or ICF, regular batt or spray foam, baseboard or forced air or geothermal, and your window and door package all change the build cost and the running cost. Pick the system for how you want to live in the home, not just for the sticker price.",
      },
      { type: "h2", text: "How to get a starting range." },
      {
        type: "p",
        text: "Use the Innova Home Cost Calculator at [calculator.innovadesignstudio.ca](https://calculator.innovadesignstudio.ca/). Enter your finished living area by floor, bedrooms, roof, finishes, foundation, and garage. Your price guide updates live, with no email needed to see it. It is built from real local contractor pricing, in CAD and before tax, and it is a starting point, not a quote. The homepage example is a 1,400 sq ft bungalow at $429,000 to $525,000. Your home will have its own range.",
      },
      { type: "h2", text: "What the calculator does not do." },
      {
        type: "p",
        text: "It does not set your design fee, and it does not replace a consult. That is what the free consult is for: we review your lot, your size, and your finishes, and we lock in the design scope on the call.",
      },
      {
        type: "p",
        text: "Planning a [custom home](/custom-homes)? Read [the Moncton permit process, step by step](/knowledge/moncton-permit-process) so you know what the city will ask for.",
      },
    ],
    faq: [
      {
        q: "How much does it cost to build a custom home in New Brunswick?",
        a: "It depends on size, shape, finishes, foundation, and site. Use the calculator for a starting range for your size, then book a consult to refine it.",
      },
      {
        q: "Is the calculator a quote?",
        a: "No. It is a price guide from real local contractor pricing, a starting point before a consult.",
      },
      {
        q: "Does a two-storey cost less than a bungalow of the same size?",
        a: "Often a little less to build, because it shares one foundation and one roof across two floors.",
      },
    ],
    cta: {
      heading: "Want a range for your home?",
      body: "Try the Home Cost Calculator, then book a free consult, no obligation, and we will walk through your lot, size, and finishes together.",
      showCalculator: true,
    },
    related: ["moncton-permit-process", "renovating-older-home-new-brunswick"],
  },
  {
    slug: "renovating-older-home-new-brunswick",
    title: "Renovating an Older New Brunswick Home Under Current Bylaws",
    summary:
      "Renovating an older home in Moncton, Dieppe, Riverview, or Shediac? What current bylaws and the building code mean for your addition, kitchen, or layout change.",
    category: "Renovations",
    image: "/images/portfolio/renovations-34.jpg",
    imageAlt:
      "Two-storey home with grey siding, a covered front porch, and an attached garage",
    blocks: [
      {
        type: "p",
        text: "Older New Brunswick homes are worth renovating, but they were not built to today's rules. A renovation that ignores current bylaws and the building code will stall at permit, or cost more on site than it should.",
      },
      { type: "p", text: "Here is what to check first." },
      { type: "h2", text: "Start with what you are changing, not what you are keeping." },
      {
        type: "p",
        text: "An addition, a layout change, a kitchen move, and a new opening in a wall are different jobs for the city. An addition changes footprint, setbacks, and lot coverage. A layout change can change egress, stairs, and structure. Tell your designer what you want to change first, and let the bylaw check follow that, not the other way around.",
      },
      { type: "h2", text: "Check zoning and setbacks before you draw the addition." },
      {
        type: "p",
        text: "Your lot may not allow the addition where you pictured it. Setbacks, height, and lot coverage are set by your town, and Moncton, Dieppe, Riverview, and Shediac each have their own rules. A garage, a deck, and a second storey all have different limits.",
      },
      { type: "h2", text: "Expect structure and services to need attention." },
      {
        type: "p",
        text: "Older homes often have joists, beams, and duct runs that do not match a new layout. A second-floor change can break a duct run. A wall removal can need a beam. A kitchen move can need new plumbing and electrical. These are normal in a renovation, and they are cheaper to solve on paper than on site.",
      },
      {
        type: "h2",
        text: "Energy and egress matter now, even if they did not when the home was built.",
      },
      {
        type: "p",
        text: "Current code asks more of insulation, windows, and egress than older homes were built to. A renovation is the right time to fix those, because the walls are already open.",
      },
      { type: "h2", text: "Bring the right package to permit." },
      {
        type: "p",
        text: "A renovation permit needs drawings that show existing and proposed conditions, clearly. \"We will figure it out on site\" is not a drawing. At Innova, we draw both, so the city and the contractor are working from the same plan. See our [renovations and additions](/renovations-additions) work, and read [the Moncton permit process, step by step](/knowledge/moncton-permit-process).",
      },
    ],
    faq: [
      {
        q: "Do I need a permit for a renovation in Moncton?",
        a: "Most structural, addition, and layout work needs one. Cosmetic work usually does not. If you are unsure, ask before you start.",
      },
      {
        q: "Can I add a second storey to my home?",
        a: "It depends on zoning, structure, and servicing for your lot. We check those before we design the addition.",
      },
      {
        q: "Will a renovation cost less than building new?",
        a: "Sometimes, and sometimes not. It depends on structure, services, and how much of the old home you are keeping. A consult will give you a range for your project. To compare against building new, the [cost calculator](https://calculator.innovadesignstudio.ca/) gives a starting range for a new custom home.",
      },
    ],
    cta: {
      heading: "Renovating in Moncton, Dieppe, Riverview, or Shediac?",
      body: "Book a free consult, no obligation. Bring your ideas and your lot, and we will tell you what the bylaws allow and what to have ready.",
    },
    related: ["moncton-permit-process", "custom-home-cost-new-brunswick"],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
