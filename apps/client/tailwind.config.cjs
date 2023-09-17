/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    minHeight: {
      "screen-footer": "calc(100vh - 56px)",
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#b70f3e",

          secondary: "#87f466",

          accent: "#ed6b92",

          neutral: "#edeef5",

          "base-100": "#101620",

          info: "#42aad7",

          success: "#1d8145",

          warning: "#e6c10a",

          error: "#f54d82",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
