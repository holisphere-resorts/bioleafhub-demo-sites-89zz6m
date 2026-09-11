// Teleport world engine — shared by cbd.html and holisphere.html
// Stack: three 0.180 (importmap), Spark 2.1 (Gaussian splats), GSAP (camera flights), Poly Haven HDRI (photo sky).
import * as THREE from "three";
import { HDRLoader } from "three/addons/loaders/HDRLoader.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { SparkRenderer, SplatMesh } from "@sparkjsdev/spark";

export function createWorld(opts) {
  const {
    scenes,                 // { key: { hdr, hdrRotation, splat, collider, splatTransform, build(group, ctx), start:{pos,yaw,pitch}, spots:[...], exposure } }
    first,                  // key of the first scene
    ui,                     // { loader, bar, pct, card, site, spotsLayer }
    onArrive,               // (spot) => void
    maxRadius = 3.2,        // max teleport distance from origin for splat scenes (sharp zone)
  } = opts;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(65, innerWidth / innerHeight, 0.05, 400);
  const renderer = new THREE.WebGLRenderer({ antialias: false });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  document.body.prepend(renderer.domElement);
  const spark = new SparkRenderer({ renderer });
  scene.add(spark);

  const group = new THREE.Group();       // everything belonging to the current scene
  scene.add(group);
  const state = { key: null, colliders: [], spots: [], splat: null, flying: false, walkRadius: Infinity, eyeY: null, sceneDef: null };
  const cam = { x: 0, y: 0, z: 0, yaw: 0, pitch: 0, fov: 65 };
  const hdrCache = {};

  // ---------- camera ----------
  const dirVec = () => new THREE.Vector3(-Math.sin(cam.yaw) * Math.cos(cam.pitch), Math.sin(cam.pitch), -Math.cos(cam.yaw) * Math.cos(cam.pitch));
  function applyCam() {
    camera.position.set(cam.x, cam.y, cam.z);
    camera.lookAt(camera.position.clone().add(dirVec()));
    camera.fov = cam.fov; camera.updateProjectionMatrix();
  }
  const yawPitchTo = (from, to) => { const d = new THREE.Vector3().subVectors(to, from).normalize(); return { yaw: Math.atan2(-d.x, -d.z), pitch: Math.asin(THREE.MathUtils.clamp(d.y, -1, 1)) }; };
  const shortestYaw = (t) => cam.yaw + (((t - cam.yaw + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI);

  function flyTo(pos, look, onDone, dur = 1.0) {
    if (state.flying) return; state.flying = true; document.body.classList.add("flying"); ui.card.classList.remove("show");
    const yp = yawPitchTo(new THREE.Vector3(...pos), new THREE.Vector3(...look));
    gsap.timeline({ onComplete() { state.flying = false; document.body.classList.remove("flying"); onDone && onDone(); } })
      .to(cam, { yaw: shortestYaw(yp.yaw), pitch: yp.pitch, duration: 0.45, ease: "power2.inOut" }, 0)
      .to(cam, { fov: 85, duration: 0.3, ease: "power2.in" }, 0)
      .to(cam, { x: pos[0], y: pos[1], z: pos[2], duration: dur, ease: "power4.inOut" }, 0.1)
      .to(cam, { fov: 65, duration: 0.5, ease: "power2.out" }, dur * 0.6);
  }
  function lookAt(look, dur = 1.2) {   // turn in place (e.g. "look at the sun")
    if (state.flying) return; state.flying = true;
    const yp = yawPitchTo(new THREE.Vector3(cam.x, cam.y, cam.z), new THREE.Vector3(...look));
    gsap.to(cam, { yaw: shortestYaw(yp.yaw), pitch: yp.pitch, duration: dur, ease: "power3.inOut", onComplete() { state.flying = false; } });
  }
  function goStart(instant) {
    const s = state.sceneDef.start; ui.site.classList.remove("show"); ui.card.classList.remove("show");
    if (instant) { Object.assign(cam, { x: s.pos[0], y: s.pos[1], z: s.pos[2], yaw: s.yaw || 0, pitch: s.pitch || 0, fov: 65 }); return; }
    if (state.flying) return; state.flying = true;
    gsap.to(cam, { x: s.pos[0], y: s.pos[1], z: s.pos[2], yaw: shortestYaw(s.yaw || 0), pitch: s.pitch || 0, fov: 65, duration: 1.1, ease: "power3.inOut", onComplete() { state.flying = false; } });
  }

  // ---------- scenes ----------
  function setProgress(p) { ui.bar.style.width = (p * 100 | 0) + "%"; ui.pct.textContent = (p * 100 | 0) + "%"; }
  async function loadHDR(url) {
    if (hdrCache[url]) return hdrCache[url];
    const tex = await new HDRLoader().loadAsync(url);
    tex.mapping = THREE.EquirectangularReflectionMapping;
    hdrCache[url] = tex; return tex;
  }
  function disposeGroup() {
    group.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) { const ms = [].concat(o.material); ms.forEach(m => { for (const k in m) if (m[k] && m[k].isTexture && !m[k].userData.keep) m[k].dispose(); m.dispose(); }); } });
    group.clear(); state.colliders = []; state.splat = null;
    state.spots.forEach(s => s.el.remove()); state.spots = [];
  }
  async function loadScene(key, startOverride) {
    const def = scenes[key]; state.sceneDef = def; state.key = key;
    ui.loader.classList.remove("hide"); setProgress(0);
    ui.loader.querySelector(".loader-text").textContent = def.loadingText || "Ładuję świat…";
    disposeGroup(); scene.fog = null;
    renderer.toneMappingExposure = def.exposure ?? 1.0;
    scene.background = null; scene.environment = null;
    if (def.hdr) {
      const tex = await loadHDR(def.hdr); scene.background = tex; scene.environment = tex;
      scene.backgroundRotation = new THREE.Euler(0, def.hdrRotation || 0, 0); scene.environmentRotation = scene.backgroundRotation;
      scene.backgroundBlurriness = def.hdrBlur || 0; setProgress(0.3);
    }
    if (def.build) def.build(group, { THREE, scene, colliders: state.colliders, camera, renderer });
    if (def.splat) {
      const sg = new THREE.Group(); (def.splatTransform || (g => { g.rotation.x = Math.PI; }))(sg); group.add(sg);
      state.splat = new SplatMesh({ url: def.splat, onProgress: p => setProgress(0.3 + p * 0.7) });
      sg.add(state.splat);
      if (def.collider) { try { const gltf = await new GLTFLoader().loadAsync(def.collider); gltf.scene.traverse(o => { if (o.isMesh) o.material = new THREE.MeshBasicMaterial({ visible: false }); }); sg.add(gltf.scene); state.colliders.push(gltf.scene); } catch (e) { console.warn("collider failed", e); } }
      await state.splat.initialized;
      if (!def.collider) state.colliders.push(state.splat);
      state.walkRadius = def.walkRadius ?? maxRadius;
    } else { state.walkRadius = def.walkRadius ?? Infinity; }
    state.eyeY = def.eyeY ?? null;
    state.spots = (def.spots || []).map(makeSpot);
    if (startOverride) Object.assign(cam, startOverride); else goStart(true);
    setProgress(1); ui.loader.classList.add("hide");
  }

  // ---------- hotspots ----------
  function makeSpot(s) {
    const el = document.createElement("button"); el.className = "spot" + (s.cls ? " " + s.cls : ""); el.type = "button";
    el.innerHTML = `<i></i><span>${s.name}</span>`;
    el.onclick = (e) => { e.stopPropagation(); if (state.flying) return;
      if (s.action === "look") return lookAt(s.look);
      if (s.action === "scene") return switchScene(s.scene, s);
      flyTo(s.pos, s.look, () => { showCard(s); onArrive && onArrive(s); if (s.final) setTimeout(() => ui.site.classList.add("show"), 900); });
    };
    ui.spotsLayer.appendChild(el);
    return { el, anchor: new THREE.Vector3(...(s.anchor || s.look)), def: s };
  }
  function showCard(s) {
    if (!s.title) return;
    ui.card.querySelector("h2").textContent = s.title; ui.card.querySelector("p").textContent = s.text || "";
    const img = ui.card.querySelector("img"); if (s.img) { img.src = s.img; img.style.display = "block"; } else img.style.display = "none";
    const a = ui.card.querySelector("a"); if (s.link) { a.href = s.link.href; a.textContent = s.link.label; a.style.display = "inline"; } else a.style.display = "none";
    ui.card.classList.add("show");
  }
  const _v = new THREE.Vector3();
  function updateSpots() {
    for (const s of state.spots) {
      _v.copy(s.anchor).project(camera);
      const vis = _v.z < 1 && Math.abs(_v.x) < 1.05 && Math.abs(_v.y) < 1.05 && !state.flying;
      s.el.style.display = vis ? "flex" : "none";
      if (vis) { s.el.style.left = ((_v.x + 1) / 2 * innerWidth) + "px"; s.el.style.top = ((1 - _v.y) / 2 * innerHeight) + "px"; }
    }
  }
  async function switchScene(key, spot) {
    if (state.flying) return; state.flying = true; ui.card.classList.remove("show");
    // zoom-in "portal" transition, then load
    await new Promise(r => gsap.timeline({ onComplete: r }).to(cam, { fov: 110, duration: 0.6, ease: "power3.in" }, 0).to(ui.fade, { opacity: 1, duration: 0.5 }, 0.2));
    state.flying = false; cam.fov = 65;
    await loadScene(key);
    gsap.to(ui.fade, { opacity: 0, duration: 0.8 });
    if (spot && spot.title) showCard(spot);
  }

  // ---------- input ----------
  const ray = new THREE.Raycaster(), mouse = new THREE.Vector2();
  let down = null, dragged = false;
  function hitAt() { ray.setFromCamera(mouse, camera); return ray.intersectObjects(state.colliders, true)[0]; }
  renderer.domElement.addEventListener("pointerdown", e => { down = { x: e.clientX, y: e.clientY, yaw: cam.yaw, pitch: cam.pitch }; dragged = false; });
  addEventListener("pointermove", e => {
    mouse.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
    if (down) { const dx = e.clientX - down.x, dy = e.clientY - down.y; if (Math.abs(dx) + Math.abs(dy) > 4) dragged = true;
      if (!state.flying) { cam.yaw = down.yaw + dx * 0.004; cam.pitch = THREE.MathUtils.clamp(down.pitch + dy * 0.004, -1.2, 1.2); } }
  });
  renderer.domElement.addEventListener("pointerup", () => {
    if (down && !dragged && !state.flying) {
      const hit = hitAt();
      if (hit) {
        const dest = hit.point.clone().add(ray.ray.direction.clone().multiplyScalar(-1.2));
        if (state.eyeY !== null) dest.y = state.eyeY;                      // walk on the ground at eye height
        if (dest.length() > state.walkRadius) dest.setLength(state.walkRadius);
        const look = hit.point.clone(); if (state.eyeY !== null) look.y = Math.max(look.y, state.eyeY - 0.6);
        flyTo([dest.x, dest.y, dest.z], [look.x, look.y, look.z]);
      }
    }
    down = null;
  });
  addEventListener("wheel", e => { if (state.flying) return; const d = dirVec().multiplyScalar(-Math.sign(e.deltaY) * 0.5); cam.x += d.x; cam.z += d.z; if (state.eyeY === null) cam.y += d.y; }, { passive: true });
  addEventListener("keydown", e => { if (e.key.toLowerCase() === "p") { const look = camera.position.clone().add(dirVec().multiplyScalar(3));
    console.log(`pos: [${cam.x.toFixed(2)}, ${cam.y.toFixed(2)}, ${cam.z.toFixed(2)}], look: [${look.x.toFixed(2)}, ${look.y.toFixed(2)}, ${look.z.toFixed(2)}], yaw: ${cam.yaw.toFixed(2)}, pitch: ${cam.pitch.toFixed(2)}`); } });
  addEventListener("resize", () => { camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight); });

  const clock = new THREE.Clock();
  renderer.setAnimationLoop(() => { const t = clock.getElapsedTime(); applyCam(); updateSpots(); state.sceneDef && state.sceneDef.tick && state.sceneDef.tick(t, group); renderer.render(scene, camera); });

  const api = { scene, camera, renderer, cam, state, flyTo, lookAt, goStart, loadScene, switchScene, showCard,
    debugHit(x, y) { mouse.set((x / innerWidth) * 2 - 1, -(y / innerHeight) * 2 + 1); const h = hitAt(); return h ? { point: h.point.toArray().map(v => +v.toFixed(2)), dist: +h.distance.toFixed(2) } : null; } };
  window.__world = api;
  loadScene(first);
  return api;
}

