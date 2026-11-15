export type ProjectSet = {
  id: string;
  images: string[];
  /** Short label shown on the tile and in the lightbox */
  title: string;
  /** Unique, descriptive alt text for the cover photo (SEO + accessibility) */
  alt: string;
  /** Optional trust details — only fill in what is true, leave the rest out */
  location?: string;
  year?: string;
  sqft?: string;
};

const p = (n: number) => `/images/portfolio/custom-homes-${n}.jpg`;
const m = (n: number) => `/images/portfolio/multi-unit-${n}.jpg`;
const r = (n: number) => `/images/portfolio/renovations-${n}.jpg`;
const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

export const customHomeProjects: ProjectSet[] = [
  {
    id: "tower",
    images: range(1, 7).map(p),
    title: "Stone-base home with glass tower",
    alt: "Custom home with a stone base, dark siding, and a glass observation tower among tall trees, designed by Innova Design Studio",
  },
  {
    id: "timmy",
    images: range(20, 30).map(p),
    title: "Modern barn-style home",
    alt: "Modern custom home with a tall glazed gable, vertical wood siding, and a standing-seam metal roof",
  },
  {
    id: "annik",
    images: range(31, 35).map(p),
    title: "Open kitchen with island",
    alt: "Custom home kitchen with light wood cabinetry, a large island with bar stools, and recessed lighting",
  },
  {
    id: "christan",
    images: [p(57), p(38), p(37), p(36)],
    title: "Ranch-style home with covered porch",
    alt: "Single-storey custom home with a covered front porch, white siding, and a dark metal roof",
  },
  {
    id: "justin",
    images: [p(40), p(39), p(41), p(54), p(55), p(56)],
    title: "Contemporary home with stone chimney",
    alt: "Contemporary custom home with wood and dark cladding, a tall stone chimney, and a wraparound covered deck",
  },
  {
    id: "stacy",
    images: range(42, 43).map(p),
    title: "Two-storey home with stone accents",
    alt: "Two-storey custom home with a stone base, dormers, and black window frames",
  },
  {
    id: "john-mclean",
    images: range(44, 46).map(p),
    title: "Rustic open-concept interior",
    alt: "Rustic open-concept interior with exposed beams, a live-edge dining table, and pendant lighting",
  },
  {
    id: "art-studio",
    images: range(47, 49).map(p),
    title: "Compact studio in the woods",
    alt: "Compact custom studio with dark green siding and a sloped roof in a snowy wooded setting",
  },
  {
    id: "garage",
    images: range(50, 51).map(p),
    title: "Farmhouse-style garage design",
    alt: "White farmhouse-style home with attached garages and wood garage doors",
  },
  {
    id: "timberline",
    images: [p(52)],
    title: "Hillside home with covered deck",
    alt: "Hillside custom home with white siding, a covered deck, and a large glazed sunroom",
  },
  {
    id: "sunroom",
    images: [p(53)],
    title: "Contemporary home with sunroom",
    alt: "Two-storey contemporary home with large windows, a glass sunroom, and a back deck",
  },
  {
    id: "ranch-gables",
    images: range(58, 59).map(p),
    title: "Gabled ranch with stone accents",
    alt: "Single-storey custom home with gabled rooflines, timber truss details, stone accents, and an attached two-car garage",
  },
  {
    id: "vaulted-interiors",
    images: range(60, 66).map(p),
    title: "Open-concept interiors, vaulted windows",
    alt: "Custom home living room with a vaulted ceiling, tall arched windows, a media wall, and built-in shelving",
  },
  {
    id: "modern-two-storey",
    images: range(67, 71).map(p),
    title: "Modern two-storey, stone and wood",
    alt: "Modern two-storey custom home with white stone, wood panelling, tall black-framed windows, and an attached garage at dusk",
  },
];

