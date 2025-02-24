module.exports = {
  content: ["./**/*.html"],
  // Adjust paths based on your project structure
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        playwrite: ["Playwrite IN", "serif"],
      },
      spacing: {
        100: "30rem",
        200: "40px",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};

// npx tailwindcss -i ./style.css -o ./output.css --watch
