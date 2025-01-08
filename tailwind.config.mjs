/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Agrega Montserrat como fuente principal
      },
      colors: {
        'monte-carlo': {
          '50': '#f3faf9',
          '100': '#d6f1ec',
          '200': '#ade2da',
          '300': '#7fcec5',
          '400': '#50b1a9',
          '500': '#36968f',
          '600': '#297874',
          '700': '#25605f',
          '800': '#214e4d',
          '900': '#1f4241',
          '950': '#0d2626',
        },
      },
    },
  },
  plugins: [],
};
