/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        loadingDot: {
          to: {
            'clip-path': 'inset(0 -1ch 0 0)'
          }
        }
      },
      animation: {
        loadingDot: 'loadingDot 1s steps(4) infinite'
      }
    }
  },
  plugins: []
}
