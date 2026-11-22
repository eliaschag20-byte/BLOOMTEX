/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bloom: {
          purple: '#8B5CF6',
          lpurple: '#C4B5FD',
          green: '#2F855A',
          lgreen: '#68D391',
          navy: '#1F2937',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
