/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  daisyui: {
    themes: ["pastel"],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
