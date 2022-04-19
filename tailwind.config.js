module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
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
  ],
};
