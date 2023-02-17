const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './styles/**/*.scss'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#FF6B0F',
      secondary: colors.orange[600],

      success: colors.emerald[400],
      warning: colors.yellow[400],
      danger: colors.rose[600],
      info: colors.blue[400],

      black: colors.coolGray[700],
      white: colors.white,
      warmWhite: colors.warmGray[50],
      gray: colors.coolGray[300]

    },
    fontFamily: {},
    extend: {}
  },
  variants: {
    extend: {
      display: ['hover'],
      borderWidth: ['hover']
    }
  },
  plugins: []
}