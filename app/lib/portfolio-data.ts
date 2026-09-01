export type ProjectSet = { id: string; images: string[] };

const p = (n: number) => `/images/portfolio/custom-homes-${n}.jpg`;
const m = (n: number) => `/images/portfolio/multi-unit-${n}.jpg`;
const r = (n: number) => `/images/portfolio/renovations-${n}.jpg`;
const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

export const customHomeProjects: ProjectSet[] = [
  { id: "tower", images: range(1, 7).map(p) },
  { id: "timmy", images: range(20, 30).map(p) },
  { id: "annik", images: range(31, 35).map(p) },
  { id: "christan", images: [p(57), p(38), p(37), p(36)] },
  { id: "justin", images: [p(40), p(39), p(41), p(54), p(55), p(56)] },
  { id: "stacy", images: range(42, 43).map(p) },
  { id: "john-mclean", images: range(44, 46).map(p) },
  { id: "art-studio", images: range(47, 49).map(p) },
  { id: "garage", images: range(50, 51).map(p) },
  { id: "timberline", images: [p(52)] },
  { id: "sunroom", images: [p(53)] },
];

export const multiUnitProjects: ProjectSet[] = [
  { id: "paul", images: [m(1)] },
  { id: "four-plex", images: range(2, 3).map(m) },
  { id: "karim", images: range(4, 5).map(m) },
  { id: "sunshine", images: [m(6)] },
  { id: "mirimichi", images: range(7, 9).map(m) },
  { id: "mountain-road", images: range(10, 12).map(m) },
];

export const renovationProjects: ProjectSet[] = [
  { id: "interior-renovation", images: range(1, 3).map(r) },
  { id: "kitchen", images: [r(31), r(4), r(5), r(6)] },
  { id: "joey", images: range(7, 20).map(r) },
  { id: "beach-front", images: [r(32), r(21), r(22), r(23), r(24)] },
  { id: "renovation-interior", images: range(25, 27).map(r) },
  { id: "timberline-addition", images: [r(28), r(29), r(33), r(30)] },
];
