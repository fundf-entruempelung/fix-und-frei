# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fix & Frei Umzüge und Entrümpelung is a professional moving services website for a German moving company, built with Nuxt 3. The site is in German (language: 'de') and provides information about various moving and clearance services.

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production (SSR)
npm run generate     # Generate static site (recommended for deployment)
npm run preview      # Preview production build
```

## Build Output

- **Static generation**: `.output/public` directory contains deployable static files
- **SSR build**: `.output` directory contains server and build artifacts

## Architecture

### Framework Setup

- **Nuxt 3** with SSR/SSG capabilities
- **TypeScript** with `strict: false` and `typeCheck: false` (nuxt.config.ts:15-18)
- **Nuxt modules**: `@nuxtjs/tailwindcss`, `@nuxtjs/sitemap`, `@nuxtjs/robots`

### Styling System

- **TailwindCSS** with CSS custom properties in `assets/main.css`
- **Color theming**: CSS variables (e.g., `--primary`, `--background`) mapped to Tailwind utilities
- **Dark mode**: Configured with `.dark` class variant
- **Animation**: `tw-animate-css` package
- **Smooth scrolling**: Enabled globally (main.css:132)

### Component Organization

- **Shared**: `NavHeader.vue`, `FooterSection.vue`, `ContactSection.vue`
- **Page-specific** in subdirectories:
  - `components/Leistungen/*` - Services page
  - `components/Ueber-uns/*` - About page
  - `components/Referenzen/*` - References page
  - `components/Kontakt/*` - Contact page

### Pages

- `/` - Home (index.vue)
- `/leistungen` - Services with anchor sections (#entruempelung, #umzuege, #firmenumzug, etc.)
- `/ueber-uns` - About us
- `/referenzen` - References/testimonials
- `/kontakt` - Contact
- `/danke` - Thank you page (after form submission)
- `/impressum` - Legal notice
- `/datenschutz` - Privacy policy

### Server API

- `server/api/contact.post.ts` - Handles contact form submissions via external email service

### Composables

- `composables/useSelectedService.js` - Manages selected service state across components (used in LeistungenDetails.vue and ContactSection.vue to pre-fill forms)

### Icons

- **Lucide Vue Next**: Registered globally via `plugins/lucide.ts`
- Import: `import { TruckIcon, PhoneIcon, MessageCircle } from 'lucide-vue-next'`

### Contact Information

- **Phone**: +49 1521 3945134 (`tel:+4915213945134`)
- **WhatsApp**: `https://wa.me/4915213945134` (color: #25D366)
- **Email**: kontakt@fix-und-frei.de
- **Address**: Cranzer Straße 5, 21680 Stade
- **Service Area**: Stade & Umgebung
- **Owner**: Ali Reda Chahrour

### SEO Pattern

Every page uses `useSeoMeta()` and `useHead()`:
- Base URL: `https://fix-und-frei.de` (nuxt.config.ts:56)
- Language: `lang: 'de'`
- Canonical URLs must be absolute with full domain

### Navigation

- `NavHeader.vue`: Sticky header with desktop dropdown for services (hover) and mobile collapsible menu
- Uses `ClientOnly` wrapper for mobile menu to prevent hydration issues
- Services anchors: #entruempelung, #umzuege, #firmenumzug, #haushaltsaufloesung, #wohnungsaufloesung, #entsorgung, #transport

## Key Conventions

1. **Component imports**: Pages explicitly import section components (no auto-imports)
2. **Primary color**: Blue `#2f7ebd` / `brand-600`
3. **German language**: All user-facing content in German
4. **Scoped styles**: Use Tailwind `@apply` in `<style scoped>` blocks

## Deployment

Static generation (`npm run generate`) is recommended. Deploy `.output/public` to Netlify, Vercel, or GitHub Pages.
