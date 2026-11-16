export type ProjectSet = {
  id: string;
  images: string[];
  /** Visible card title: the standout feature plus the home type */
  title: string;
  /** Visible 1-2 sentence description (only what the photos show, or what is confirmed) */
  description: string;
  /** Unique, descriptive alt text for the cover photo (SEO + accessibility) */
  alt: string;
  /**
   * Optional confirmed facts. Fill in only what is TRUE for the project and it
   * shows up on the card and in the gallery automatically; leave the rest out.
   */
  location?: string; // e.g. "Moncton, NB"
  sqft?: string; // e.g. "2,400"
  beds?: string; // e.g. "3"
  baths?: string; // e.g. "2.5"
  year?: string; // e.g. "2025"
  units?: string; // multi-unit only, e.g. "12"
};

/** "Moncton, NB · 2,400 sq ft · 3 bed / 2 bath · 2025" — only the facts that are filled in */
export function projectFacts(p: ProjectSet): string {
  const bedBath =
    p.beds && p.baths ? `${p.beds} bed / ${p.baths} bath` : p.beds ? `${p.beds} bed` : p.baths ? `${p.baths} bath` : "";
  return [
    p.location,
    p.units ? `${p.units} units` : "",
    p.sqft ? `${p.sqft} sq ft` : "",
    bedBath,
    p.year,
  ]
    .filter(Boolean)
    .join(" · ");
}

const p = (n: number) => `/images/portfolio/custom-homes-${n}.jpg`;
const m = (n: number) => `/images/portfolio/multi-unit-${n}.jpg`;
const r = (n: number) => `/images/portfolio/renovations-${n}.jpg`;
const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

export const customHomeProjects: ProjectSet[] = [
  {
    id: "tower",
    images: range(1, 7).map(p),
    title: "Stone-base custom home with glass observation tower",
    description:
      "A custom home built around a stone base and a glass observation tower, set among tall trees.",
    alt: "Custom home with a stone base, dark siding, and a glass observation tower among tall trees",
  },
  {
    id: "timmy",
    images: range(20, 30).map(p),
    title: "Modern barn-style custom home with glazed gable",
    description:
      "A modern barn-style home with a tall glazed gable, vertical wood siding, and a standing-seam metal roof.",
    alt: "Modern custom home with a tall glazed gable, vertical wood siding, and a standing-seam metal roof",
  },
  {
    id: "annik",
    images: range(31, 35).map(p),
    title: "Open kitchen with light wood cabinetry and island",
    description:
      "A custom home kitchen with light wood cabinetry, a large island with bar stools, and recessed lighting.",
    alt: "Custom home kitchen with light wood cabinetry, a large island with bar stools, and recessed lighting",
  },
  {
    id: "christan",
    images: [p(57), p(38), p(37), p(36)],
    title: "Single-storey ranch custom home with covered porch",
    description:
      "A single-storey home with a covered front porch, white siding, and a dark metal roof.",
    alt: "Single-storey custom home with a covered front porch, white siding, and a dark metal roof",
  },
  {
    id: "justin",
    images: [p(40), p(39), p(41), p(54), p(55), p(56)],
    title: "Contemporary custom home with stone chimney and wraparound deck",
    description:
      "A contemporary home with wood and dark cladding, a tall stone chimney, and a wraparound covered deck.",
    alt: "Contemporary custom home with wood and dark cladding, a tall stone chimney, and a wraparound covered deck",
  },
  {
    id: "stacy",
    images: range(42, 43).map(p),
    title: "Two-storey custom home with stone base and dormers",
    description: "A two-storey home with a stone base, dormers, and black window frames.",
    alt: "Two-storey custom home with a stone base, dormers, and black window frames",
  },
  {
    id: "john-mclean",
    images: range(44, 46).map(p),
    title: "Rustic open-concept interior with exposed beams",
    description:
      "A rustic open-concept interior with exposed beams, a live-edge dining table, and pendant lighting.",
    alt: "Rustic open-concept interior with exposed beams, a live-edge dining table, and pendant lighting",
  },
  {
    id: "art-studio",
    images: range(47, 49).map(p),
    title: "Compact studio in the woods",
    description:
      "A compact custom studio with dark green siding and a sloped roof in a snowy wooded setting.",
    alt: "Compact custom studio with dark green siding and a sloped roof in a snowy wooded setting",
  },
  {
    id: "garage",
    images: range(50, 51).map(p),
    title: "White farmhouse-style home with attached garages",
    description: "A white farmhouse-style home with attached garages and wood garage doors.",
    alt: "White farmhouse-style home with attached garages and wood garage doors",
  },
  {
    id: "timberline",
    images: [p(52)],
    title: "Hillside custom home with covered deck and glass sunroom",
    description: "A hillside home with white siding, a covered deck, and a large glazed sunroom.",
    alt: "Hillside custom home with white siding, a covered deck, and a large glazed sunroom",
  },
  {
    id: "sunroom",
    images: [p(53)],
    title: "Contemporary two-storey custom home with glass sunroom",
    description:
      "A two-storey contemporary home with large windows, a glass sunroom, and a back deck.",
    alt: "Two-storey contemporary home with large windows, a glass sunroom, and a back deck",
  },
  {
    id: "ranch-gables",
    images: range(58, 59).map(p),
    title: "Single-storey gabled ranch with stone accents",
    description:
      "A single-storey home with gabled rooflines, timber truss details, stone accents, and an attached two-car garage.",
    alt: "Single-storey custom home with gabled rooflines, timber truss details, stone accents, and an attached two-car garage",
  },
  {
    id: "vaulted-interiors",
    images: range(60, 66).map(p),
    title: "Open-concept interior with vaulted arched windows",
    description:
      "A living room with a vaulted ceiling, tall arched windows, a media wall, and built-in shelving.",
    alt: "Custom home living room with a vaulted ceiling, tall arched windows, a media wall, and built-in shelving",
  },
  {
    id: "modern-two-storey",
    images: range(67, 71).map(p),
    title: "Modern two-storey custom home, white stone and wood panelling",
    description:
      "A modern two-storey home with white stone, wood panelling, and tall black-framed windows glowing at dusk.",
    alt: "Modern two-storey custom home with white stone, wood panelling, and tall black-framed windows glowing at dusk",
  },
];

