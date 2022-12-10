/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('@mui/system')


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}