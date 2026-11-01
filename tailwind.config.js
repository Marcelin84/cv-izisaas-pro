/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vide: '#0A0A14',
        accent: '#7B61FF',
        'accent-light': '#9E8CFC',
        fantome: '#F0EFF4',
        graphite: '#18181B',
        'surface-dark': '#12121F',
        'surface-card': '#171728',
        'surface-card-hover': '#1F1F35',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'neon': '0 0 25px rgba(123, 97, 255, 0.35)',
        'neon-lg': '0 0 50px rgba(123, 97, 255, 0.45)',
      }
    },
  },
  plugins: [],
}

