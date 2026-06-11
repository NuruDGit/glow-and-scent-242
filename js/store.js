/* ============================================================
   Glow & Scent 242 — shared store logic
   Bottle artwork, product cards, cart drawer, product modal,
   and WhatsApp checkout.
   ============================================================ */

const fmt = (n) => `${STORE.currency}${n.toFixed(n % 1 === 0 ? 0 : 2)}`;
const getProduct = (id) => PRODUCTS.find((p) => p.id === id);

/* ---------- Bottle artwork (inline SVG, per-product palette) ---------- */
function bottleSVG(p, uid = "") {
  const [c1, c2] = p.colors;
  const g = `g-${p.id}${uid}`;
  const defs = `
    <defs>
      <linearGradient id="${g}-liquid" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${c2}"/>
        <stop offset="1" stop-color="${c1}"/>
      </linearGradient>
      <linearGradient id="${g}-glass" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#ffffff" stop-opacity="0.35"/>
        <stop offset="0.18" stop-color="#ffffff" stop-opacity="0.04"/>
        <stop offset="0.82" stop-color="#ffffff" stop-opacity="0.02"/>
        <stop offset="1" stop-color="#ffffff" stop-opacity="0.28"/>
      </linearGradient>
      <linearGradient id="${g}-cap" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#e8cf8a"/>
        <stop offset="0.5" stop-color="#c9a23c"/>
        <stop offset="1" stop-color="#8c6b2f"/>
      </linearGradient>
    </defs>`;

  if (p.shape === "oil") {
    return `<svg viewBox="0 0 120 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${p.name} bottle">
      ${defs}
      <ellipse cx="60" cy="160" rx="34" ry="6" fill="#000" opacity="0.35"/>
      <path d="M48 52 h24 v10 c14 6 22 20 22 36 0 26 -18 44 -34 44 s-34 -18 -34 -44 c0 -16 8 -30 22 -36 z" fill="url(#${g}-liquid)"/>
      <path d="M48 52 h24 v10 c14 6 22 20 22 36 0 26 -18 44 -34 44 s-34 -18 -34 -44 c0 -16 8 -30 22 -36 z" fill="url(#${g}-glass)"/>
      <path d="M50 70 c-8 6 -12 16 -12 26" stroke="#fff" stroke-opacity="0.4" stroke-width="3" fill="none" stroke-linecap="round"/>
      <rect x="46" y="36" width="28" height="18" rx="2" fill="url(#${g}-cap)"/>
      <path d="M56 36 v-14 c0 -4 8 -4 8 0 v14 z" fill="url(#${g}-cap)"/>
      <circle cx="60" cy="14" r="7" fill="url(#${g}-cap)"/>
      <ellipse cx="60" cy="98" rx="6" ry="10" fill="#fff" opacity="0.12"/>
    </svg>`;
  }
  if (p.shape === "round") {
    return `<svg viewBox="0 0 120 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${p.name} bottle">
      ${defs}
      <ellipse cx="60" cy="160" rx="36" ry="6" fill="#000" opacity="0.35"/>
      <circle cx="60" cy="104" r="48" fill="url(#${g}-liquid)"/>
      <circle cx="60" cy="104" r="48" fill="url(#${g}-glass)"/>
      <path d="M28 88 c-4 10 -4 24 2 34" stroke="#fff" stroke-opacity="0.35" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <rect x="50" y="42" width="20" height="16" fill="url(#${g}-glass)" opacity="0.9"/>
      <rect x="44" y="14" width="32" height="30" rx="3" fill="url(#${g}-cap)"/>
      <rect x="44" y="26" width="32" height="3" fill="#000" opacity="0.18"/>
      <ellipse cx="74" cy="92" rx="7" ry="12" fill="#fff" opacity="0.14"/>
    </svg>`;
  }
  if (p.shape === "tall") {
    return `<svg viewBox="0 0 120 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${p.name} bottle">
      ${defs}
      <ellipse cx="60" cy="162" rx="28" ry="5" fill="#000" opacity="0.35"/>
      <rect x="38" y="48" width="44" height="110" rx="6" fill="url(#${g}-liquid)"/>
      <rect x="38" y="48" width="44" height="110" rx="6" fill="url(#${g}-glass)"/>
      <line x1="44" y1="58" x2="44" y2="148" stroke="#fff" stroke-opacity="0.35" stroke-width="3" stroke-linecap="round"/>
      <rect x="52" y="36" width="16" height="14" fill="url(#${g}-glass)" opacity="0.9"/>
      <rect x="46" y="10" width="28" height="28" rx="2" fill="url(#${g}-cap)"/>
      <rect x="46" y="21" width="28" height="2.5" fill="#000" opacity="0.18"/>
      <ellipse cx="72" cy="90" rx="5" ry="22" fill="#fff" opacity="0.10"/>
    </svg>`;
  }
  /* square (default) */
  return `<svg viewBox="0 0 120 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${p.name} bottle">
    ${defs}
    <ellipse cx="60" cy="161" rx="38" ry="6" fill="#000" opacity="0.35"/>
    <rect x="22" y="62" width="76" height="96" rx="8" fill="url(#${g}-liquid)"/>
    <rect x="22" y="62" width="76" height="96" rx="8" fill="url(#${g}-glass)"/>
    <path d="M30 76 c-3 8 -3 18 0 26" stroke="#fff" stroke-opacity="0.35" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <rect x="34" y="74" width="52" height="72" rx="4" fill="none" stroke="#fff" stroke-opacity="0.18" stroke-width="1.5"/>
    <rect x="50" y="48" width="20" height="16" fill="url(#${g}-glass)" opacity="0.9"/>
    <rect x="42" y="18" width="36" height="32" rx="3" fill="url(#${g}-cap)"/>
    <rect x="42" y="31" width="36" height="3" fill="#000" opacity="0.18"/>
    <ellipse cx="84" cy="100" rx="7" ry="18" fill="#fff" opacity="0.12"/>
  </svg>`;
}

