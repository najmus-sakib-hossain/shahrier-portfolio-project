/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInRight: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "0% 0" },
        },
        slideOutLeft: {
          "0%": { backgroundPosition: "0% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "slide-in-right": "slideInRight 0.5s forwards",
        "slide-out-left": "slideOutLeft 0.5s forwards",
      },
    },
  },
  plugins: [],
};

module.exports = config;
