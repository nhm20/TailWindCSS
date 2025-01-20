module.exports = {
  content: ["./**/*.html"], // Adjust paths based on your project structure
  theme: {
    extend: {
      fontFamily: {
        playwrite: ["Playwrite IN", "serif"],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};

// npx tailwindcss -i ./style.css -o ./output.css --watch
