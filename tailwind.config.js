module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      inter: ['Inter'],
      gilroy: ['Gilroy'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        black: '#000000',
        'black-light': '#151516',
        'black-text-dark': '#07070B',
        'black-text-light': '#232425',
        white: '#ffffff',
        yellow: '#F2D080',
        gray: {
          100: '#91919D',
        },
      },
      background: {
        yellow: '#F2D080',
      },
    },
  },
};
