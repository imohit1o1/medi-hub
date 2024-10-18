// postcss.config.js
export default {
  plugins: [
    require('tailwindcss'),   // Loads the Tailwind CSS plugin
    require('autoprefixer'),  // Adds vendor prefixes to CSS for browser compatibility
  ],
};