// ---------- helpers for procedural scenes ----------
export function hempLeafTexture(THREE, size = 1024, photo = null) {
  // Draws a 7-leaflet palmate hemp leaf. If `photo` (an Image of a real leaf, e.g. assets/hemp-leaf-cc0.jpg) is given,
  // each leaflet is filled with the real leaf photo (veins, colour), clipped to the leaflet shape.
  const c = document.createElement("canvas"); c.width = c.height = size; const g = c.getContext("2d");
  g.translate(size / 2, size * 0.86);
  const leaflets = [[-1.35, 0.42], [-0.95, 0.66], [-0.5, 0.88], [0, 1], [0.5, 0.88], [0.95, 0.66], [1.35, 0.42]];
  // region of the photo holding the bright central leaflet (tip at top, base at bottom)
  const PR = photo ? { x: 400, y: 70, w: 200, h: 420 } : null;
  for (const [ang, len] of leaflets) {
    g.save(); g.rotate(ang);
    const L = size * 0.8 * len, W = size * 0.07 * (0.6 + len * 0.5);
    g.beginPath(); g.moveTo(0, 0);
    const teeth = 18;
    for (let i = 0; i <= teeth; i++) { const t = i / teeth, y = -L * t, w = W * Math.sin(Math.PI * Math.min(1, t * 1.15 + 0.05)) * (1 - t * 0.35); g.lineTo(w * (i % 2 ? 1 : 0.8), y); }
    for (let i = teeth; i >= 0; i--) { const t = i / teeth, y = -L * t, w = W * Math.sin(Math.PI * Math.min(1, t * 1.15 + 0.05)) * (1 - t * 0.35); g.lineTo(-w * (i % 2 ? 1 : 0.8), y); }
    g.closePath();
    if (photo) { g.save(); g.clip(); g.drawImage(photo, PR.x, PR.y, PR.w, PR.h, -W * 1.1, -L, W * 2.2, L); g.restore(); }
    else { const grad = g.createLinearGradient(0, 0, 0, -L); grad.addColorStop(0, "#2f6b2a"); grad.addColorStop(0.6, "#4f9a3c"); grad.addColorStop(1, "#7cc35a"); g.fillStyle = grad; g.fill(); }
    g.strokeStyle = "rgba(20,60,20,.45)"; g.lineWidth = 1.5; g.beginPath(); g.moveTo(0, 0); g.lineTo(0, -L * 0.95); g.stroke();
    g.restore();
  }
  g.strokeStyle = "#4a7a33"; g.lineWidth = 7; g.beginPath(); g.moveTo(0, 0); g.lineTo(0, size * 0.14); g.stroke();
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8; return tex;
}

