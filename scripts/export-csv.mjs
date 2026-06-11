/* Regenerates catalog.csv from js/data.js so the spreadsheet always
   matches the live site. Run:  node scripts/export-csv.mjs            */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = readFileSync(join(root, "js", "data.js"), "utf8");
const { PRODUCTS } = new Function(src + "\nreturn { PRODUCTS };")();

const COLS = [
  "id", "name", "house", "category", "price", "originalPrice", "size",
  "badge", "shape", "color_dark", "color_light", "image",
  "notes_top", "notes_heart", "notes_base", "description"
];

const cell = (v) => {
  if (v === undefined || v === null) return "";
  const s = String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

const rows = PRODUCTS.map((p) => [
  p.id, p.name, p.house, p.category, p.price, p.originalPrice ?? "", p.size,
  p.badge ?? "", p.shape, p.colors?.[0] ?? "", p.colors?.[1] ?? "", p.image ?? "",
  p.notes?.top ?? "", p.notes?.heart ?? "", p.notes?.base ?? "", p.desc
].map(cell).join(","));

writeFileSync(join(root, "catalog.csv"), [COLS.join(","), ...rows].join("\n") + "\n");
console.log(`Wrote catalog.csv with ${PRODUCTS.length} products.`);
