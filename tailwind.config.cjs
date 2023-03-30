/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#309fdb",
          secondary: "#7baa23",
          accent: "#131edd",
          neutral: "#222930",
          "base-100": "#ECEDEE",
          info: "#2256F1",
          success: "#27DD6D",
          warning: "#F2AC4A",
          error: "#E92B64",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
