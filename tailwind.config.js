import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#FBF3E8",
          butter: "#F5C86A",
          caramel: "#B86E2D",
          cocoa: "#6B3F22",
          sage: "#66785F",
          ink: "#221713",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 22px 70px rgba(34, 23, 19, 0.12)",
      },
    },
  },
  plugins: [typography],
};
