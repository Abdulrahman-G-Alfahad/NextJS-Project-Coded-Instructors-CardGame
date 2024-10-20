/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  // Add this custom CSS to the theme extension
  corePlugins: {
    // Disable the default rotate utility if you want to avoid conflicts
    rotate: false,
  },
  // Register custom utility classes
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
        ".flip-card": {
          perspective: "1000px",
        },
        ".flip-card-inner": {
          "transform-style": "preserve-3d",
          transition: "transform 0.6s",
        },
        ".flip-card-front, .flip-card-back": {
          position: "absolute",
          width: "100%",
          height: "100%",
        },
        ".flip-card-back": {
          transform: "rotateY(180deg)",
        },
      });
    },
  ],
};
