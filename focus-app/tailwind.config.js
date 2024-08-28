/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideRight1: {
          '0%': {transform: 'translate(0, 0)'},
          '100%': {transform: 'translate(-5rem, 0)'}
        },
        slideRight2: {
          '0%': {transform: 'translate(0, 0)'},
          '100%': {transform: 'translate(-10rem, 0)'}
        },
        slideTop: {
          '0%': {transform: 'translate(0, 3rem)'},
          '100%': {transform: 'translate(0, -0.2rem)'}
        },
        slideLeft1: {
          '0%': {transform: 'translate(-5rem, 0)'},
          '100%': {transform: 'translate(0, 0)'}
        },
        slideLeft2: {
          '0%': {transform: 'translate(-10rem, 0)'},
          '100%': {transform: 'translate(0, 0)'}
        },
        slideDown: {
          '0%': {transform: 'translate(0, 0rem)'},
          '100%': {transform: 'translate(0, 5rem)'}
        },
      },
      animation: {
        slideRight1: 'slideRight1 0.5s ease-out forwards',
        slideRight2: 'slideRight2 0.5s ease-out forwards',
        slideTop: 'slideTop 0.5s ease-out forwards',
        slideLeft1: 'slideLeft1 0.5s ease-out forwards',
        slideLeft2: 'slideLeft2 0.5s ease-out forwards',
        slideDown: 'slideDown 0.5s ease-out forwards',
      }

    },
  },
  plugins: [],
}

