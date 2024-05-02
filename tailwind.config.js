/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: ["*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-texture": "url('/assets/img/2.png')",
      },

      colors: {
        primary: "#a50385",
        secondary: "#ecc94b",
        muted: "#d4d4d4",
        'g2': {
          light: '#d1d5db',
          DEFAULT: '#6b7280',
          dark: '#374151',
        },
      },

      fontFamily: {
        sans: 'IRANSans'
      }
    },
  },
  plugins: [],
};
