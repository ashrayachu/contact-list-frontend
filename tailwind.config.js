/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: "#634bbe",
        customGreen:"#A5E065",
        customDarkGreen:"#94c95b"

      },
      backgroundImage: {
        'custom-gradient': "linear-gradient(to left, #634bbe, #634BBE)",
      },
    },
  },
  plugins: [],
} 