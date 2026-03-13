/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Brand palette ──────────────────────────────
        brand: {
          navy:          '#1e3a8a',  // dark headers, trust bar, emergency section
          blue:          '#2563eb',  // secondary accent, badges, chatbot header
          accent:        '#f97316',  // all primary CTAs
          'accent-dark': '#ea580c',  // CTA hover state
        },
        // ── Surface / background ───────────────────────
        surface: {
          DEFAULT: '#f8fafc',  // page background
          card:    '#ffffff',  // card / panel backgrounds
          muted:   '#f1f5f9',  // subtle section fills
        },
        // ── Text / content ─────────────────────────────
        content: {
          primary:   '#0f172a',  // headings
          secondary: '#475569',  // body text
          muted:     '#94a3b8',  // captions, placeholders
        },
        // ── Emergency state ────────────────────────────
        emergency: {
          DEFAULT: '#ef4444',  // icon / text
          bg:      '#fef2f2',  // card fill
          border:  '#fecaca',  // card border
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        card:       '0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.07)',
        'card-hover':'0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
};