export const multiUnitProjects: ProjectSet[] = [
  {
    id: "paul",
    images: [m(1)],
    title: "Three-storey apartment building",
    description: "A three-storey multi-unit building with dark siding, brick accents, and balconies.",
    alt: "Three-storey multi-unit residential building with dark siding, brick accents, and balconies",
  },
  {
    id: "four-plex",
    images: range(2, 3).map(m),
    title: "Four-plex with dark siding and covered entries",
    description: "A two-storey four-unit residential building with dark siding and covered entries.",
    alt: "Two-storey four-unit residential building with dark siding and covered entries",
  },
  {
    id: "karim",
    images: range(4, 5).map(m),
    title: "Row of attached single-storey townhomes with garages",
    description:
      "A row of attached single-storey townhomes with garages and mixed light and dark siding.",
    alt: "Row of attached single-storey townhomes with garages and mixed light and dark siding",
  },
  {
    id: "sunshine",
    images: [m(6)],
    title: "Modern multi-unit with brick and grey metal siding",
    description:
      "A modern multi-unit building with brick, grey metal siding, and a gabled roofline.",
    alt: "Modern multi-unit residential building with brick, grey metal siding, and a gabled roofline",
  },
  {
    id: "mirimichi",
    images: range(7, 9).map(m),
    title: "Two-storey townhouse block with shared parking",
    description: "A two-storey townhouse building with white siding, gables, and a shared parking lot.",
    alt: "Two-storey residential townhouse building with white siding, gables, and a shared parking lot",
  },
  {
    id: "mountain-road",
    images: range(10, 12).map(m),
    title: "Modern low-rise multi-unit with parking and landscaping",
    description:
      "A low modern multi-unit building with dark and wood cladding, a parking lot, and landscaping.",
    alt: "Low modern multi-unit building with dark and wood cladding, a parking lot, and landscaping",
  },
  {
    id: "brick-dormers",
    images: range(13, 17).map(m),
    title: "Three-storey brick multi-unit with dormers",
    description:
      "A three-storey brick multi-unit building with dormer windows, a covered entry, and black vertical siding on one wing.",
    alt: "Three-storey brick multi-unit residential building with dormer windows, a covered entry, and black vertical siding on one wing",
  },
];

