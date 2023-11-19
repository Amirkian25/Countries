/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        
        // Dark Mode Elements
        darkBlue: "hsl(209, 23%, 22%)",
        
        //Dark Mode Background
        veryDarkBlueBg: "hsl(207, 26%, 17%)",
        
        // Light Mode Text
        veryDarkBlue: "hsl(200, 15%, 8%)",
        
        // Light Mode Input
        darkGray: "hsl(0, 0%, 52%)",
        
        // Light Mode Background
        veryLightGray: "hsl(0, 0%, 98%)",
        
        // Dark Mode Text & Light Mode Elements
        whiteThem: "hsl(0, 0%, 100%)",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // ...
  ],
};
