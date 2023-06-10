/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  daisyui: {
    themes: ["corporate"],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
