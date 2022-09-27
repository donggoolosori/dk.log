module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              backgroundColor: theme('colors.gray.200'),
              borderRadius: theme('borderRadius.sm'),
              color: theme('colors.red.500'),
              paddingTop: theme('padding[1]'),
              paddingRight: theme('padding[1.5]'),
              paddingBottom: theme('padding[1]'),
              paddingLeft: theme('padding[1.5]'),
              borderRadius: theme('borderRadius.md'),
            },
          },
        },
      }),
      fontFamily: {
        opensans: [
          'Open Sans',
          'Noto Sans KR',
          'sans-serif',
          '-apple-system',
          'Segoe UI',
          'BlinkMacSystemFont',
        ],
        josefinsans: ['Josefin Sans', 'sans-serif'],
      },
      spacing: {
        100: '25rem',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide'),
  ],
};