/* ---------- Product artwork: photo when provided, drawn bottle otherwise ---------- */
function productArt(p, uid = "") {
  return p.image
    ? `<img src="${p.image}" alt="${p.name} by ${p.house}" loading="lazy" onerror="this.outerHTML = bottleSVG(getProduct('${p.id}'), '${uid}')">`
    : bottleSVG(p, uid);
}

/* ---------- Product card ---------- */
function productCard(p, idx = 0) {
  return `
  <article class="product-card reveal" data-id="${p.id}" style="--i:${idx}">
    ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
    <div class="product-art" data-open="${p.id}" title="View ${p.name}">${productArt(p)}</div>
    <div class="product-house">${p.house}</div>
    <h3 class="product-name" data-open="${p.id}">${p.name}</h3>
    <div class="product-size">${p.size}</div>
    <div class="product-foot">
      <span class="product-price">${fmt(p.price)}${p.originalPrice ? `<span class="price-was">${fmt(p.originalPrice)}</span>` : ""}</span>
      <button class="add-btn" data-add="${p.id}">Add to Bag</button>
    </div>
  </article>`;
}

/* ---------- Cart state ---------- */
const CART_KEY = "gs242-cart";
let cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  renderCart();
}

function addToCart(id, qty = 1) {
  const line = cart.find((l) => l.id === id);
  if (line) line.qty += qty;
  else cart.push({ id, qty });
  saveCart();
  toast(`${getProduct(id).name} added to bag`);
}

function setQty(id, qty) {
  if (qty <= 0) cart = cart.filter((l) => l.id !== id);
  else cart.find((l) => l.id === id).qty = qty;
  saveCart();
}

const cartTotal = () => cart.reduce((s, l) => s + getProduct(l.id).price * l.qty, 0);
const cartCount = () => cart.reduce((s, l) => s + l.qty, 0);

