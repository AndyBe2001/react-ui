const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./dist/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border, 214.3, 31.8%, 91.4%))",
        input: "hsl(var(--input, 214.3, 31.8%, 91.4%))",
        ring: "hsl(var(--ring, 245.1, 76.5%, 66.7%))",
        background: "hsl(var(--background, 0, 0%, 100%))",
        foreground: "hsl(var(--foreground, 222.2, 47.4%, 11.2%))",
        primary: {
          DEFAULT: "hsl(var(--primary, 245.08, 76.47%, 66.67%))",
          foreground: "hsl(var(--primary-foreground, 210, 40%, 98%))",
          50: "hsl(var(--primary-50, 236, 88.2%, 96.7%))",
          100: "hsl(var(--primary-100, 231.7, 93.5%, 93.9%))",
          200: "hsl(var(--primary-200, 235.3, 89.5%, 88.8%))",
          300: "hsl(var(--primary-300, 237, 84.9%, 81.8%))",
          400: "hsl(var(--primary-400, 241.1, 82%, 73.9%))",
          500: "hsl(var(--primary-500, 245.1, 76.5%, 66.7%))",
          600: "hsl(var(--primary-600, 249.9, 69.2%, 60.6%))",
          700: "hsl(var(--primary-700, 251.2, 53.2%, 50.6%))",
          800: "hsl(var(--primary-800, 249.7, 49.8%, 41.4%))",
          900: "hsl(var(--primary-900, 248.6, 44%, 34.3%))",
          950: "hsl(var(--primary-950, 250.9, 43.1%, 20%))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary, 210, 40%, 96.1%))",
          foreground: "hsl(var(--secondary-foreground, 222.2, 47.4%, 11.2%))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive, 0, 100%, 50%))",
          foreground: "hsl(var(--destructive-foreground, 210, 40%, 98%))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted, 210, 40%, 96.1%))",
          foreground: "hsl(var(--muted-foreground, 215.4, 16.3%, 46.9%))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent, 231.7, 93.5%, 93.9%))",
          foreground: "hsl(var(--accent-foreground, 222.2, 47.4%, 11.2%))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover, 0, 0%, 100%))",
          foreground: "hsl(var(--popover-foreground, 222.2, 47.4%, 11.2%))",
        },
        card: {
          DEFAULT: "hsl(var(--card, 0, 0%, 100%))",
          foreground: "hsl(var(--card-foreground, 222.2, 47.4%, 11.2%))",
        },
      },
      borderRadius: {
        lg: `var(--radius, 0.5rem)`,
        md: `calc(var(--radius, 0.5rem) - 2px)`,
        sm: "calc(var(--radius, 0.5rem) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  darkMode: ["class"],
  plugins: [],
};
