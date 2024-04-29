/** @type {import('tailwindcss').Config} */
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
      },
    },
  },
  plugins: [],
};
