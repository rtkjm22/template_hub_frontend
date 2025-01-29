import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1536px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          light: "var(--color-primary-light)",
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
          lightGrayish: "var(--color-primary-light-grayish)",
          bg: "var(--color-primary-bg)",
          companyBg: "var(--color-primary-company-bg)",
        },
        secondary: {
          light: "var(--color-secondary-light)",
          DEFAULT: "var(--color-secondary)",
          dark: "var(--color-secondary-dark)",
        },
        gray: {
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          bg: "var(--color-gray-bg)",
        },
        status: {
          info: "var(--color-info)",
          success: {
            DEFAULT: "var(--color-success)",
            bg: "var(--color-success-bg)",
          },
          warning: "var(--color-warn)",
          error: {
            DEFAULT: "var(--color-error)",
            dark: "var(--color-error-dark)",
            bg: "var(--color-error-bg)",
          },
        },
      },
      boxShadow: {
        100: "var(--shadow-100)",
        200: "var(--shadow-200)",
        300: "var(--shadow-300)",
        400: "var(--shadow-400)",
        "orange-light": "var(--shadow-orange-light)",
        orange: "var(--shadow-orange)",
        "orange-dark": "var(--shadow-orange-dark)",
      },
      borderColor: {
        100: "var(--border-100)",
        200: "var(--border-200)",
        300: "var(--border-300)",
      },
      transitionDelay: {
        120: "120ms",
        140: "140ms",
        160: "160ms",
        180: "180ms",
        220: "220ms",
        240: "240ms",
      },
      maxWidth: {
        "content-xs": "var(--max-width-content-xs)",
        "content-s": "var(--max-width-content-s)",
        "content-m": "var(--max-width-content-m)",
        "content-l": "var(--max-width-content-l)",
        "content-xl": "var(--max-width-content-xl)",
      },
      fontSize: {
        "2xs": "var(--font-size-2xs)",
      },
      zIndex: {
        header: "var(--z-index-header)",
        modal: "var(--z-index-modal)",
      },
    },
  },
  plugins: [],
} satisfies Config
