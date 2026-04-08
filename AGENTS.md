# AGENTS.md

## Cursor Cloud specific instructions

This is a **no-build, no-package-manager, purely static** project. All HTML files are standalone and load dependencies via CDN (Tailwind CSS, Three.js, dat.gui, MathJax, Google Fonts).

### Running the dev server

Serve the project root with any static HTTP server on port 8080 (matching `.vscode/launch.json`):

```bash
python3 -m http.server 8080 --directory /workspace
```

Then open `http://localhost:8080/` in Chrome.

### Project structure

- Each `.html` file in the repo root is a standalone physics simulation or tool.
- `index.html` is the landing page / simulation catalog.
- `DESIGN_SYSTEM.md` documents the visual design standards.
- `.cursorrules` contains project coding conventions.
- `vercel.json` is for production deployment on Vercel (not needed locally).

### Lint / Test / Build

- **No linter, test framework, or build step is configured.** The project has no `package.json`, no test runner, and no CI pipeline.
- Validation is manual: open pages in Chrome and verify responsiveness, color semantics, and simulation behavior.
- Refer to `DESIGN_SYSTEM.md` for the design review checklist.

### Gotchas

- CDN-loaded dependencies (Tailwind, Three.js, etc.) require internet access. Simulations will not render properly without it.
- The `ai_image_generator.html` page requires a user-provided fal.ai API key entered in-browser; no server-side proxy exists.
- Use `python3 -m http.server` rather than opening HTML files directly with `file://` URLs, as some simulations use features that require an HTTP origin.
