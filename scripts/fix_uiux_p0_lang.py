#!/usr/bin/env python3
"""Second-pass fixes for language contract + cleanup after apply_uiux_p0."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path("/workspace")


def fix_text(text: str) -> str:
    # Deduplicate normalize lines
    text = re.sub(
        r"(if \(window\.PhysicsI18n\) currentLang = PhysicsI18n\.normalize\(currentLang\);\s*){2,}",
        "if (window.PhysicsI18n) currentLang = PhysicsI18n.normalize(currentLang);\n",
        text,
    )

    # Clean doubled setItem ternaries
    text = text.replace(
        ";(window.PhysicsI18n ? PhysicsI18n.set(lang) : (window.PhysicsI18n ? PhysicsI18n.set(lang) : localStorage.setItem('preferred_language', lang)));",
        "currentLang = window.PhysicsI18n ? PhysicsI18n.set(lang) : lang;",
    )
    text = text.replace(
        "(window.PhysicsI18n ? PhysicsI18n.set(lang) : (window.PhysicsI18n ? PhysicsI18n.set(lang) : localStorage.setItem('preferred_language', lang)))",
        "(window.PhysicsI18n ? PhysicsI18n.set(lang) : localStorage.setItem('preferred_language', lang))",
    )

    # Improve setLanguage patterns that still assign currentLang = lang then set storage separately
    # currentLang = lang;\n      (window.PhysicsI18n ? PhysicsI18n.set(lang) ...
    text = re.sub(
        r"currentLang\s*=\s*lang;\s*\n\s*\(?window\.PhysicsI18n \? PhysicsI18n\.set\(lang\) : localStorage\.setItem\('preferred_language', lang\)\)?;",
        "currentLang = window.PhysicsI18n ? PhysicsI18n.set(lang) : lang;\n"
        "      if (!window.PhysicsI18n) localStorage.setItem('preferred_language', lang);",
        text,
    )
    text = re.sub(
        r"currentLang\s*=\s*lang;\s*\n\s*\(window\.PhysicsI18n \? PhysicsI18n\.set\(lang\) : localStorage\.setItem\('preferred_language', lang\)\);",
        "currentLang = window.PhysicsI18n ? PhysicsI18n.set(lang) : lang;\n"
        "      if (!window.PhysicsI18n) localStorage.setItem('preferred_language', lang);",
        text,
    )

    # Fix documentElement.lang that still checks zh/cn only
    text = re.sub(
        r"document\.documentElement\.lang\s*=\s*lang\s*===\s*'zh'\s*\?\s*'zh-HK'\s*:\s*lang\s*===\s*'cn'\s*\?\s*'zh-CN'\s*:\s*'en';",
        "document.documentElement.lang = window.PhysicsI18n ? PhysicsI18n.htmlLang(lang) : (lang === 'zh-hk' || lang === 'zh' ? 'zh-HK' : lang === 'zh-cn' || lang === 'cn' ? 'zh-CN' : 'en');",
        text,
    )
    text = re.sub(
        r"document\.documentElement\.lang\s*=\s*currentLang\s*===\s*'cn'\s*\?\s*'zh-CN'\s*:\s*currentLang\s*===\s*'zh'\s*\?\s*'zh-HK'\s*:\s*'en';",
        "document.documentElement.lang = window.PhysicsI18n ? PhysicsI18n.htmlLang(currentLang) : (currentLang === 'zh-cn' || currentLang === 'cn' ? 'zh-CN' : currentLang === 'zh-hk' || currentLang === 'zh' ? 'zh-HK' : 'en');",
        text,
    )

    # Button active check: compare via PhysicsI18n when available
    text = re.sub(
        r"const active = btn\.dataset\.lang === lang;",
        "const active = window.PhysicsI18n ? PhysicsI18n.matchButton(btn.dataset.lang, lang) : (btn.dataset.lang === lang);",
        text,
    )
    text = re.sub(
        r"const active = btn\.dataset\.lang === currentLang;",
        "const active = window.PhysicsI18n ? PhysicsI18n.matchButton(btn.dataset.lang, currentLang) : (btn.dataset.lang === currentLang);",
        text,
    )
    text = re.sub(
        r"const a = btn\.dataset\.lang === lang;",
        "const a = window.PhysicsI18n ? PhysicsI18n.matchButton(btn.dataset.lang, lang) : (btn.dataset.lang === lang);",
        text,
    )

    # Photoelectric / Rutherford style init → canonical
    text = re.sub(
        r"let currentLang = localStorage\.getItem\('preferred_language'\) === 'zh-hk' \|\| localStorage\.getItem\('preferred_language'\) === 'zh' \? 'zh' : 'en';",
        "let currentLang = window.PhysicsI18n ? PhysicsI18n.get() : ((localStorage.getItem('preferred_language') === 'zh-hk' || localStorage.getItem('preferred_language') === 'zh') ? 'zh-hk' : 'en');",
        text,
    )

    # Move premature aliasKeys(translations) that appear BEFORE const translations
    # Pattern: aliasKeys...; let currentLang...; const translations
    text = re.sub(
        r"if \(window\.PhysicsI18n\) PhysicsI18n\.aliasKeys\(translations\);\s*\n\s*let currentLang = ([^\n]+);\s*\n\s*(const translations = \{)",
        r"let currentLang = \1;\n\n\2",
        text,
        count=1,
    )

    # After translations object closes, ensure aliasKeys + re-read currentLang once
    # For files that have translations with zh/cn and no alias after the object
    if re.search(r"\n\s*zh:\s*\{", text) or re.search(r"\n\s*cn:\s*\{", text):
        if "PhysicsI18n.aliasKeys(translations)" not in text:
            # Insert after first `};` following `const translations` / `translations =`
            m = re.search(r"(const translations\s*=\s*\{)", text)
            if m:
                # Find matching close — approximate: first `\n    };\n` after start that's at indent of const
                start = m.start()
                close = text.find("\n    };\n", start)
                if close != -1:
                    insert = (
                        "\n    };\n"
                        "    if (window.PhysicsI18n) PhysicsI18n.aliasKeys(translations);\n"
                    )
                    # replace the closing we found
                    text = text[:close] + insert + text[close + len("\n    };\n") :]

    # normalizeLang helpers that map TO zh/cn — also write canonical to storage
    # DC / Magnetic / Electrostatics: PhysicsI18n.set(currentLang) when currentLang is zh
    # Fix: set with PhysicsI18n.set(lang) using original lang arg, keep internal as normalized local key
    text = re.sub(
        r"currentLang = normalizeLang\(lang\);\s*\n\s*\(window\.PhysicsI18n \? PhysicsI18n\.set\(currentLang\) : localStorage\.setItem\('preferred_language', currentLang\)\);",
        "const _storageLang = window.PhysicsI18n ? PhysicsI18n.normalize(lang) : lang;\n"
        "    currentLang = normalizeLang(lang);\n"
        "    if (window.PhysicsI18n) PhysicsI18n.set(_storageLang);\n"
        "    else localStorage.setItem('preferred_language', _storageLang);",
        text,
    )

    # Update normalizeLang functions to accept zh-hk and still return local keys if they return zh/cn
    # (keep as-is for lookup) — but ensure get() path uses normalizeLang(PhysicsI18n.get())
    text = re.sub(
        r"let currentLang = normalizeLang\(localStorage\.getItem\('preferred_language'\) \|\| 'en'\);",
        "let currentLang = normalizeLang(window.PhysicsI18n ? PhysicsI18n.get() : (localStorage.getItem('preferred_language') || 'en'));",
        text,
    )
    text = re.sub(
        r"let currentLang = normalizeLang\(localStorage\.getItem\('preferred_language'\)\);",
        "let currentLang = normalizeLang(window.PhysicsI18n ? PhysicsI18n.get() : localStorage.getItem('preferred_language'));",
        text,
    )

    # Ensure t() / lookups fall back via resolve when using canonical
    text = re.sub(
        r"return translations\[currentLang\]\?\.\[key\] \?\? translations\.en\[key\] \?\? key;",
        "return (window.PhysicsI18n ? PhysicsI18n.resolve(translations, currentLang)[key] : translations[currentLang]?.[key]) ?? translations.en?.[key] ?? key;",
        text,
    )
    text = re.sub(
        r"return translations\[currentLang\]\?\.\[k\] \?\? translations\.en\[k\] \?\? k;",
        "return (window.PhysicsI18n ? PhysicsI18n.resolve(translations, currentLang)[k] : translations[currentLang]?.[k]) ?? translations.en?.[k] ?? k;",
        text,
    )

    # setLanguage lookups translations[lang] → resolve when possible (simple cases)
    text = re.sub(
        r"const val = translations\[lang\]\?\.\[key\];\s*\n\s*if \(val\) el\.textContent = val;",
        "const val = (window.PhysicsI18n ? PhysicsI18n.resolve(translations, lang)[key] : translations[lang]?.[key]);\n"
        "        if (val) el.textContent = val;",
        text,
    )
    text = re.sub(
        r"if \(translations\[lang\]\?\.\[k\]\) el\.textContent = translations\[lang\]\[k\];",
        "const _bundle = window.PhysicsI18n ? PhysicsI18n.resolve(translations, lang) : (translations[lang] || {});\n"
        "        if (_bundle[k]) el.textContent = _bundle[k];",
        text,
    )

    return text


def fix_dc_circuit_order(text: str) -> str:
    """DC_Circuit had aliasKeys + currentLang before translations const — repair."""
    if "const translations" not in text:
        return text
    # Remove stray early alias + currentLang if translations comes after
    bad = re.search(
        r"if \(window\.PhysicsI18n\) PhysicsI18n\.aliasKeys\(translations\);\s*\n\s*let currentLang = normalizeLang\([^)]+\);\s*\n\s*const translations = \{",
        text,
    )
    if bad:
        text = re.sub(
            r"if \(window\.PhysicsI18n\) PhysicsI18n\.aliasKeys\(translations\);\s*\n\s*let currentLang = normalizeLang\([^)]+\);\s*\n\s*(const translations = \{)",
            r"\1",
            text,
            count=1,
        )
        # Insert after translations block end — find `};` then function or let
        # Place after translations closing before first function that uses it
        if "let currentLang = normalizeLang" not in text:
            # Find end of translations - look for `\n};\n\nfunction` or similar after const translations
            m = re.search(r"const translations = \{", text)
            if m:
                # naive brace match
                i = m.end() - 1
                depth = 0
                end = None
                for j in range(m.end() - 1, len(text)):
                    ch = text[j]
                    if ch == "{":
                        depth += 1
                    elif ch == "}":
                        depth -= 1
                        if depth == 0:
                            end = j + 1
                            break
                if end:
                    insert = (
                        "\n\nif (window.PhysicsI18n) PhysicsI18n.aliasKeys(translations);\n"
                        "let currentLang = normalizeLang(window.PhysicsI18n ? PhysicsI18n.get() : (localStorage.getItem('preferred_language') || 'en'));\n"
                    )
                    text = text[:end] + insert + text[end:]
    return text


def main() -> None:
    changed = []
    for path in sorted(ROOT.glob("*.html")):
        if path.name in {"analytics.html", "ai_image_generator.html", "seating_plan.html"}:
            continue
        original = path.read_text(encoding="utf-8")
        text = fix_text(original)
        if path.name == "DC_Circuit_Internal_Resistance.html":
            text = fix_dc_circuit_order(text)
        # Also run dc-order fix for any file with same premature pattern
        text = fix_dc_circuit_order(text)
        if text != original:
            path.write_text(text, encoding="utf-8")
            changed.append(path.name)
    print(f"Fixed {len(changed)} files")
    for n in changed:
        print(f"  - {n}")


if __name__ == "__main__":
    main()
