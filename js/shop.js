/* ============================================================
   Glow & Scent 242 — shop page: filters, search, sort
   ============================================================ */

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("shop-grid");
  const countEl = document.getElementById("shop-count");
  const search = document.getElementById("shop-search");
  const sort = document.getElementById("shop-sort");
  const pills = document.querySelectorAll(".filter-pills .pill");

  // Deep links: shop.html?cat=oils  and/or  shop.html?house=Lattafa
  const params = new URLSearchParams(location.search);
  let activeCat = params.get("cat") || "all";
  let activeHouse = params.get("house") || "all";
  const banner = document.getElementById("house-banner");

  const state = () => ({
    cat: activeCat,
    house: activeHouse,
    q: (search.value || "").trim().toLowerCase(),
    sort: sort.value
  });

  function syncURL() {
    const qs = new URLSearchParams();
    if (activeCat !== "all") qs.set("cat", activeCat);
    if (activeHouse !== "all") qs.set("house", activeHouse);
    const str = qs.toString();
    history.replaceState(null, "", str ? `shop.html?${str}` : "shop.html");
  }

  function renderBanner() {
    if (!banner) return;
    if (activeHouse === "all") { banner.innerHTML = ""; banner.hidden = true; return; }
    banner.hidden = false;
    banner.innerHTML = `Showing <strong>${activeHouse}</strong>
      <button id="clear-house" aria-label="Clear house filter">Clear ×</button>`;
    document.getElementById("clear-house").addEventListener("click", () => {
      activeHouse = "all";
      syncURL(); renderBanner(); apply();
    });
  }

  function apply() {
    const { cat, house, q, sort: s } = state();
    let items = PRODUCTS.filter((p) =>
      (cat === "all" || p.category === cat) &&
      (house === "all" || p.house === house));
    if (q) {
      items = items.filter((p) =>
        [p.name, p.house, p.desc, Object.values(p.notes).join(" ")].join(" ").toLowerCase().includes(q)
      );
    }
    if (s === "price-asc") items = [...items].sort((a, b) => a.price - b.price);
    if (s === "price-desc") items = [...items].sort((a, b) => b.price - a.price);
    if (s === "name") items = [...items].sort((a, b) => a.name.localeCompare(b.name));

    let emptyMsg = "No fragrances match your search.<br>Try another note or name.";
    if (!q && cat === "oils") {
      emptyMsg = `Our pure perfume oils &amp; attars are arriving soon.<br>
        <a href="https://wa.me/${STORE.whatsapp}?text=Hi!%20Please%20let%20me%20know%20when%20your%20perfume%20oils%20are%20available."
           target="_blank" rel="noopener" style="color:var(--gold);text-decoration:underline">
           Message us on WhatsApp</a> to be the first to know.`;
    }
    grid.innerHTML = items.length
      ? items.map((p, i) => productCard(p, i)).join("")
      : `<div class="no-results">${emptyMsg}</div>`;

    countEl.textContent = `${items.length} fragrance${items.length === 1 ? "" : "s"}`;

    gsap.fromTo("#shop-grid .product-card",
      { y: 36, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.05, ease: "power3.out", overwrite: true }
    );
  }

  pills.forEach((pill) => {
    if (pill.dataset.cat === activeCat) {
      pills.forEach((x) => x.classList.remove("active"));
      pill.classList.add("active");
    }
    pill.addEventListener("click", () => {
      pills.forEach((x) => x.classList.remove("active"));
      pill.classList.add("active");
      activeCat = pill.dataset.cat;
      syncURL();
      apply();
    });
  });

  search.addEventListener("input", apply);
  sort.addEventListener("change", apply);

  renderBanner();
  apply();

  gsap.from(".shop-hero > .container > *", {
    y: 30, opacity: 0, duration: 1, stagger: 0.12, ease: "power3.out"
  });
});
