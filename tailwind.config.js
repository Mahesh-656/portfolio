/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor :{
      'primary':'rgb(18, 200, 148)'
    }
    },
    fontFamily:{
      'hero-font':'Playwrite AU SA'
    }
  },
  plugins: [],
}

