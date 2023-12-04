import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

// export default {
//   content: ["./src/**/*.tsx"],
//   theme: {
//     extend: {
//       // fontFamily: {
//       //   sans: ["var(--font-sans)", ...fontFamily.sans],
//       // },
//       fontSize: {
//         sm: "0.750rem",
//         base: "1rem",
//         xl: "1.333rem",
//         "2xl": "1.777rem",
//         "3xl": "2.369rem",
//         "4xl": "3.158rem",
//         "5xl": "4.210rem",
//       },
//       fontFamily: {
//         heading: "JetBrainsMono",
//         body: "Rubik",
//       },
//       fontWeight: {
//         normal: "400",
//         bold: "700",
//       },
//       colors: {
//         text: "#05050a",
//         background: "#f5f5fa",
//         primary: "#FFD700",
//         secondary: "#f5be75",
//         accent: "#a7f356",
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;

export default {
  darkMode: "class",
  content: ["./src/**/*.tsx"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        // heading: "JetBrainsMono",
        heading: "Alegreya Sans",
        body: "Rubik",
        fancy: "KrasnopysChebanyk",
      },
      maxWidth: {
        "8xl": "1408px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-hight)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-hight)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-up": "accordion-up 0.2 ease-out",
        "accordion-down": "accordion-down 0.2 ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
} satisfies Config;
