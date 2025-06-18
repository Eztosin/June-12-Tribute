// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nigeria-green": "#008751",
        "charcoal-black": "#1A1A1A",
        "blood-red": "#D90429",
        "off-white": "#F8F9FA",
      },
      fontFamily: {
        // For bold headlines like 'Clash Display' or 'Bebas Neue'
        heading: ['"Bebas Neue"', "sans-serif"],
        // For body text
        sans: ['"Inter"', "sans-serif"],
        // For dates, code-like text
        mono: ['"Roboto Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
