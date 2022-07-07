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
      patterns: {
          opacities: {
            100: "1",
            80: ".80",
            60: ".60",
            40: ".40",
            20: ".20",
            10: ".10",
            5: ".05",
          },
          sizes: {
            1: "0.25rem",
            2: "0.5rem",
            4: "1rem",
            6: "1.5rem",
            8: "2rem",
            16: "4rem",
            20: "5rem",
            24: "6rem",
            32: "8rem",
        }
      }
    },
    extend: {
      spacing: {
        '1/3vh': `33.3vh`,
        '1/2vh': '50vh',
        'vh': '100vh',
      },
      fontFamily: {
        changa: ["Changa One", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        cabinet: ["Cabinet Grotesk", "sans-serif"],
      }
    },
  },
  plugins: [
    require('tailwindcss-bg-patterns'),
  ],
}
