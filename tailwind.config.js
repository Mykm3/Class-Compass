/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,}",
  ],
  theme: {
    extend: {
      colors:{
        'bluecolor': '#161f32',
        'greyish' : '#f1f4f8',
        'cardShadow' : '#f7f8f9',
        'textColor' : '#252b36',
      }
    },
  },
  plugins: [],
}

