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
        'inmo-verde': '#1B4D3E',
        'inmo-verde-claro': '#2D5F4E',
        'inmo-dorado': '#C9A961',
        'inmo-dorado-claro': '#D4B876',
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