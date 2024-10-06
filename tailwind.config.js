/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        logo: ['Comfortaa', 'cursive'],
      },
      width: {
        'calc(100%-2rem)': 'calc(100% - 2rem)',
      },
      colors: {
        darkBg: '#2B0B0E',
        accentRed: '#FE113D',
      },
    },
  },
  plugins: [],
}