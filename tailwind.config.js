/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif','system-ui','-apple-system','Inter','Roboto','"Helvetica Neue"', 'Arial','"Noto Sans"','sans-serif']
      },
      colors: {
        primary: "#0ea5e9",
        accent: "#a78bfa"
      },
      boxShadow: {
        'glow': '0 0 30px rgba(14,165,233,.35)',
        'soft': '0 10px 50px rgba(0,0,0,.35)'
      }
    },
  },
  plugins: [],
}
