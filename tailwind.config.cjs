/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sonoriza: {
          bg: '#0a0a10',
          panel: '#0f0f18',
          deep: '#7B2FBE',
          mid: '#9333EA',
          light: '#A855F7',
          pale: '#C084FC',
          white: '#F8F4FF',
          muted: '#6B6880',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(123,47,190,0.5)',
      },
    },
  },
  plugins: [],
};
