# physics_animations

Interactive physics education simulations — single-file HTML, Three.js 3D, Tailwind CSS, bilingual (EN + 繁).

## Links

- [Physics Animations Home](https://paulng99.github.io/physics_animations/)
- [Young's Double-Slit Experiment](https://paulng99.github.io/physics_animations/Youngs_Double-Slit_Experiment.html)
- [Seating Plan](https://paulng99.github.io/physics_animations/seating_plan.html)

## Agent Skills

Reusable rules for AI agents and apps to create new interactive 3D physics pages in this project's style:

- [`skills/README.md`](skills/README.md) — installation and usage
- [`skills/creating-physics-3d-simulations/SKILL.md`](skills/creating-physics-3d-simulations/SKILL.md) — main skill (3D, interactivity, i18n, design system)

Copy the `skills/` folder into `.cursor/skills/` or point your agent loader at it.

## Local Development

```bash
python3 -m http.server 8080 --directory .
```

Open `http://localhost:8080/` in a browser.

See [`AGENTS.md`](AGENTS.md) and [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md) for conventions.
