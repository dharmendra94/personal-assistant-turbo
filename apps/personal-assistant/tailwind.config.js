/** @type {import('tailwindcss').Config} */
import preset from "./negroni-preset";

export default {
  content: [
    "../index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [preset],
};
