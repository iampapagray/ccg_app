module.exports = {
  //   important: true,
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
        handlegray: '#666D74',
        handleblue: '#1D9BF0',
      },
      height: {
        logo: '1.813rem',
        25: '6.25rem',
      },
      spacing: {
        'logo-w': '18.375rem',
        'btn-side': '1.563rem',
        'nav-side': '1.875rem',
        'dot-side': '0.313rem',
        15: '3.75rem',
        17: '4.5rem',
        25: '6.25rem',
        29: '7.313rem',
        37: '9.625rem',
        41: '10.375rem',
        82: '22.813rem',
        tweetside: '1.875rem',
        tweetside2: '2.125rem',
        nmside: '0.438rem',
        girl: '30rem',
        c_img_h: '40.625rem',
        c_img_w: '27.5rem',
        c_img_s: '6.125rem',
      },
      fontSize: {
        c_title: '4rem',
      },
      lineHeight: {
        btn: '0.875rem',
        'twt-msg': '1.375rem',
        'c_sub': '1.371rem',
        'c_title': '4.5rem',
      },
    },
    fontFamily: {
      gt: ['GT-America'],
      mont: ['Montserrat'],
      nuni: ['Nunito'],
      sans: ['gt', 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
  plugins: [require('tailwindcss-border-gradient-radius')],
}
