/**
 * Physics Animations — preferred_language contract
 * Canonical storage values: "en" | "zh-hk" | "zh-cn"
 * Migrates legacy keys on read: zh → zh-hk, cn → zh-cn
 */
(function (global) {
  'use strict';

  var STORAGE_KEY = 'preferred_language';
  var CANONICAL = { en: true, 'zh-hk': true, 'zh-cn': true };

  function normalizeLang(lang) {
    if (lang == null || lang === '') return 'en';
    var l = String(lang).toLowerCase().trim().replace(/_/g, '-');
    if (l === 'zh-hk' || l === 'zh-tw' || l === 'zh-hant' || l === 'zh') return 'zh-hk';
    if (l === 'zh-cn' || l === 'zh-hans' || l === 'zh-sg' || l === 'cn') return 'zh-cn';
    if (l === 'en' || l.indexOf('en-') === 0) return 'en';
    return 'en';
  }

  function getPreferredLanguage() {
    var raw = null;
    try {
      raw = localStorage.getItem(STORAGE_KEY);
    } catch (e) { /* private mode */ }
    var canon = normalizeLang(raw);
    if (raw && raw !== canon) {
      try {
        localStorage.setItem(STORAGE_KEY, canon);
      } catch (e2) { /* ignore */ }
    }
    return canon;
  }

  function setPreferredLanguage(lang) {
    var canon = normalizeLang(lang);
    try {
      localStorage.setItem(STORAGE_KEY, canon);
    } catch (e) { /* ignore */ }
    return canon;
  }

  function htmlLangAttr(lang) {
    var c = normalizeLang(lang);
    if (c === 'zh-hk') return 'zh-HK';
    if (c === 'zh-cn') return 'zh-CN';
    return 'en';
  }

  /**
   * Resolve a translations bundle for the active (or given) language.
   * Supports pages that still key strings as zh/cn alongside zh-hk/zh-cn.
   */
  function resolveTranslations(translations, lang) {
    if (!translations) return {};
    var c = normalizeLang(lang != null ? lang : getPreferredLanguage());
    if (translations[c]) return translations[c];
    if (c === 'zh-hk' && translations.zh) return translations.zh;
    if (c === 'zh-cn' && translations.cn) return translations.cn;
    if (translations.en) return translations.en;
    return {};
  }

  /**
   * Alias legacy translation object keys onto canonical ones (mutates in place).
   */
  function aliasTranslationKeys(translations) {
    if (!translations || typeof translations !== 'object') return translations;
    if (translations.zh && !translations['zh-hk']) translations['zh-hk'] = translations.zh;
    if (translations.cn && !translations['zh-cn']) translations['zh-cn'] = translations.cn;
    if (translations['zh-hk'] && !translations.zh) translations.zh = translations['zh-hk'];
    if (translations['zh-cn'] && !translations.cn) translations.cn = translations['zh-cn'];
    return translations;
  }

  /**
   * Map a button/data-lang value that may be legacy onto canonical.
   */
  function matchLangButton(btnLang, activeLang) {
    return normalizeLang(btnLang) === normalizeLang(activeLang);
  }

  var api = {
    STORAGE_KEY: STORAGE_KEY,
    CANONICAL: ['en', 'zh-hk', 'zh-cn'],
    normalize: normalizeLang,
    get: getPreferredLanguage,
    set: setPreferredLanguage,
    htmlLang: htmlLangAttr,
    resolve: resolveTranslations,
    aliasKeys: aliasTranslationKeys,
    matchButton: matchLangButton
  };

  global.PhysicsI18n = api;
})(typeof window !== 'undefined' ? window : this);
