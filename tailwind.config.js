/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu'],
        inter: ['Inter']
      },
      colors:{
        primary: '#5C3EAF',
        dark: '#141414'
      }
    },
  },
  plugins: [],
}