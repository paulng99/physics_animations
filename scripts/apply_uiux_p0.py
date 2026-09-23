#!/usr/bin/env python3
"""Apply UI/UX P0 shared shell (A+C+B) to Three.js simulation pages + index."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path("/workspace")

SKIP = {
    "index.html",
    "analytics.html",
    "ai_image_generator.html",
    "seating_plan.html",
}

INCLUDE_BLOCK = """  <link rel="stylesheet" href="shared/sim-shell.css">
  <script src="shared/i18n.js"></script>
  <script src="shared/gl-overlay.js"></script>
"""

THREE_CDN_RE = re.compile(
    r'(<script[^>]+three\.js/r128/three\.min\.js[^>]*>\s*</script>)',
    re.I,
)


def is_three_page(text: str) -> bool:
    return ("three.js/r128/three.min.js" in text) or ("WebGLRenderer" in text and "THREE" in text)


def ensure_includes(text: str) -> str:
    if "shared/sim-shell.css" in text and "shared/i18n.js" in text and "shared/gl-overlay.js" in text:
        return text
    # Remove partial includes if any
    text = re.sub(r'\s*<link[^>]+shared/sim-shell\.css[^>]*>\s*', "\n", text)
    text = re.sub(r'\s*<script[^>]+shared/i18n\.js[^>]*>\s*</script>\s*', "\n", text)
    text = re.sub(r'\s*<script[^>]+shared/gl-overlay\.js[^>]*>\s*</script>\s*', "\n", text)

    m = THREE_CDN_RE.search(text)
    if m:
        insert_at = m.end()
        return text[:insert_at] + "\n" + INCLUDE_BLOCK + text[insert_at:]

    # Fallback: before </head>
    if "</head>" in text:
        return text.replace("</head>", INCLUDE_BLOCK + "</head>", 1)
    return text


def mark_three_cdn_onerror(text: str) -> str:
    """Add onerror flag so overlay can detect CDN failure early."""

    def repl(m: re.Match) -> str:
        tag = m.group(0)
        if "onerror=" in tag:
            return tag
        return tag.replace(
            "three.min.js\"",
            'three.min.js" onerror="window.__THREE_CDN_FAILED=true"',
            1,
        ).replace(
            "three.min.js'",
            "three.min.js' onerror=\"window.__THREE_CDN_FAILED=true\"",
            1,
        )

    return THREE_CDN_RE.sub(repl, text, count=1)


def add_sim_shell_classes(text: str) -> str:
    """Add sim-shell / sim-controls / sim-viewport on common document layouts."""
    # Grid wrapper
    text = re.sub(
        r'class="(grid grid-cols-1 lg:grid-cols-12 gap-6)"',
        r'class="\1 sim-shell"',
        text,
        count=1,
    )
    text = re.sub(
        r'class="(grid grid-cols-1 lg:grid-cols-3 gap-[0-9]+)"',
        r'class="\1 sim-shell"',
        text,
        count=1,
    )
    text = re.sub(
        r'class="(grid grid-cols-1 lg:grid-cols-2 gap-[0-9]+)"',
        r'class="\1 sim-shell"',
        text,
        count=1,
    )

    # Controls column: aside with lg:col-span-4 as first grid child pattern
    text = re.sub(
        r'(<aside class=")(lg:col-span-4)',
        r'\1sim-controls \2',
        text,
        count=1,
    )
    text = re.sub(
        r'(<div class=")(lg:col-span-4[^"]*)(")',
        lambda m: m.group(0) if "sim-controls" in m.group(2) else f'{m.group(1)}sim-controls {m.group(2)}{m.group(3)}',
        text,
        count=1,
    )

    # Viewport column
    text = re.sub(
        r'(<(?:section|div) class=")(lg:col-span-8)',
        r'\1sim-viewport \2',
        text,
        count=1,
    )
    text = re.sub(
        r'(<(?:section|div) class=")(lg:col-span-2)',
        r'\1sim-viewport \2',
        text,
        count=1,
    )

    # three-container / canvas-container as gl hosts
    text = re.sub(
        r'id="three-container"',
        'id="three-container" data-gl-host',
        text,
        count=1,
    )
    text = re.sub(
        r'id="canvas-container"',
        'id="canvas-container" data-gl-host',
        text,
        count=1,
    )
    # Named canvases used as Three targets
    for cid in ("sceneCanvas", "waveCanvas", "board3d"):
        text = re.sub(
            rf'id="{cid}"',
            f'id="{cid}" data-gl-host',
            text,
            count=1,
        )

    return text


def unify_lang_buttons(text: str) -> str:
    """Canonicalize lang button data-lang / onclick values."""
    # onclick setLanguage('zh') → zh-hk; setLanguage('cn') → zh-cn
    text = text.replace("setLanguage('zh')", "setLanguage('zh-hk')")
    text = text.replace('setLanguage("zh")', 'setLanguage("zh-hk")')
    text = text.replace("setLanguage('cn')", "setLanguage('zh-cn')")
    text = text.replace('setLanguage("cn")', 'setLanguage("zh-cn")')
    text = text.replace("updateLanguage('zh')", "updateLanguage('zh-hk')")
    text = text.replace("updateLanguage('cn')", "updateLanguage('zh-cn')")

    text = re.sub(r'data-lang="zh"', 'data-lang="zh-hk"', text)
    text = re.sub(r"data-lang='zh'", "data-lang='zh-hk'", text)
    text = re.sub(r'data-lang="cn"', 'data-lang="zh-cn"', text)
    text = re.sub(r"data-lang='cn'", "data-lang='zh-cn'", text)
    return text


def patch_localstorage_lang(text: str) -> str:
    """Prefer PhysicsI18n.get/set where raw localStorage preferred_language is used."""

    # Common init patterns → PhysicsI18n.get()
    replacements = [
        (
            r"localStorage\.getItem\('preferred_language'\)\s*===\s*'zh-hk'\s*\?\s*'zh-hk'\s*:\s*'en'",
            "(window.PhysicsI18n ? PhysicsI18n.get() : 'en')",
        ),
        (
            r'localStorage\.getItem\("preferred_language"\)\s*===\s*"zh-hk"\s*\?\s*"zh-hk"\s*:\s*"en"',
            "(window.PhysicsI18n ? PhysicsI18n.get() : 'en')",
        ),
    ]
    for pat, repl in replacements:
        text = re.sub(pat, repl, text)

    # setItem preferred_language with ternary that maps zh→zh-hk
    text = re.sub(
        r"localStorage\.setItem\('preferred_language',\s*lang\s*===\s*'zh'\s*\?\s*'zh-hk'\s*:\s*lang\)",
        ";(window.PhysicsI18n ? PhysicsI18n.set(lang) : localStorage.setItem('preferred_language', lang))",
        text,
    )
    text = re.sub(
        r"localStorage\.setItem\('preferred_language',\s*lang\)",
        "(window.PhysicsI18n ? PhysicsI18n.set(lang) : localStorage.setItem('preferred_language', lang))",
        text,
    )
    text = re.sub(
        r'localStorage\.setItem\("preferred_language",\s*lang\)',
        '(window.PhysicsI18n ? PhysicsI18n.set(lang) : localStorage.setItem("preferred_language", lang))',
        text,
    )
    text = re.sub(
        r"localStorage\.setItem\('preferred_language',\s*currentLang\)",
        "(window.PhysicsI18n ? PhysicsI18n.set(currentLang) : localStorage.setItem('preferred_language', currentLang))",
        text,
    )

    # Inject aliasKeys after translations object when zh/cn keys exist
    if re.search(r"\bzh\s*:\s*\{", text) or re.search(r"\bcn\s*:\s*\{", text):
        if "PhysicsI18n.aliasKeys" not in text and "const translations" in text:
            text = re.sub(
                r"(const translations\s*=\s*\{)",
                r"\1",
                text,
                count=1,
            )
            # After translations closing }; find first `};` after const translations — fragile.
            # Safer: append alias call near setLanguage / currentLang init.
            if "aliasKeys(translations)" not in text:
                text = re.sub(
                    r"(let currentLang\s*=)",
                    r"if (window.PhysicsI18n) PhysicsI18n.aliasKeys(translations);\n    \1",
                    text,
                    count=1,
                )
                text = re.sub(
                    r"(var currentLang\s*=)",
                    r"if (window.PhysicsI18n) PhysicsI18n.aliasKeys(translations);\n    \1",
                    text,
                    count=1,
                )

    # Normalize currentLang init that still uses getItem without migration
    text = re.sub(
        r"let currentLang\s*=\s*localStorage\.getItem\('preferred_language'\)\s*\|\|\s*'en';",
        "let currentLang = (window.PhysicsI18n ? PhysicsI18n.get() : (localStorage.getItem('preferred_language') || 'en'));\n"
        "    if (window.PhysicsI18n) currentLang = PhysicsI18n.normalize(currentLang);",
        text,
    )
    text = re.sub(
        r"let currentLang\s*=\s*localStorage\.getItem\(\"preferred_language\"\)\s*\|\|\s*\"en\";",
        'let currentLang = (window.PhysicsI18n ? PhysicsI18n.get() : (localStorage.getItem("preferred_language") || "en"));\n'
        "    if (window.PhysicsI18n) currentLang = PhysicsI18n.normalize(currentLang);",
        text,
    )

    # Fix common migration lines that map zh-hk → zh (wrong direction for storage)
    text = re.sub(
        r"if \(currentLang === 'zh-hk'\) currentLang = 'zh';",
        "if (window.PhysicsI18n) currentLang = PhysicsI18n.normalize(currentLang);",
        text,
    )
    text = re.sub(
        r"if \(lang === 'zh' \|\| lang === 'cn'\) lang = 'zh-hk';",
        "if (window.PhysicsI18n) lang = PhysicsI18n.normalize(lang);",
        text,
    )

    return text


def patch_set_language_html_lang(text: str) -> str:
    """Use PhysicsI18n.htmlLang when setting documentElement.lang."""
    text = re.sub(
        r"document\.documentElement\.lang\s*=\s*lang\s*===\s*'zh-hk'\s*\?\s*'zh-HK'\s*:\s*'en';",
        "document.documentElement.lang = window.PhysicsI18n ? PhysicsI18n.htmlLang(lang) : (lang === 'zh-hk' ? 'zh-HK' : lang === 'zh-cn' ? 'zh-CN' : 'en');",
        text,
    )
    text = re.sub(
        r"document\.documentElement\.lang\s*=\s*lang\s*===\s*'cn'\s*\?\s*'zh-CN'\s*:\s*lang\s*===\s*'zh'\s*\?\s*'zh-TW'\s*:\s*'en';",
        "document.documentElement.lang = window.PhysicsI18n ? PhysicsI18n.htmlLang(lang) : (lang === 'zh-cn' || lang === 'cn' ? 'zh-CN' : lang === 'zh-hk' || lang === 'zh' ? 'zh-HK' : 'en');",
        text,
    )
    return text


def process_sim(path: Path) -> bool:
    original = path.read_text(encoding="utf-8")
    if not is_three_page(original):
        return False
    text = original
    text = ensure_includes(text)
    text = mark_three_cdn_onerror(text)
    text = add_sim_shell_classes(text)
    text = unify_lang_buttons(text)
    text = patch_localstorage_lang(text)
    text = patch_set_language_html_lang(text)
    if text != original:
        path.write_text(text, encoding="utf-8")
        return True
    return False


def process_index(path: Path) -> bool:
    original = path.read_text(encoding="utf-8")
    text = original

    # Includes for i18n only (no Three overlay needed)
    if "shared/i18n.js" not in text:
        text = text.replace(
            "</head>",
            '  <script src="shared/i18n.js"></script>\n</head>',
            1,
        )

    text = unify_lang_buttons(text)

    # Rename translation keys zh → zh-hk, cn → zh-cn
    text = re.sub(r"(\n\s*)zh:\s*\{", r"\1'zh-hk': {", text, count=1)
    text = re.sub(r"(\n\s*)cn:\s*\{", r"\1'zh-cn': {", text, count=1)

    # Replace setLanguage body storage + html lang
    old_set = """    let currentLang = localStorage.getItem('preferred_language') || 'en';

    function setLanguage(lang) {
      currentLang = lang;
      localStorage.setItem('preferred_language', lang);
      
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });
      
      document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
          btn.classList.add('bg-blue-600', 'text-white');
          btn.classList.remove('text-slate-600');
        } else {
          btn.classList.remove('bg-blue-600', 'text-white');
          btn.classList.add('text-slate-600');
        }
      });
      
      document.documentElement.lang = lang === 'cn' ? 'zh-CN' : lang === 'zh' ? 'zh-TW' : 'en';
    }"""

    new_set = """    let currentLang = window.PhysicsI18n ? PhysicsI18n.get() : (localStorage.getItem('preferred_language') || 'en');
    if (window.PhysicsI18n) currentLang = PhysicsI18n.normalize(currentLang);

    function setLanguage(lang) {
      currentLang = window.PhysicsI18n ? PhysicsI18n.set(lang) : lang;
      if (!window.PhysicsI18n) {
        // legacy fallback with migration
        if (lang === 'zh') lang = 'zh-hk';
        if (lang === 'cn') lang = 'zh-cn';
        currentLang = lang;
        localStorage.setItem('preferred_language', lang);
      }

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const bundle = translations[currentLang] || translations['zh-hk'] || translations.en;
        if (bundle && bundle[key]) {
          el.textContent = bundle[key];
        }
      });

      document.querySelectorAll('.lang-btn').forEach(btn => {
        const btnLang = window.PhysicsI18n
          ? PhysicsI18n.normalize(btn.getAttribute('data-lang'))
          : btn.getAttribute('data-lang');
        if (btnLang === currentLang) {
          btn.classList.add('bg-blue-600', 'text-white');
          btn.classList.remove('text-slate-600');
        } else {
          btn.classList.remove('bg-blue-600', 'text-white');
          btn.classList.add('text-slate-600');
        }
      });

      document.documentElement.lang = window.PhysicsI18n
        ? PhysicsI18n.htmlLang(currentLang)
        : (currentLang === 'zh-cn' ? 'zh-CN' : currentLang === 'zh-hk' ? 'zh-HK' : 'en');
    }"""

    if old_set in text:
        text = text.replace(old_set, new_set)
    else:
        # Partial patch if formatting differs
        text = patch_localstorage_lang(text)
        text = patch_set_language_html_lang(text)

    if text != original:
        path.write_text(text, encoding="utf-8")
        return True
    return False


def main() -> None:
    changed = []
    for path in sorted(ROOT.glob("*.html")):
        if path.name in SKIP and path.name != "index.html":
            continue
        if path.name == "index.html":
            if process_index(path):
                changed.append(path.name)
            continue
        if process_sim(path):
            changed.append(path.name)
    print(f"Updated {len(changed)} files:")
    for name in changed:
        print(f"  - {name}")


if __name__ == "__main__":
    main()
