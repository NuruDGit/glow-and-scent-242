/* ============================================================
   Glow & Scent 242 — Three.js hero
   A rotating glass perfume bottle with golden liquid and a
   drifting cloud of gold dust. Loaded as an ES module.
   ============================================================ */

import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

const canvas = document.getElementById("hero-canvas");

function supportsWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl")));
  } catch {
    return false;
  }
}

/* The 3D bottle is the fallback hero: if the lifestyle photo loads,
   skip the scene entirely; if the photo 404s, start as usual. */
const heroPhoto = document.querySelector(".hero-photo");
if (!heroPhoto) {
  initHero();
} else if (heroPhoto.complete) {
  if (!(heroPhoto.naturalWidth > 0)) initHero();
  else heroPhoto.closest(".hero").classList.add("has-photo");
} else {
  heroPhoto.addEventListener("error", initHero, { once: true });
}

function initHero() {
  if (!(canvas && supportsWebGL())) return;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0.4, 7.2);

  /* Lights */
  const key = new THREE.SpotLight(0xffe9bd, 90, 30, Math.PI / 5, 0.5);
  key.position.set(5, 7, 6);
  scene.add(key);
  const rim = new THREE.PointLight(0xc9a23c, 30, 25);
  rim.position.set(-5, 2, -4);
  scene.add(rim);
  scene.add(new THREE.AmbientLight(0x332a18, 1.2));

  /* Bottle group */
  const bottle = new THREE.Group();

  // Glass body — lathe profile of a shouldered flacon
  const profile = [];
  const pts = [
    [0.0, 0.0], [0.92, 0.0], [1.0, 0.12], [1.02, 0.9], [0.98, 1.7],
    [0.86, 2.2], [0.52, 2.55], [0.3, 2.62], [0.3, 2.95], [0.0, 2.95]
  ];
  pts.forEach(([x, y]) => profile.push(new THREE.Vector2(x, y)));
  const glassGeo = new THREE.LatheGeometry(profile, 64);
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0xfff7e8,
    metalness: 0,
    roughness: 0.04,
    transmission: 1,
    thickness: 0.6,
    ior: 1.45,
    clearcoat: 1,
    clearcoatRoughness: 0.06,
    transparent: true
  });
  const glass = new THREE.Mesh(glassGeo, glassMat);
  bottle.add(glass);

  // Golden liquid inside
  const liquidPts = pts.slice(0, 6).map(([x, y]) => new THREE.Vector2(x * 0.86, y * 0.82 + 0.08));
  const liquidGeo = new THREE.LatheGeometry(liquidPts, 48);
  const liquidMat = new THREE.MeshPhysicalMaterial({
    color: 0xb86f1e,
    emissive: 0x6b3e08,
    emissiveIntensity: 0.85,
    metalness: 0.15,
    roughness: 0.25,
    transmission: 0.45,
    thickness: 1.2,
    transparent: true,
    opacity: 0.96
  });
  bottle.add(new THREE.Mesh(liquidGeo, liquidMat));

  // Gold cap
  const capMat = new THREE.MeshStandardMaterial({
    color: 0xc9a23c,
    metalness: 1,
    roughness: 0.22
  });
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.62, 48), capMat);
  cap.position.y = 3.2;
  bottle.add(cap);
  const capTop = new THREE.Mesh(new THREE.SphereGeometry(0.38, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), capMat);
  capTop.position.y = 3.51;
  bottle.add(capTop);
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.33, 0.045, 16, 48), capMat);
  collar.rotation.x = Math.PI / 2;
  collar.position.y = 2.92;
  bottle.add(collar);

  bottle.position.y = -1.55;
  bottle.scale.setScalar(0.0001); // GSAP scales it up on intro
  scene.add(bottle);

  /* Gold dust particles */
  const COUNT = 420;
  const pos = new Float32Array(COUNT * 3);
  const speeds = new Float32Array(COUNT);
  for (let i = 0; i < COUNT; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 14;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 9;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 7 - 1;
    speeds[i] = 0.12 + Math.random() * 0.45;
  }
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const dustMat = new THREE.PointsMaterial({
    color: 0xe8cf8a,
    size: 0.035,
    transparent: true,
    opacity: 0.75,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  const dust = new THREE.Points(dustGeo, dustMat);
  scene.add(dust);

  /* Layout: bottle right of the headline on wide screens; smaller and
     tucked below the copy on phones so the text stays readable */
  let wide = true;
  let baseY = -1.55;
  const targetScale = () => (wide ? 1 : 0.55);
  function resize() {
    const w = canvas.clientWidth || canvas.parentElement.clientWidth;
    const h = canvas.clientHeight || canvas.parentElement.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    wide = w > 900;
    baseY = wide ? -1.55 : -2.55;
    bottle.position.x = wide ? 2.6 : 0;
    bottle.scale.setScalar(Math.min(bottle.scale.x, targetScale()) || bottle.scale.x);
    dust.position.x = wide ? 1.4 : 0;
  }
  window.addEventListener("resize", resize);
  resize();

  /* Mouse parallax */
  const target = { x: 0, y: 0 };
  window.addEventListener("pointermove", (e) => {
    target.x = (e.clientX / window.innerWidth - 0.5) * 2;
    target.y = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  /* Intro animation */
  if (window.gsap) {
    const s = targetScale();
    gsap.to(bottle.scale, { x: s, y: s, z: s, duration: 1.8, ease: "power3.out", delay: 0.45 });
    gsap.from(bottle.rotation, { y: -2.4, duration: 2.2, ease: "power3.out", delay: 0.45 });
  } else {
    bottle.scale.setScalar(targetScale());
  }

  /* Render loop */
  const clock = new THREE.Clock();
  let raf;
  function tick() {
    raf = requestAnimationFrame(tick);
    const t = clock.getElapsedTime();

    bottle.rotation.y += 0.0035;
    bottle.rotation.z = Math.sin(t * 0.4) * 0.03;
    bottle.position.y = baseY + Math.sin(t * 0.8) * 0.07;

    // gentle camera parallax toward the pointer; look at a fixed point so
    // the bottle stays offset to the right of the headline on wide screens
    camera.position.x += (target.x * 0.5 - camera.position.x) * 0.04;
    camera.position.y += (0.4 - target.y * 0.35 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);

    // drifting dust
    const arr = dustGeo.attributes.position.array;
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3 + 1] += speeds[i] * 0.004;
      if (arr[i * 3 + 1] > 4.5) arr[i * 3 + 1] = -4.5;
    }
    dustGeo.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  }
  tick();

  /* Pause when the hero is off-screen */
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) { if (!raf) tick(); }
    else { cancelAnimationFrame(raf); raf = null; }
  });
  observer.observe(canvas);
}
