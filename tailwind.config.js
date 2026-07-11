/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#2E5CFF',
        deep: '#172E80',
        muted: '#777777',
      },
      boxShadow: {
        soft: '0 1px 24px rgba(91, 205, 240, 0.15)',
      },
    },
  },
  plugins: [],
};
