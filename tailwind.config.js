/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#D8D9DA",
        "gray-100": "#DFCCCC",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
        "primary-200": "#D8D9DA"
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "background-aftercare": "url('./assets/bgaftercare.png')",
      }),
      fontFamily: {
        yeseva: ["Yeseva", "sans-serif"],
        sedan: ["Sedan","sans-serif" ]
      },
      content: {
        slogan: "url('./assets/Slogan.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};