/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        "back-main" : "var(--color-back-main)",
        "text-main" : "var(--color-text-main)",
        "secondary-hover": "var(--color-secondary-hover)",
        "primary-hover": "var(--color-primary-hover)"
      }
    },
  },
  plugins: [],
}