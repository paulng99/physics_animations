# Reference Patterns — Physics 3D Simulations

Copy-paste patterns extracted from the physics_animations codebase.

---

## 1. Three.js Bootstrap

```javascript
const container = document.getElementById('three-container');
let scene, camera, renderer;

function initThree() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf1f5f9);

  camera = new THREE.PerspectiveCamera(
    45,
    container.offsetWidth / container.offsetHeight,
    0.1,
    1000
  );
  camera.position.set(0, 10, 50);
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  container.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const sun = new THREE.DirectionalLight(0xffffff, 0.8);
  sun.position.set(10, 20, 10);
  sun.castShadow = true;
  scene.add(sun);

  setupCameraControls();
  animate();
}

function animate() {
  requestAnimationFrame(animate);
  // Lerp-based motion goes here (optional)
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = container.offsetWidth / container.offsetHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.offsetWidth, container.offsetHeight);
});
```

---

## 2. Spherical Camera + Mouse + Touch (Required)

```javascript
let isCameraDrag = false, startCamX, startCamY;
let theta = 0, phi = Math.acos(10 / 51), radius = 51;

function updateCameraFromSpherical() {
  camera.position.x = radius * Math.sin(phi) * Math.sin(theta);
  camera.position.y = radius * Math.cos(phi);
  camera.position.z = radius * Math.sin(phi) * Math.cos(theta);
  camera.lookAt(0, 0, 0);
}

function setupCameraControls() {
  container.addEventListener('mousedown', (e) => {
    if (e.target.closest('input, button')) return;
    isCameraDrag = true;
    startCamX = e.clientX;
    startCamY = e.clientY;
  });
  window.addEventListener('mouseup', () => { isCameraDrag = false; });
  window.addEventListener('mousemove', (e) => {
    if (!isCameraDrag) return;
    theta -= (e.clientX - startCamX) * 0.005;
    phi   -= (e.clientY - startCamY) * 0.005;
    phi = Math.max(0.1, Math.min(Math.PI - 0.1, phi));
    startCamX = e.clientX;
    startCamY = e.clientY;
    updateCameraFromSpherical();
  });
  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    radius = Math.max(10, Math.min(100, radius + e.deltaY * 0.05));
    updateCameraFromSpherical();
  });

  // Touch: single-finger rotate, two-finger pinch zoom
  let lastTouchDist = null, lastTouchX = null, lastTouchY = null;

  container.addEventListener('touchstart', (e) => {
    e.preventDefault();
    if (e.touches.length === 1) {
      lastTouchX = e.touches[0].clientX;
      lastTouchY = e.touches[0].clientY;
    } else if (e.touches.length === 2) {
      lastTouchDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
    }
  }, { passive: false });

  container.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (e.touches.length === 1 && lastTouchX !== null) {
      const dx = (e.touches[0].clientX - lastTouchX) * 0.008;
      const dy = (e.touches[0].clientY - lastTouchY) * 0.008;
      lastTouchX = e.touches[0].clientX;
      lastTouchY = e.touches[0].clientY;
      theta -= dx;
      phi -= dy;
      phi = Math.max(0.1, Math.min(Math.PI - 0.1, phi));
      updateCameraFromSpherical();
    } else if (e.touches.length === 2 && lastTouchDist !== null) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      radius += (lastTouchDist - dist) * 0.1;
      radius = Math.max(10, Math.min(100, radius));
      lastTouchDist = dist;
      updateCameraFromSpherical();
    }
  }, { passive: false });

  container.addEventListener('touchend', () => {
    lastTouchX = lastTouchY = lastTouchDist = null;
  });
}
```

---

## 3. Raycaster Object Drag (Dual-Mode Mouse)

Use when students should drag objects in 3D (lens object, charge, particle):

```javascript
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0); // Z=0 plane
let isDraggingObject = false, isCameraDrag = false;

container.addEventListener('mousedown', (e) => {
  const rect = container.getBoundingClientRect();
  mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);

  const hits = raycaster.intersectObject(dragTarget, true);
  if (hits.length > 0) {
    isDraggingObject = true;
  } else {
    isCameraDrag = true;
    startCamX = e.clientX;
    startCamY = e.clientY;
  }
});

window.addEventListener('mousemove', (e) => {
  if (isDraggingObject) {
    const rect = container.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const point = new THREE.Vector3();
    raycaster.ray.intersectPlane(plane, point);
    state.position = Math.max(minVal, Math.min(maxVal, point.x));
    document.getElementById('slider-pos').value = state.position;
    document.getElementById('val-pos').textContent = state.position.toFixed(1);
    updateSimulation();
  } else if (isCameraDrag) {
    // ... spherical camera update
  }
});

window.addEventListener('mouseup', () => {
  isDraggingObject = false;
  isCameraDrag = false;
});
```

**Tip:** Add an invisible hitbox cylinder around the draggable mesh for easier picking.

---

## 4. State + Slider Sync

```javascript
const state = { current: 0, fieldStrength: 2.5 };

const defaults = { ...state };

function bindSlider(id, displayId, key, formatter = (v) => v.toFixed(1)) {
  const slider = document.getElementById(id);
  slider.addEventListener('input', (e) => {
    state[key] = parseFloat(e.target.value);
    document.getElementById(displayId).textContent = formatter(state[key]);
    updateSimulation();
  });
}

function resetSimulation() {
  Object.assign(state, defaults);
  bindSlidersToState(); // re-sync UI
  updateCameraFromSpherical();
  updateSimulation();
}

function updateSimulation() {
  // 1. Recalculate physics
  // 2. Update 3D meshes (arrow lengths, positions, colours)
  // 3. Update live readout panel
}
```

