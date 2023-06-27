/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  daisyui: {
    themes: ["dracula"],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
