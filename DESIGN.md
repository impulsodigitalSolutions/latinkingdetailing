# Latin King Detailing · Design Truth (DESIGN.md)
*Standardized Anti-AI-Slop System for Latin King Detailing (Bolton, UK) · Governed by Hallmark principles*

## 1. Identity & Philosophy
- **Brand**: Latin King Detailing
- **Workshop**: 115 Albert Road, Farnworth, Bolton BL4 9EA (5 minutes from M61 Junction 4)
- **Specialisms**: Ceramic Pro 9H Certified Installer, KAVACA Self-Healing PPF Approved, Multi-Stage Machine Polishing & Paint Correction
- **Voice**: Authentic British automotive craftsmanship. Direct, precise, knowledgeable, unpretentious. Speaks the language of dual-action rotary polishers, micron clear-coat depth readings, chemical nanoceramic bonding, and harsh Lancashire winter resilience (road salt, motorway gravel, acid rain).

## 2. Hallmark Anti-Slop Guardrails (The Floor)
- **No Rainbow/Gimmick Gradients (Gate 2)**: Never use purple-to-blue, purple-to-pink, or multi-stop rainbow text gradients (`bg-clip-text text-transparent`). Headings are solid ink; deliberate emphasis uses solid Latin King Crimson (`#c21c20` / `text-red-600 dark:text-red-500`).
- **No Eyebrow Overload (Gate 54 & 67)**: Do not paste identical rounded pill badges with sparkle icons above every heading on the page. Use editorial structure, clean section numerals (`01`, `02`), or natural sentence-case descriptors.
- **No Unconstrained Transitions (Gate 10a)**: Never `transition: all`. Specify exact targets: `transition-colors`, `transition-transform`, or `transition-[color,background-color,border-color]`.
- **No Floating Blurry Orbs (Gate 29)**: No giant blurred colored blobs (`blur-[140px]`) floating aimlessly in backgrounds. Visual hierarchy is achieved through tactile materials, crisp hairlines, and elevation by lightness.
- **No Cards Inside Cards (Gate 4)**: Maintain single-layer containment.
- **No Template Punctuation (Gate 63)**: Never glue `→` to label strings or use artificial middle-dot-joined metadata chains.
- **No Invented Metrics (Gate 46a)**: Only real, verifiable facts: 15 verified Google reviews (4.7★), 47+ Facebook reviews (5.0★), Ceramic Pro certified VIN warranty, £5M public liability insurance, genuine Bolton workshop location.
- **Viewport Discipline (Gate 34 & 44b)**: `overflow-x: clip` on `html` and `body`. Hero fits comfortably at 1280x800 without forced scrolling.

## 3. Surface & Color Tokens
```css
:root {
  --color-paper: #ffffff;
  --color-paper-card: #f8fafc;
  --color-paper-elevated: #f1f5f9;
  --color-ink: #0f172a;
  --color-ink-muted: #64748b;
  --color-rule: #e2e8f0;
  --color-brand-red: #c21c20;
  --color-brand-red-hover: #9f1317;
  --color-brand-red-subtle: rgba(194, 28, 32, 0.08);
}

.dark {
  --color-paper: #14151a;
  --color-paper-card: #1c1d23;
  --color-paper-elevated: #24252e;
  --color-paper-sunken: #101115;
  --color-ink: #f3f4f6;
  --color-ink-muted: #9ca3af;
  --color-rule: rgba(255, 255, 255, 0.08);
  --color-brand-red: #c21c20;
  --color-brand-red-hover: #e02428;
  --color-brand-red-subtle: rgba(194, 28, 32, 0.14);
}
```

## 4. Typography Rules
- **Display**: Geist Sans / System Sans at bold weights (600–900), clean kerning, solid color.
- **Body**: 16px minimum for continuous prose, line-height 1.55–1.65.
- **Technical/Measurements**: Geist Mono for paint thickness (microns $\mu$m), pencil hardness (9H), contact angles ($>110^\circ$), durations, and prices (`From £_____`).
- **Labels & Tags**: Body font, normal or sentence case, untracked. Avoid tiny uppercase tracked-caps overload.
