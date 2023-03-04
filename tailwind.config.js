const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'], theme: {
    fontFamily: {},
    extend: {
      colors: {
        primary: '#FFB284',
        secondary: colors.white,
        success: colors.emerald[800],
        warning: colors.amber[600],
        danger: colors.red[800],
        info: colors.sky[600],
        pastelOrange: '#FFF8F2'
      }}
  }, plugins: []
}