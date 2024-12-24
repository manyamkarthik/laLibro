/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
            custom: ['"Dancing Script"', 'cursive'],
            serif: ['"Playfair Display"', 'serif'],
          }
      },
    },
    plugins: [],
  }