const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const REAL = "../photos/portfolio/real";
const RENDERS = "../photos/portfolio/renders";
const OUT = "public/images/portfolio";
const MAX_WIDTH = 3840;
const QUALITY = 82;

const jpg = (n) => `custom-homes-${n}.jpg`;
const mjpg = (n) => `multi-unit-${n}.jpg`;
const rjpg = (n) => `renovations-${n}.jpg`;

const entries = [
  // TOWER (7)
  ...[1, 2, 3, 4, 5, 6, 7].map((n) => ({ dir: RENDERS, file: `COUSTOME HOME - TOWER (${n}).jpg`, dest: jpg(n) })),
  // TIMMY (11) -> custom-homes-20..30
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n, i) => ({
    dir: RENDERS,
    file: `COUSTOM HOME - TIMMY (${n}).${n === 4 || n === 5 ? "JPG" : "jpg"}`,
    dest: jpg(20 + i),
  })),
  // ANNIK (5) -> custom-homes-31..35
  ...[1, 2, 3, 4, 5].map((n, i) => ({ dir: RENDERS, file: `COUSTOME HOME - ANNIK (${n}).jpg`, dest: jpg(31 + i) })),
  // CHRISTAN (3 png) -> custom-homes-36..38
  ...[1, 2, 3].map((n, i) => ({ dir: RENDERS, file: `COUSTOME HOME - CHRISTAN (${n}).png`, dest: jpg(36 + i) })),
  // JUSTIN (3 png) -> custom-homes-39..41
  ...[1, 2, 3].map((n, i) => ({ dir: RENDERS, file: `COUSTOME BUILD - JUSTIN (${n}).png`, dest: jpg(39 + i) })),
  // STACY (2 png) -> custom-homes-42..43
  ...[1, 2].map((n, i) => ({ dir: RENDERS, file: `COUSTOM HOME STACY (${n}).png`, dest: jpg(42 + i) })),
  // JOHN MCLEAN (3 jpeg) -> custom-homes-44..46
  ...[1, 2, 3].map((n, i) => ({ dir: RENDERS, file: `COUSTOM BUILD - JOHN MCLEAN (${n}).jpeg`, dest: jpg(44 + i) })),
  // ART STUDIO (3) -> custom-homes-47..49
  ...[1, 2, 3].map((n, i) => ({ dir: RENDERS, file: `COUSTOM HOME - ART STUDIO (${n}).jpg`, dest: jpg(47 + i) })),
  // GARAGE (2) -> custom-homes-50..51
  ...[1, 2].map((n, i) => ({ dir: RENDERS, file: `COUSTOM HOME - GARAGE (${n}).jpg`, dest: jpg(50 + i) })),
  // TIMBERLINE (1) -> custom-homes-52
  { dir: RENDERS, file: "COUSTOM HOME - TIMBERLINE.jpg", dest: jpg(52) },
  // SUNROOM (1) -> custom-homes-53
  { dir: RENDERS, file: "COUSTOM HOME - SUNROOM.jpg", dest: jpg(53) },

  // MULTI-UNIT
  { dir: RENDERS, file: "APARTMENT - PAUL.jpg", dest: mjpg(1) },
  { dir: RENDERS, file: "APARTMENT - 4 PLEX (1).jpg", dest: mjpg(2) },
  { dir: RENDERS, file: "APARTMENT - 4 PLEX (2).jpg", dest: mjpg(3) },
  { dir: RENDERS, file: "APARTMENT - KARIM (1).jpg", dest: mjpg(4) },
  { dir: RENDERS, file: "APARTMENT - KARIM (2).jpg", dest: mjpg(5) },
  { dir: RENDERS, file: "APARTMENT - SUNSHINE.jpg", dest: mjpg(6) },
  { dir: RENDERS, file: "APARTMENT BUILDING - MIRIMICHI (1).JPG", dest: mjpg(7) },
  { dir: RENDERS, file: "APARTMENT BUILDING - MIRIMICHI (2).JPG", dest: mjpg(8) },
  { dir: RENDERS, file: "APARTMENT BUILDING - MIRIMICHI (3).JPG", dest: mjpg(9) },
  { dir: RENDERS, file: "COMERCIAL BUILDING - MOUNTAIN ROAD (1).jpg", dest: mjpg(10) },
  { dir: RENDERS, file: "COMERCIAL BUILDING - MOUNTAIN ROAD (2).jpg", dest: mjpg(11) },
  { dir: RENDERS, file: "COMERCIAL BUILDING - MOUNTAIN ROAD (3).jpg", dest: mjpg(12) },

  // RENOVATIONS
  // interior renovation (real) - kitchen first as cover
  { dir: REAL, file: "INTERIOR RENOVATION 1.jpg", dest: rjpg(1) },
  { dir: REAL, file: "INTERIOR RENOVATION.jpg", dest: rjpg(2) },
  { dir: REAL, file: "INTERIOR RENOVATION 2.jpg", dest: rjpg(3) },
  // kitchen render (3 png)
  ...[1, 2, 3].map((n, i) => ({ dir: RENDERS, file: `RENOVATION - KITCHEN (${n}).png`, dest: rjpg(4 + i) })),
  // joey (14)
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((n, i) => ({
    dir: RENDERS,
    file: `RENOVATION - JOEY (${n}).jpg`,
    dest: rjpg(7 + i),
  })),
  // beach front (4 png)
  ...[1, 2, 3, 4].map((n, i) => ({ dir: RENDERS, file: `ADDITION - BEACH FRONT (${n}).png`, dest: rjpg(21 + i) })),
  // renovation interior (3 png)
  ...[1, 2, 3].map((n, i) => ({ dir: RENDERS, file: `RENOVATION - INTERIOR (${n}).png`, dest: rjpg(25 + i) })),
  // timberline addition (real, finished-only)
  { dir: REAL, file: "ADDITIION - TIMBERLINE.jpg", dest: rjpg(28) },
  { dir: REAL, file: "ADDITIION - TIMBERLINE 1 (1).jpg", dest: rjpg(29) },
  { dir: REAL, file: "ADDITIION - TIMBERLINE 1 (3).jpg", dest: rjpg(30) },
];

async function processOne(e) {
  const srcPath = path.join(e.dir, e.file);
  if (!fs.existsSync(srcPath)) {
    console.error(`MISSING SOURCE: ${srcPath}`);
    return;
  }
  const buffer = fs.readFileSync(srcPath);
  const image = sharp(buffer, { failOn: "none" });
  const metadata = await image.metadata();
  const resized =
    metadata.width && metadata.width > MAX_WIDTH ? image.resize({ width: MAX_WIDTH }) : image;
  const outBuffer = await resized.jpeg({ quality: QUALITY, progressive: false, mozjpeg: true }).toBuffer();
  fs.writeFileSync(path.join(OUT, e.dest), outBuffer);
  console.log(`${e.file} -> ${e.dest} (${(outBuffer.length / 1024).toFixed(0)}KB)`);
}

async function main() {
  for (const e of entries) {
    await processOne(e);
  }
  console.log(`\nDone. ${entries.length} images processed.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
