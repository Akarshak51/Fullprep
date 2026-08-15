/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: '#0B0F14', surface: '#111823', raised: '#161F2C', overlay: '#1C2733' },
        border: { DEFAULT: '#22303F', subtle: '#1A2531' },
        ink: { DEFAULT: '#E6EDF3', muted: '#8B9AAB', faint: '#5B6B7C' },
        brand: { DEFAULT: '#2FD1A6', hover: '#26B992', soft: '#0F2E27' },
        violet: { DEFAULT: '#8B7CF6', soft: '#241F3D' },
        amber: { DEFAULT: '#F5B342', soft: '#332711' },
        easy: '#2FD1A6', medium: '#F5B342', hard: '#F0654C',
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
