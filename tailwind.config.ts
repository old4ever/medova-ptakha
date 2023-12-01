import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["var(--font-sans)", ...fontFamily.sans],
      // },
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      fontFamily: {
        heading: "JetBrainsMono",
        body: "Rubik",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      colors: {
        text: "#05050a",
        background: "#f5f5fa",
        primary: "#FFD700",
        secondary: "#f5be75",
        accent: "#a7f356",
      },
    },
  },
  plugins: [],
} satisfies Config;
