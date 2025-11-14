/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'verde-bosque': '#2D5016',
        'verde-claro': '#52854C',
        'tierra': '#8B4513',
        'agua': '#4A90A4',
        'urgencia': '#D32F2F',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
}
