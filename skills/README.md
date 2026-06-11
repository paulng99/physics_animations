# Agent Skills — Physics Animations

Reusable **Agent Skills** for building interactive 3D physics education webpages in this project. Compatible with [Agent Skills](https://agentskills.io/specification) format (Cursor, Claude Code, Codex, and other agents that load `SKILL.md` files).

## Available Skills

| Skill | Path | Use When |
|-------|------|----------|
| **Creating Physics 3D Simulations** | [`creating-physics-3d-simulations/SKILL.md`](creating-physics-3d-simulations/SKILL.md) | Building new Three.js physics demos with sliders, touch, 3D animation, en/zh-hk i18n |

## Installation

### Cursor IDE

1. Clone this repo or copy the `skills/` folder
2. Place skills in your project's `.cursor/skills/` directory, or add to your user skills path
3. When prompting, the agent discovers skills via the `description` field in YAML frontmatter

Example — symlink into a project:

```bash
mkdir -p .cursor/skills
cp -r skills/creating-physics-3d-simulations .cursor/skills/
```

### Other Agents / Apps

Point your agent's skill loader at any folder containing a `SKILL.md` with valid frontmatter:

```yaml
---
name: creating-physics-3d-simulations
description: Use when building interactive 3D physics education webpages...
---
```

Each skill folder is self-contained. Supporting files (e.g. `reference-patterns.md`) are loaded on demand by the agent.

## Quick Start Prompt

Use this prompt with any agent that has the skill installed:

```
Read the creating-physics-3d-simulations skill, then build a new 3D simulation for
[TOPIC]. Include sliders, touch camera control, live readouts, en + zh-hk i18n,
and register it in index.html.
```

## What These Skills Encode

Derived from analysis of all simulations in this repo:

- **Architecture:** Single-file HTML, CDN-only, no build step
- **3D stack:** Three.js r128, custom spherical camera (no OrbitControls)
- **Interactivity:** Sliders, raycaster drag, touch rotate/zoom, animated vectors, presets
- **Design:** `DESIGN_SYSTEM.md` colours, Tailwind glass UI, Inter font
- **i18n:** English + Traditional Chinese (Hong Kong) via `data-i18n`
- **Reference sims:** `Motor_Effect_3D.html`, `Convex_Lens_3D.html`, `Primary_Colour_3D.html`, `Lorentz_Force_3D.html`

## Contributing

When adding a new reusable pattern to the codebase:

1. Update `reference-patterns.md` with a copy-paste snippet
2. Add a row to the Reference Files table in `SKILL.md`
3. Keep `description` under 500 characters; put workflow details in the skill body
