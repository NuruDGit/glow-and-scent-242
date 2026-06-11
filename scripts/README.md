# Catalog maintenance

The product catalog lives in two places that stay in sync:

- **`js/data.js`** — what the website actually reads.
- **`catalog.csv`** — a flat spreadsheet version (also mirrored in the
  Google Sheet **"Glow & Scent 242 — Product Catalog"** in Drive).

## Update products from the Google Sheet
1. In the sheet: **File → Download → Comma-separated values (.csv)**
2. Replace `catalog.csv` in the project with the downloaded file.
3. Run: `node scripts/import-csv.mjs`  → rebuilds `js/data.js`
4. Commit & push (or just ask Claude to).

## Update the sheet from the site (reverse)
If you edited `js/data.js` directly and want the CSV/sheet to match:
1. Run: `node scripts/export-csv.mjs`  → rewrites `catalog.csv`
2. Re-upload to the Google Sheet (File → Import → Replace current sheet).

## Column reference
`id` (unique, no spaces) · `name` · `house` · `category` (women|men|unisex|oils)
· `price` · `originalPrice` (optional was-price) · `size` · `badge` (optional)
· `shape` (round|square|tall|oil) · `color_dark` / `color_light` (fallback art)
· `image` (optional `assets/img/products/<file>.jpg`)
· `notes_top` / `notes_heart` / `notes_base` · `description`

Leave `image` blank to use the auto-drawn bottle (coloured by the two hex values).
