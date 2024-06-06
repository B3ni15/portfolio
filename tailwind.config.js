/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBlue: '#12172B', // Example color, adjust as per your image
        mediumBlue: '#4A4E69', // Example color, adjust as per your image
        lightBlue: '#9A8C98', // Example color, adjust as per your image
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

