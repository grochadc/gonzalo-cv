module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'fogra': "#0D1321", 
      'moss': "#9BA300",
      'white': "#FFFFFF",
      'blue': "#548687",
      'orange': "#E97720",

    },
    extend: {
      spacing: {
        '1/3vh': `33.3vh`,
        '1/2vh': '50vh',
        'vh': '100vh',
      },
      fontFamily: {
        changa: ["Changa One", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}
