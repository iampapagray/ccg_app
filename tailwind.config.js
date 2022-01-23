module.exports = {
  important: true,
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false,
  theme: {
    linearBorderGradients: (theme) => ({
      colors: {
        'yellow-orange': ['#FFCC00', '#E64656'],
      },
      background: {
        black: '#000',
        white: '#fff',
      },
    }),
    extend: {
      colors: {
        'light-orange': '#FFCC00',
        'dark-orange': '#E64656',
        darkgray: '#111111',
      },
      height: {
        logo: '1.813rem',
        25: '6.25rem',
      },
      spacing: {
        'btn-side': '1.563rem',
        15: '3.75rem',
        25: '6.25rem',
      },
      fontSize: {},
      lineHeight: {
        btn: '0.875rem',
      },
    },
    fontFamily: {
      gt: ['GT-America'],
      mont: ['Montserrat'],
      sans: ['gt', 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
  plugins: [require('tailwindcss-border-gradient-radius')],
}
