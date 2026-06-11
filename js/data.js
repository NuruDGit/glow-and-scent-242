/* ============================================================
   Glow & Scent 242 — Product Catalog
   Edit this file to update products, prices and stock.
   Prices are in Bahamian Dollars (B$).
     price          → current selling price (number, no quotes)
     originalPrice  → optional was-price; shows struck-through + "Save"
     category       → women | men | unisex | oils
     shape          → round | square | tall | oil   (drawn bottle artwork)
     colors         → [dark, light]  (used only when no `image` is set)
     image          → optional "assets/img/products/<file>.jpg"
   ============================================================ */

const PRODUCTS = [
  /* ---------- Khamrah family (Lattafa) ---------- */
  {
    id: "khamrah", name: "Khamrah", house: "Lattafa", category: "unisex",
    price: 65, originalPrice: 90, size: "100ml EDP", badge: "Best Seller",
    shape: "square", colors: ["#3a1d0c", "#c98a3d"],
    notes: { top: "Cinnamon, Nutmeg, Bergamot", heart: "Dates, Praline, Tuberose", base: "Vanilla, Tonka Bean, Amberwood" },
    desc: "Warm, sweet and spicy with a whisper of vanilla. Rich, luxurious and very long-lasting — the scent of golden hour, bottled."
  },
  {
    id: "khamrah-qahwa", name: "Khamrah Qahwa", house: "Lattafa", category: "unisex",
    price: 65, originalPrice: 90, size: "100ml EDP", badge: "Popular",
    shape: "square", colors: ["#2a1206", "#7a4a1e"],
    notes: { top: "Coffee, Cardamom", heart: "Dates, Cinnamon", base: "Vanilla, Tonka, Amberwood" },
    desc: "A deep, warm coffee scent laced with sweet and spicy notes. Perfect for cozy island evenings."
  },
  {
    id: "khamrah-dukhan", name: "Khamrah Dukhan", house: "Lattafa", category: "unisex",
    price: 65, originalPrice: 90, size: "100ml EDP", badge: null,
    shape: "square", colors: ["#4a1018", "#a83a2e"],
    notes: { top: "Cinnamon, Incense", heart: "Oud, Dates", base: "Amber, Vanilla, Tonka" },
    desc: "A smoky, spicy blend of cinnamon, oud and sweet amber. Warm, mysterious and utterly magnetic."
  },

  /* ---------- Asad / Lattafa men ---------- */
  {
    id: "asad", name: "Asad", house: "Lattafa", category: "men",
    price: 50, originalPrice: 60, size: "100ml EDP", badge: "Best Seller",
    shape: "square", colors: ["#14110a", "#8c6b2f"],
    notes: { top: "Black Pepper, Pineapple, Tobacco", heart: "Coffee, Labdanum, Iris", base: "Vanilla, Amber, Benzoin" },
    desc: "A bold and powerful scent with spicy notes, warm amber and smooth vanilla. The lion of the lineup."
  },
  {
    id: "asad-bourbon", name: "Asad Bourbon", house: "Lattafa", category: "men",
    price: 50, originalPrice: 60, size: "100ml EDP", badge: null,
    shape: "square", colors: ["#3a1d0c", "#9c6b2f"],
    notes: { top: "Bourbon, Spices", heart: "Tobacco, Coffee", base: "Vanilla, Woods, Amber" },
    desc: "A rich, sweet-spicy fragrance with warm vanilla, woods and a boozy twist. Made for nights out."
  },
  {
    id: "asad-zanzibar", name: "Asad Zanzibar", house: "Lattafa", category: "men",
    price: 50, originalPrice: 60, size: "100ml EDP", badge: null,
    shape: "tall", colors: ["#0e2a4a", "#3f78c6"],
    notes: { top: "Citrus, Bergamot", heart: "Aromatic Spices, Lavender", base: "Warm Woods, Musk" },
    desc: "A fresh and vibrant scent with citrus, aromatic spices and warm woods. Clean, confident and breezy."
  },
  {
    id: "the-kingdom", name: "The Kingdom", house: "Lattafa", category: "men",
    price: 60, originalPrice: 65, size: "100ml EDP", badge: null,
    shape: "tall", colors: ["#5a4418", "#c9a23c"],
    notes: { top: "Spices, Bergamot", heart: "Tobacco, Vanilla", base: "Woods, Amber" },
    desc: "A warm, spicy fragrance blended with sweet vanilla, tobacco and rich woods. Regal and commanding."
  },
  {
    id: "teriaq-intense", name: "Teriaq Intense", house: "Lattafa", category: "unisex",
    price: 55, originalPrice: 60, size: "100ml EDP", badge: null,
    shape: "tall", colors: ["#1c1208", "#c9a23c"],
    notes: { top: "Saffron, Spices", heart: "Sweet Accord, Florals", base: "Woods, Amber, Musk" },
    desc: "A bold, captivating fragrance with spicy, sweet and woody accords. Richly addictive."
  },

  /* ---------- Ameer / Ameerat Al Arab (Asdaaf) ---------- */
  {
    id: "ameer-al-arab", name: "Ameer Al Arab", house: "Asdaaf", category: "men",
    price: 50, originalPrice: 60, size: "100ml EDP", badge: null,
    shape: "tall", colors: ["#16161a", "#8c8c94"],
    notes: { top: "Spices, Bergamot", heart: "Woods, Geranium", base: "Amber, Musk" },
    desc: "Bold, woody and slightly spicy. A strong masculine scent that lasts all day."
  },
  {
    id: "ameer-al-arab-imperium", name: "Ameer Al Arab Imperium", house: "Asdaaf", category: "men",
    price: 50, originalPrice: 55, size: "100ml EDP", badge: null,
    shape: "tall", colors: ["#1a3a5a", "#5a9bd4"],
    notes: { top: "Marine Notes, Citrus", heart: "Lavender, Geranium", base: "Cedar, Musk" },
    desc: "Fresh, aquatic and clean. Perfect for daily wear and warm island weather."
  },
  {
    id: "ameer-al-arab-rose", name: "Ameer Al Arab Rose", house: "Asdaaf", category: "women",
    price: 50, originalPrice: 60, size: "100ml EDP", badge: null,
    shape: "round", colors: ["#7a2240", "#e0a0b4"],
    notes: { top: "Pink Pepper, Bergamot", heart: "Rose, Jasmine", base: "Musk, Amber" },
    desc: "Floral, sweet and feminine. A romantic scent with a soft, rosy finish."
  },
  {
    id: "ameerat-al-arab-red", name: "Ameerat Al Arab (Red)", house: "Asdaaf", category: "women",
    price: 50, originalPrice: 60, size: "100ml EDP", badge: null,
    shape: "round", colors: ["#6e1018", "#c4404a"],
    notes: { top: "Red Fruits, Saffron", heart: "Rose, Jasmine", base: "Vanilla, Amber, Musk" },
    desc: "Sweet, smooth and slightly fruity. A soft yet rich scent with a luxurious feel."
  },

  /* ---------- Bade'e Al Oud (Asdaaf) ---------- */
  {
    id: "badee-honor-glory", name: "Bade'e Al Oud – Honor & Glory", house: "Asdaaf", category: "unisex",
    price: 50, originalPrice: 60, size: "100ml EDP", badge: null,
    shape: "square", colors: ["#7a6a2a", "#d8c98a"],
    notes: { top: "Pineapple, Bergamot", heart: "Spices, Orris", base: "Vanilla, Amber, Woods" },
    desc: "A luxurious blend of sweet pineapple, warm spices and creamy vanilla. Rich and elegant."
  },
  {
    id: "badee-oud-for-glory", name: "Bade'e Al Oud – Oud for Glory", house: "Asdaaf", category: "unisex",
    price: 50, originalPrice: 60, size: "100ml EDP", badge: null,
    shape: "square", colors: ["#1a1208", "#7a5a2a"],
    notes: { top: "Saffron, Spices", heart: "Oud, Patchouli", base: "Woods, Amber, Musk" },
    desc: "A bold, smoky oud fragrance with warm spices and deep woody notes. Rich and intense."
  },
  {
    id: "badee-noble-blush", name: "Bade'e Al Oud – Noble Blush", house: "Asdaaf", category: "women",
    price: 50, originalPrice: 55, size: "100ml EDP", badge: null,
    shape: "round", colors: ["#7a3a4a", "#e0a0aa"],
    notes: { top: "Pink Pepper, Berries", heart: "Rose Milk, Jasmine", base: "Vanilla, Musk" },
    desc: "A soft, creamy gourmand with rose milk, vanilla and musk. Sweet, tender and pretty."
  },
  {
    id: "badee-sublime", name: "Bade'e Al Oud – Sublime", house: "Asdaaf", category: "unisex",
    price: 50, originalPrice: 60, size: "100ml EDP", badge: null,
    shape: "square", colors: ["#5a1018", "#b03a3a"],
    notes: { top: "Apple, Plum", heart: "Soft Oud, Rose", base: "Amber, Vanilla, Musk" },
    desc: "A juicy, fruity scent with apple and plum wrapped in soft oud. Sweet, fresh and elegant."
  },
  {
    id: "badee-amethyst", name: "Bade'e Al Oud – Amethyst", house: "Asdaaf", category: "unisex",
    price: 50, originalPrice: 55, size: "100ml EDP", badge: null,
    shape: "square", colors: ["#3a1a4a", "#9a6ac6"],
    notes: { top: "Saffron, Rose", heart: "Oud, Orris", base: "Vanilla, Amber, Woods" },
    desc: "A rich blend of oud, rose and vanilla with a luxurious oriental touch. Bold and smoky."
  },

  /* ---------- Yara family (Lattafa) ---------- */
  {
    id: "yara", name: "Yara", house: "Lattafa", category: "women",
    price: 50, originalPrice: 60, size: "100ml EDP", badge: "Best Seller",
    shape: "round", colors: ["#d96aa0", "#f3c2d8"],
    notes: { top: "Orchid, Tropical Fruits", heart: "Heliotrope, Gourmand Accord", base: "Vanilla, Musk" },
    desc: "A sweet tropical fragrance with vanilla, fruits and soft musk. Feminine, playful and long-lasting."
  },
  {
    id: "yara-tous", name: "Yara Tous", house: "Lattafa", category: "women",
    price: 50, originalPrice: 60, size: "100ml EDP", badge: null,
    shape: "round", colors: ["#c98a1e", "#f0cf7a"],
    notes: { top: "Mango, Coconut", heart: "Jasmine, Orchid", base: "Vanilla, Musk" },
    desc: "A bright tropical fragrance bursting with juicy mango, coconut and soft jasmine."
  },
  {
    id: "yara-moi", name: "Yara Moi", house: "Lattafa", category: "women",
    price: 50, originalPrice: 60, size: "100ml EDP", badge: null,
    shape: "round", colors: ["#9a7a3a", "#e8d6a8"],
    notes: { top: "Caramel, Bergamot", heart: "Jasmine, Orange Blossom", base: "Vanilla, Musk, Sandalwood" },
    desc: "A creamy floral scent with caramel, vanilla and jasmine. Soft, elegant and comforting."
  },
  {
    id: "yara-candy", name: "Yara Candy", house: "Lattafa", category: "women",
    price: 50, originalPrice: 65, size: "100ml EDP", badge: null,
    shape: "round", colors: ["#c41e5a", "#f06a9a"],
    notes: { top: "Strawberry, Candy", heart: "Vanilla, Florals", base: "Musk, Caramel" },
    desc: "A playful scent filled with strawberry candy, sweet vanilla and soft musk. Fun and flirty."
  },
  {
    id: "yara-elixir", name: "Yara Elixir", house: "Lattafa", category: "women",
    price: 50, originalPrice: 55, size: "100ml EDP", badge: "New",
    shape: "round", colors: ["#a83a6a", "#e89ab8"],
    notes: { top: "Sweet Fruits, Bergamot", heart: "Vanilla, Florals", base: "Musk, Amber" },
    desc: "A luxurious blend of sweet fruits, creamy vanilla and delicate florals. Feminine and refined."
  },

  /* ---------- Eclaire gourmands (Lattafa) ---------- */
  {
    id: "eclaire", name: "Eclaire", house: "Lattafa", category: "women",
    price: 55, originalPrice: 60, size: "100ml EDP", badge: null,
    shape: "tall", colors: ["#9a7a2a", "#e8cf8a"],
    notes: { top: "Pear, Sweet Notes", heart: "Cream, Vanilla", base: "Caramel, Musk" },
    desc: "Sweet, creamy and feminine. Dessert-like and addictive from first spray to dry-down."
  },
  {
    id: "eclaire-pistache", name: "Eclaire Pistache", house: "Lattafa", category: "women",
    price: 55, originalPrice: 70, size: "100ml EDP", badge: "New",
    shape: "tall", colors: ["#5a7a3a", "#a8c87a"],
    notes: { top: "Pistachio, Almond", heart: "Cream, Vanilla", base: "Caramel, Musk" },
    desc: "Sweet and nutty with a creamy pistachio twist. Unique, gourmand and addictive."
  },
  {
    id: "eclaire-banoffi", name: "Eclaire Banoffi", house: "Lattafa", category: "women",
    price: 55, originalPrice: 60, size: "100ml EDP", badge: "New",
    shape: "tall", colors: ["#9a7a3a", "#e0c98a"],
    notes: { top: "Banana, Toffee", heart: "Cream, Vanilla", base: "Caramel, Musk" },
    desc: "A delicious gourmand inspired by the classic banoffee dessert. Rich, sweet and irresistible."
  },

  /* ---------- Other Lattafa women ---------- */
  {
    id: "fakhar-women", name: "Fakhar Women", house: "Lattafa", category: "women",
    price: 55, originalPrice: 60, size: "100ml EDP", badge: null,
    shape: "round", colors: ["#b07a3a", "#e8c98a"],
    notes: { top: "Florals, Bergamot", heart: "Powdery Notes, Iris", base: "Musk, Sandalwood" },
    desc: "Soft floral with a powdery finish. Feminine, elegant and effortlessly graceful."
  },
  {
    id: "fakhar-black-men", name: "Fakhar Black Men", house: "Lattafa", category: "men",
    price: 55, originalPrice: 60, size: "100ml EDP", badge: null,
    shape: "round", colors: ["#14141a", "#7a7a84"],
    notes: { top: "Apple, Bergamot", heart: "Lavender, Geranium", base: "Amber, Woods, Musk" },
    desc: "A fresh, woody fragrance with apple, bergamot, lavender and warm amber. Sharp and refined."
  },
  {
    id: "ajwad", name: "Ajwad", house: "Lattafa", category: "unisex",
    price: 50, originalPrice: 55, size: "60ml EDP", badge: null,
    shape: "round", colors: ["#7a2240", "#d4708f"],
    notes: { top: "Pink Fruits, Bergamot", heart: "Jasmine, Bitter Almond", base: "Vanilla, Oakmoss, Woods" },
    desc: "A warm, fruity-woody fragrance with sweet vanilla and soft floral notes. Elegant and inviting."
  },
  {
    id: "angham", name: "Angham", house: "Lattafa", category: "women",
    price: 55, originalPrice: 60, size: "100ml EDP", badge: null,
    shape: "tall", colors: ["#9a8a4a", "#e8dca8"],
    notes: { top: "Florals, Bergamot", heart: "Jasmine, Rose", base: "Musk, Sandalwood" },
    desc: "Elegant, soft and slightly sweet. A smooth floral scent with a clean, luxurious finish."
  },
  {
    id: "victoria", name: "Victoria", house: "Lattafa", category: "women",
    price: 55, originalPrice: 65, size: "100ml EDP", badge: null,
    shape: "round", colors: ["#1a3a5a", "#6a9ac6"],
    notes: { top: "Citrus, Berries", heart: "Florals, Peony", base: "Musk, Woods" },
    desc: "Fresh, slightly sweet and radiant. A beautifully balanced scent for any occasion."
  },
  {
    id: "raneen", name: "Raneen", house: "Lattafa", category: "women",
    price: 55, originalPrice: 60, size: "100ml EDP", badge: null,
    shape: "round", colors: ["#a83a5a", "#e89ab0"],
    notes: { top: "Fruits, Bergamot", heart: "Jasmine, Rose", base: "Musk, Amber" },
    desc: "A charming floral-fruity fragrance with soft musky undertones. Feminine and elegant."
  },
  {
    id: "habik-women", name: "Habik Women", house: "Lattafa", category: "women",
    price: 55, originalPrice: 60, size: "100ml EDP", badge: null,
    shape: "tall", colors: ["#7a2a5a", "#c46aa0"],
    notes: { top: "Pear, Bergamot", heart: "Jasmine, Florals", base: "Musk, Amber" },
    desc: "A fresh floral-fruity fragrance with juicy pear, soft jasmine and warm musky amber."
  },
  {
    id: "ana-abiyedh-rouge", name: "Ana Abiyedh Rouge", house: "Lattafa", category: "unisex",
    price: 55, originalPrice: 60, size: "60ml EDP", badge: null,
    shape: "tall", colors: ["#7a1a2a", "#d46a7a"],
    notes: { top: "Saffron, Cardamom", heart: "Musk, Amber", base: "Woods, Vanilla" },
    desc: "A luxurious scent with sweet, musky and amber accords. Modern, elegant and clean."
  },

  /* ---------- Confession pair (Lattafa) ---------- */
  {
    id: "her-confession", name: "Her Confession", house: "Lattafa", category: "women",
    price: 60, originalPrice: 70, size: "100ml EDP", badge: null,
    shape: "tall", colors: ["#9a8a5a", "#e8dcb8"],
    notes: { top: "Florals, Bergamot", heart: "Cream, Jasmine", base: "Vanilla, Musk" },
    desc: "Soft, creamy and delicately sweet with a gentle floral touch. Feminine and elegant."
  },
  {
    id: "his-confession", name: "His Confession", house: "Lattafa", category: "men",
    price: 60, originalPrice: 70, size: "100ml EDP", badge: null,
    shape: "tall", colors: ["#14141a", "#5a5a64"],
    notes: { top: "Spices, Bergamot", heart: "Woods, Leather", base: "Amber, Musk" },
    desc: "Bold, woody and masculine. Strong, confident and long-lasting."
  },

  /* ---------- 9PM family (Afnan) ---------- */
  {
    id: "9pm", name: "9PM", house: "Afnan", category: "men",
    price: 60, originalPrice: 70, size: "100ml EDP", badge: "Best Seller",
    shape: "square", colors: ["#1a1224", "#6a5a8a"],
    notes: { top: "Apple, Cinnamon, Bergamot", heart: "Orange Blossom, Lavender", base: "Vanilla, Tonka, Amber" },
    desc: "Sweet vanilla with a fresh, fruity touch. Seductive yet easy — perfect for everyday wear."
  },
  {
    id: "9pm-rebel", name: "9PM Rebel", house: "Afnan", category: "men",
    price: 60, originalPrice: 65, size: "100ml EDP", badge: null,
    shape: "tall", colors: ["#3a1418", "#b03a3a"],
    notes: { top: "Fruits, Bergamot", heart: "Spices, Florals", base: "Woods, Vanilla, Amber" },
    desc: "A modern sweet-fresh scent with fruity and woody notes. Confident and youthful."
  },
  {
    id: "9pm-elixir", name: "9PM Elixir", house: "Afnan", category: "men",
    price: 60, originalPrice: 65, size: "100ml EDP", badge: null,
    shape: "square", colors: ["#3a1d0c", "#9c6b2f"],
    notes: { top: "Spices, Apple", heart: "Florals, Cinnamon", base: "Vanilla, Woods, Amber" },
    desc: "Sweet, spicy notes with vanilla and warm woods. Made for evenings and date nights."
  },
  {
    id: "9pm-night-out", name: "9PM Night Out", house: "Afnan", category: "men",
    price: 70, originalPrice: 80, size: "100ml EDP", badge: null,
    shape: "square", colors: ["#14141a", "#6a6a74"],
    notes: { top: "Fruits, Spices", heart: "Florals, Woods", base: "Vanilla, Amber, Musk" },
    desc: "A modern fragrance with sweet and woody notes that shines after dark. Confident and bold."
  },

  /* ---------- Supremacy (Afnan) ---------- */
  {
    id: "supremacy-collectors", name: "Supremacy Collector's Edition", house: "Afnan", category: "men",
    price: 55, originalPrice: 60, size: "100ml EDP", badge: null,
    shape: "tall", colors: ["#3a3a42", "#b8b8c2"],
    notes: { top: "Fruits, Bergamot", heart: "Woods, Florals", base: "Musk, Amber" },
    desc: "Fresh fruity notes mixed with woods and musk for a refined luxury scent. Smooth and elegant."
  },
  {
    id: "supremacy-noir", name: "Supremacy Noir", house: "Afnan", category: "men",
    price: 55, originalPrice: 60, size: "100ml EDP", badge: null,
    shape: "tall", colors: ["#101014", "#4a4a54"],
    notes: { top: "Spices, Bergamot", heart: "Smoky Woods, Leather", base: "Amber, Musk" },
    desc: "Dark, smoky woods blended with spices and fresh accords. Masculine and powerful."
  },

  /* ---------- Amber Oud (Al Haramain) ---------- */
  {
    id: "amber-oud-gold", name: "Amber Oud Gold Edition", house: "Al Haramain", category: "unisex",
    price: 55, originalPrice: 60, size: "120ml EDP", badge: "Best Seller",
    shape: "square", colors: ["#9a7b1e", "#e8c95a"],
    notes: { top: "Tropical Fruits, Bergamot", heart: "Amber, Sweet Notes", base: "Vanilla, Musk, Woods" },
    desc: "A sweet, fruity-amber scent with tropical freshness and creamy warmth. Rich and radiant — liquid gold."
  },
  {
    id: "amber-oud-dubai-night", name: "Amber Oud Dubai Night", house: "Al Haramain", category: "unisex",
    price: 55, originalPrice: 60, size: "60ml EDP", badge: null,
    shape: "square", colors: ["#1a1a4a", "#5a5ac6"],
    notes: { top: "Spices, Bergamot", heart: "Amber, Woods", base: "Musk, Vanilla" },
    desc: "An intense oriental fragrance with amber, woods and warm spices. Deep and luxurious."
  },
  {
    id: "amber-oud-aqua-dubai", name: "Amber Oud Aqua Dubai", house: "Al Haramain", category: "unisex",
    price: 55, originalPrice: 60, size: "60ml EDP", badge: null,
    shape: "tall", colors: ["#0e3a5a", "#3fb0e6"],
    notes: { top: "Marine Notes, Citrus", heart: "Florals, Amber", base: "Woods, Musk" },
    desc: "A refreshing fragrance inspired by aquatic freshness and modern sophistication."
  },
  {
    id: "amber-oud-ruby", name: "Amber Oud Ruby Edition", house: "Al Haramain", category: "unisex",
    price: 55, originalPrice: 60, size: "60ml EDP", badge: null,
    shape: "square", colors: ["#6e1018", "#c4404a"],
    notes: { top: "Berries, Bergamot", heart: "Amber, Florals", base: "Woods, Musk, Vanilla" },
    desc: "A luxurious, sweet-woody fragrance with warm amber and rich floral notes. Elegant and bold."
  },

  /* ---------- Armaf ---------- */
  {
    id: "club-de-nuit-intense-man", name: "Club de Nuit Intense Man", house: "Armaf", category: "men",
    price: 55, originalPrice: 60, size: "105ml EDT", badge: "Best Seller",
    shape: "tall", colors: ["#101418", "#3a4a5a"],
    notes: { top: "Lemon, Blackcurrant, Apple", heart: "Birch, Jasmine, Rose", base: "Musk, Ambergris, Vanilla" },
    desc: "A bold, fresh-smoky fragrance with citrus, woods and musk. Legendary projection and longevity."
  },
  {
    id: "club-de-nuit-women", name: "Club de Nuit Women", house: "Armaf", category: "women",
    price: 55, originalPrice: 60, size: "105ml EDP", badge: null,
    shape: "round", colors: ["#b07a4a", "#e8c8a0"],
    notes: { top: "Citrus, Berries", heart: "Florals, Jasmine", base: "Musk, Amber, Vanilla" },
    desc: "Chic and classy floral scent with a hint of citrus. Elegant and long-lasting."
  },

  /* ---------- Other houses ---------- */
  {
    id: "now-women", name: "Now Women", house: "Rave", category: "women",
    price: 55, originalPrice: 70, size: "100ml EDP", badge: null,
    shape: "round", colors: ["#d98aa8", "#f0c8d8"],
    notes: { top: "Fruits, Bergamot", heart: "Florals, Peony", base: "Musk, Cedar" },
    desc: "Light, fruity and floral. Fresh and playful — perfect for daily wear."
  },
  {
    id: "vanilla-voyage", name: "Vanilla Voyage", house: "Maison Asrar", category: "unisex",
    price: 55, originalPrice: 60, size: "100ml EDP", badge: null,
    shape: "round", colors: ["#7a5a2a", "#d8b87a"],
    notes: { top: "Vanilla, Bergamot", heart: "Gourmand Accord, Tonka", base: "Sandalwood, Musk" },
    desc: "A creamy vanilla fragrance with warm gourmand notes. Sweet, comforting and cozy."
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