---

## 5. Animated Vector Arrows (Flow Effect)

```javascript
// In animate() — current flow along wire
currentArrows.forEach((arrow) => {
  arrow.position.z += 0.02 * (Math.abs(state.current) / 3) * flowDir;
  if (arrow.position.z > 3.6) arrow.position.z = -3.6;
  if (arrow.position.z < -3.6) arrow.position.z = 3.6;
});

// Lerp smooth motion toward target
state.displayX += (targetX - state.displayX) * 0.08;
mesh.position.x = state.displayX;
```

---

## 6. Force Arrow Helper

```javascript
function updateForceArrow(origin, direction, magnitude) {
  if (forceArrow) scene.remove(forceArrow);
  if (magnitude < 0.01) return;
  const dir = direction.clone().normalize();
  forceArrow = new THREE.ArrowHelper(
    dir, origin, magnitude * 0.5, PHYSICS_COLORS.force, 0.3, 0.15
  );
  scene.add(forceArrow);
}
```

---

## 7. Canvas Text Sprite (3D Labels)

```javascript
function createTextSprite(text, color = '#1e293b') {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const fontSize = 64;
  ctx.font = `bold ${fontSize}px Inter, sans-serif`;
  canvas.width = ctx.measureText(text).width + 20;
  canvas.height = fontSize + 20;
  ctx.font = `bold ${fontSize}px Inter, sans-serif`;
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2 + fontSize * 0.35);
  const texture = new THREE.CanvasTexture(canvas);
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture }));
  sprite.scale.set(canvas.width / 20, canvas.height / 20, 1);
  return sprite;
}
```

---

## 8. dat.gui with i18n (Optional)

```javascript
let gui;

function setupGUI() {
  if (gui) {
    gui.destroy();
    container.querySelector('.dg.main')?.remove();
  }
  gui = new dat.GUI({ autoPlace: false });
  document.getElementById('ui-panel').appendChild(gui.domElement);
  gui.domElement.style.position = 'static';
  gui.domElement.style.width = '100%';

  gui.add(state, 'angle', 0, 60).name(t('gui.angle')).step(1);
  // Rebuild on setLanguage()
}
```

---

## 9. Document Layout HTML Shell

```html
<body class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex flex-col">
  <nav class="bg-white border-b border-slate-200 sticky top-0 z-50 px-4 py-3">
    <!-- back link + lang switcher -->
  </nav>
  <main class="flex-grow max-w-7xl mx-auto px-4 py-8 w-full">
    <header class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-6">
      <h1 class="text-3xl md:text-4xl font-bold text-slate-800" data-i18n="page.title">Title</h1>
      <p class="mt-2 text-slate-600" data-i18n="page.description">Description</p>
    </header>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <aside class="lg:col-span-4 space-y-4">
        <!-- sliders, presets, reset -->
      </aside>
      <section class="lg:col-span-8">
        <div class="relative bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div id="three-container" class="w-full" style="height: 500px;"></div>
          <div class="absolute bottom-4 left-4 flex flex-wrap gap-2">
            <span class="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-medium text-red-600" data-i18n="legend.force">F — Force</span>
          </div>
          <div class="absolute bottom-4 right-4 bg-gray-900/80 backdrop-blur text-white px-4 py-2 rounded-full text-xs pointer-events-none" data-i18n="controls.hint">
            Drag to rotate · Pinch to zoom
          </div>
        </div>
        <!-- live data readout panel -->
      </section>
    </div>
  </main>
  <script src="practice_questions.js"></script>
  <script src="practice_questions_data.js"></script>
  <script>initPracticeQuestions('your_sim_id');</script>
</body>
```

---

## 10. Immersive Layout HTML Shell

```html
<body class="overflow-hidden m-0 p-0">
  <div id="canvas-container" class="absolute inset-0 z-0"></div>
  <div class="absolute top-5 left-5 w-full max-w-sm bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
    <h1 class="text-xl font-bold" data-i18n="page.title">Title</h1>
    <!-- controls -->
  </div>
</body>
```

---

## 11. Practice Questions Footer

At end of `<body>`:

```html
<script src="practice_questions.js"></script>
<script src="practice_questions_data.js"></script>
<script>initPracticeQuestions('motor_effect_3d');</script>
```

Add questions to `practice_questions_data.js` under the same key with `en` and `zh` arrays.

---

## 12. Cross Product (Lorentz Force)

```javascript
function crossVectors(a, b) {
  return new THREE.Vector3(
    a.y * b.z - a.z * b.y,
    a.z * b.x - a.x * b.z,
    a.x * b.y - a.y * b.x
  );
}
// F = I × B  (direction from current and field unit vectors)
const F = crossVectors(dirI, dirB).normalize().multiplyScalar(magnitude);
```

---

## 13. Glass Material (Optics)

```javascript
const lensMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 0,
  roughness: 0,
  transmission: 0.95,
  ior: 1.5,
  thickness: 0.5,
  transparent: true
});
```

---

## 14. Index.html Registration

Add a card under the correct topic section in `index.html`:

```html
<a href="Your_New_Simulation.html" class="group rounded-xl bg-white border border-slate-200 p-4 hover:border-blue-300 hover:shadow-lg transition">
  <span class="text-xs uppercase tracking-wide text-blue-600 font-semibold">3D Interactive</span>
  <h4 class="text-base font-semibold">Your Simulation Title</h4>
  <p class="text-xs text-slate-600 mt-1">Key concepts • Parameters • Features</p>
  <div class="mt-3 text-sm font-medium text-blue-600 group-hover:translate-x-1 transition">Open →</div>
</a>
```
