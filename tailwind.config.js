const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      'xs': '450px',
      ...defaultTheme.screens,
    },
    extend: {
      spacing: {
        "1/7": "14.285714285714285714285714285714%",
      }
    },
  },
  plugins: [],
}
