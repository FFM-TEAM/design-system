module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '4xxl': '2.5rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '5.652rem',
        '8xl': '7.5rem',
      },
      colors: {
        gray: {
          100: '#E5E5E5',
          200: '#D0D0D0',
          300: '#C3C0C0',
          400: '#ADADAD',
          500: '#9A9A9A',
          600: '#848484',
          700: '#676767',
          800: '#4D4D4D',
          900: '#2F2E2E',
        },
        key: {
          100: '#FFB572',
          200: '#F5973F',
          300: '#E98930',
          400: '#DD7411',
          500: '#FFB572',
          600: '#F5973F',
          700: '#E98930',
          800: '#DD7411',
          900: '#DD7411',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
