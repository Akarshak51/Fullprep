/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'rgb(var(--color-bg) / <alpha-value>)',
          surface: 'rgb(var(--color-bg-surface) / <alpha-value>)',
          raised: 'rgb(var(--color-bg-raised) / <alpha-value>)',
          overlay: 'rgb(var(--color-bg-overlay) / <alpha-value>)',
        },
        border: {
          DEFAULT: 'rgb(var(--color-border) / <alpha-value>)',
          subtle: 'rgb(var(--color-border-subtle) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'rgb(var(--color-ink) / <alpha-value>)',
          muted: 'rgb(var(--color-ink-muted) / <alpha-value>)',
          faint: 'rgb(var(--color-ink-faint) / <alpha-value>)',
        },
        brand: {
          DEFAULT: '#2FD1A6',
          hover: '#26B992',
          soft: '#0F2E27',
        },
        violet: {
          DEFAULT: '#8B7CF6',
          soft: '#241F3D',
        },
        amber: {
          DEFAULT: '#F5B342',
          soft: '#332711',
        },
        easy: '#2FD1A6',
        medium: '#F5B342',
        hard: '#F0654C',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 8px 24px -12px rgba(0,0,0,0.5)',
        glow: '0 0 0 1px rgba(47,209,166,0.4), 0 0 24px -4px rgba(47,209,166,0.35)',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
      },
      keyframes: {
        fadeUp: { '0%': { opacity: 0, transform: 'translateY(8px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        flicker: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.55 } },
      },
      animation: {
        fadeUp: 'fadeUp 0.5s ease-out both',
        flicker: 'flicker 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
