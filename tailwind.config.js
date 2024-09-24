/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: 'rgb(0, 40, 52)', // Name it as per your preference
        cardBlue: '#F2FBFE',
        btnColor:'#09A5D6',
      },
    },
  },
  plugins: [],
}