// A hemp plant = stem + N leaf billboards (crossed planes) at increasing heights. Returns merged BufferGeometry for instancing.
export function hempPlantGeometry(THREE, height = 2.2) {
  const parts = [];
  const stem = new THREE.CylinderGeometry(0.012, 0.03, height, 5); stem.translate(0, height / 2, 0);
  // stem uses uv y=-1 marker so shader/material can tint: we simply keep it green via vertex colors
  const layers = 9;
  for (let i = 0; i < layers; i++) {
    const t = (i + 1) / layers, y = height * (0.18 + 0.8 * t), s = 0.7 * (1.2 - t * 0.5);
    for (let k = 0; k < 4; k++) {
      const p = new THREE.PlaneGeometry(s, s); p.translate(0, s * 0.35, 0);
      p.rotateX(-1.0 + Math.random() * 0.6); p.rotateY(k * 1.571 + t * 1.7 + i + Math.random() * 0.4); p.translate(0, y, 0);
      parts.push(p);
    }
  }
  return { stem, leaves: mergeGeoms(THREE, parts) };
}
function mergeGeoms(THREE, geoms) {
  let pos = [], uv = [], idx = [], off = 0;
  for (const g of geoms) { const p = g.attributes.position.array, u = g.attributes.uv.array, ix = g.index.array; pos.push(...p); uv.push(...u); for (const i of ix) idx.push(i + off); off += p.length / 3; }
  const out = new THREE.BufferGeometry(); out.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); out.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2)); out.setIndex(idx); out.computeVertexNormals(); return out;
}

export function sunSprite(THREE, size = 40) {
  const c = document.createElement("canvas"); c.width = c.height = 256; const g = c.getContext("2d");
  const r = g.createRadialGradient(128, 128, 0, 128, 128, 128); r.addColorStop(0, "rgba(255,250,220,1)"); r.addColorStop(0.25, "rgba(255,225,150,.8)"); r.addColorStop(1, "rgba(255,200,100,0)");
  g.fillStyle = r; g.fillRect(0, 0, 256, 256);
  const m = new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
  const s = new THREE.Sprite(m); s.scale.setScalar(size); return s;
}
