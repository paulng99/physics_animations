# Physics Animations - Design System

This document outlines the visual design standards for the Physics Animations application to ensure consistency across all simulations and pages.

## 1. Color System (色彩規範)

We use the **Tailwind CSS** color palette (Slate, Blue, Violet, Red, Green, Amber).

### Brand Colors
| Role | Tailwind Class | Hex Code | Usage |
|------|---------------|----------|-------|
| **Primary** | `bg-blue-600` | `#2563EB` | Primary buttons, active navigation, links, key highlights. |
| **Primary Hover** | `bg-blue-700` | `#1D4ED8` | Hover state for primary actions. |
| **Secondary** | `bg-violet-600` | `#7C3AED` | "Explain" features, AI tools, magic/special actions. |
| **Background** | `bg-slate-50` | `#F8FAFC` | Page background (often gradient `from-slate-50 via-white to-blue-50`). |
| **Surface** | `bg-white` | `#FFFFFF` | Cards, panels, canvas background. |

### Physics Visualization Colors (Physics Semantic)
Consistent color coding for physical quantities helps students intuitively understand diagrams.

| Quantity | Color | Hex | Tailwind |
|----------|-------|-----|----------|
| **Force (F)** | Red | `#DC2626` | `text-red-600` / `stroke-red-600` |
| **Velocity (v)** | Green | `#16A34A` | `text-green-600` / `stroke-green-600` |
| **Acceleration (a)** | Purple | `#9333EA` | `text-purple-600` / `stroke-purple-600` |
| **Magnetic Field (B)** | Amber/Orange | `#D97706` | `text-amber-600` / `stroke-amber-600` |
| **Current (I)** | Green | `#16A34A` | `text-green-600` / `stroke-green-600` |
| **Displacement/Position** | Slate | `#475569` | `text-slate-600` / `stroke-slate-600` |

---

## 2. Typography (字體系統)

**Font Family:** `Inter`, sans-serif.
(Include `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">`)

### Hierarchy

| Element | Size (Desktop/Mobile) | Weight | Tailwind Classes | Example |
|---------|-----------------------|--------|------------------|---------|
| **Page Title** | 36px / 30px | Bold (700) | `text-3xl md:text-4xl font-bold text-slate-800` | **Ball & String** |
| **Section Header** | 24px / 20px | Bold (700) | `text-xl md:text-2xl font-bold text-slate-800` | **Controls** |
| **Card Title** | 18px / 16px | Semibold (600) | `text-lg font-semibold text-slate-800` | **Simulation** |
| **Body Text** | 16px | Regular (400) | `text-base text-slate-600 leading-relaxed` | Description text. |
| **Labels/Captions** | 14px | Medium (500) | `text-sm font-medium text-slate-500` | Input labels. |

---

## 3. UI Components (元件設計)

### Buttons
**Primary Button:**
```html
<button class="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-sm">
  Action
</button>
```

**Secondary Button:**
```html
<button class="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all">
  Cancel
</button>
```

**Danger Button (Reset):**
```html
<button class="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-red-600 transition-all">
  Reset
</button>
```

### Cards & Panels
- **Style:** Glassmorphism or Clean White.
- **Classes:** `bg-white/80 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl` (Glass) OR `bg-white border border-slate-200 rounded-2xl shadow-sm` (Standard).
- **Padding:** `p-6` or `p-8`.

### Inputs & Sliders
- **Inputs:** `border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`.
- **Sliders:** Use accent color for the track (`accent-blue-600` or custom styling).

---

## 4. Visual Elements & Icons (視覺元素)

- **Icons:** Use SVG icons (Heroicons or similar) with `stroke-width="2"`.
- **Canvas:**
  - Background: White (`#FFFFFF`) or Transparent (unless specific physics context like CRO requires black).
  - Border: `2px solid #E2E8F0` (Slate-200).
  - Corner Radius: `rounded-lg` or `rounded-xl`.

---

## 5. Responsive Design (響應式原則)

- **Mobile First:** Design for small screens, then enhance.
- **Breakpoints:**
  - `sm`: 640px
  - `md`: 768px (Tablet - often switches from single col to 2-col)
  - `lg`: 1024px (Desktop)
- **Grid:** Use `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` for layouts.
- **Touch Targets:** All interactive elements must be at least 44px height.

---

## 6. Implementation & Governance (實施與管理)

### Refactoring Strategy (重構策略)
1.  **Analyze:** Identify non-compliant colors (e.g., standard CSS colors) and legacy fonts.
2.  **Tailwind Integration:** Ensure `tailwind.config` or CDN is present.
3.  **Structure:** Wrap content in `max-w-6xl mx-auto` containers.
4.  **Component Replacement:** Replace native buttons/inputs with Design System classes.
5.  **Physics Check:** Verify semantic colors in Canvas/WebGL contexts.

### Design Review Checklist (設計審查清單)
Before committing changes, verify:
- [ ] **Colors:** Are primary actions Blue-600? Are forces Red? Velocities Green?
- [ ] **Typography:** Is 'Inter' font loaded and used? Are headings bold and hierarchically correct?
- [ ] **Responsiveness:** Does the layout stack correctly on mobile? Are sliders usable on touch?
- [ ] **Consistency:** Do buttons look the same as other pages?
- [ ] **Accessibility:** Is contrast sufficient? Do images/inputs have labels?

### Future Maintenance
- Use this document as the Single Source of Truth.
- Update this document when new physics quantities or UI patterns are introduced.
- Periodic audits of all HTML files to ensure no drift occurs.
