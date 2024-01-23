/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg_primary: '#F5F5F5',
        secondary: '#E48700',
        txt_primary: '#000000',
        txt_secondary: '#808080',

      }
    },
  },
  plugins: [],
}