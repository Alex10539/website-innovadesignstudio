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

const images = [
  "/images/current-builds/build-19.jpg",
  ...Array.from({ length: 18 }, (_, i) => `/images/current-builds/build-${i + 1}.jpg`),
  "/images/current-builds/build-20.jpg",
];

// Finished Timberline home, in display order. `aspect` is each photo's real shape.
const timberline = [
  { n: 12, aspect: "3/2", alt: "Front of the home with a curved driveway and lawn, a gabled entry, a black metal roof, and a two-storey garage wing" },
  { n: 2, aspect: "16/9", alt: "Aerial view of a hillside home with a black metal roof and wood-toned siding overlooking the valley and city" },
  { n: 1, aspect: "3/2", alt: "Front entry of a single-storey home with a black metal roof, a gabled entry, and a black front door with side lights" },
  { n: 11, aspect: "3/2", alt: "Side view of the garage wing with a metal hip roof, black garage doors, and a skid steer on a gravel driveway" },
  { n: 10, aspect: "3/2", alt: "Two-bay garage with black doors and a skid steer parked in front of a wood-toned upper level" },
  { n: 9, aspect: "2/3", alt: "Black garage door with a column of frosted windows beneath a wood-toned upper floor and a metal awning" },
  { n: 3, aspect: "2/3", alt: "Upper deck with a glass railing and patio chairs overlooking a sloping lawn" },
  { n: 4, aspect: "2/3", alt: "Back of the home with a glass-railed upper deck, a barbecue, and a stamped-concrete patio with chairs below" },
  { n: 5, aspect: "2/3", alt: "Walkout side of the home with a glass sunroom, an upper deck, and a stone retaining wall" },
  { n: 7, aspect: "2/3", alt: "Kitchen with a vaulted ceiling, a large island, pendant lights, and a window wall overlooking the valley" },
  { n: 6, aspect: "2/3", alt: "Kitchen counter with a black undermount sink and a row of wood-trimmed windows with a valley view" },
  { n: 8, aspect: "2/3", alt: "Living room with floor-to-ceiling windows overlooking a green lawn and the distant valley" },
];
const timberlineImages = timberline.map((t) => `/images/current-builds/timberline-${t.n}.jpg`);
const timberlineAlts = timberline.map((t) => t.alt);
const timberlineAspects = timberline.map((t) => t.aspect);

const containerImages = Array.from(
  { length: 14 },
  (_, i) => `/images/current-builds/container-home-${i + 1}.jpg`
);

const containerAlts = [
  "Custom container home with a wood-trimmed exterior, a wraparound deck, and a hot tub gazebo among trees",
  "Small container home at the end of a gravel driveway in the woods, with a deck and hot tub gazebo",
  "Side view of a container home with a sloped roof, a deck, and a hot tub gazebo",
  "Back of a container home with a large deck, a hot tub, and a gazebo on a green lawn",
  "Front door of a container home with a wood and white exterior and a timber deck railing",
  "Long wood deck on a container home leading to a hot tub gazebo among trees",
  "Open living area in a container home with a leather sofa, a wood kitchen counter, and a small window",
  "Dining counter with leather chairs beside a large black-framed window in a container home",
  "Container home kitchen with wood cabinets, a black sink, and a window over the counter",
  "Compact container home kitchen with a butcher-block counter, range hood, and black-framed window",
  "Container home kitchen window with black fixtures and open wood shelving",
  "Interior corner of a container home with a tall black-framed window and a white armchair",
  "Bunk beds in a container home bedroom with a large black-framed window",
  "Container home bedroom with a wood headboard, fur pillows, and folded towels",
];

// Same order as `images`; each describes what is actually visible in the photo.
const alts = [
  "Aerial view of a large home with a new addition and a big garage on a hillside in autumn",
  "Interior of a gable-roof home during framing, with large sliding doors and a glazed gable end",
  "Exterior of a home wrapped in house wrap, with a tall angled glass gable window and a ladder",
  "Aerial view of a three-storey multi-unit building under construction in the snow",
  "Aerial view of a custom home framed and roofed in winter snow",
  "Small home with a covered timber porch under construction in winter",
  "Small home wrapped in house wrap with a covered timber porch and sliding doors",
  "Detached garage with grey shingles and white siding on an active job site",
  "Aerial view of a large home with a new addition under construction in winter",
  "View through a black-framed window over a river valley and hills",
  "Single-storey home framed and sheathed with a covered entry on a summer job site",
  "Gable-front home wrapped in house wrap with a tall black-framed window and scaffolding",
  "Aerial view of a long single-storey home being framed on a green lot",
  "Interior of a framed room with a large black-framed window overlooking the water",
  "Interior of a framed gable room with a tall angled window and exposed ceiling framing",
  "Gabled entry with timber truss detail and a black front door on a home under construction",
  "Interior wall framing with a plastic-wrapped window and a snow shovel on a winter job site",
  "Top-down aerial of a snow-covered roof being sheathed",
  "Teal front door on a small home wrapped in house wrap in winter",
  "Aerial view of a custom home build with a gabled roof in autumn woods, with vehicles on site",
];

export default function CurrentBuildsPage() {
  return (
    <>
      <Header />
      <PageHero
        title="Currently Building"
        subtitle="Real photos from real job sites — a look at what's underway right now across Atlantic Canada."
        image="/images/current-builds/timberline-2.jpg"
        imageAlt="Aerial view of a hillside home with a black metal roof and wood-toned siding overlooking the valley and city"
        tall
        imagePosition="center 40%"
      />

      <section className="mx-auto w-full max-w-2xl px-6 py-16 text-center">
        <p className="text-ink/60">
          Our project galleries show the design. This page shows the real thing — a recently
          finished home, plus framing, site visits, and work in progress on active builds.
        </p>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-24">
        <h2 className="font-heading text-2xl font-bold">Timberline — finished</h2>
        <p className="mt-3 max-w-xl text-ink/60">
          A look at the finished Timberline home: hillside views, a black metal roof,
          glass-railed decks, and a vaulted kitchen with a window wall.
        </p>
        <div className="mt-10">
          <SimplePhotoGrid
            images={timberlineImages}
            label="Timberline finished home"
            alts={timberlineAlts}
            aspects={timberlineAspects}
          />
        </div>

        <div className="mt-24 border-t border-cream-300 pt-16">
          <h2 className="font-heading text-2xl font-bold">On the job site</h2>
          <p className="mt-3 max-w-xl text-ink/60">
            Framing, site visits, and work in progress on active builds.
          </p>
          <div className="mt-10">
            <SimplePhotoGrid images={images} label="Active job site" alts={alts} />
          </div>
        </div>

        <div className="mt-24 border-t border-cream-300 pt-16">
          <h2 className="font-heading text-2xl font-bold">Custom container home</h2>
          <p className="mt-3 max-w-xl text-ink/60">
            A compact container home on a wooded lot — decks and a hot tub gazebo outside, a
            warm wood-and-black interior inside.
          </p>
          <div className="mt-10">
            <SimplePhotoGrid
              images={containerImages}
              label="Custom container home"
              alts={containerAlts}
            />
          </div>
        </div>

        <p className="mt-12 text-center text-sm">
          <a href="/portfolio" className="font-bold text-accent">
            See our finished projects →
          </a>
        </p>
      </section>

      <ClosingCTA
        heading="Want to start your own project?"
        body="Book a free consult — no obligation, just a conversation about what's possible."
      />
      <Footer />
    </>
  );
}
