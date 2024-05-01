/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'login-color': '#c3e9ed',
        'input-color': '#f2f3f2',
        'submit-color': '#0B8FAC',
      }
    },
  },
  plugins: [],
}

