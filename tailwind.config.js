/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        'p.d':'360px'
      },
      maxHeight:{
        'p.d':'calc(100vh - 68px)'
      },
      inset:{
        'p.d':'62.5px'
      },
    },
  },
  plugins: [],
}

