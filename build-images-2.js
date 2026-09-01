const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const REAL = "../photos/portfolio/real";
const AHOME = "../photos/A. Home";
const MAX_WIDTH = 3840;
const QUALITY = 82;

const entries = [
  { dir: REAL, file: "COUSTOM BUILD - GRAND DIGUE (3).jpg", out: "public/images/process/process-1.jpg" },
  { dir: REAL, file: "COUSTOM BUILD - SALISBURY (3).jpg", out: "public/images/process/process-2.jpg" },
  { dir: REAL, file: "APARTMENT BUILDING (2).jpg", out: "public/images/process/process-3.jpg" },
  { dir: REAL, file: "COUSTOM BUILD - AMMON.jpg", out: "public/images/process/process-4.jpg" },

  { dir: REAL, file: "COUSTOM BUILD - GRAND DIGUE (7).jpg", out: "public/images/current-builds/build-1.jpg" },
  { dir: REAL, file: "COUSTOM BUILD - SALISBURY (1).jpg", out: "public/images/current-builds/build-2.jpg" },
  { dir: REAL, file: "APARTMENT BUILDING (1).jpg", out: "public/images/current-builds/build-3.jpg" },
  { dir: REAL, file: "COUSTOM BUILD - AMMON 2.jpg", out: "public/images/current-builds/build-4.jpg" },
  { dir: REAL, file: "COUSTOM BUILD - ART STUDIO (1).jpg", out: "public/images/current-builds/build-5.jpg" },
  { dir: REAL, file: "COUSTOM BUILD - ART STUDIO (3).jpg", out: "public/images/current-builds/build-6.jpg" },
  { dir: REAL, file: "COUSTOM BUILD - GARAGE.jpg", out: "public/images/current-builds/build-7.jpg" },
  { dir: REAL, file: "ADDITIION - TIMBERLINE 1 (2).jpg", out: "public/images/current-builds/build-8.jpg" },
  { dir: REAL, file: "ADDITIION - TIMBERLINE 1 (3).jpg", out: "public/images/current-builds/build-9.jpg" },

  { dir: AHOME, file: "View 2.jpg", out: "public/images/custom-homes-category.jpg" },
  { dir: AHOME, file: "Option C.jpg", out: "public/images/multi-unit-category.jpg" },
];

async function processOne(e) {
  let srcPath = path.join(e.dir, e.file);
  if (!fs.existsSync(srcPath)) {
    // fallback for the timberline 1(3) typo variant
    srcPath = path.join(e.dir, e.file.replace("ADDITIITON", "ADDITIION"));
  }
  if (!fs.existsSync(srcPath)) {
    console.error(`MISSING SOURCE: ${path.join(e.dir, e.file)}`);
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
