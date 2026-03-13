# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on localhost:3000
npm run build    # Production build (output: dist/)
npm run preview  # Preview production build
```

No lint or test commands are configured.

**Environment variable required:**
```
GEMINI_API_KEY=<your-key>   # Required for the AI chatbot feature
```

## Architecture

React 19 + TypeScript SPA built with Vite. Uses **HashRouter** (`#/` URLs) for client-side-only routing with no backend.

**Routing** (defined in [App.tsx](App.tsx)):
- `/` → Hero + Services + Testimonials + BookingForm on homepage
- `/services`, `/about`, `/contact`, `/faq` → pages/
- `/book` → standalone BookingForm

**Key architectural decisions:**
- Tailwind CSS loaded via **CDN** in [index.html](index.html) — no `tailwind.config.js`. Custom keyframe animations are also in `index.html`'s `<style>` tag.
- **Import maps** in `index.html` provide ES module imports for React, React Router, Lucide, and Google GenAI — these are not bundled by Vite but resolved at runtime from CDN.
- Path alias `@/` maps to project root (configured in both [vite.config.ts](vite.config.ts) and [tsconfig.json](tsconfig.json)).

**Data flow:**
- Service data is centralized in [components/Services.tsx](components/Services.tsx) as the `unifiedServices` array — this is the single source of truth used across the booking form, services page, and homepage grid.
- Types are defined in [types.ts](types.ts): `Service`, `Testimonial`, `ChatMessage`, `BookingStatus`.
- All state is local component state — no global state management.

**AI Chatbot** ([services/geminiService.ts](services/geminiService.ts)):
- Uses `gemini-2.5-flash-preview` model via `@google/genai`
- Two exported functions: `getAIAssistance()` for chat, `getSmartEstimate()` for JSON-structured cost estimates
- The chatbot widget ([components/Chatbot.tsx](components/Chatbot.tsx)) floats in the bottom-right corner

**Booking form** ([components/BookingForm.tsx](components/BookingForm.tsx)):
- Arrival window is calculated from zip code: `606xx` = 45–75 min, `60xx` = 60–90 min, other = 90–120 min
