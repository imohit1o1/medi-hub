import { Testimonials } from './src/import-export/ImportExport';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // Ensure paths point to your project files
  ],

  theme: {
    extend: {
      keyframes: {
        stickyNavbar: {
          "0%": {
            transform: "translateY(-40px)"  // Navbar initially above the view
          },
          "100%": {
            transform: "translateY(0)"  // Navbar slides down into place
          }
        }
      },
      colors: {
        dark_theme: "#113C49",         // Custom dark theme color
        main_theme: "#03565A",         // Primary color
        light_theme: "#B3DAD9",        // Light theme color
        pastel_blue: "#E3EFFC",        // Soft pastel blue
        pastel_yellow: "#FDF1DB",      // Soft pastel yellow
        pastel_pink: "#FCEDF2",        // Soft pastel pink
        cart_orange: "#FF8945",        // Vibrant orange (possibly for cart-related UI elements)
        text: "#ffffff",               // White text color
        text_grey: "#464646",          // Grey text color
        medicine_banner: "#162C2A",    // Dark banner for medicine section
        testimonial_img_bg: "#579D93", // Background for testimonial images
      },
      height: {
        heroHeight: "calc(100vh - 80px)"  // Example calculation for dynamic height
      },
    },
  },
  plugins: [],
};

