/**
 * Physics Animations — index sticky chips + title filter (UI/UX knife 2 · D)
 * Chips = section names; filter = title contains (live). No tag system.
 */
(function (global) {
  'use strict';

  var SECTIONS = [
    { id: 'optics' },
    { id: 'mechanics' },
    { id: 'waves' },
    { id: 'electricity' },
    { id: 'thermal' },
    { id: 'energy' },
    { id: 'atomic' }
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

  /** Title-contains only (h4). No tag / alias system. */
  function cardTitle(card) {
    var title = card.querySelector('h4');
    return normalize(title ? title.textContent : '');
  }

  function applyFilter() {
    var q = normalize(state.query);
    var totalVisible = 0;

    SECTIONS.forEach(function (sec) {
      var section = document.getElementById(sec.id);
      if (!section) return;
      var catMatch = state.category === 'all' || state.category === sec.id;
      var cards = section.querySelectorAll('a.group');
      var visibleInSection = 0;

      cards.forEach(function (card) {
        var textMatch = !q || cardTitle(card).indexOf(q) !== -1;
        var show = catMatch && textMatch;
        card.classList.toggle('is-filtered-out', !show);
        card.hidden = !show;
        if (show) visibleInSection += 1;
      });

      var showSection = catMatch && visibleInSection > 0;
      if (!q && catMatch) {
        // Empty filter: show section even if somehow card-less (still honour category)
        showSection = catMatch && (visibleInSection > 0 || cards.length === 0);
        if (cards.length > 0) showSection = catMatch && visibleInSection > 0;
      }
      if (!catMatch) showSection = false;
      if (q && visibleInSection === 0) showSection = false;

      section.classList.toggle('is-filtered-out', !showSection);
      section.hidden = !showSection;
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

    window.addEventListener('hashchange', syncFromHash);

    var hash = (location.hash || '').replace(/^#/, '');
    var known = SECTIONS.some(function (s) { return s.id === hash; });
    if (known) state.category = hash;
    applyFilter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  global.PhysicsIndexCatalog = {
    applyFilter: applyFilter,
    selectCategory: selectCategory,
    getState: function () { return { category: state.category, query: state.query }; }
  };
})(typeof window !== 'undefined' ? window : this);
