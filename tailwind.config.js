/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bloom: {
          purple: '#8B5CF6',
          'purple-light': '#C4B5FD',
          green: '#2F855A',
          'green-light': '#68D391',
          navy: '#1F2937',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
