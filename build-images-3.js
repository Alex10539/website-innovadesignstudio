const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const REAL = "../photos/portfolio/real";
const RENDERS = "../photos/portfolio/renders";
const MAX_WIDTH = 3840;
const QUALITY = 82;

const entries = [
  // Justin interiors (new, custom-homes 54-56)
  { dir: RENDERS, file: "COUSTOME BUILD - JUSTIN (1).jpeg", out: "public/images/portfolio/custom-homes-54.jpg" },
  { dir: RENDERS, file: "COUSTOME BUILD - JUSTIN (2).jpeg", out: "public/images/portfolio/custom-homes-55.jpg" },
  { dir: RENDERS, file: "COUSTOME BUILD - JUSTIN (3).jpeg", out: "public/images/portfolio/custom-homes-56.jpg" },
  // Christan farmhouse exterior (new, custom-homes 57)
  { dir: RENDERS, file: "COUSTOME HOME - CHRISTAN (1).jpg", out: "public/images/portfolio/custom-homes-57.jpg" },
  // Kitchen extra (renovations 31)
  { dir: RENDERS, file: "RENOVATION - KITCHEN (1).jpg", out: "public/images/portfolio/renovations-31.jpg" },
  // Beach front extra (renovations 32)
  { dir: RENDERS, file: "ADDITION - BEACH FRONT (1).jpg", out: "public/images/portfolio/renovations-32.jpg" },
  // Timberline addition extra (renovations 33)
  { dir: REAL, file: "ADDITIION - TIMBERLINE 1 (2).jpg", out: "public/images/portfolio/renovations-33.jpg" },

  // Currently Building — more real construction photos (build-10..18)
  { dir: REAL, file: "COUSTOM BUILD - GRAND DIGUE (1).jpg", out: "public/images/current-builds/build-10.jpg" },
  { dir: REAL, file: "COUSTOM BUILD - GRAND DIGUE (2).jpg", out: "public/images/current-builds/build-11.jpg" },
  { dir: REAL, file: "COUSTOM BUILD - GRAND DIGUE (4).jpg", out: "public/images/current-builds/build-12.jpg" },
  { dir: REAL, file: "COUSTOM BUILD - GRAND DIGUE (5).jpg", out: "public/images/current-builds/build-13.jpg" },
  { dir: REAL, file: "COUSTOM BUILD - GRAND DIGUE (6).jpg", out: "public/images/current-builds/build-14.jpg" },
  { dir: REAL, file: "COUSTOM BUILD - SALISBURY (2).jpg", out: "public/images/current-builds/build-15.jpg" },
  { dir: REAL, file: "APARTMENT BUILDING (3).jpg", out: "public/images/current-builds/build-16.jpg" },
  { dir: REAL, file: "COUSTOM BUILD - AMMON 1.jpg", out: "public/images/current-builds/build-17.jpg" },
  { dir: REAL, file: "COUSTOM BUILD - ART STUDIO (2).jpg", out: "public/images/current-builds/build-18.jpg" },
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
  fs.writeFileSync(e.out, outBuffer);
  console.log(`${e.file} -> ${e.out} (${(outBuffer.length / 1024).toFixed(0)}KB)`);
}

async function main() {
  for (const e of entries) {
    await processOne(e);
  }
  console.log(`\nDone.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
