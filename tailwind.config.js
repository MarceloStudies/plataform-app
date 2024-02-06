/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        bgDark_primary: '#32363E',
        txtDark_primary: '#FFFFFF',

      }
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
  }),
  ],
}