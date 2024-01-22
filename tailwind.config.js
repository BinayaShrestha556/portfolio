/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      "sm":"420px",
      "md":"620px",
      "lg":"820px",
      "xl":"1100px",
      "xxl":"1440px",
      "xxxl":"1920px"
    }
  },
  plugins: [],
}

