export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#C71585', 
        'dark-gray-2': '#A9A9A9', 
      },
      backgroundColor: {
        'black/85': 'rgba(0, 0, 0, 0.85)',
      },
      opacity: {
        '85': '0.85',
      },
    },
  },
  plugins: [],
}