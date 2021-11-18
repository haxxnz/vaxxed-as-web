module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,mdx,ts,tsx}"],
  darkMode: "media",
  theme: {
    fontFamily: {
      mono: [
        "SFMono-Regular",
        "Consolas",
        "Liberation Mono",
        "Menlo",
        "Courier",
        "monospace"
      ],
      sans: [
        "'Baloo 2'",
        "-apple-system,BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen-Sans",
        "Ubuntu",
        "Cantarell",
        "'Helvetica Neue'",
        "sans-serif"
      ]
    },
    capsize: {
      fontMetrics: {
        sans: {
          capHeight: 608,
          ascent: 1050,
          descent: -524,
          lineGap: 0,
          unitsPerEm: 1000
        }
      }
    }
  },
  variants: {},
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@themosaad/tailwindcss-capsize")
    // require('tailwindcss-rtl')
  ]
};
