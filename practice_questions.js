/* =============================================================================
 * Practice Questions Widget
 * -----------------------------------------------------------------------------
 * Reusable, i18n-aware widget that injects a "Practice Questions" section into
 * any physics demo page. Each page calls:
 *
 *   <script src="practice_questions.js"></script>
 *   <script>initPracticeQuestions('demo_key');</script>
 *
 * Features
 *   - Per-demo question banks defined centrally below (en + zh)
 *   - 5 questions per demo with detailed worked solutions
 *   - MathJax re-typesetting after render and on language change
 *   - Hooks into existing setLanguage() / updateLanguage() functions on the
 *     page so language switches re-render the question text.
 *   - Stand-alone styling that fits the project's blue/slate design system.
 * ============================================================================= */
(function () {
  'use strict';

  /* ----------------------------- UI labels ------------------------------ */
  const UI = {
    en: {
      title: 'Practice Questions',
      subtitle: 'Test your understanding — click each question to reveal the worked solution.',
      show: 'Show solution',
      hide: 'Hide solution',
      sol: 'Solution',
    },
    zh: {
      title: '練習題',
      subtitle: '檢驗你的理解 — 點擊每題以展開詳盡解答。',
      show: '顯示解答',
      hide: '隱藏解答',
      sol: '解答',
    },
  };

  /* -------------------------- Active language --------------------------- */
  function getActiveLang() {
    const stored = (localStorage.getItem('preferred_language') || 'en').toLowerCase();
    if (stored.startsWith('zh') || stored === 'cn' || stored === 'tw' || stored === 'hk') {
      return 'zh';
    }
    return 'en';
  }

  /* ------------------------------ Render -------------------------------- */
  let activeKey = null;

  function render() {
    const container = document.getElementById('pq-list');
    if (!container || !activeKey) return;
    const bank = window.PRACTICE_QUESTION_BANK || {};
    const data = bank[activeKey];
    if (!data) {
      container.innerHTML = '<div class="text-sm text-slate-500">No questions defined for this demo.</div>';
      return;
    }
    const lang = getActiveLang();
    const items = data[lang] || data.en || [];
    const labels = UI[lang];

    const titleEl = document.getElementById('pq-title');
    const subEl = document.getElementById('pq-subtitle');
    if (titleEl) titleEl.textContent = labels.title;
    if (subEl) subEl.textContent = labels.subtitle;

    container.innerHTML = items.map((it, i) => `
      <details class="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
        <summary class="cursor-pointer p-4 flex items-start gap-3 hover:bg-blue-50 transition list-none">
          <span class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">${i + 1}</span>
          <div class="flex-1 min-w-0">
            <div class="text-sm md:text-base text-slate-800 font-medium leading-relaxed">${it.q}</div>
            <div class="mt-2 text-xs text-blue-600 font-semibold flex items-center gap-1">
              <span class="group-open:hidden inline-flex items-center gap-1">
                <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                ${labels.show}
              </span>
              <span class="hidden group-open:inline-flex items-center gap-1">
                <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7"/></svg>
                ${labels.hide}
              </span>
            </div>
          </div>
        </summary>
        <div class="border-t border-slate-200 bg-white px-4 py-4 md:px-5 md:py-5">
          <div class="text-xs uppercase tracking-wider text-blue-600 font-bold mb-2">${labels.sol}</div>
          <div class="text-sm text-slate-700 leading-relaxed pq-solution">${it.sol}</div>
        </div>
      </details>
    `).join('');

    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([container]).catch(function () { /* ignore */ });
    } else if (window.MathJax && window.MathJax.Hub && window.MathJax.Hub.Queue) {
      window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, container]);
    }
  }

  /* --------------------------- Section inject --------------------------- */
  function ensureSection() {
    if (document.getElementById('practice-questions-section')) return;
    const section = document.createElement('section');
    section.id = 'practice-questions-section';
    section.className = 'w-full max-w-5xl mx-auto px-6 mt-8 mb-16';
    section.innerHTML = `
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-md">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
          </div>
          <div class="min-w-0">
            <h3 id="pq-title" class="text-lg md:text-xl font-bold text-slate-800">Practice Questions</h3>
            <p id="pq-subtitle" class="text-xs md:text-sm text-slate-600">Test your understanding — click each question to reveal the worked solution.</p>
          </div>
        </div>
        <div id="pq-list" class="space-y-3"></div>
      </div>
    `;
    const anchor = document.querySelector('main') || document.body;
    anchor.appendChild(section);
  }

  /* ---------------------- Hook language switchers ----------------------- */
  function hookLanguageFunctions() {
    ['setLanguage', 'updateLanguage', 'switchLanguage'].forEach(function (name) {
      const fn = window[name];
      if (typeof fn === 'function' && !fn.__pqHooked) {
        const wrapped = function () {
          const r = fn.apply(this, arguments);
          setTimeout(render, 0);
          return r;
        };
        wrapped.__pqHooked = true;
        try { window[name] = wrapped; } catch (e) { /* read-only, ignore */ }
      }
    });
  }

  /* ------------------------------ Public -------------------------------- */
  window.initPracticeQuestions = function (key) {
    activeKey = key;
    function start() {
      ensureSection();
      hookLanguageFunctions();
      render();
      // Re-render once more after MathJax / page i18n init.
      setTimeout(function () { hookLanguageFunctions(); render(); }, 400);
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', start);
    } else {
      start();
    }
  };

  /* ====================== QUESTION BANK (per demo) ======================
   * Each entry is keyed by a short demo id and contains `en` and `zh`
   * arrays of exactly 5 question/solution pairs.  HTML is allowed in
   * both q and sol; MathJax delimiters \( … \) and \[ … \] are supported.
   * ===================================================================== */
  window.PRACTICE_QUESTION_BANK = {};
})();
