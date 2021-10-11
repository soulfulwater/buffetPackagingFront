module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        msLight: ['Martel-Sans-Light'],
        msRegular: ['Martel-Sans-Regular'],
        msSemiBold: ['Martel-Sans-Semi-Bold'],
        msBold: ['Martel-Sans-Bold'],
        msExtraBold: ['Martel-Sans-Extra-Bold'],
        msBlack: ['Martel-Sans-Black'],
      },
      colors: {
        primary: "#2c2d4b",
        secondery: "#ffb900",
        cgLight: "#EBEBEB",
        customGray: "#dfdfdf",
        cgDark: "#C4C4C4",
        cgDarker: "#A0A0A0",
        customRed: "#F40808",
        customGreen: "#5FD404",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "10px",
        sm: "10px",
        md: "20px",
        lg: "40px",
        xl: "40px",
      },
    },
    fontSize: {
      'xs': '13px',
      'sm': '14px',
      'base': '15px',
      'lg': '16px',
      'xl': '18px',
      '2xl': '20px',
      '3xl': '22px',
      '4xl': '24px',
      '5xl': '26px',
      '6xl': '30px',
      '7xl': '36px',
      '8xl': '42px',
      '9xl': '48px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '100%',
          },
          '@screen md': {
            maxWidth: '100%',
          },
          '@screen lg': {
            maxWidth: '100%',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
        }
      })
    },
  ],
}