/* ---------- WhatsApp checkout ---------- */
function checkoutWhatsApp() {
  if (!cart.length) return;
  const lines = cart.map((l) => {
    const p = getProduct(l.id);
    return `• ${l.qty}x ${p.name} by ${p.house} (${p.size}) — ${fmt(p.price * l.qty)}`;
  });
  const msg = [
    `Hello ${STORE.name}! 🌟`,
    `I'd like to place an order:`,
    ``,
    ...lines,
    ``,
    `*Total: ${fmt(cartTotal())}*`,
    ``,
    `Name:`,
    `Delivery location:`
  ].join("\n");
  window.open(`https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
}

/* ---------- Shared UI shell (drawer, modal, toast, floating WA) ---------- */
function injectShell() {
  const shell = document.createElement("div");
  shell.innerHTML = `
    <div class="cart-overlay" id="cart-overlay"></div>
    <aside class="cart-drawer" id="cart-drawer" aria-label="Shopping bag">
      <div class="cart-head">
        <h3>Your Bag</h3>
        <button class="cart-close" id="cart-close" aria-label="Close bag">×</button>
      </div>
      <div class="cart-items" id="cart-items"></div>
      <div class="cart-foot">
        <div class="cart-total-row">
          <span class="label">Subtotal</span>
          <span class="value" id="cart-total">${STORE.currency}0</span>
        </div>
        <p class="cart-note" id="cart-note"></p>
        <button class="btn btn-solid checkout-btn" id="checkout-btn">Checkout via WhatsApp</button>
      </div>
    </aside>

    <div class="modal-overlay" id="modal-overlay">
      <div class="modal" role="dialog" aria-modal="true">
        <button class="modal-close" id="modal-close" aria-label="Close">×</button>
        <div class="modal-art" id="modal-art"></div>
        <div class="modal-info" id="modal-info"></div>
      </div>
    </div>

    <div class="toast" id="toast"></div>

    <a class="wa-float" href="${STORE.catalog}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp" title="Chat with us on WhatsApp">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.2-.8l.5-.7c.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.1 2.2-.3 3.7a12 12 0 0 0 4.6 4.5c1.8.9 2.6 1 3.5.8.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3z"/></svg>
    </a>`;
  document.body.appendChild(shell);

  document.getElementById("cart-overlay").addEventListener("click", closeCart);
  document.getElementById("cart-close").addEventListener("click", closeCart);
  document.getElementById("checkout-btn").addEventListener("click", checkoutWhatsApp);
  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target.id === "modal-overlay") closeModal();
  });
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeCart(); closeModal(); }
  });
}

/* ---------- Cart drawer rendering ---------- */
function renderCart() {
  const countEls = document.querySelectorAll(".cart-count");
  countEls.forEach((el) => (el.textContent = cartCount()));

  const wrap = document.getElementById("cart-items");
  if (!wrap) return;

  if (!cart.length) {
    wrap.innerHTML = `<div class="cart-empty">
      <span class="big">Your bag is empty</span>
      Discover a fragrance that speaks to you.
    </div>`;
  } else {
    wrap.innerHTML = cart.map((l) => {
      const p = getProduct(l.id);
      return `<div class="cart-item">
        <div class="cart-item-art">${productArt(p, "-cart")}</div>
        <div>
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-meta">${p.house} · ${p.size}</div>
          <div class="qty-controls">
            <button data-dec="${p.id}" aria-label="Decrease quantity">−</button>
            <span>${l.qty}</span>
            <button data-inc="${p.id}" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <div style="text-align:right">
          <div class="cart-item-price">${fmt(p.price * l.qty)}</div>
          <button class="cart-item-remove" data-remove="${p.id}">Remove</button>
        </div>
      </div>`;
    }).join("");
  }

  document.getElementById("cart-total").textContent = fmt(cartTotal());
  const note = document.getElementById("cart-note");
  const remaining = STORE.freeDeliveryOver - cartTotal();
  note.textContent = cartTotal() >= STORE.freeDeliveryOver
    ? "✓ You've unlocked free delivery in Nassau!"
    : `Add ${fmt(Math.max(remaining, 0))} more for free delivery in Nassau.`;
}

function openCart() {
  document.getElementById("cart-drawer").classList.add("open");
  document.getElementById("cart-overlay").classList.add("open");
}
function closeCart() {
  document.getElementById("cart-drawer").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("open");
}

/* ---------- Product modal ---------- */
function openModal(id) {
  const p = getProduct(id);
  const art = document.getElementById("modal-art");
  art.innerHTML = productArt(p, "-modal");
  art.style.padding = p.image ? "0" : "";
  document.getElementById("modal-info").innerHTML = `
    <div class="product-house">${p.house}</div>
    <h3>${p.name}</h3>
    <div class="product-size">${p.size}${p.badge ? ` · ${p.badge}` : ""}</div>
    <p class="modal-desc">${p.desc}</p>
    <div class="notes-list">
      <div class="note-row"><span class="note-label">Top</span><span class="note-value">${p.notes.top}</span></div>
      <div class="note-row"><span class="note-label">Heart</span><span class="note-value">${p.notes.heart}</span></div>
      <div class="note-row"><span class="note-label">Base</span><span class="note-value">${p.notes.base}</span></div>
    </div>
    <div class="modal-buy">
      <span class="modal-price">${fmt(p.price)}${p.originalPrice ? `<span class="price-was">${fmt(p.originalPrice)}</span>` : ""}</span>
      ${p.originalPrice ? `<span class="save-tag">Save ${fmt(p.originalPrice - p.price)}</span>` : ""}
      <button class="btn btn-solid" data-add="${p.id}">Add to Bag</button>
    </div>`;
  document.getElementById("modal-overlay").classList.add("open");
}
function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
}

/* ---------- Toast ---------- */
let toastTimer;
function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

/* ---------- Global click delegation ---------- */
document.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  if (add) {
    addToCart(add.dataset.add);
    add.classList.add("added");
    const old = add.textContent;
    add.textContent = "Added ✓";
    setTimeout(() => { add.classList.remove("added"); add.textContent = old; }, 1400);
    return;
  }
  const open = e.target.closest("[data-open]");
  if (open) { openModal(open.dataset.open); return; }
  if (e.target.closest(".cart-btn")) { openCart(); return; }
  const inc = e.target.closest("[data-inc]");
  if (inc) { setQty(inc.dataset.inc, cart.find((l) => l.id === inc.dataset.inc).qty + 1); return; }
  const dec = e.target.closest("[data-dec]");
  if (dec) { setQty(dec.dataset.dec, cart.find((l) => l.id === dec.dataset.dec).qty - 1); return; }
  const rem = e.target.closest("[data-remove]");
  if (rem) { setQty(rem.dataset.remove, 0); return; }
});

/* ---------- Mobile nav ---------- */
function initNav() {
  const burger = document.querySelector(".burger");
  const links = document.querySelector(".nav-links");
  if (!burger) return;
  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    links.classList.toggle("open");
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      burger.classList.remove("open");
      links.classList.remove("open");
    })
  );
}

document.addEventListener("DOMContentLoaded", () => {
  injectShell();
  renderCart();
  initNav();
});
