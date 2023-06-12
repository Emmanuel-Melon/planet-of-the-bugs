/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
