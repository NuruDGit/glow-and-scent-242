/* ============================================================
   Glow & Scent 242 — Product Catalog
   Edit this file to update products, prices and stock.
   Prices are in Bahamian Dollars (B$).
   shape: round | square | tall | oil
   colors: [main, accent] used to render the bottle artwork
   ============================================================ */

const PRODUCTS = [
  {
    id: "khamrah",
    name: "Khamrah",
    house: "Lattafa",
    category: "unisex",
    price: 95,
    size: "100ml EDP",
    badge: "Best Seller",
    shape: "square",
    colors: ["#5a3214", "#c98a3d"],
    notes: { top: "Cinnamon, Nutmeg, Bergamot", heart: "Dates, Praline, Tuberose", base: "Vanilla, Tonka Bean, Amberwood" },
    desc: "A rich, boozy gourmand that wraps you in warm spices and sweet dates. The scent of golden hour, bottled."
  },
  {
    id: "yara",
    name: "Yara",
    house: "Lattafa",
    category: "women",
    price: 75,
    size: "100ml EDP",
    badge: "Best Seller",
    shape: "round",
    colors: ["#d96aa0", "#f3c2d8"],
    notes: { top: "Orchid, Heliotrope", heart: "Gourmand Accord, Tropical Fruits", base: "Vanilla, Musk" },
    desc: "Creamy, cozy and irresistibly feminine. Yara is the viral pink dream that lasts from morning to moonlight."
  },
  {
    id: "asad",
    name: "Asad",
    house: "Lattafa",
    category: "men",
    price: 80,
    size: "100ml EDP",
    badge: "Best Seller",
    shape: "square",
    colors: ["#1c1c1e", "#8c6b2f"],
    notes: { top: "Black Pepper, Pineapple, Tobacco", heart: "Coffee, Labdanum, Iris", base: "Vanilla, Amber, Benzoin" },
    desc: "Bold, smoky and magnetic — the lion of the Lattafa lineup. Made for nights that demand presence."
  },
  {
    id: "cdn-intense",
    name: "Club de Nuit Intense",
    house: "Armaf",
    category: "men",
    price: 85,
    size: "105ml EDT",
    badge: null,
    shape: "tall",
    colors: ["#101418", "#3a4a5a"],
    notes: { top: "Lemon, Blackcurrant, Apple", heart: "Birch, Jasmine, Rose", base: "Musk, Ambergris, Vanilla" },
    desc: "The legendary fresh-smoky signature that turned the fragrance world upside down. Crisp, confident, timeless."
  },
  {
    id: "9pm",
    name: "9PM",
    house: "Afnan",
    category: "men",
    price: 78,
    size: "100ml EDP",
    badge: "Date Night",
    shape: "square",
    colors: ["#2b1a3a", "#7b5ea7"],
    notes: { top: "Apple, Cinnamon, Bergamot", heart: "Orange Blossom, Lily", base: "Vanilla, Tonka, Amber" },
    desc: "Sweet, spicy and seductive — the after-dark fragrance that never goes unnoticed."
  },
  {
    id: "amber-oud-gold",
    name: "Amber Oud Gold Edition",
    house: "Al Haramain",
    category: "unisex",
    price: 120,
    size: "120ml EDP",
    badge: "Luxury",
    shape: "square",
    colors: ["#9a7b1e", "#e8c95a"],
    notes: { top: "Bergamot, Green Notes", heart: "Amber, Sweet Notes", base: "Vanilla, Musk, Woods" },
    desc: "Liquid gold. A radiant amber-vanilla masterpiece beloved across the Gulf — and now, the islands."
  },
  {
    id: "hawas",
    name: "Hawas for Him",
    house: "Rasasi",
    category: "men",
    price: 110,
    size: "100ml EDP",
    badge: "Summer Pick",
    shape: "round",
    colors: ["#0e3a5a", "#3fa9d6"],
    notes: { top: "Apple, Bergamot, Lemon", heart: "Orange Blossom, Cinnamon", base: "Ambergris, Driftwood, Musk" },
    desc: "An aquatic made for island life — blue, breezy and impossibly fresh against Bahamian heat."
  },
  {
    id: "shaghaf-oud",
    name: "Shaghaf Oud",
    house: "Swiss Arabian",
    category: "unisex",
    price: 105,
    size: "75ml EDP",
    badge: null,
    shape: "square",
    colors: ["#3d2314", "#a8763e"],
    notes: { top: "Saffron, Oud", heart: "Rose, Agarwood", base: "Amber, Sandalwood, Sugar" },
    desc: "Sweet oud done right — opulent saffron and rose over a honeyed agarwood heart."
  },
  {
    id: "ana-abiyedh",
    name: "Ana Abiyedh",
    house: "Lattafa",
    category: "unisex",
    price: 55,
    size: "60ml EDP",
    badge: null,
    shape: "tall",
    colors: ["#e9e4d8", "#c9b88a"],
    notes: { top: "Saffron, Cardamom", heart: "Musk, Amber", base: "Woody Notes, Moss" },
    desc: "Clean white musk with a whisper of saffron. Effortless elegance for every single day."
  },
  {
    id: "supremacy-silver",
    name: "Supremacy Silver",
    house: "Afnan",
    category: "men",
    price: 82,
    size: "100ml EDP",
    badge: null,
    shape: "tall",
    colors: ["#5a6470", "#b8c2cc"],
    notes: { top: "Grapefruit, Mint, Lemon", heart: "Ginger, Jasmine", base: "Cedar, Vetiver, Patchouli" },
    desc: "Polished, fresh and endlessly versatile — your boardroom-to-beach companion."
  },
  {
    id: "ajwad",
    name: "Ajwad",
    house: "Lattafa",
    category: "women",
    price: 60,
    size: "60ml EDP",
    badge: "New",
    shape: "round",
    colors: ["#7a2240", "#d4708f"],
    notes: { top: "Pink Fruits, Bergamot", heart: "Jasmine, Bitter Almond", base: "Vanilla, Oakmoss, Woods" },
    desc: "Fruity sophistication with a creamy almond twist — petite bottle, powerful trail."
  },
  {
    id: "oud-mood",
    name: "Oud Mood",
    house: "Lattafa",
    category: "unisex",
    price: 70,
    size: "100ml EDP",
    badge: null,
    shape: "square",
    colors: ["#4a1d10", "#b03a2e"],
    notes: { top: "Oud, Saffron", heart: "Rose, Floral Notes", base: "Amber, Musk, Vanilla" },
    desc: "Deep crimson oud and rose — a classic Arabian embrace at a gentle price."
  },
  {
    id: "oil-royal-oud",
    name: "Royal Oud Attar",
    house: "Glow & Scent Oils",
    category: "oils",
    price: 45,
    size: "12ml Perfume Oil",
    badge: "Alcohol-Free",
    shape: "oil",
    colors: ["#2e1a0a", "#9c7a3c"],
    notes: { top: "Pure Oud", heart: "Saffron, Rose", base: "Amber, Musk" },
    desc: "Concentrated alcohol-free attar oil. A single drop lasts all day — the traditional way to wear oud."
  },
  {
    id: "oil-musk-tahara",
    name: "Musk Al Tahara",
    house: "Glow & Scent Oils",
    category: "oils",
    price: 30,
    size: "12ml Perfume Oil",
    badge: "Best Seller",
    shape: "oil",
    colors: ["#f4efe6", "#cfc3a8"],
    notes: { top: "White Musk", heart: "Powdery Florals", base: "Clean Musk" },
    desc: "The famous white musk oil — soft, clean and skin-like. Layer it under any fragrance or wear it alone."
  },
  {
    id: "oil-amber-rose",
    name: "Amber Rose Elixir",
    house: "Glow & Scent Oils",
    category: "oils",
    price: 38,
    size: "12ml Perfume Oil",
    badge: null,
    shape: "oil",
    colors: ["#6e1f33", "#d98a9e"],
    notes: { top: "Damask Rose", heart: "Amber, Vanilla Orchid", base: "Sandalwood, Musk" },
    desc: "Velvet Taif rose wrapped in golden amber — a romantic attar blended for warm island evenings."
  },
  {
    id: "oil-sandal-saffron",
    name: "Sandal Saffron Attar",
    house: "Glow & Scent Oils",
    category: "oils",
    price: 42,
    size: "12ml Perfume Oil",
    badge: "New",
    shape: "oil",
    colors: ["#7a4a12", "#e0a23c"],
    notes: { top: "Saffron Threads", heart: "Mysore Sandalwood", base: "Warm Amber, Vetiver" },
    desc: "A meditative blend of creamy sandalwood and precious saffron, aged in the UAE tradition."
  }
];

const STORE = {
  name: "Glow & Scent 242",
  tagline: "Glow From Skin to Scent",
  phoneDisplay: "+1 (242) 455-1882",
  whatsapp: "12424551882",
  instagram: "https://instagram.com/glowandscent242",
  facebook: "https://facebook.com/glowandscent242",
  catalog: "https://wa.me/c/12424551882",
  currency: "B$",
  freeDeliveryOver: 100
};
