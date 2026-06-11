/* ============================================================
   Glow & Scent 242 — homepage animations (GSAP + ScrollTrigger)
   ============================================================ */

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Render featured products ---------- */
  const featured = document.getElementById("featured-grid");
  if (featured) {
    const picks = PRODUCTS.filter((p) => p.badge === "Best Seller")
      .concat(PRODUCTS.filter((p) => p.badge && p.badge !== "Best Seller"))
      .concat(PRODUCTS.filter((p) => !p.badge));
    featured.innerHTML = picks.slice(0, 8).map((p, i) => productCard(p, i)).join("");
  }

  /* ---------- Hero intro ---------- */
  // slow Ken Burns settle on the lifestyle photo (no-op if it 404s and removes itself)
  if (document.querySelector(".hero-photo")) {
    gsap.fromTo(".hero-photo", { scale: 1.1 }, { scale: 1, duration: 7, ease: "power2.out" });
  }
  const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });
  heroTl
    .from(".hero-eyebrow", { y: 24, opacity: 0, duration: 1 }, 0.2)
    .from(".hero-title .line > span", { yPercent: 110, duration: 1.3, stagger: 0.14 }, 0.35)
    .from(".hero-sub", { y: 26, opacity: 0, duration: 1 }, 0.9)
    .from(".hero-ctas .btn", { y: 22, opacity: 0, duration: 0.9, stagger: 0.12 }, 1.1)
    .from(".hero-scroll", { opacity: 0, duration: 1 }, 1.5);

  /* ---------- Marquee ---------- */
  const track = document.querySelector(".marquee-track");
  if (track) {
    track.innerHTML += track.innerHTML; // duplicate for a seamless loop
    gsap.to(track, { xPercent: -50, ease: "none", duration: 36, repeat: -1 });
  }

  /* ---------- Section reveals ---------- */
  gsap.utils.toArray(".section-head").forEach((head) => {
    gsap.from(head.children, {
      y: 40, opacity: 0, duration: 1.1, stagger: 0.12, ease: "power3.out",
      scrollTrigger: { trigger: head, start: "top 82%" }
    });
  });

  const revealGroups = [
    ".collections-grid .collection-card",
    "#featured-grid .product-card",
    ".pillars .pillar",
    ".testimonials-section",
    ".ig-grid .ig-tile",
    ".faq-grid details"
  ];
  revealGroups.forEach((sel) => {
    const items = gsap.utils.toArray(sel);
    if (!items.length) return;
    gsap.fromTo(items,
      { y: 56, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: items[0].parentElement, start: "top 80%" }
      }
    );
  });

  /* ---------- Story stats counter ---------- */
  gsap.utils.toArray(".stat-num").forEach((el) => {
    const end = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || "";
    gsap.fromTo(el, { innerText: 0 }, {
      innerText: end,
      duration: 1.8,
      ease: "power2.out",
      snap: { innerText: 1 },
      scrollTrigger: { trigger: el, start: "top 88%" },
      onUpdate: function () {
        el.textContent = Math.round(gsap.getProperty(el, "innerText")) + suffix;
      }
    });
  });

  /* ---------- Story art parallax ---------- */
  const storyArt = document.querySelector(".story-art svg");
  if (storyArt) {
    gsap.fromTo(storyArt, { y: 40 }, {
      y: -40, ease: "none",
      scrollTrigger: { trigger: ".story-art", start: "top bottom", end: "bottom top", scrub: 1.2 }
    });
  }

  /* ---------- Testimonials carousel ---------- */
  (function () {
    const slides = Array.from(document.querySelectorAll(".testimonials-slide"));
    const dots   = Array.from(document.querySelectorAll(".t-dot"));
    if (!slides.length) return;
    let current = 0;
    let timer;

    function goTo(idx) {
      slides[current].classList.remove("active");
      dots[current].classList.remove("active");
      current = (idx + slides.length) % slides.length;
      slides[current].classList.add("active");
      dots[current].classList.add("active");
      gsap.fromTo(slides[current],
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" }
      );
    }

    dots.forEach((dot, i) => dot.addEventListener("click", () => { clearInterval(timer); goTo(i); startTimer(); }));

    function startTimer() {
      timer = setInterval(() => goTo(current + 1), 5500);
    }
    startTimer();
  })();

  /* ---------- CTA band glow ---------- */
  gsap.from(".cta-band .container > *", {
    y: 36, opacity: 0, duration: 1, stagger: 0.12, ease: "power3.out",
    scrollTrigger: { trigger: ".cta-band", start: "top 78%" }
  });
});
