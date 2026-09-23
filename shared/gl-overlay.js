/**
 * Physics Animations — CDN / WebGL loading + error overlay
 * Extracted from Gas_Laws_Simulator.html pattern.
 *
 * Usage:
 *   1. Include shared/sim-shell.css + this file after Three.js CDN script.
 *   2. Mark host with data-gl-host (or use #three-container / #canvas-container).
 *   3. Optional: data-gl-back="index.html#thermal" data-gl-topic="thermal"
 *   4. Call PhysicsGlOverlay.ready() after successful init, or rely on WebGLRenderer patch.
 */
(function (global) {
  'use strict';

  var MESSAGES = {
    en: {
      loading: 'Loading…',
      error: 'Simulation failed to load. Check your network or try another browser.',
      retry: 'Retry',
      back: '← Back to topics'
    },
    'zh-hk': {
      loading: '載入中…',
      error: '模擬無法載入，請檢查網絡或換瀏覽器',
      retry: '重試',
      back: '← 返回主題'
    },
    'zh-cn': {
      loading: '载入中…',
      error: '模拟无法载入，请检查网络或换浏览器',
      retry: '重试',
      back: '← 返回专题'
    }
  };

  var TOPIC_BACK = {
    thermal: { href: 'index.html#thermal', en: '← Back to Thermal Topics', 'zh-hk': '← 返回熱學專題', 'zh-cn': '← 返回热学专题' },
    waves: { href: 'index.html#experiments', en: '← Back to Wave / Optics', 'zh-hk': '← 返回波動／光學', 'zh-cn': '← 返回波动／光学' },
    mechanics: { href: 'index.html#experiments', en: '← Back to Mechanics', 'zh-hk': '← 返回力學', 'zh-cn': '← 返回力学' },
    electricity: { href: 'index.html#experiments', en: '← Back to Electricity & Magnetism', 'zh-hk': '← 返回電磁學', 'zh-cn': '← 返回电磁学' },
    atomic: { href: 'index.html#experiments', en: '← Back to Atomic Physics', 'zh-hk': '← 返回原子物理', 'zh-cn': '← 返回原子物理' },
    energy: { href: 'index.html#experiments', en: '← Back to Energy', 'zh-hk': '← 返回能量專題', 'zh-cn': '← 返回能量专题' }
  };

  var FILE_TOPIC = {
    'Gas_Laws_Simulator.html': 'thermal',
    'Evaporation_vs_Boiling.html': 'thermal',
    'Building_Heat_Gain_Air_Conditioner_3D.html': 'energy',
    'Solar_Panel_Power_3D.html': 'energy',
    'Wind_Turbine_Power_3D.html': 'energy',
    'Ball_and_String_Simulator.html': 'mechanics',
    'Force_Vector_Addition.html': 'mechanics',
    'Projectile_Motion_Graphs.html': 'mechanics',
    'Momentum_Collision_Lab.html': 'mechanics',
    'Bullet_Pumpkin_Momentum.html': 'mechanics',
    'Inclined_Plane_Newtons_Laws.html': 'mechanics',
    'Work_Energy_Power_Analyzer.html': 'mechanics',
    'Impulse_Force_Time_Graph.html': 'mechanics',
    'Youngs_Double-Slit_Experiment.html': 'waves',
    'Diffraction_Grating.html': 'waves',
    'Rayleigh_Criterion_3D.html': 'waves',
    'Convex_Lens_3D.html': 'waves',
    'Concave_Lens_3D.html': 'waves',
    'Primary_Colour_3D.html': 'waves',
    'Standing_Waves_Resonance.html': 'waves',
    'Refraction_Critical_Angle_TIR.html': 'electricity',
    'Magnetic_Field_Visualizer.html': 'electricity',
    'Magnetic_Effect_Current.html': 'electricity',
    'Force_on_Conductor.html': 'electricity',
    'EM_Induction_Falling_Plate.html': 'electricity',
    'Motor_Effect_3D.html': 'electricity',
    'Current_Balance_3D.html': 'electricity',
    'Lorentz_Force_3D.html': 'electricity',
    'CRO_Wave_Simulation.html': 'electricity',
    'DC_Circuit_Internal_Resistance.html': 'electricity',
    'Electrostatics_Field_Explorer.html': 'electricity',
    'Transformer_Power_Transmission.html': 'electricity',
    'Domestic_Electricity_Safety_Board.html': 'electricity',
    'Rutherford_Scattering.html': 'atomic',
    'Photoelectric_Effect.html': 'atomic',
    'Emission_Absorption_Spectrum.html': 'atomic',
    'Bohr_Model.html': 'atomic',
    'Radioactive_Source_Range_and_Penetration.html': 'atomic',
    'Radioactive_Decay_Half_Life.html': 'atomic',
    'Random_Nature_Radioactive_Decay.html': 'atomic'
  };

  var state = {
    host: null,
    overlay: null,
    ready: false,
    failed: false,
    patched: false
  };

  function currentLang() {
    if (global.PhysicsI18n && typeof global.PhysicsI18n.get === 'function') {
      return global.PhysicsI18n.get();
    }
    try {
      var raw = localStorage.getItem('preferred_language') || 'en';
      if (raw === 'zh' || raw === 'zh-tw') return 'zh-hk';
      if (raw === 'cn') return 'zh-cn';
      return raw === 'zh-hk' || raw === 'zh-cn' ? raw : 'en';
    } catch (e) {
      return 'en';
    }
  }

  function msg(key) {
    var lang = currentLang();
    return (MESSAGES[lang] && MESSAGES[lang][key]) || MESSAGES.en[key] || key;
  }

  function pageName() {
    var path = (global.location && location.pathname) || '';
    var parts = path.split('/');
    return parts[parts.length - 1] || '';
  }

  function resolveBack() {
    var host = state.host;
    var href = (host && host.getAttribute('data-gl-back')) || 'index.html';
    var topic = (host && host.getAttribute('data-gl-topic')) || FILE_TOPIC[pageName()] || null;
    var lang = currentLang();
    var label = msg('back');
    if (topic && TOPIC_BACK[topic]) {
      href = TOPIC_BACK[topic].href;
      label = TOPIC_BACK[topic][lang] || TOPIC_BACK[topic].en || label;
    }
    return { href: href, label: label };
  }

  function findHost() {
    var explicit = document.querySelector('[data-gl-host]');
    if (explicit) return explicit;
    var three = document.getElementById('three-container');
    if (three) return three;
    var canvas = document.getElementById('canvas-container');
    if (canvas) return canvas;
    var named = document.querySelector(
      '#sceneCanvas, #waveCanvas, #board3d, canvas[data-gl-host], .sim-viewport'
    );
    if (named) {
      return named.closest('.relative, .sim-viewport, article, section, div') || named.parentElement || named;
    }
    return null;
  }

  function ensurePositioned(el) {
    if (!el) return;
    var style = global.getComputedStyle ? getComputedStyle(el) : null;
    if (style && style.position === 'static') {
      el.style.position = 'relative';
    }
  }

  function buildOverlay() {
    var el = document.createElement('div');
    el.className = 'physics-gl-overlay';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    el.innerHTML =
      '<div class="pgl-loading">' +
      '<div class="pgl-dots" aria-hidden="true">' +
      '<span class="pgl-dot"></span><span class="pgl-dot"></span><span class="pgl-dot"></span>' +
      '</div>' +
      '<p class="pgl-loading-text" data-pgl="loading"></p>' +
      '</div>' +
      '<div class="pgl-error">' +
      '<div class="pgl-error-icon" aria-hidden="true">⚠️</div>' +
      '<p class="pgl-error-msg" data-pgl="error"></p>' +
      '<div class="pgl-actions">' +
      '<button type="button" class="pgl-btn pgl-btn-primary" data-pgl-action="retry"></button>' +
      '<a class="pgl-btn pgl-btn-link" data-pgl-action="back" href="index.html"></a>' +
      '</div>' +
      '</div>';
    return el;
  }

  function refreshCopy() {
    if (!state.overlay) return;
    var loading = state.overlay.querySelector('[data-pgl="loading"]');
    var error = state.overlay.querySelector('[data-pgl="error"]');
    var retry = state.overlay.querySelector('[data-pgl-action="retry"]');
    var back = state.overlay.querySelector('[data-pgl-action="back"]');
    if (loading) loading.textContent = msg('loading');
    if (error) error.textContent = msg('error');
    if (retry) retry.textContent = msg('retry');
    if (back) {
      var b = resolveBack();
      back.href = b.href;
      back.textContent = b.label;
    }
  }

  function mount(host) {
    if (!host) return null;
    // Prefer existing Gas_Laws-style markup if present
    var existing = host.querySelector('#glOverlay, .physics-gl-overlay');
    if (existing) {
      state.host = host;
      state.overlay = existing;
      if (!existing.classList.contains('physics-gl-overlay')) {
        existing.classList.add('physics-gl-overlay');
      }
      ensurePositioned(host);
      refreshCopy();
      return existing;
    }
    ensurePositioned(host);
    var overlay = buildOverlay();
    // Insert before canvas/WebGL canvas if present so legend stays above later
    var firstCanvas = host.querySelector('canvas');
    if (firstCanvas && firstCanvas.parentNode === host) {
      host.insertBefore(overlay, firstCanvas);
    } else {
      host.appendChild(overlay);
    }
    var retryBtn = overlay.querySelector('[data-pgl-action="retry"]');
    if (retryBtn) {
      retryBtn.addEventListener('click', function () {
        global.location.reload();
      });
    }
    state.host = host;
    state.overlay = overlay;
    refreshCopy();
    return overlay;
  }

  function showLoading() {
    if (state.ready) return; // renderer already succeeded before overlay mounted
    if (!state.overlay) mount(findHost());
    if (!state.overlay) return;
    state.overlay.classList.remove('is-hidden', 'is-error');
    state.overlay.hidden = false;
    state.overlay.style.display = '';
    refreshCopy();
  }

  function showError(err) {
    state.failed = true;
    if (!state.overlay) mount(findHost());
    if (!state.overlay) return;
    // Legacy Gas_Laws markup
    var loadingState = state.host && state.host.querySelector('#loadingState');
    var errorState = state.host && state.host.querySelector('#errorState');
    if (loadingState && errorState) {
      loadingState.classList.add('hidden');
      errorState.classList.remove('hidden');
      state.overlay.style.display = '';
      state.overlay.classList.remove('is-hidden');
    } else {
      state.overlay.classList.add('is-error');
      state.overlay.classList.remove('is-hidden');
      state.overlay.hidden = false;
      state.overlay.style.display = '';
    }
    refreshCopy();
    if (err && global.console) console.error('[PhysicsGlOverlay]', err);
  }

  function hide() {
    // Mark ready even if overlay not mounted yet (body scripts often run
    // before DOMContentLoaded, which is when boot() mounts the overlay).
    state.ready = true;
    if (!state.overlay) return;
    state.overlay.classList.add('is-hidden');
    state.overlay.hidden = true;
    state.overlay.style.display = 'none';
    // Legacy
    if (state.host) {
      var legacy = state.host.querySelector('#glOverlay');
      if (legacy) legacy.style.display = 'none';
    }
  }

  function checkThree() {
    if (typeof global.THREE === 'undefined' || global.__THREE_CDN_FAILED) {
      showError(new Error('Three.js CDN not loaded'));
      return false;
    }
    return true;
  }

  function patchWebGLRenderer() {
    if (state.patched) return;
    if (typeof global.THREE === 'undefined' || !global.THREE.WebGLRenderer) return;
    state.patched = true;
    var Orig = global.THREE.WebGLRenderer;
    function PatchedWebGLRenderer(parameters) {
      try {
        // Returning an object from a constructor replaces `this`.
        var renderer = new Orig(parameters);
        hide();
        return renderer;
      } catch (err) {
        showError(err);
        throw err;
      }
    }
    PatchedWebGLRenderer.prototype = Orig.prototype;
    try {
      Object.keys(Orig).forEach(function (k) {
        try { PatchedWebGLRenderer[k] = Orig[k]; } catch (e) { /* ignore */ }
      });
    } catch (e2) { /* ignore */ }
    global.THREE.WebGLRenderer = PatchedWebGLRenderer;
  }

  function guard(initFn) {
    try {
      if (!checkThree()) return null;
      var result = initFn();
      hide();
      return result;
    } catch (err) {
      showError(err);
      return null;
    }
  }

  function boot() {
    var host = findHost();
    if (!host) return;
    mount(host);

    // Body init scripts often construct WebGLRenderer before DOMContentLoaded.
    // If that already succeeded (or failed), respect that instead of flashing loading.
    if (state.failed) {
      showError();
      return;
    }
    if (state.ready) {
      hide();
      return;
    }

    showLoading();

    if (typeof global.THREE === 'undefined' || global.__THREE_CDN_FAILED) {
      showError(new Error('Three.js CDN not loaded'));
      return;
    }

    // If nothing marked ready after a grace period and no canvas was created, fail soft
    setTimeout(function () {
      if (state.ready || state.failed) return;
      if (typeof global.THREE === 'undefined') {
        showError(new Error('Three.js CDN not loaded'));
        return;
      }
      var hasCanvas = host.querySelector('canvas');
      if (!hasCanvas) {
        // Immersive pages may append canvas later; give another beat
        setTimeout(function () {
          if (state.ready || state.failed) return;
          if (!host.querySelector('canvas')) {
            showError(new Error('WebGL canvas was not created'));
          }
        }, 2500);
      } else {
        // Canvas exists but ready flag missed — treat as success
        hide();
      }
    }, 4000);
  }

  // Mark CDN script failures when pages add onerror handlers that set this flag
  global.__THREE_CDN_FAILED = global.__THREE_CDN_FAILED || false;

  var api = {
    mount: mount,
    showLoading: showLoading,
    showError: showError,
    hide: hide,
    ready: hide,
    checkThree: checkThree,
    guard: guard,
    patchWebGLRenderer: patchWebGLRenderer,
    refreshCopy: refreshCopy,
    boot: boot
  };

  global.PhysicsGlOverlay = api;
  global.showGlError = function () { showError(); };

  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  // Patch immediately when this file loads after the Three.js CDN script.
  // Body init scripts run later and must see the patched WebGLRenderer.
  if (typeof global.THREE !== 'undefined') {
    patchWebGLRenderer();
  } else {
    var tries = 0;
    (function waitThree() {
      if (typeof global.THREE !== 'undefined') {
        patchWebGLRenderer();
        return;
      }
      tries += 1;
      if (tries > 80) return;
      setTimeout(waitThree, 25);
    })();
  }

  onReady(function () {
    boot();
  });

  // Keep overlay copy in sync when language changes
  global.addEventListener('storage', function (e) {
    if (e.key === 'preferred_language') refreshCopy();
  });
})(typeof window !== 'undefined' ? window : this);
