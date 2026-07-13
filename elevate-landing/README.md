# Elevate — Institutional Landing Page

A high-converting, ultra-premium B2B landing page for **Elevate**, an AI kinetic
generation engine that turns institutional syllabi into cinematic motion graphics.

## Stack

- **React 19** + **TypeScript** (Vite)
- **Framer Motion** for scroll-triggered reveals
- Hand-tuned CSS for the aurora mesh gradient background, glass/crystal surfaces,
  and burgundy glow interactions (no CSS framework — full control over the
  "Luxury Academic Matrix" aesthetic)
- **@fontsource/inter** for the Inter typeface (self-hosted, no external font CDN)

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/
    AuroraBackground.tsx   # Fixed, continuously drifting burgundy mesh gradient
    Navbar.tsx              # Fixed nav, frosted on scroll
    Hero.tsx                # "VISUALIZE YOUR SYLLABUS." + orbital ring + metadata tags
    SectionDivider.tsx      # Thin rule + muted burgundy metadata label
    HowItWorks.tsx          # 01–04 automated pipeline chain
    EfficiencyProof.tsx     # Split-screen time/cost graphs + eclipse hotspot
    StakeholderBenefits.tsx # Administration / Faculty / Student Body columns
    CTASection.tsx          # Final form + rising wave + spinning wireframe mesh
    Footer.tsx
  index.css                 # Design tokens, aurora keyframes, glass/crystal utilities
  App.tsx                   # Section composition
```

## Design System

| Token | Value |
| --- | --- |
| Background | `#000000` |
| Burgundy (deep) | `#4A0E17` |
| Burgundy (bright) | `#8B0022` |
| Headers | Helvetica Neue / Helvetica, Bold–Black, tight tracking, `#FFFFFF` |
| Body / UI | Inter, `#E2E8F0` |
