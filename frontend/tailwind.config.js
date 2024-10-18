import { Testimonials } from './src/import-export/ImportExport';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        stickyNavbar: {
          "0%": {
            transform: "translateY(-40px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        stickyNavbar: "stickyNavbar 0.5s ease-in-out forwards", // Add an animation class for convenience
      },
      colors: {
        primary: "#03565A",
        secondary: "#113C49",
        accent: "#FF8945",
        light: "#B3DAD9",
        text: "#ffffff",
        text_grey: "#464646",
        background_dark: "#162C2A",
        testimonial_bg: "#579D93",
        pastel: {
          blue: "#E3EFFC",
          yellow: "#FDF1DB",
          pink: "#FCEDF2",
        },
      },
      height: {
        heroHeight: "calc(100vh - 64px)", // Example of calculating height dynamically
      },
      screens: {
        '2xl': '1440px', // Custom screen size for better scaling on large screens
      },
      spacing: {
        '128': '32rem', // Add a large spacing utility
        '144': '36rem',
      },
      transitionProperty: {
        width: 'width', // Enable smoother width transitions
        height: 'height', 
      },
    },
  },
  plugins: [],
};
