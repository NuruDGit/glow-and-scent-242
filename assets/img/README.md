# Image drop-in folder

The site looks for these exact filenames. Until a file exists, the page
automatically falls back to the drawn bottle artwork — so add images one
at a time whenever they're ready. Use JPG (or WebP renamed to .jpg is fine
in all modern browsers — prefer real JPG for safety).

| File | Used on | Recommended size |
|---|---|---|
| `collection-her.jpg` | Home → Collections → For Her | 900×1200 (3:4 portrait) |
| `collection-him.jpg` | Home → Collections → For Him | 900×1200 (3:4 portrait) |
| `collection-unisex.jpg` | Home → Collections → Unisex | 900×1200 (3:4 portrait) |
| `collection-oils.jpg` | Home → Collections → Perfume Oils | 900×1200 (3:4 portrait) |
| `story.jpg` | Home → Our Story panel | 1000×1250 (4:5 portrait) |
| `hero-lifestyle.jpg` | Home → Hero background (replaces the 3D bottle) | 2560×1440 (16:9 landscape) |

## Product photos

Add an `image` field to any product in `js/data.js`, e.g.:

```js
{ id: "khamrah", name: "Khamrah", ..., image: "assets/img/products/khamrah.jpg" }
```

Square 1000×1000 works best. The shop card, quick-view modal and cart all
use the photo automatically (and fall back to the drawn bottle if the file
is missing or fails to load).

Keep files under ~300 KB each (squoosh.app is an easy compressor).
