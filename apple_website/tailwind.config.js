/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["bg"],

  theme: {
    extend: {
      colors: {
        blue: "#2997FF",
            "n-8": "#0f0f0f",
          "n-1": "#ffffff",
        gray: {
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
     
        },
        zinc: "#101010",
      },
    },
  },
  plugins: [],
};
