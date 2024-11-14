/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Figtree', 'sans-serif']
      },
      colors: {
        'blue': {
          500: '#6A9AB0',
          700: '#3A6D8C',
          950: '#001F3F'
        },
        'yellow': '#EAD8B1',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, rgba(4,20,37,1) 45%, rgba(14,22,27,1) 60%)',
        blackOverlay: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
        'black-overlay': 'linear-gradient(rgba(0,0,0,0) 0%, #000 90%)'
      },
      screens: {
        xl: { max: "1279px" },
  
        lg: { max: "1023px" },
  
        md: { max: "967px" },
  
        sm: { max: "670px" },
      },
    },
  },
  plugins: [],
}

