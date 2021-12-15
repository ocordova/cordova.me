module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fiverr: '#1dbf73',
        lastfm: '#b90000',
        github: '#333333',
        stackoverflow: '#f48024'
      },
      boxShadow: {
        sm: '0px 2px 4px rgba(102,102,102,0.1)',
        md: '0 5px 10px rgba(102,102,102,0.12)',
        lg: '0 8px 24px rgba(102,102,102,0.12)',
        xl: '0 30px 60px rgba(102,102,102,0.12)'
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              animation: 'gradient-colorized 10s linear infinite alternate',
              'background-image':
                'linear-gradient(to right, var(--tw-gradient-stops));',
              '--tw-gradient-from': '#60a5fa',
              '--tw-gradient-stops':
                'var(--tw-gradient-from), var(--tw-gradient-to, rgba(96, 165, 250, 0));',
              '--tw-gradient-stops':
                'var(--tw-gradient-from), #7c3aed, var(--tw-gradient-to, rgba(124, 58, 237, 0));',
              '--tw-gradient-to': '#ec4899',
              color: 'transparent',
              'background-clip': 'text',
              '&:hover': {
                color: '#000000',
                'text-decoration': 'none'
              }
            },
            code: {
              'background-color': 'rgb(246, 248, 250)',
              'padding-top': '0.25rem',
              'padding-bottom': '0.25rem',
              color: 'rgb(57, 58, 52)',
              '&::before': {
                content: "'' !important",
                'padding-left': '0.25rem'
              },
              '&::after': {
                content: "'' !important",
                'padding-right': '0.25rem'
              }
            }
          }
        }
      },
      animation: {
        colorized: 'gradient-colorized 10s linear infinite alternate'
      },
      keyframes: {
        'gradient-colorized': {
          '0%': {
            'background-position': '0%',
            'background-size': '400%'
          },
          '50%': {
            'background-position': '100%',
            'background-size': '400%'
          },
          '100%': {
            'background-position': '0%',
            'background-size': '400%'
          }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
