/**
 * Regenerates every raster brand asset from one vector source.
 *
 * Run with `node scripts/generate-icons.mjs` after changing `MARK` below.
 * The outputs are committed, so this is not part of `next build` — it is a
 * one-off tool, and it uses the `sharp` that `next` already installs rather
 * than adding a dependency (and a postinstall script) of its own.
 *
 * Why generate instead of hand-drawing each size: a favicon is the same mark
 * at 16px and at 512px, and those two need different drawings. Small sizes get
 * a tighter crop and a heavier stroke (`glyph`/`stroke` overrides below) so the
 * recycling loop stays legible when it is 16 pixels wide; large sizes get the
 * proportions the site header actually uses.
 */

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/* ------------------------------------------------------------------ brand */

const BRAND = "#2f7d4f"; // --color-brand
const ON_BRAND = "#ffffff";

/**
 * lucide's `recycle`, the same mark `components/marketing/logo.tsx` renders in
 * the header. Copied rather than imported because this runs outside the React
 * tree; if lucide's path data changes, re-copy it from
 * `node_modules/lucide-react/dist/esm/icons/recycle.mjs`.
 */
const RECYCLE_PATHS = [
  "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",
  "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",
  "m14 16-3 3 3 3",
  "M8.293 13.596 7.196 9.5 3.1 10.598",
  "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",
  "m13.378 9.633 4.096 1.098 1.097-4.096",
];

/**
 * @param glyph  fraction of the tile the 24x24 glyph box occupies
 * @param stroke stroke width in glyph units (lucide draws at 2)
 * @param radius corner radius as a fraction of the tile, 0 for full bleed
 * @param bg     tile fill, or null for a transparent tile with a brand glyph
 */
function mark({ glyph = 0.62, stroke = 2.4, radius = 0.22, bg = BRAND } = {}) {
  const S = 64; // authoring units; every consumer scales from here
  const scale = (glyph * S) / 24;
  const offset = (S - glyph * S) / 2;
  const fg = bg ? ON_BRAND : BRAND;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${S} ${S}" width="${S}" height="${S}">${
    bg
      ? `<rect width="${S}" height="${S}" rx="${(radius * S).toFixed(2)}" fill="${bg}"/>`
      : ""
  }<g transform="translate(${offset.toFixed(3)} ${offset.toFixed(3)}) scale(${scale.toFixed(5)})" fill="none" stroke="${fg}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">${RECYCLE_PATHS.map(
    (d) => `<path d="${d}"/>`,
  ).join("")}</g></svg>`;
}

const png = (svg, size) =>
  sharp(Buffer.from(svg), { density: 384 })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9, palette: false })
    .toBuffer();

/* -------------------------------------------------------------------- ico */

/**
 * ICO container holding PNG-compressed entries (the Vista-era variant). Every
 * browser Google's favicon crawler cares about reads it, and it is ~10x
 * smaller than the equivalent BMP payloads.
 */
function ico(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);

  let offset = 6 + images.length * 16;
  const entries = [];

  for (const { size, data } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // 0 means 256
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2); // palette size
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // colour planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += data.length;
  }

  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

/* ------------------------------------------------------------------ build */

const out = async (rel, data) => {
  const file = path.join(root, rel);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, data);
  console.log(`  ${rel.padEnd(38)} ${(data.length / 1024).toFixed(1)} KB`);
};

// Full-detail mark, used everywhere the icon is rendered above ~48px.
const standard = mark();

/**
 * Optical sizing for the .ico. The recycling loop is three separate arrows with
 * gaps between them, and at 16px those gaps close into a green blob unless the
 * glyph grows and the stroke gets much heavier. So each size is drawn for
 * itself rather than downscaled from one master.
 */
const icoSizes = [
  { size: 16, glyph: 0.86, stroke: 4.2, radius: 0.12 },
  { size: 32, glyph: 0.78, stroke: 3.4, radius: 0.14 },
  { size: 48, glyph: 0.74, stroke: 3.1, radius: 0.16 },
];

// Android adaptive icons crop to a circle inscribed in the middle 80%, so the
// glyph has to sit well inside that and the tile has to bleed to the edges.
const maskable = mark({ glyph: 0.44, stroke: 2.2, radius: 0 });

// iOS masks its own corners and drops the alpha channel, so: full bleed, no rx.
const apple = mark({ glyph: 0.6, stroke: 2.4, radius: 0 });

console.log("Writing brand assets…");

await out("app/icon.svg", Buffer.from(standard));
await out("public/brand/mark.svg", Buffer.from(standard));

await out(
  "app/favicon.ico",
  ico(
    await Promise.all(
      icoSizes.map(async ({ size, ...spec }) => ({
        size,
        data: await png(mark(spec), size),
      })),
    ),
  ),
);

await out("app/apple-icon.png", await png(apple, 180));
await out("public/brand/icon-192.png", await png(standard, 192));
await out("public/brand/icon-512.png", await png(standard, 512));
await out("public/brand/icon-maskable-512.png", await png(maskable, 512));

// Organization `logo` in JSON-LD. Google requires a raster it can fetch and
// index; 512 square is comfortably over its 112px floor.
await out("public/brand/logo.png", await png(standard, 512));

console.log("Done.");
