module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_pages/*.html',
    './_posts/*.html',
    './*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#3B82F6',
              '&:hover': {
                color: '#2563EB',
              },
            },
            pre: {
              color: '#000',
              'background-color': '#f5f2f0',
            },
            code: {
              '&::before': {
                content: "'' !important",
                'padding-left': '0.25rem',
              },
              '&::after': {
                content: "'' !important",
                'padding-right': '0.25rem',
              },
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
