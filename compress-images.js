const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const dirs = [
  "public/images/portfolio",
  "public/images/process",
  "public/images/current-builds",
];
const rootFiles = ["public/images/custom-homes-category.jpg", "public/images/multi-unit-category.jpg"];

const MAX_WIDTH = 2400;
const QUALITY = 82;

const SKIP_UNDER_BYTES = 2 * 1024 * 1024;

async function compressFile(filePath) {
  const before = fs.statSync(filePath).size;
  if (before < SKIP_UNDER_BYTES) {
    console.log(`${path.basename(filePath)}: already compressed, skipping`);
    return { oldPath: filePath, newPath: filePath };
  }
  const buffer = fs.readFileSync(filePath);
  const image = sharp(buffer, { failOn: "none" });
  const metadata = await image.metadata();

  const resized = metadata.width && metadata.width > MAX_WIDTH
    ? image.resize({ width: MAX_WIDTH })
    : image;

  const outBuffer = await resized.jpeg({ quality: QUALITY, progressive: false, mozjpeg: true }).toBuffer();

  const ext = path.extname(filePath);
  const newPath = filePath.replace(new RegExp(`${ext}$`), ".jpg");
  fs.writeFileSync(newPath, outBuffer);
  if (newPath !== filePath) fs.unlinkSync(filePath);

  const after = outBuffer.length;
  console.log(
    `${path.basename(filePath)} -> ${path.basename(newPath)}: ${(before / 1024 / 1024).toFixed(1)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB`
  );
  return { oldPath: filePath, newPath };
}

async function main() {
  const renames = [];
  for (const dir of dirs) {
    const files = fs.readdirSync(dir).filter((f) => /\.(jpe?g|png)$/i.test(f));
    for (const f of files) {
      const r = await compressFile(path.join(dir, f));
      renames.push(r);
    }
  }
  for (const f of rootFiles) {
    const r = await compressFile(f);
    renames.push(r);
  }
  fs.writeFileSync("compress-renames.json", JSON.stringify(renames, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
