/**
 * Physics Animations — index sticky chips + title filter (UI/UX knife 2 · D)
 */
(function (global) {
  'use strict';

  var SECTIONS = [
    { id: 'optics', key: 'chip.optics' },
    { id: 'mechanics', key: 'chip.mechanics' },
    { id: 'waves', key: 'chip.waves' },
    { id: 'electricity', key: 'chip.electricity' },
    { id: 'thermal', key: 'chip.thermal' },
    { id: 'energy', key: 'chip.energy' },
    { id: 'atomic', key: 'chip.atomic' }
  ];

  var state = {
    category: 'all',
    query: ''
  };

  function normalize(s) {
    return String(s || '')
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .trim();
  }

  var TITLE_ALIASES = {
    'Youngs_Double-Slit_Experiment.html': '雙縫 双缝 young double slit',
    'Diffraction_Grating.html': '衍射光柵 衍射光栅',
    'Rayleigh_Criterion_3D.html': '瑞利準則 瑞利判据 rayleigh',
    'Convex_Lens_3D.html': '凸透鏡 凸透镜',
    'Concave_Lens_3D.html': '凹透鏡 凹透镜',
    'Primary_Colour_3D.html': '原色 三原色',
    'Ball_and_String_Simulator.html': '小球與繩 球绳 圓周運動 圆周运动',
    'Force_Vector_Addition.html': '力向量 矢量合成',
    'Projectile_Motion_Graphs.html': '拋體運動 抛体运动',
    'Inclined_Plane_Newtons_Laws.html': '斜面 牛頓 牛顿',
    'Impulse_Force_Time_Graph.html': '衝量 冲量',
    'Momentum_Collision_Lab.html': '動量 动量 碰撞',
    'Work_Energy_Power_Analyzer.html': '功 能量 功率',
    'Bullet_Pumpkin_Momentum.html': '動量 动量',
    'Standing_Waves_Resonance.html': '駐波 驻波 共振',
    'CRO_Wave_Simulation.html': '示波器 cro',
    'Magnetic_Field_Visualizer.html': '磁場 磁场',
    'Magnetic_Effect_Current.html': '電流磁效應 电流磁效应',
    'Force_on_Conductor.html': '載流導體 载流导体',
    'Motor_Effect_3D.html': '電動機效應 电动机效应',
    'Lorentz_Force_3D.html': '勞侖茲力 洛伦兹力',
    'Current_Balance_3D.html': '電流天平 电流天平',
    'EM_Induction_Falling_Plate.html': '電磁感應 电磁感应',
    'Transformer_Power_Transmission.html': '變壓器 变压器',
    'DC_Circuit_Internal_Resistance.html': '內阻 内阻 電路 电路',
    'Domestic_Electricity_Safety_Board.html': '家居電力 家居电力',
    'Electrostatics_Field_Explorer.html': '靜電 静电',
    'Evaporation_vs_Boiling.html': '蒸發 蒸发 沸騰 沸腾 熱學 热学',
    'Gas_Laws_Simulator.html': '氣體定律 气体定律 波義耳 查理 熱學 热学',
    'Building_Heat_Gain_Air_Conditioner_3D.html': '熱增益 热增益 冷氣 空调',
    'Solar_Panel_Power_3D.html': '太陽能 太阳能',
    'Wind_Turbine_Power_3D.html': '風力 风力 渦輪 涡轮',
    'Rutherford_Scattering.html': '盧瑟福 卢瑟福 散射',
    'Photoelectric_Effect.html': '光電效應 光电效应',
    'Emission_Absorption_Spectrum.html': '發射 吸收 光譜 光谱',
    'Bohr_Model.html': '玻爾 玻尔',
    'Radioactive_Source_Range_and_Penetration.html': '放射性 貫通 穿透',
    'Radioactive_Decay_Half_Life.html': '半衰期 衰變 衰变',
    'Random_Nature_Radioactive_Decay.html': '隨機 随机 衰變 衰变',
    'Refraction_Critical_Angle_TIR.html': '折射 臨界角 临界角 全反射'
  };

  function cardSearchText(card) {
    var parts = [];
    var explicit = card.getAttribute('data-search');
    if (explicit) parts.push(explicit);
    var href = card.getAttribute('href') || '';
    var file = href.split('/').pop();
    if (TITLE_ALIASES[file]) parts.push(TITLE_ALIASES[file]);
    var title = card.querySelector('h4');
    var desc = card.querySelector('p');
    if (title) parts.push(title.textContent);
    if (desc) parts.push(desc.textContent);
    parts.push(card.textContent);
    return normalize(parts.join(' '));
  }

  function applyFilter() {
    var q = normalize(state.query);
    var emptyCount = 0;
    var totalVisible = 0;

    SECTIONS.forEach(function (sec) {
      var section = document.getElementById(sec.id);
      if (!section) return;
      var catMatch = state.category === 'all' || state.category === sec.id;
      var cards = section.querySelectorAll('a.group');
      var visibleInSection = 0;

      cards.forEach(function (card) {
        var textMatch = !q || cardSearchText(card).indexOf(q) !== -1;
        var show = catMatch && textMatch;
        card.classList.toggle('is-filtered-out', !show);
        card.hidden = !show;
        if (show) visibleInSection += 1;
      });

      var showSection = catMatch && (visibleInSection > 0 || (!q && catMatch));
      // If filtering by text and nothing matches, hide section
      if (q && visibleInSection === 0) showSection = false;
      if (!catMatch) showSection = false;

      section.classList.toggle('is-filtered-out', !showSection);
      section.hidden = !showSection;
      if (!showSection) emptyCount += 1;
      totalVisible += visibleInSection;
    });

    var emptyEl = document.getElementById('catalogEmpty');
    if (emptyEl) {
      emptyEl.hidden = totalVisible > 0;
    }

    updateChipActive();
  }

  function updateChipActive() {
    document.querySelectorAll('[data-catalog-chip]').forEach(function (btn) {
      var id = btn.getAttribute('data-catalog-chip');
      var on = id === state.category;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  function selectCategory(id, opts) {
    opts = opts || {};
    state.category = id || 'all';
    applyFilter();

    if (opts.scroll !== false) {
      var targetId = state.category === 'all' ? 'experiments' : state.category;
      var target = document.getElementById(targetId);
      if (target) {
        var reduce = false;
        try {
          reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        } catch (e) { /* ignore */ }
        target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      }
    }

    if (opts.updateHash !== false) {
      try {
        if (state.category === 'all') {
          if (location.hash) history.replaceState(null, '', location.pathname + location.search);
        } else {
          history.replaceState(null, '', '#' + state.category);
        }
      } catch (e2) { /* ignore */ }
    }
  }

  function syncFromHash() {
    var hash = (location.hash || '').replace(/^#/, '');
    var known = SECTIONS.some(function (s) { return s.id === hash; });
    if (known) {
      state.category = hash;
      applyFilter();
    } else if (hash === 'experiments' || !hash) {
      state.category = 'all';
      applyFilter();
    }
  }

  function init() {
    var filterInput = document.getElementById('catalogFilter');
    if (filterInput) {
      filterInput.addEventListener('input', function () {
        state.query = filterInput.value;
        applyFilter();
      });
    }

    document.querySelectorAll('[data-catalog-chip]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        selectCategory(btn.getAttribute('data-catalog-chip'), { scroll: true, updateHash: true });
      });
    });

    window.addEventListener('hashchange', function () {
      syncFromHash();
    });

    // Initial: honour deep link (#thermal etc.) without forcing scroll jump on first paint
    var hash = (location.hash || '').replace(/^#/, '');
    var known = SECTIONS.some(function (s) { return s.id === hash; });
    if (known) {
      state.category = hash;
    }
    applyFilter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for language refresh hooks if needed
  global.PhysicsIndexCatalog = {
    applyFilter: applyFilter,
    selectCategory: selectCategory,
    getState: function () { return { category: state.category, query: state.query }; }
  };
})(typeof window !== 'undefined' ? window : this);
