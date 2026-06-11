# Glow & Scent 242 ✦ Luxury Fragrance Boutique

> **Glow From Skin to Scent** — Luxury Arabian fragrances & perfume oils, imported from the UAE to The Bahamas. 🇧🇸

A modern, luxury ecommerce storefront for **Glow & Scent 242** (Nassau, Bahamas). Built as a fast, dependency-free static site with a Three.js animated hero, GSAP scroll animations, and a WhatsApp-powered checkout that matches how the business already sells.

## ✨ Features

- **Three.js hero** — a rotating glass perfume bottle with golden liquid and drifting gold-dust particles (with mouse parallax and a WebGL fallback)
- **GSAP + ScrollTrigger** — staggered hero reveal, scroll-triggered section animations, animated stat counters, infinite brand marquee
- **Full shop page** — category filters (Her / Him / Unisex / Perfume Oils), live search across names & fragrance notes, price/name sorting, deep-linkable categories (`shop.html?cat=oils`)
- **Product quick-view modal** — top/heart/base notes, description, add to bag
- **Shopping bag** — slide-out drawer, quantity controls, persisted in `localStorage`, free-delivery progress note
- **WhatsApp checkout** — the bag converts into a pre-filled order message sent to **+1 (242) 455-1882**, so orders land exactly where the business already operates
- **Luxury brand design** — black / gold / cream palette drawn from the logo, Cormorant Garamond + Great Vibes + Jost typography, fully responsive

## 🗂 Structure

```
├── index.html        # Home — hero, collections, best sellers, story, testimonials
├── shop.html         # Full catalog with filters, search & sort
├── css/style.css     # All styling
├── js/data.js        # ★ Product catalog & store settings — edit this file
├── js/store.js       # Cart, drawer, modal, WhatsApp checkout, bottle artwork
├── js/main.js        # Homepage GSAP animations
├── js/shop.js        # Shop filtering/search/sort
├── js/three-hero.js  # Three.js hero scene
└── assets/           # Favicon & static assets
```

## 🛍 Updating products

Everything editable lives in [`js/data.js`](js/data.js):

- **Products** — name, house, category (`women | men | unisex | oils`), price (B$), size, badge, fragrance notes, description, bottle `shape` (`round | square | tall | oil`) and `colors` used to draw the bottle artwork.
- **Store settings** — WhatsApp number, social links, free-delivery threshold.

No build step required — edit and refresh.

## 🚀 Running locally

Any static server works:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then open `http://localhost:8000`. (Opening `index.html` directly via `file://` also works in most browsers, but a server is recommended for the Three.js module imports.)

## 🌐 Deploying

The site is 100% static — deploy free on **GitHub Pages** (Settings → Pages → deploy from `main` branch), Netlify, Vercel, or Cloudflare Pages.

## 📞 Contact

- WhatsApp / Phone: [+1 (242) 455-1882](https://wa.me/12424551882)
- Catalog: [wa.me/c/12424551882](https://wa.me/c/12424551882)
- Instagram: [@glowandscent242](https://instagram.com/glowandscent242)
- Facebook: [@glowandscent242](https://facebook.com/glowandscent242)