export const multiUnitProjects: ProjectSet[] = [
  {
    id: "paul",
    images: [m(1)],
    title: "Three-storey apartment building",
    alt: "Three-storey multi-unit residential building with dark siding, brick accents, and balconies",
  },
  {
    id: "four-plex",
    images: range(2, 3).map(m),
    title: "Four-plex with dark siding",
    alt: "Two-storey four-unit residential building with dark siding and covered entries",
  },
  {
    id: "karim",
    images: range(4, 5).map(m),
    title: "Row of attached bungalows",
    alt: "Row of attached single-storey townhomes with garages and mixed light and dark siding",
  },
  {
    id: "sunshine",
    images: [m(6)],
    title: "Multi-unit with brick and metal siding",
    alt: "Modern multi-unit residential building with brick, grey metal siding, and a gabled roofline",
  },
  {
    id: "mirimichi",
    images: range(7, 9).map(m),
    title: "Two-storey townhouse block",
    alt: "Two-storey residential townhouse building with white siding, gables, and a shared parking lot",
  },
  {
    id: "mountain-road",
    images: range(10, 12).map(m),
    title: "Modern low-rise with parking",
    alt: "Low modern multi-unit building with dark and wood cladding, a parking lot, and landscaping",
  },
  {
    id: "brick-dormers",
    images: range(13, 17).map(m),
    title: "Brick multi-unit with dormers",
    alt: "Three-storey brick multi-unit residential building with dormer windows, a covered entry, and black vertical siding on one wing",
  },
];

export const renovationProjects: ProjectSet[] = [
  {
    id: "interior-renovation",
    images: range(1, 3).map(r),
    title: "Bright white kitchen renovation",
    alt: "Renovated white kitchen with brass hardware, a farmhouse sink, and a white tile backsplash",
  },
  {
    id: "kitchen",
    images: [r(31), r(4), r(5), r(6)],
    title: "Kitchen with large island",
    alt: "Renovated kitchen with white cabinets, a large island, a green bar stool, and a pendant light",
  },
  {
    id: "joey",
    images: range(7, 20).map(r),
    title: "Bright dining room, large windows",
    alt: "Bright dining area with a wood table, white chairs, and large windows with roman shades",
  },
  {
    id: "beach-front",
    images: [r(32), r(21), r(22), r(23), r(24)],
    title: "Beachfront home with glass pergola",
    alt: "Beachfront home with a dark gabled roof and a glass-enclosed timber pergola",
  },
  {
    id: "renovation-interior",
    images: range(25, 27).map(r),
    title: "Kitchen with vaulted window wall",
    alt: "Renovated kitchen with dark wood cabinetry, an island, and a tall vaulted window wall",
  },
  {
    id: "timberline-addition",
    images: [r(28), r(29), r(33), r(30)],
    title: "Home addition",
    alt: "Home addition with large black-framed windows looking onto a snowy yard",
    location: "Timberline",
  },
  {
    id: "exterior-garage",
    images: range(34, 35).map(r),
    title: "Home exterior with attached garage",
    alt: "Two-storey home with grey siding, a covered front porch, and an attached garage with an orange sports car in the driveway",
  },
  {
    id: "kitchen-colour-options",
    images: range(36, 40).map(r),
    title: "Kitchen with island, colour options",
    alt: "Kitchen with a large island, brown bar stools, and pendant lights, shown in natural wood, white, and blue cabinet finishes",
  },
  {
    id: "dark-clad-balcony",
    images: range(41, 45).map(r),
    title: "Dark-clad home with covered balcony",
    alt: "Two-storey home clad in dark siding with warm exterior lighting, a garage, and a covered balcony",
  },
  {
    id: "living-spaces",
    images: range(46, 51).map(r),
    title: "Open-concept living spaces",
    alt: "Living room with a fireplace, brown sofas, and a wall-mounted TV beside an open kitchen with a long island",
  },
  {
    id: "open-plan-hardwood",
    images: range(52, 57).map(r),
    title: "Open-plan kitchen and living, hardwood",
    alt: "Open-plan kitchen with an island and pendant lights over hardwood floors, next to a bright living room",
  },
];
