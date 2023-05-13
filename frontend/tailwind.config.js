/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*.jsx",
    "./pages/*.jsx",
    "./component/*.jsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        qs : ['Quicksand','sans-serif'],
        rb : ['Roboto','sans-serif'],
      },
  },
  plugins: [],
  }
}

