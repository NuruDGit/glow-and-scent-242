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

  // Allow deep-linking a category: shop.html?cat=oils
  const params = new URLSearchParams(location.search);
  let activeCat = params.get("cat") || "all";

  const state = () => ({
    cat: activeCat,
    q: (search.value || "").trim().toLowerCase(),
    sort: sort.value
  });

  function apply() {
    const { cat, q, sort: s } = state();
    let items = PRODUCTS.filter((p) => cat === "all" || p.category === cat);
    if (q) {
      items = items.filter((p) =>
        [p.name, p.house, p.desc, Object.values(p.notes).join(" ")].join(" ").toLowerCase().includes(q)
      );
    }
    if (s === "price-asc") items = [...items].sort((a, b) => a.price - b.price);
    if (s === "price-desc") items = [...items].sort((a, b) => b.price - a.price);
    if (s === "name") items = [...items].sort((a, b) => a.name.localeCompare(b.name));

    grid.innerHTML = items.length
      ? items.map((p, i) => productCard(p, i)).join("")
      : `<div class="no-results">No fragrances match your search.<br>Try another note or name.</div>`;

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
      history.replaceState(null, "", activeCat === "all" ? "shop.html" : `shop.html?cat=${activeCat}`);
      apply();
    });
  });

  search.addEventListener("input", apply);
  sort.addEventListener("change", apply);

  apply();

  gsap.from(".shop-hero > .container > *", {
    y: 30, opacity: 0, duration: 1, stagger: 0.12, ease: "power3.out"
  });
});
