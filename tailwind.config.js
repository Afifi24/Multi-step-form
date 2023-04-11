/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Ubuntu': ['Ubuntu']
      },
      screens:{
        'md':'964px'
      }
    },
  },
  plugins: [],
}

