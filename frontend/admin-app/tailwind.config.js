/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: 'rgb(var(--color-bg) / <alpha-value>)', surface: 'rgb(var(--color-bg-surface) / <alpha-value>)', raised: 'rgb(var(--color-bg-raised) / <alpha-value>)', overlay: 'rgb(var(--color-bg-overlay) / <alpha-value>)' },
        border: { DEFAULT: 'rgb(var(--color-border) / <alpha-value>)', subtle: 'rgb(var(--color-border-subtle) / <alpha-value>)' },
        ink: { DEFAULT: 'rgb(var(--color-ink) / <alpha-value>)', muted: 'rgb(var(--color-ink-muted) / <alpha-value>)', faint: 'rgb(var(--color-ink-faint) / <alpha-value>)' },
        brand: { DEFAULT: 'rgb(var(--color-brand) / <alpha-value>)', hover: 'rgb(var(--color-brand-hover) / <alpha-value>)', soft: 'rgb(var(--color-brand-soft) / <alpha-value>)' },
        violet: { DEFAULT: 'rgb(var(--color-violet) / <alpha-value>)', soft: 'rgb(var(--color-violet-soft) / <alpha-value>)' },
        amber: { DEFAULT: 'rgb(var(--color-amber) / <alpha-value>)', soft: 'rgb(var(--color-amber-soft) / <alpha-value>)' },
        easy: 'rgb(var(--color-brand) / <alpha-value>)', medium: 'rgb(var(--color-amber) / <alpha-value>)', hard: '#F0654C',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 8px 24px -12px rgba(0,0,0,0.5)',
      },
      borderRadius: { xl: '0.875rem', '2xl': '1.25rem' },
      keyframes: { fadeUp: { '0%': { opacity: 0, transform: 'translateY(8px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } } },
      animation: { fadeUp: 'fadeUp 0.4s ease-out both' },
    },
  },
  plugins: [],
}
