/* Rebuilds js/data.js from catalog.csv.
   Workflow to update the catalog from the Google Sheet:
     1. In the sheet:  File → Download → Comma-separated values (.csv)
     2. Replace catalog.csv in this project with the downloaded file
     3. Run:  node scripts/import-csv.mjs
     4. Commit & push (or ask Claude to)                                 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

/* --- minimal RFC-4180 CSV parser (handles quotes, commas, newlines) --- */
function parseCSV(text) {
  const rows = [];
  let row = [], field = "", inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; }
    else if (c === "\r") { /* ignore */ }
    else field += c;
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows;
}

const csv = readFileSync(join(root, "catalog.csv"), "utf8");
const [header, ...lines] = parseCSV(csv).filter((r) => r.length > 1 || (r.length === 1 && r[0].trim()));
const idx = Object.fromEntries(header.map((h, i) => [h.trim(), i]));
const get = (r, k) => (r[idx[k]] ?? "").trim();

const q = (s) => JSON.stringify(s);

const products = lines.filter((r) => get(r, "id")).map((r) => {
  const lines = [];
  lines.push(`    id: ${q(get(r, "id"))}, name: ${q(get(r, "name"))}, house: ${q(get(r, "house"))}, category: ${q(get(r, "category"))},`);
  const price = Number(get(r, "price"));
  const orig = get(r, "originalPrice");
  let priceLine = `    price: ${price},`;
  if (orig) priceLine += ` originalPrice: ${Number(orig)},`;
  priceLine += ` size: ${q(get(r, "size"))}, badge: ${get(r, "badge") ? q(get(r, "badge")) : "null"},`;
  lines.push(priceLine);
  lines.push(`    shape: ${q(get(r, "shape"))}, colors: [${q(get(r, "color_dark"))}, ${q(get(r, "color_light"))}],`);
  if (get(r, "image")) lines.push(`    image: ${q(get(r, "image"))},`);
  lines.push(`    notes: { top: ${q(get(r, "notes_top"))}, heart: ${q(get(r, "notes_heart"))}, base: ${q(get(r, "notes_base"))} },`);
  lines.push(`    desc: ${q(get(r, "description"))}`);
  return `  {\n${lines.join("\n")}\n  }`;
});

/* preserve the existing STORE block */
const current = readFileSync(join(root, "js", "data.js"), "utf8");
const storeBlock = current.slice(current.indexOf("const STORE"));

const out = `/* ============================================================
   Glow & Scent 242 — Product Catalog
   GENERATED from catalog.csv by scripts/import-csv.mjs — do not hand-edit
   if you are syncing from the Google Sheet. Otherwise edit freely.
     category → women | men | unisex | oils
     shape    → round | square | tall | oil
   ============================================================ */

const PRODUCTS = [
${products.join(",\n")}
];

${storeBlock}`;

writeFileSync(join(root, "js", "data.js"), out);
console.log(`Rebuilt js/data.js from ${products.length} catalog rows.`);
