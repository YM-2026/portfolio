# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site ("Selflux Portfolio") with a Bauhaus modernism aesthetic — vibrant yellow (#FFD700) and deep navy (#050A30) palette, film grain texture overlay, and motion animations. Built with React 19 + Vite + Tailwind CSS v4, with an Express API backend for the contact form.

## Commands

- `npm run dev` — starts both the Express API server and Vite dev server (ports 3001 and 3000)
- `npm run dev:api` — API server only (tsx watch)
- `npm run build` — production Vite build
- `npm run lint` — type-check via `tsc --noEmit`
- `npm start` — production mode (serves built `dist/` from Express)

No test runner is configured.

## Architecture

**Two-process dev setup:** `npm run dev` uses `concurrently` to run the Express API (`server/index.ts` on port 3001) and Vite dev server (port 3000). Vite proxies `/api` requests to the API server. The API port is configurable via `API_PORT` env var — both Vite config and the server read from the same variable.

**Frontend:** Single-page app with no client-side router. `src/pages/Home.tsx` contains all page sections (Hero, About, Contact) as co-located components. Navigation is scroll-based via the floating pill navbar (`src/components/Navbar.tsx`). Animations use `motion` (Framer Motion). The `GrainOverlay` component renders a fixed SVG noise texture over the entire page.

**Backend:** `server/index.ts` — Express server with a single endpoint `POST /api/contact` that sends email via Resend. In production mode it also serves the static `dist/` build.

**Styling:** Tailwind CSS v4 with the Vite plugin (no `tailwind.config` file — config is in `src/index.css` via `@theme`). Two custom colors: `bau-yellow` and `bau-navy`. Theme inversion uses CSS custom properties toggled by the `.theme-reverse` class. Fonts: Inter (sans) and Playfair Display (serif).

**Path alias:** `@` maps to the project root (not `src/`), so imports look like `@/src/lib/utils`.

## Environment Variables

See `.env.example`. Required for contact form: `RESEND_API_KEY`, `CONTACT_NOTIFY_EMAIL`. Optional: `RESEND_FROM_EMAIL`, `API_PORT`, `GEMINI_API_KEY`.
