import defaultTheme from "tailwindcss/defaultTheme";

const tailwindConfig = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["light", "dracula"],
  },
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              backgroundColor: theme("colors.gray.200"),
              color: theme("colors.red.500"),
              paddingTop: theme("padding[1]"),
              paddingRight: theme("padding[1.5]"),
              paddingBottom: theme("padding[1]"),
              paddingLeft: theme("padding[1.5]"),
              borderRadius: theme("borderRadius.md"),
            },
          },
        },
      }),
      fontFamily: {
        opensans: [
          "Open Sans",
          "Noto Sans KR",
          ...defaultTheme.fontFamily.sans,
        ],
        josefinsans: ["Josefin Sans", "sans-serif"],
        pretendard: ["Pretendard Variable", "sans-serif"],
      },
      spacing: {
        100: "25rem",
      },
      colors: {
        "dark-base": "#2A303C",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
    require("daisyui"),
  ],
};

export default tailwindConfig;
