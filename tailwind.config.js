const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: { darkMode: 'class',
    extend: {},
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