export const renovationProjects: ProjectSet[] = [
  {
    id: "interior-renovation",
    images: range(1, 3).map(r),
    title: "Bright white kitchen with brass hardware",
    description:
      "A bright white kitchen renovation with brass hardware, a farmhouse sink, and a white tile backsplash.",
    alt: "Renovated white kitchen with brass hardware, a farmhouse sink, and a white tile backsplash",
  },
  {
    id: "kitchen",
    images: [r(31), r(4), r(5), r(6)],
    title: "White kitchen with large island and green bar stool",
    description:
      "A renovated kitchen with white cabinets, a large island, a green bar stool, and a pendant light.",
    alt: "Renovated kitchen with white cabinets, a large island, a green bar stool, and a pendant light",
  },
  {
    id: "joey",
    images: range(7, 20).map(r),
    title: "Bright dining room with large windows",
    description:
      "A bright dining area with a wood table, white chairs, and large windows with roman shades.",
    alt: "Bright dining area with a wood table, white chairs, and large windows with roman shades",
  },
  {
    id: "beach-front",
    images: [r(32), r(21), r(22), r(23), r(24)],
    title: "Beachfront home with glass-enclosed timber pergola",
    description: "A beachfront home with a dark gabled roof and a glass-enclosed timber pergola.",
    alt: "Beachfront home with a dark gabled roof and a glass-enclosed timber pergola",
  },
  {
    id: "renovation-interior",
    images: range(25, 27).map(r),
    title: "Kitchen with vaulted window wall and dark wood cabinetry",
    description:
      "A renovated kitchen with dark wood cabinetry, an island, and a tall vaulted window wall.",
    alt: "Renovated kitchen with dark wood cabinetry, an island, and a tall vaulted window wall",
  },
  {
    id: "timberline-addition",
    images: [r(28), r(29), r(33), r(30)],
    title: "Timberline home addition with black-framed windows",
    description: "A home addition with large black-framed windows looking onto a snowy yard.",
    alt: "Home addition with large black-framed windows looking onto a snowy yard",
    location: "Timberline",
  },
  {
    id: "exterior-garage",
    images: range(34, 35).map(r),
    title: "Two-storey home with grey siding and attached garage",
    description: "A two-storey home with grey siding, a covered front porch, and an attached garage.",
    alt: "Two-storey home with grey siding, a covered front porch, and an attached garage with an orange sports car in the driveway",
  },
  {
    id: "kitchen-colour-options",
    images: range(36, 40).map(r),
    title: "Kitchen with island in wood, white, and blue finishes",
    description:
      "A kitchen with a large island, brown bar stools, and pendant lights, shown in natural wood, white, and blue cabinet finishes.",
    alt: "Kitchen with a large island, brown bar stools, and pendant lights, shown in natural wood, white, and blue cabinet finishes",
  },
  {
    id: "dark-clad-balcony",
    images: range(41, 45).map(r),
    title: "Dark-clad two-storey home with covered balcony",
    description:
      "A two-storey home clad in dark siding with warm exterior lighting, a garage, and a covered balcony.",
    alt: "Two-storey home clad in dark siding with warm exterior lighting, a garage, and a covered balcony",
  },
  {
    id: "living-spaces",
    images: range(46, 51).map(r),
    title: "Open-concept living room and island kitchen",
    description:
      "A living room with a fireplace, brown sofas, and a wall-mounted TV beside an open kitchen with a long island and pendant lights.",
    alt: "Living room with a fireplace, brown sofas, and a wall-mounted TV beside an open kitchen with a long island and pendant lights",
  },
  {
    id: "open-plan-hardwood",
    images: range(52, 57).map(r),
    title: "Open-plan kitchen and living room with hardwood floors",
    description:
      "An open-plan kitchen with an island and pendant lights over hardwood floors, next to a bright living room.",
    alt: "Open-plan kitchen with an island and pendant lights over hardwood floors, next to a bright living room",
  },
];
